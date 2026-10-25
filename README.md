# TAMCA · Delivery Recovery

Approved interactive prototype for slide 6 of the TAMCA AI Delivery & Fulfilment proposal, Netcompany IT Consultant Challenge 2026.

The experience follows one B2B order through three decisions: **Choose → Secure → Notify**, followed by its simulated delivery outcome. The internal Company A workspace sits beside the customer's phone. The phone receives its SMS only after account-manager approval.

## Order #2004

100 plasterboard sheets are due Tuesday at 07:00. Only 80 are reserved; 20 are missing. The site has a crane booked for 07:00.

| Plan | Recovery | Cost | Conditions |
| --- | --- | --- | --- |
| A · Recommended | Transfer 20 sheets from Branch B using tonight's shuttle; branch arrival Monday 21:00 | €50 | Confirm stock and transport; keep the original delivery promise. |
| B · Split delivery | 80 sheets at 07:00; 20 at 13:00 | €120 | Also confirm customer consent and a new crane slot; this changes the original promise. |
| C · Wait | Replenishment on Thursday | €0 | Too late for Tuesday; approval is blocked. |

Illustrative net savings are €150 for A and €80 for B, using €200 avoided failure cost, before technology costs. All data, AI output, confirmations, messages and delivery outcomes are simulated. No real SMS is sent and no operational system is written to.

## Run

```sh
npm ci
npm run dev
```

## Build and deploy

```sh
npm run build
npm run preview
```

The project retains React 18 and Vite. `vercel.json` builds with `npm run build` and serves `dist/`.

## Verify

After building, run:

```sh
npm run check:ui
```

The browser check exercises all recovery plans, confirmation locks, customer consent, SMS timing, restart and mobile layouts against the built app. It requires a local Chrome/Chromium installation. Set `CHROME_BIN` to the browser executable when it is not in a standard macOS or Linux location. Screenshots and results are written to the ignored `qa/` directory.

## Source

- `src/App.jsx`: React shell and prototype lifecycle.
- `src/prototype/runtime.js`: approved flow, system scene and customer-phone rendering.
- `src/prototype/styles.css`: base layout and navy–white–amber palette.
- `src/prototype/devices.css`: system-window and smartphone presentation.
- `ops/check_ui.cjs`: browser verification of the production build.

The prototype uses local SVGs and system fonts; runtime use does not depend on a font CDN or an AI service.
