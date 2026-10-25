export function mountRecoveryPrototype(root) {
  'use strict';
  const paths = {
    arrow:'M4 12h15m-6-6 6 6-6 6', back:'M20 12H5m6-6-6 6 6 6',
    check:'m5 12 4 4L19 6', chevron:'m9 5 7 7-7 7',
    reset:'M3 10a9 9 0 1 1 2 8M3 4v6h6',
    box:'m3 7 9-5 9 5v10l-9 5-9-5V7zm0 0 9 5 9-5m-9 5v10M7.5 4.5l9 5',
    clock:'M12 8v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0',
    alert:'m12 3 10 18H2L12 3zm0 6v5m0 3v.1',
    shield:'m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6l9-4zm-4 10 3 3 5-6',
    file:'M14 2H5v20h14V7l-5-5zm0 0v5h5M8 12h8m-8 4h8',
    message:'M21 3H3v14h5v5l6-5h7V3z',
    truck:'M3 6h11v12H3V6zm11 4h4l3 4v4h-7m-7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0',
    info:'M12 11v6m0-10v.1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0',
    spark:'m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z',
    monitor:'M3 3h18v13H3V3zm9 13v5m-5 0h10',
    phone:'M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm3 3h4m-3 14h2',
    lock:'M6 11h12v10H6V11zm3 0V6a3 3 0 0 1 6 0v5m-3 4v2'
  };
  const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[name] || paths.info}"/></svg>`;
  const options = {
    A:{name:'Transfer from Branch B',desc:'20 sheets · 12 km · tonight’s shuttle',cost:50,saving:150,arrival:'Mon 21:00',delivery:'Tue 07:00',tag:'Recommended',status:'Original slot kept',hint:'20 available after reservations · Cut-off 18:00 · Arrives before dispatch.'},
    B:{name:'Split the delivery',desc:'80 at 07:00 · remaining 20 at 13:00',cost:120,saving:80,arrival:'Tue 13:00',delivery:'Tue 13:00',tag:'Consent needed',status:'New crane slot needed',hint:'The crane is booked for 07:00. Confirm customer consent and a new slot.'},
    C:{name:'Wait for replenishment',desc:'Stock arrives Thursday · original promise missed',cost:0,saving:null,arrival:'Thursday',delivery:'Thursday',tag:'Too late',status:'Delivery promise missed',hint:'Thursday is after the Tue 07:00 commitment. Choose another recovery.'}
  };
  const state = {stage:0,option:'A',phoneOpen:false,checks:{stock:false,transport:false,consent:false}};
  const app = root.querySelector('#app');
  const announcer = root.querySelector('#announcer');
  root.querySelector('#restart').innerHTML = icon('reset');
  const selected = () => options[state.option];
  const allConfirmed = () => state.checks.stock && state.checks.transport && (state.option !== 'B' || state.checks.consent);
  function announce(text){announcer.textContent=text;}
  function stepper(){return `<ol class="stepper" aria-label="Recovery progress">${['Choose','Secure','Notify'].map((label,i)=>`<li class="${state.stage===i?'current':state.stage>i?'complete':''}"${state.stage===i?' aria-current="step"':''}><span class="step-num">${state.stage>i?icon('check'):i+1}</span>${label}</li>`).join('')}</ol>`;}
  function heading(){return `<div class="page-heading"><div><p class="eyebrow">Sweden · B2B fulfilment</p><h1>${state.stage===3?'A better delivery outcome.':'Keep the delivery promise.'}</h1></div>${stepper()}</div>`;}
  function orderStrip(){
    const status=state.stage===3?(state.option==='A'?'Delivered in full':'Revised delivery'):state.stage>0?'Plan approved':'At risk';
    return `<div class="order-strip"><div class="order-name"><span class="order-icon">${icon('box')}</span><div><strong>Order #2004</strong><p>100 plasterboard sheets</p></div></div><div class="order-fact">${icon('clock')}<span>Original commitment</span><strong>Tue 07:00</strong></div><div class="order-fact site-note">${icon('info')}<span>Crane booked for 07:00</span></div><span class="status-pill ${state.stage>0?'good':''}">${icon(state.stage>0?'check':'alert')}${status}</span></div>`;
  }
  function scene(){
    const isA=state.option==='A', isB=state.option==='B';
    return `<div class="scene" aria-label="${isA?'Transfer 20 sheets from Branch B to the dispatch branch, then deliver 100 sheets to site.':isB?'Deliver 80 sheets at 07:00 and 20 at 13:00, subject to customer approval.':'Waiting for Thursday stock misses the Tuesday delivery.'}"><svg viewBox="0 0 600 137" role="img"><path d="M30 112h540" stroke="#dce4ed"/><path d="M105 63H294M335 63h159" fill="none" stroke="${isA?'#9cc3e4':'#c9d3de'}" stroke-width="3" stroke-dasharray="5 6"/><path d="m482 57 10 6-10 6" fill="none" stroke="#9cc3e4" stroke-width="2"/><g transform="translate(55,29)" stroke="#16324f" stroke-width="1.6" fill="white"><path d="M0 22 27 7l27 15v35H0V22z"/><path d="M0 22h54M11 32h32v25H11zM18 39h18m-18 7h18"/><path d="M21 7V0h12v7"/></g><text x="82" y="106" text-anchor="middle" class="scene-title">${isA?'Branch B':'Replenishment'}</text><text x="82" y="123" text-anchor="middle" class="scene-label">${isA?'20 sheets available':isB?'20 sheets · Tue 13:00':'Arrives Thursday'}</text><g transform="translate(278,39)" fill="white" stroke="#16324f" stroke-width="1.6"><path d="m0 10 31-16 31 16v36H0V10zM0 10h62M10 23h16v23H10zm27 0h16v23H37z"/><path d="M28 10v36"/></g><text x="309" y="106" text-anchor="middle" class="scene-title">Dispatch branch</text><text x="309" y="123" text-anchor="middle" class="scene-label">80 sheets reserved</text><g transform="translate(484,27)" stroke="#16324f" stroke-width="1.6" fill="none"><path d="M0 60h57M8 60V24h35v36M14 24V7h7m10 53V24M0 7h58M16 7V0h13l12 7M49 7v21l-4 4"/><path d="M14 35h6m12 0h6m-24 9h6m12 0h6"/></g><text x="512" y="106" text-anchor="middle" class="scene-title">Customer site</text><text x="512" y="123" text-anchor="middle" class="scene-label">${isA?'100 sheets · Tue 07:00':isB?'80 at 07:00 + 20 at 13:00':'Promise at risk'}</text><rect x="156" y="47" rx="5" width="90" height="29" fill="${isA?'#fff0c7':'#fff'}"/><text x="201" y="65" text-anchor="middle" class="scene-metric">${isA?'12 km · €50':isB?'Split · €120':'Too late'}</text></svg></div>`;
  }
  function impact(){
    const o=selected(),invalid=state.option==='C';
    return `<div class="system-impact" aria-label="Selected plan impact"><strong class="saving-number">${invalid?'—':'€'+o.saving}</strong><span>${invalid?'No recovery benefit':'Modelled net saving*'}<small>${invalid?'Failure cost remains':`€200 − €${o.cost} recovery`}</small></span></div>`;
  }
  function smsText(){
    return state.option==='A'?'Hej! Er order #2004 levereras komplett på tisdag kl. 07.00. Vi har säkrat de återstående 20 skivorna från en närliggande butik. Svara på detta sms om ni behöver hjälp.':'Hej! Enligt överenskommelse levereras order #2004 i två delar på tisdag: 80 skivor kl. 07.00 och 20 skivor kl. 13.00. Den nya krantiden är bekräftad. Svara på detta sms om ni behöver hjälp.';
  }
  function phone(){
    const sent=state.stage===3;
    return `<div class="phone-halo" aria-hidden="true"></div><div class="phone-device ${sent?'has-message':''}" aria-label="Customer phone. ${sent?'Simulated SMS received.':'No message has been sent.'}"><div class="phone-screen"><div class="phone-island" aria-hidden="true"></div><div class="phone-status" aria-hidden="true"><strong>${sent?'14:26':state.stage===0?'14:00':'14:20'}</strong><svg viewBox="0 0 47 14"><path d="M1 12V9m4 3V6m4 6V3m4 9V0" stroke="#16324F" stroke-width="2.4"/><path d="M20 4q5-5 10 0m-8 3q3-3 6 0m-4 3h2" fill="none" stroke="#16324F" stroke-width="1.3"/><rect x="35" y="3" width="10" height="8" rx="2" fill="none" stroke="#16324F"/><path d="M46 5v4M37 5h6v4h-6z" fill="#16324F" stroke="#16324F"/></svg></div><div class="phone-contact"><span class="phone-back" aria-hidden="true">${icon('back')}</span><div class="contact-avatar" aria-hidden="true"><svg viewBox="0 0 26 29"><path fill="#F2A900" d="M0 15h6v14H0zm10-8h6v22h-6zM20 0h6v29h-6z"/></svg></div><strong>Company A</strong><span>Proffsservice</span></div><div class="phone-conversation">${sent?`<div class="phone-date">Monday · 14:26</div><div class="customer-sms sms-bubble" lang="sv">${smsText()}<p class="sms-signature">Vänliga hälsningar,<br>Company A Proffsservice</p></div><div class="phone-receipt">${icon('check')}SMS received · simulated</div>`:`<div class="phone-empty"><span class="empty-message-icon">${icon('message')}</span><strong>No messages yet</strong><p>Delivery updates appear here.</p></div>`}</div><div class="phone-compose" aria-hidden="true"><span>＋</span><div>Text message<span>↑</span></div></div><div class="phone-home" aria-hidden="true"></div></div></div><div class="customer-caption"><span class="customer-state ${sent?'received':''}">${icon(sent?'check':'lock')}${sent?'Customer informed':state.stage===2?'Draft ready · awaiting approval':'No SMS sent'}</span><div class="send-gates" aria-label="Message prerequisites">${[['stock','Stock',state.checks.stock],['transport','Transport',state.checks.transport],['approval','Approval',sent]].map(([key,label,done])=>`<span class="send-gate ${done?'done':''}" data-gate="${key}">${icon(done?'check':'lock')}${label}</span>`).join('')}</div></div>`;
  }
  function customerStage(){
    return `<aside class="customer-stage ${state.phoneOpen?'expanded':''}" id="customer-stage"><div class="stage-label">${icon('phone')}<strong>Customer’s phone</strong><span class="stage-domain">External</span><button class="phone-toggle" id="toggle-phone" aria-controls="customer-visual" aria-expanded="${state.phoneOpen}">${state.phoneOpen?'Hide':'View'} ${icon('chevron')}</button></div><div class="customer-visual" id="customer-visual">${phone()}</div></aside>`;
  }
  function systemWindow(content){
    return `<div class="system-stage"><div class="stage-label">${icon('monitor')}<strong>Company A workspace</strong><span class="stage-domain">Internal</span></div><section class="system-window" aria-label="Internal delivery recovery system"><div class="window-bar"><span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span><strong>AI Delivery & Fulfilment Orchestrator</strong><span class="window-tag">Simulated</span></div><div class="system-context">${orderStrip()}${impact()}</div>${content}<div class="system-footnote">${icon('shield')}AI drafts. Rules check. People decide.<span>*Savings before technology costs</span></div></section><div class="handoff-bridge ${state.stage===3?'sent':''}" aria-hidden="true"><span>${state.stage===3?'Approved SMS':'SMS'}</span><div><i></i></div></div></div>`;
  }
  function refreshCustomer(){root.querySelector('#customer-visual').innerHTML=phone();}
  function choose(){
    const o=selected(),invalid=state.option==='C';
    return `<section class="main-panel"><div class="panel-top"><h2>Recover the missing 20.</h2><span class="small-label">Mon 14:00</span></div>${scene()}<fieldset class="choice-list"><legend>Choose a recovery plan</legend>${Object.entries(options).map(([key,v])=>`<label class="option ${state.option===key?'selected':''} ${key==='C'?'invalid':''}"><input type="radio" name="recovery" value="${key}" ${state.option===key?'checked':''}><span><span class="option-title">${v.name}<span class="tag ${key==='C'?'soft':''}">${v.tag}</span></span><span class="option-desc">${v.desc}</span></span><span class="option-price">€${v.cost}<small>recovery</small></span></label>`).join('')}</fieldset><p class="hint ${state.option==='B'?'warn':invalid?'danger':''}">${icon(invalid?'alert':state.option==='B'?'info':'check')}<span>${o.hint}</span></p><details class="evidence"><summary>${icon('chevron')}Why was this flagged?</summary><div class="evidence-body"><p><span>Order / reserved</span><strong>100 / 80 sheets</strong></p><p><span>20 sheets allocated elsewhere</span><strong>ERP · Mon 13:58</strong></p><p><span>Next replenishment</span><strong>Thursday</strong></p><p><span>Site note read by AI</span><strong>Crane slot · Tue 07:00</strong></p></div></details><div class="panel-action"><div class="person"><span class="avatar">FC</span><span><strong>Fulfilment coordinator</strong>You approve the recovery</span></div><button class="button" id="approve-plan" ${invalid?'disabled':''}>Approve ${state.option==='A'?'transfer':state.option==='B'?'split plan':'plan'} ${icon('arrow')}</button></div></section>`;
  }
  function checkRow(key,title,sub){return `<label class="check-row ${state.checks[key]?'checked':''}"><input type="checkbox" data-check="${key}" ${state.checks[key]?'checked':''}><span><strong>${title}</strong><small>${sub}</small></span></label>`;}
  function secure(){return `<section class="main-panel"><div class="confirmation-body"><button class="back-button" data-back="0">${icon('back')}Change plan</button><h2>Secure the recovery.</h2><p class="intro">Staff act in existing systems. Confirm each action here.</p><div class="chosen-plan"><div><h3>${selected().name}</h3><p>${selected().desc} · €${selected().cost}</p></div>${icon('truck')}</div><div class="check-list">${checkRow('stock',state.option==='A'?'20 sheets reserved at Branch B':'Stock confirmed for both loads',state.option==='A'?'Availability checked after existing reservations.':'80 sheets for 07:00; 20 for 13:00.')}${checkRow('transport',state.option==='A'?'Tonight’s shuttle booking confirmed':'Both delivery bookings confirmed',state.option==='A'?'Before the 18:00 cut-off · branch arrival Mon 21:00.':'The second delivery reaches site at 13:00.')}${state.option==='B'?checkRow('consent','Customer consent & new crane slot confirmed','The original 07:00 commitment is being changed.'):''}</div><p class="mini-log">${icon('check')}Plan approved · Coordinator · Mon 14:20 · Logged</p></div><div class="panel-action"><p class="confirm-prompt" id="confirm-prompt">${allConfirmed()?'Ready to review the customer message.':'Confirm all actions to unlock the customer message.'}</p><button class="button" id="review-message" ${allConfirmed()?'':'disabled'}>Review message ${icon('arrow')}</button></div></section>`;}
  function notify(){
    const isA=state.option==='A';
    const sms=smsText();
    return `<section class="main-panel"><div class="message-body"><button class="back-button" data-back="1">${icon('back')}Back to confirmations</button><h2>Keep the customer informed.</h2><p class="intro">Review the AI-drafted message before approval.</p><div class="message-checks"><span class="check-chip">${icon('check')}Stock secured</span><span class="check-chip">${icon('check')}Transport booked</span>${isA?'':`<span class="check-chip">${icon('check')}Customer consent recorded</span>`}</div><div class="message-preview"><p class="message-recipient">${icon('message')}SMS preview · Customer for order #2004</p><div class="sms-bubble" lang="sv">${sms}<p class="sms-signature">Vänliga hälsningar,<br>Company A Proffsservice</p></div><p class="translation"><strong>In English</strong><br>${isA?'Your complete order arrives Tuesday at 07:00. The remaining 20 sheets have been secured from a nearby branch.':'As agreed: 80 sheets arrive at 07:00 and 20 at 13:00 on Tuesday. The new crane slot is confirmed.'}</p></div><p class="message-note">${icon('info')}This prototype simulates the SMS and delivery outcome.</p></div><div class="panel-action"><div class="person"><span class="avatar">AM</span><span><strong>Account manager</strong>You approve the message</span></div><button class="button" id="send-message">Approve & simulate SMS ${icon('arrow')}</button></div></section>`;
  }
  function outcome(){
    const isA=state.option==='A';
    return `<section class="main-panel"><div class="outcome"><div class="outcome-symbol">${icon('check')}</div><p class="eyebrow">Order #2004 · Simulation complete</p><h2>${isA?'Recovered. Right on time.':'A revised delivery, agreed.'}</h2><p class="intro">${isA?'A shortfall flagged early. A practical fix approved by a person.':'The customer accepted a split delivery and a new crane slot.'}</p><div class="outcome-metrics"><div><strong>${isA?'100/100':'80 + 20'}</strong><span>${isA?'sheets delivered at 07:00':'sheets in two deliveries'}</span></div><div><strong>€${selected().saving}</strong><span>modelled net saving*</span></div><div><strong>16½h</strong><span>earlier detection</span></div></div><ol class="event-list"><li>${icon('check')}<span>Shortfall flagged</span><time>Mon 14:00</time></li><li>${icon('check')}<span>Plan approved by coordinator</span><time>Mon 14:20</time></li><li>${icon('check')}<span>Staff confirmed stock & transport${isA?'':' + customer consent'}</span></li><li>${icon('check')}<span>Message approved by account manager</span></li><li>${icon('check')}<span><strong>${isA?'Delivered in full · Original promise met':'Split delivery completed · Revised promise met'}</strong></span><time>${isA?'Tue 07:00':'Tue 13:00'}</time></li></ol><div class="outcome-actions"><button class="button" id="try-another">Try another plan ${icon('arrow')}</button><button class="button secondary" id="replay">${icon('reset')}Replay</button></div><p class="learning"><strong>${isA?'The difference is the time to act.':'The trade-off: a later completion and higher recovery cost.'}</strong><br>${isA?'Current process: found during loading, Tue 06:30. Proposed: flagged Mon 14:00; approved in 20 minutes.':'Plan A keeps the original 07:00 promise for €50. This split plan costs €120 and needs customer agreement.'}<br>*Illustrative saving before technology costs. All events above are simulated.</p></div></section>`;
  }
  function render(focus=false){
    const content=state.stage===0?choose():state.stage===1?secure():state.stage===2?notify():outcome();
    app.innerHTML=heading()+`<div class="workspace fade-in">${systemWindow(content)}${customerStage()}</div>`;
    document.body.dataset.stage=String(state.stage);
    document.body.dataset.option=state.option;
    if(focus){app.focus({preventScroll:true});window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
  }
  function reset(option='A'){state.stage=0;state.option=option;state.phoneOpen=false;state.checks={stock:false,transport:false,consent:false};render(true);announce('Demo restarted. Choose a recovery plan.');}
  const restart=root.querySelector('#restart');
  const handleRestart=()=>reset();
  restart.addEventListener('click',handleRestart);
  const handleChange=event=>{
    if(event.target.name==='recovery'){
      const key=event.target.value;
      if(!options[key])return;
      state.option=key;state.checks={stock:false,transport:false,consent:false};render();
      app.querySelector(`input[value="${key}"]`).focus({preventScroll:true});
      announce(`${selected().name}. Recovery cost €${selected().cost}. ${selected().hint}`);
    }
    if(event.target.matches('[data-check]')){
      state.checks[event.target.dataset.check]=event.target.checked;
      event.target.closest('.check-row').classList.toggle('checked',event.target.checked);
      root.querySelector('#review-message').disabled=!allConfirmed();
      root.querySelector('#confirm-prompt').textContent=allConfirmed()?'Ready to review the customer message.':'Confirm all actions to unlock the customer message.';
      refreshCustomer();
      if(allConfirmed())announce('All actions confirmed. Customer message unlocked.');
    }
  };
  const handleClick=event=>{
    const button=event.target.closest('button');if(!button||button.disabled)return;
    if(button.id==='toggle-phone'){state.phoneOpen=!state.phoneOpen;root.querySelector('#customer-stage').classList.toggle('expanded',state.phoneOpen);button.setAttribute('aria-expanded',String(state.phoneOpen));button.innerHTML=(state.phoneOpen?'Hide':'View')+' '+icon('chevron');return;}
    if(button.hasAttribute('data-back')){state.stage=Number(button.dataset.back);render(true);return;}
    if(button.id==='approve-plan'&&state.stage===0&&state.option!=='C'){state.stage=1;render(true);announce('Plan approved. Confirm stock and transport after staff action.');}
    if(button.id==='review-message'&&state.stage===1&&allConfirmed()){state.stage=2;state.phoneOpen=true;render(true);announce('Stock and transport confirmed. Review the customer message.');}
    if(button.id==='send-message'&&state.stage===2&&allConfirmed()){state.stage=3;state.phoneOpen=true;render(true);announce('Simulation complete. The approved SMS now appears on the customer phone.');}
    if(button.id==='try-another')reset(state.option==='A'?'B':'A');
    if(button.id==='replay')reset(state.option);
  };
  app.addEventListener('change',handleChange);
  app.addEventListener('click',handleClick);
  render();
  return () => {
    restart.removeEventListener('click',handleRestart);
    app.removeEventListener('change',handleChange);
    app.removeEventListener('click',handleClick);
    app.innerHTML='';
    announcer.textContent='';
    delete document.body.dataset.stage;
    delete document.body.dataset.option;
  };
}
