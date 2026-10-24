import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Sparkles, 
  Send, 
  ShieldCheck, 
  Check,
  Building2,
  FileText,
  Smartphone,
  Layers,
  ArrowRight
} from 'lucide-react';

export function OrchestratorView({ order, isApproved, setIsApproved, setCurrentView }) {
  const [selectedOptionId, setSelectedOptionId] = useState('A');
  const [showEnglishTranslation, setShowEnglishTranslation] = useState(true);

  const selectedOption = order.options.find(o => o.id === selectedOptionId) || order.options[0];

  const handleApprove = () => {
    setIsApproved(true);
  };

  return (
    <div className="space-y-6">
      {/* Slide 06 Presentation Frame (Exact alignment with Netcompany Slide) */}
      <div className="bg-tamca-white rounded-2xl border border-tamca-borderGray shadow-xl overflow-hidden p-6 sm:p-8 transition-all">
        {/* Slide Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-tamca-borderGray/60 pb-5 gap-4">
          <div className="flex items-start gap-4">
            <div className="bg-tamca-navy text-tamca-white font-mono font-black text-2xl sm:text-3xl px-3.5 py-1 rounded-md shadow-sm">
              06
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-tamca-darkNavy tracking-tight">
                Proposed Operating Model
              </h1>
              <p className="text-sm sm:text-base text-tamca-slateGray mt-1 font-medium max-w-3xl">
                Earlier alerts give coordinators time to assess recovery options before the delivery commitment is missed
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end md:self-start">
            <div className="text-right">
              <div className="flex items-center justify-end gap-1.5">
                <span className="w-1.5 h-3 bg-tamca-lightBlue rounded-sm"></span>
                <span className="w-1.5 h-4.5 bg-tamca-amber rounded-sm"></span>
                <span className="w-1.5 h-6 bg-tamca-navy rounded-sm"></span>
                <span className="font-extrabold text-tamca-darkNavy tracking-tight text-lg ml-1">TAMCA</span>
              </div>
              <p className="text-[11px] text-tamca-slateGray font-medium">Netcompany IT Consultant Challenge 2026</p>
            </div>
          </div>
        </div>

        {/* 3-Column Core Exhibit (Left: Metrics, Center: Orchestrator Screen, Right: Customer SMS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-start">
          
          {/* Column 1: Illustrative Scenario Metrics (3 cols) */}
          <div className="lg:col-span-3 space-y-4 bg-tamca-iceBlue p-4 rounded-xl border border-tamca-borderGray">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-tamca-slateGray block mb-1">
                Illustrative scenario
              </span>
              <h2 className="text-xs font-bold text-tamca-darkNavy uppercase tracking-wide">
                Current process
              </h2>
              <p className="text-xs text-tamca-slateGray mt-1 leading-relaxed">
                Shortfall exists Mon 14:00; found during loading Tue 06:30
              </p>
            </div>

            <div className="border-t border-tamca-borderGray pt-3">
              <h2 className="text-xs font-bold text-tamca-darkNavy uppercase tracking-wide">
                Proposed workflow
              </h2>
              <div className="text-xs text-tamca-slateGray mt-1 space-y-0.5">
                <p><span className="font-semibold text-tamca-darkNavy">{order.flaggedTimestamp}:</span> shortfall flagged</p>
                <p><span className="font-semibold text-tamca-darkNavy">{order.approvedTimestamp}:</span> recovery approved</p>
              </div>
            </div>

            {/* Big Hero Number 1: 16.5 hours */}
            <div className="bg-tamca-white border border-tamca-borderGray rounded-xl p-3.5 shadow-sm">
              <div className="text-3xl sm:text-4xl font-black text-tamca-navy tracking-tight font-mono">
                16½ hours
              </div>
              <p className="text-xs font-semibold text-tamca-darkNavy mt-1">
                earlier detection; decision in 20 minutes
              </p>
            </div>

            {/* Big Hero Number 2: ~€150 */}
            <div className="bg-tamca-white border border-tamca-borderGray rounded-xl p-3.5 shadow-sm">
              <div className="text-3xl sm:text-4xl font-black text-tamca-amber tracking-tight font-mono">
                ~€150
              </div>
              <p className="text-xs font-semibold text-tamca-darkNavy mt-1 leading-snug">
                illustrative net saving for Order {order.id}, before technology costs²
              </p>
              <p className="text-[11px] text-tamca-slateGray mt-1 font-mono">
                ~€200 failed delivery avoided − ~€50 recovery
              </p>
            </div>

            <div className="text-[11px] text-tamca-slateGray leading-tight pt-1">
              Contractor: <strong className="text-tamca-darkNavy">{order.contractor}</strong> ({order.city})
            </div>
          </div>

          {/* Column 2: The Orchestrator Terminal Screen (6 cols) */}
          <div className="lg:col-span-6 bg-tamca-darkNavy rounded-xl border border-tamca-navy shadow-2xl p-5 text-tamca-white flex flex-col justify-between">
            <div>
              {/* Header inside Orchestrator */}
              <div className="flex flex-wrap items-center justify-between pb-3 border-b border-tamca-slateGray/30 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="font-bold text-sm tracking-wide text-tamca-white">
                    AI Delivery & Fulfilment Orchestrator
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-tamca-navy text-tamca-lightBlue border border-tamca-slateGray/40">
                    Simulated data
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-tamca-amber/20 text-tamca-amber border border-tamca-amber/40">
                    Simulated AI output
                  </span>
                </div>
              </div>

              {/* Order Identifier Strip */}
              <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 bg-tamca-navy/90 p-2.5 rounded-lg border border-tamca-borderGray/20">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-tamca-amber text-sm">
                    {order.id}
                  </span>
                  <span className="text-xs text-tamca-iceBlue font-medium">
                    {order.description} · <span className="text-tamca-white font-semibold">{order.commitment}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-tamca-lightBlue font-mono">
                    Data as of {order.dataTimestamp}
                  </span>
                  <span className="bg-red-950/90 text-red-300 border border-red-700/60 font-bold text-[11px] px-2 py-0.5 rounded">
                    {order.shortfall.includes('20 short') ? '20 short' : order.shortfall.split(' ')[0] + ' short'}
                  </span>
                </div>
              </div>

              {/* Step 1: Why at risk */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-tamca-amber uppercase tracking-wider">
                  <span className="w-4 h-4 rounded-full bg-tamca-amber text-tamca-darkNavy flex items-center justify-center text-[10px] font-black">
                    1
                  </span>
                  <span>Why at risk</span>
                </div>
                <p className="text-xs text-tamca-lightBlue pl-6 leading-relaxed">
                  {order.shortfallReason}
                </p>
                <div className="ml-6 mt-1.5 inline-flex items-center gap-2 bg-tamca-navy/60 border border-tamca-amber/40 text-tamca-amber px-2.5 py-1 rounded text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-tamca-amber flex-shrink-0" />
                  <span>
                    <strong className="text-tamca-white">AI-read site note:</strong> {order.siteNote}
                  </span>
                </div>
              </div>

              {/* Step 2: Recovery options Table */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-tamca-amber uppercase tracking-wider">
                    <span className="w-4 h-4 rounded-full bg-tamca-amber text-tamca-darkNavy flex items-center justify-center text-[10px] font-black">
                      2
                    </span>
                    <span>Recovery options</span>
                  </div>
                  <span className="text-[10px] text-tamca-lightBlue italic">
                    Click row to select recovery package
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-tamca-slateGray/30 text-[11px] text-tamca-lightBlue">
                        <th className="py-1.5 px-2 font-medium">Action</th>
                        <th className="py-1.5 px-2 font-medium text-right">Recovery cost</th>
                        <th className="py-1.5 px-2 font-medium text-right">Arrives</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-tamca-slateGray/20 font-mono">
                      {order.options.map((opt) => {
                        const isSelected = selectedOptionId === opt.id;
                        return (
                          <tr
                            key={opt.id}
                            onClick={() => setSelectedOptionId(opt.id)}
                            className={`cursor-pointer transition-colors duration-150 ${
                              isSelected
                                ? 'bg-tamca-navy text-tamca-white font-medium ring-1 ring-tamca-amber rounded'
                                : 'hover:bg-tamca-navy/60 text-tamca-iceBlue'
                            }`}
                          >
                            <td className="py-2.5 px-2">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-tamca-white flex items-center gap-1">
                                  {opt.id}
                                  {opt.id === 'A' && <span className="text-emerald-400">✓</span>}
                                  {opt.id === 'B' && <span className="text-tamca-amber">⚠</span>}
                                  {opt.id === 'C' && <span className="text-red-400">✗</span>}
                                </span>
                                <span className="font-sans text-xs text-tamca-iceBlue line-clamp-1">
                                  {opt.action}
                                </span>
                              </div>
                            </td>
                            <td className="py-2.5 px-2 text-right font-bold text-tamca-amber">
                              {opt.recoveryCost}
                            </td>
                            <td className="py-2.5 px-2 text-right text-tamca-lightBlue">
                              {opt.arrives}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step 3: Checks on Selected Option */}
              <div className="mt-4 p-3 bg-tamca-navy/80 rounded-lg border border-tamca-slateGray/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-tamca-amber uppercase tracking-wider">
                  <span className="w-4 h-4 rounded-full bg-tamca-amber text-tamca-darkNavy flex items-center justify-center text-[10px] font-black">
                    3
                  </span>
                  <span>Checks on {selectedOption.id}:</span>
                </div>
                <p className="text-xs text-tamca-iceBlue pl-6 leading-relaxed">
                  {selectedOption.checks.join(' · ')}
                </p>
                
                {/* Feasibility Legend Bar */}
                <div className="pt-2 border-t border-tamca-slateGray/30 flex flex-wrap items-center gap-3 text-[11px] text-tamca-lightBlue">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <span>✓</span> Feasible
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-tamca-amber font-medium">
                    <span>⚠</span> Customer consent required
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-red-400 font-medium">
                    <span>✗</span> Late
                  </span>
                  <span className="hidden sm:inline">·</span>
                  <span className="text-[10px] text-tamca-slateGray italic block sm:inline">
                    Recovery cost excludes the cost of a failed delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Step 4: Human Approval Action & Log */}
            <div className="mt-5 pt-3 border-t border-tamca-slateGray/30">
              <div className="flex items-center gap-2 text-xs font-bold text-tamca-amber uppercase tracking-wider mb-2">
                <span className="w-4 h-4 rounded-full bg-tamca-amber text-tamca-darkNavy flex items-center justify-center text-[10px] font-black">
                  4
                </span>
                <span>Decision & Governance</span>
              </div>

              {!isApproved ? (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-tamca-navy p-3 rounded-lg border border-tamca-amber/50">
                  <div>
                    <span className="text-xs font-semibold text-tamca-white">
                      Coordinated human signoff required
                    </span>
                    <p className="text-[11px] text-tamca-lightBlue">
                      AI prepared Option {selectedOption.id} ({selectedOption.recoveryCost}). No automatic ERP write.
                    </p>
                  </div>
                  <button
                    onClick={handleApprove}
                    className="w-full sm:w-auto px-4 py-2 bg-tamca-amber hover:bg-amber-400 text-tamca-darkNavy font-black text-xs rounded-md shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer pulse-glow"
                  >
                    <Check className="w-4 h-4" />
                    <span>Option {selectedOption.id} approved ✓</span>
                  </button>
                </div>
              ) : (
                <div className="bg-emerald-950/70 border border-emerald-500/50 p-3 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-2 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold text-sm bg-emerald-900/60 p-1 rounded">
                      Option {selectedOption.id} approved ✓
                    </span>
                    <span className="text-xs text-tamca-lightBlue">
                      Fulfilment coordinator · {order.approvedTimestamp} · <span className="text-emerald-300 font-mono font-bold">logged</span>
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-900/40 text-emerald-300 px-2 py-0.5 rounded border border-emerald-700/50">
                    ERP Shuttle Ticket #SH-8842 Generated
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Column 3: Customer SMS Mobile Device (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-center">
            {/* Phone Shell */}
            <div className="w-full max-w-[280px] bg-tamca-darkNavy rounded-[32px] p-3 shadow-2xl border-4 border-tamca-navy ring-1 ring-tamca-borderGray">
              {/* Speaker Notch */}
              <div className="w-24 h-4 bg-tamca-darkNavy rounded-full mx-auto mb-2 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60"></div>
              </div>

              {/* Phone Screen */}
              <div className="bg-tamca-iceBlue rounded-[22px] p-3 text-tamca-darkNavy min-h-[380px] flex flex-col justify-between shadow-inner border border-tamca-borderGray">
                <div>
                  {/* SMS Header */}
                  <div className="text-center border-b border-tamca-borderGray pb-2 mb-2">
                    <h3 className="text-xs font-bold text-tamca-navy">{order.sms.senderName}</h3>
                    <p className="text-[10px] text-tamca-slateGray">SMS Notification</p>
                  </div>

                  {/* Speech Bubble: Swedish */}
                  <div className="bg-tamca-white text-tamca-darkNavy text-[11px] p-3 rounded-2xl rounded-tl-sm shadow-sm leading-relaxed mb-3 border border-tamca-borderGray">
                    {order.sms.swedish}
                  </div>

                  {/* Sent Policy Note */}
                  <div className="text-[9px] text-tamca-slateGray italic text-center px-1 mb-2">
                    {order.sms.policyNote}
                  </div>

                  {/* English Translation Box for Reviewers */}
                  <div className="bg-amber-50/90 border border-amber-200 text-tamca-darkNavy text-[10px] p-2.5 rounded-xl leading-relaxed">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[10px] text-amber-900">
                        English translation for readers
                      </span>
                      <span className="text-[9px] bg-amber-200/60 text-amber-900 px-1 py-0.2 rounded font-mono">
                        (not sent)
                      </span>
                    </div>
                    {order.sms.englishTranslation}
                  </div>
                </div>

                {/* SMS status tag */}
                <div className="pt-2 border-t border-tamca-borderGray flex items-center justify-between text-[10px]">
                  <span className="text-tamca-slateGray flex items-center gap-1">
                    <Send className="w-2.5 h-2.5 text-emerald-600" />
                    {isApproved ? 'Dispatched Mon 15:15' : 'Queued for coordinator'}
                  </span>
                  <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded ${
                    isApproved ? 'bg-emerald-100 text-emerald-800 font-bold' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {isApproved ? 'DELIVERED' : 'ON HOLD'}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-tamca-slateGray mt-2 text-center max-w-[260px]">
              Customer SMS is triggered <strong>only after</strong> inventory reservation & transport are locked.
            </p>
          </div>

        </div>

        {/* Central Slogan Bar (From alert to approved fix on one screen) */}
        <div className="my-5 bg-tamca-navy text-tamca-white rounded-xl p-3 text-center border border-tamca-borderGray/30 shadow-md">
          <p className="text-sm sm:text-base font-extrabold tracking-wide flex items-center justify-center gap-2">
            <span>From alert to approved fix on one screen</span>
            <span className="text-tamca-amber font-normal">—</span>
            <span className="text-tamca-amber font-bold">AI drafts, people decide</span>
          </p>
        </div>

        {/* Timeline: What happens next with Order #2004 */}
        <div className="bg-tamca-iceBlue rounded-xl p-4 border border-tamca-borderGray">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-tamca-darkNavy uppercase tracking-wide">
              What happens next with Order {order.id} · Illustrative scenario
            </span>
            <span className="text-[11px] text-tamca-slateGray font-mono">
              Status: {isApproved ? 'Phase 2 Approved & Executed' : 'Awaiting Coordinator Approval'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs">
            {order.timeline.map((item, idx) => {
              const isPast = idx === 0 || (isApproved && idx <= 1);
              const isCurrent = (idx === 1 && !isApproved) || (isApproved && idx === 2);
              return (
                <div 
                  key={idx}
                  className={`p-2.5 rounded-lg border transition-all ${
                    isPast 
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950' 
                      : isCurrent
                      ? 'bg-tamca-amber/20 border-tamca-amber text-tamca-darkNavy ring-2 ring-tamca-amber'
                      : 'bg-tamca-white border-tamca-borderGray text-tamca-slateGray'
                  }`}
                >
                  <div className="font-bold text-xs truncate">{item.step}</div>
                  <div className="font-mono text-[10px] text-tamca-slateGray mt-0.5">{item.time}</div>
                  <div className="text-[9px] text-tamca-slateGray mt-1 line-clamp-2 leading-tight">
                    {item.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Navigation Bar (Summary · Identify · Prioritise · Solve · Scale) */}
        <div className="mt-6 pt-4 border-t border-tamca-borderGray flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-tamca-slateGray">
          <div className="flex items-center gap-4 font-semibold overflow-x-auto max-w-full">
            <button 
              onClick={() => setCurrentView('story')} 
              className="text-tamca-slateGray hover:text-tamca-darkNavy transition cursor-pointer"
            >
              Summary
            </button>
            <span className="text-tamca-borderGray">•</span>
            <button 
              onClick={() => setCurrentView('story')} 
              className="text-tamca-slateGray hover:text-tamca-darkNavy transition cursor-pointer"
            >
              Identify
            </button>
            <span className="text-tamca-borderGray">•</span>
            <button 
              onClick={() => setCurrentView('story')} 
              className="text-tamca-slateGray hover:text-tamca-darkNavy transition cursor-pointer"
            >
              Prioritise
            </button>
            <span className="text-tamca-borderGray">•</span>
            <button 
              onClick={() => setCurrentView('prototype')} 
              className="text-tamca-navy font-bold bg-tamca-iceBlue px-2 py-0.5 rounded border border-tamca-navy cursor-pointer"
            >
              Solve (Current)
            </button>
            <span className="text-tamca-borderGray">•</span>
            <button 
              onClick={() => setCurrentView('story')} 
              className="text-tamca-slateGray hover:text-tamca-darkNavy transition cursor-pointer"
            >
              Scale
            </button>
          </div>

          <div className="text-[10px] text-tamca-slateGray text-right">
            ² Team financial model (Slide 09): ~€200 avoidable cost per failed delivery minus ~€50 recovery; before technology costs. Source: Team operating model · Simulated UI
          </div>
        </div>
      </div>
    </div>
  );
}
