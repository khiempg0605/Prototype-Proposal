const {spawn} = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const http = require('node:http');
const os = require('node:os');

const root = path.resolve(__dirname, '..');
const qa = path.join(root, 'qa');
fs.mkdirSync(qa, {recursive: true});
const dist = path.join(root, 'dist');
assert(fs.existsSync(path.join(dist, 'index.html')), 'Build the app with npm run build before running the UI check.');
const executable = [process.env.CHROME_BIN,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'
].filter(Boolean).find(candidate => fs.existsSync(candidate));
assert(executable, 'Install Chrome/Chromium or set CHROME_BIN to its executable path.');
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'tamca-proposal-ui-'));
const types = {'.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.svg':'image/svg+xml'};
const server = http.createServer((request, response) => {
  let filename;
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
    filename = path.resolve(dist, '.' + (pathname === '/' ? '/index.html' : pathname));
  } catch {response.writeHead(400).end();return;}
  if (!filename.startsWith(dist + path.sep)) {response.writeHead(403).end();return;}
  fs.readFile(filename, (error, content) => {
    if (error) {response.writeHead(404).end();return;}
    response.writeHead(200, {'Content-Type':types[path.extname(filename)] || 'application/octet-stream'});
    response.end(content);
  });
});
const chrome = spawn(executable, [
  '--headless', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--user-data-dir=' + profile,
  '--remote-debugging-pipe', 'about:blank'
], {stdio: ['ignore', 'ignore', 'pipe', 'pipe', 'pipe']});
let serial = 0;
let pending = new Map();
let buffer = '';
let session;
let stderr = '';
const errors = [];
chrome.stderr.on('data', chunk => {stderr += chunk.toString();});
chrome.stdio[3].on('error', error => {
  for (const p of pending.values()) {clearTimeout(p.timeout);p.reject(error);}
  pending.clear();
});
chrome.on('exit', code => {
  for (const p of pending.values()) {clearTimeout(p.timeout);p.reject(new Error(`Chrome exited ${code}: ${stderr.slice(-1800)}`));}
  pending.clear();
});
chrome.stdio[4].on('data', chunk => {
  buffer += chunk.toString();
  let end;
  while ((end = buffer.indexOf('\0')) !== -1) {
    const raw = buffer.slice(0, end); buffer = buffer.slice(end + 1);
    if (!raw) continue;
    const data = JSON.parse(raw);
    if (data.id && pending.has(data.id)) {
      const p = pending.get(data.id); pending.delete(data.id); clearTimeout(p.timeout);
      if (data.error) p.reject(new Error(JSON.stringify(data.error))); else p.resolve(data.result);
    }
    if (data.method === 'Runtime.exceptionThrown') errors.push(data.params.exceptionDetails.text);
    if (data.method === 'Log.entryAdded' && data.params.entry.level === 'error') errors.push(data.params.entry.text);
  }
});
function send(method, params = {}, targetSession = session) {
  return new Promise((resolve, reject) => {
    const id = ++serial;
    const timeout = setTimeout(() => {pending.delete(id); reject(new Error(`Timeout: ${method}; ${stderr.slice(-1400)}`));}, 18000);
    pending.set(id, {resolve, reject, timeout});
    chrome.stdio[3].write(JSON.stringify({id, method, params, ...(targetSession ? {sessionId: targetSession} : {})}) + '\0');
  });
}
async function evaluate(expression) {
  const r = await send('Runtime.evaluate', {expression, returnByValue: true, awaitPromise: true});
  if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails));
  return r.result.value;
}
const click = selector => evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`);
const get = expression => evaluate(expression);
async function screenshot(name, width = 1440, height = 900) {
  await send('Emulation.setDeviceMetricsOverride', {width, height, deviceScaleFactor: 1, mobile: width < 600});
  await evaluate('new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))');
  const {data} = await send('Page.captureScreenshot', {format: 'png', captureBeyondViewport: true});
  fs.writeFileSync(path.join(qa, name), Buffer.from(data, 'base64'));
}
async function assertStage(stage) { assert.equal(await get('Number(document.body.dataset.stage)'), stage); }
async function confirm(keys) { for (const key of keys) await click(`[data-check="${key}"]`); }

(async () => {
  const results = [];
  try {
    await new Promise((resolve, reject) => {server.once('error', reject);server.listen(0, '127.0.0.1', resolve);});
    const created = await send('Target.createTarget', {url: 'about:blank'}, undefined);
    const attached = await send('Target.attachToTarget', {targetId: created.targetId, flatten: true}, undefined);
    session = attached.sessionId;
    await send('Runtime.enable'); await send('Page.enable'); await send('Log.enable');
    await send('Emulation.setEmulatedMedia', {features: [{name: 'prefers-reduced-motion', value: 'reduce'}]});
    await send('Page.navigate', {url: `http://127.0.0.1:${server.address().port}/`});
    for (let n = 0; n < 30; n++) {
      if (await get('document.readyState === "complete" && !!document.querySelector("#approve-plan")')) break;
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    await assertStage(0);
    assert.equal(await get('document.querySelectorAll("input[name=recovery]").length'), 3);
    assert.equal(await get('document.querySelector(".saving-number").textContent'), '€150');
    assert.equal(await get('document.querySelectorAll(".phone-device .customer-sms").length'), 0);
    assert.match(await get('document.querySelector(".phone-empty").textContent'), /No messages yet/);
    await screenshot('01-choose-desktop.png');
    assert.equal(await get('document.querySelector("#approve-plan").getBoundingClientRect().bottom <= innerHeight'), true);
    assert.equal(await get('document.querySelector(".system-window").getBoundingClientRect().right < document.querySelector(".phone-device").getBoundingClientRect().left'), true);
    results.push('Initial order, all three alternatives, €150 net saving');

    await click('input[value="C"]');
    assert.equal(await get('document.querySelector("#approve-plan").disabled'), true);
    assert.match(await get('document.querySelector(".hint").textContent'), /after the Tue 07:00/);
    assert.equal(await get('document.querySelector(".saving-number").textContent'), '—');
    results.push('Late replenishment cannot be approved and does not claim a saving');

    await click('input[value="A"]'); await click('#approve-plan'); await assertStage(1);
    assert.equal(await get('document.querySelector("#review-message").disabled'), true);
    await confirm(['stock']);
    assert.equal(await get('document.querySelector("#review-message").disabled'), true);
    await confirm(['transport']);
    assert.equal(await get('document.querySelector("#review-message").disabled'), false);
    await confirm(['stock']);
    assert.equal(await get('document.querySelector("#review-message").disabled'), true);
    await confirm(['stock']);
    await screenshot('02-confirm-desktop.png');
    await click('#review-message'); await assertStage(2);
    assert.match(await get('document.querySelector(".sms-bubble").textContent'), /tisdag kl. 07.00/);
    assert.equal(await get('document.querySelectorAll(".phone-device .customer-sms").length'), 0);
    assert.match(await get('document.querySelector(".customer-state").textContent'), /awaiting approval/);
    await screenshot('03-notify-desktop.png');
    await click('#send-message'); await assertStage(3);
    assert.match(await get('document.querySelector(".outcome").textContent'), /Original promise met/);
    assert.match(await get('document.querySelector(".phone-device .customer-sms").textContent'), /tisdag kl. 07.00/);
    assert.match(await get('document.querySelector(".customer-state").textContent'), /Customer informed/);
    await screenshot('04-outcome-desktop.png');
    results.push('Plan A requires both confirmations, relocks if revoked, and preserves the original promise');

    await click('#try-another'); await assertStage(0);
    assert.equal(await get('document.body.dataset.option'), 'B');
    assert.equal(await get('document.querySelector(".saving-number").textContent'), '€80');
    await click('#approve-plan'); await confirm(['stock', 'transport']);
    assert.equal(await get('document.querySelector("#review-message").disabled'), true);
    await confirm(['consent']);
    assert.equal(await get('document.querySelector("#review-message").disabled'), false);
    await click('#review-message');
    assert.match(await get('document.querySelector(".sms-bubble").textContent'), /13.00/);
    await click('#send-message');
    assert.match(await get('document.querySelector(".outcome").textContent'), /Revised promise met/);
    assert.match(await get('document.querySelector(".phone-device .customer-sms").textContent'), /13.00/);
    assert.doesNotMatch(await get('document.querySelector(".outcome").textContent'), /Original promise met/);
    await screenshot('05-split-outcome.png');
    results.push('Plan B additionally requires consent and a new crane slot, and identifies a revised promise');

    await click('#restart'); await assertStage(0);
    await screenshot('06-choose-mobile.png', 390, 844);
    assert.equal(await get('document.documentElement.scrollWidth <= innerWidth'), true);
    assert.equal(await get('document.querySelector("#approve-plan").getBoundingClientRect().bottom <= innerHeight'), true);
    await click('#toggle-phone');
    assert.equal(await get('document.querySelector("#toggle-phone").getAttribute("aria-expanded")'), 'true');
    assert.equal(await get('document.querySelector(".phone-device").getBoundingClientRect().height > 0'), true);
    await click('#toggle-phone');
    const smallText = await get('Array.from(document.querySelectorAll("button")).filter(b => b.getBoundingClientRect().width > 0).map(b => ({id:b.id, height:b.getBoundingClientRect().height}))');
    assert(smallText.find(b => b.id === 'approve-plan').height >= 44);
    await click('#approve-plan');
    assert.equal(await get('document.querySelectorAll("input[type=checkbox]:checked").length'), 0);
    await confirm(['stock', 'transport']); await click('#review-message');
    await screenshot('07-notify-mobile.png', 390, 844);
    assert.equal(await get('document.documentElement.scrollWidth <= innerWidth'), true);
    await click('#send-message');
    await screenshot('08-outcome-mobile.png', 390, 844);
    assert.equal(await get('document.documentElement.scrollWidth <= innerWidth'), true);
    results.push('390px mobile layout has no horizontal overflow and preserves the complete flow');
    results.push('The internal system and customer phone are separate; an SMS appears on the phone only after manager approval');

    assert.deepEqual(errors, []);
    fs.writeFileSync(path.join(qa, 'checks.json'), JSON.stringify({passed: true, checks: results, browserErrors: errors}, null, 2) + '\n');
    console.log(JSON.stringify({passed: true, checks: results, screenshots: qa}, null, 2));
  } finally {
    await send('Browser.close', {}, undefined).catch(() => {});
    chrome.kill();
    server.closeAllConnections();
    await new Promise(resolve => server.close(resolve));
    // Delete only the temporary browser profile created by this check.
    fs.rmSync(profile, {recursive: true, force: true});
  }
})().catch(error => {console.error(error.stack);process.exitCode = 1;});
