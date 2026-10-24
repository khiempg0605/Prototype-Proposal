import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Sparkles, 
  Send, 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight,
  Info,
  Calendar,
  Truck,
  Check,
  Building2,
  FileText,
  UserCheck
} from 'lucide-react';

export function OrchestratorView({ order, isApproved, setIsApproved, setCurrentView }) {
  const [selectedOptionId, setSelectedOptionId] = useState('A');
  const [showEnglishTranslation, setShowEnglishTranslation] = useState(true);
  const [showLogModal, setShowLogModal] = useState(false);

  const selectedOption = order.options.find(o => o.id === selectedOptionId) || order.options[0];

  const handleApprove = () => {
    setIsApproved(true);
  };

  return (
    <div className="space-y-6">
      {/* Slide 06 Presentation Frame (Exact alignment with Netcompany Slide) */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden p-6 sm:p-8 transition-all">
        {/* Slide Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-slate-100 pb-5 gap-4">
          <div className="flex items-start gap-4">
            <div className="bg-slate-950 text-white font-mono font-black text-2xl sm:text-3xl px-3 py-1 rounded-md shadow-sm">
              06
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Proposed Operating Model
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium max-w-3xl">
                Earlier alerts give coordinators time to assess recovery options before the delivery commitment is missed
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end md:self-start">
            <div className="text-right">
              <div className="flex items-center justify-end gap-1.5">
                <span className="w-1.5 h-3 bg-amber-400 rounded-sm"></span>
                <span className="w-1.5 h-4.5 bg-amber-500 rounded-sm"></span>
                <span className="w-1.5 h-6 bg-amber-600 rounded-sm"></span>
                <span className="font-extrabold text-slate-900 tracking-tight text-lg ml-1">TAMCA</span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Netcompany IT Consultant Challenge 2026</p>
            </div>
          </div>
        </div>

        {/* 3-Column Core Exhibit (Left: Metrics, Center: Orchestrator Screen, Right: Customer SMS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-start">
          
          {/* Column 1: Illustrative Scenario Metrics (3 cols) */}
          <div className="lg:col-span-3 space-y-5 bg-slate-50/70 p-4 rounded-xl border border-slate-200/60">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Illustrative scenario
              </span>
              <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                Current process
              </h2>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Shortfall exists Mon 14:00; found during loading Tue 06:30
              </p>
            </div>

            <div className="border-t border-slate-200 pt-3">
              <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                Proposed workflow
              </h2>
              <div className="text-xs text-slate-700 mt-1 space-y-0.5">
                <p><span className="font-semibold text-slate-900">{order.flaggedTimestamp}:</span> shortfall flagged</p>
                <p><span className="font-semibold text-slate-900">{order.approvedTimestamp}:</span> recovery approved</p>
              </div>
            </div>

            {/* Big Hero Number 1 */}
            <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3.5 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-700 tracking-tight font-mono">
                16½ hours
              </div>
              <p className="text-xs font-semibold text-amber-950 mt-1">
                earlier detection; decision in 20 minutes
              </p>
            </div>

            {/* Big Hero Number 2 */}
            <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-3.5 shadow-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700 tracking-tight font-mono">
                ~€150
              </div>
              <p className="text-xs font-semibold text-emerald-950 mt-1 leading-snug">
                illustrative net saving for Order {order.id}, before technology costs²
              </p>
              <p className="text-[11px] text-emerald-800/80 mt-1 font-mono">
                ~€200 failed delivery avoided − ~€50 recovery
              </p>
            </div>

            <div className="text-[10px] text-slate-400 leading-tight">
              Contractor: <span className="font-medium text-slate-600">{order.contractor}</span> ({order.city})
            </div>
          </div>

          {/* Column 2: The Orchestrator Terminal Screen (6 cols) */}
          <div className="lg:col-span-6 bg-slate-950 rounded-xl border border-slate-800 shadow-2xl p-5 text-white flex flex-col justify-between">
            <div>
              {/* Header inside Orchestrator */}
              <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-800 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="font-bold text-sm tracking-wide text-slate-100">
                    AI Delivery & Fulfilment Orchestrator
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Simulated data
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-600/40">
                    Simulated AI output
                  </span>
                </div>
              </div>

              {/* Order Identifier Strip */}
              <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-amber-400 text-sm">
                    {order.id}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    {order.description} · <span className="text-slate-100 font-semibold">{order.commitment}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400 font-mono">
                    Data as of {order.dataTimestamp}
                  </span>
                  <span className="bg-red-950/90 text-red-300 border border-red-700/60 font-bold text-[11px] px-2 py-0.5 rounded">
                    {order.shortfall.includes('20 short') ? '20 short' : order.shortfall.split(' ')[0] + ' short'}
                  </span>
                </div>
              </div>

              {/* Step 1: Why at risk */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <span className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[10px] font-black">
                    1
                  </span>
                  <span>Why at risk</span>
                </div>
                <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                  {order.shortfallReason}
                </p>
                <div className="ml-6 mt-1.5 inline-flex items-center gap-2 bg-amber-950/40 border border-amber-500/30 text-amber-300 px-2.5 py-1 rounded text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>
                    <strong className="text-amber-200">AI-read site note:</strong> {order.siteNote}
                  </span>
                </div>
              </div>

              {/* Step 2: Recovery options Table */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                    <span className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[10px] font-black">
                      2
                    </span>
                    <span>Recovery options</span>
                  </div>
                  <span className="text-[10px] text-slate-400 italic">
                    Click row to simulate coordinator selection
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-slate-800 text-[11px] text-slate-400">
                        <th className="py-1.5 px-2 font-medium">Action</th>
                        <th className="py-1.5 px-2 font-medium text-right">Recovery cost</th>
                        <th className="py-1.5 px-2 font-medium text-right">Arrives</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono">
                      {order.options.map((opt) => {
                        const isSelected = selectedOptionId === opt.id;
                        return (
                          <tr
                            key={opt.id}
                            onClick={() => setSelectedOptionId(opt.id)}
                            className={`cursor-pointer transition-colors duration-150 ${
                              isSelected
                                ? 'bg-slate-800/90 text-white font-medium ring-1 ring-amber-400/40 rounded'
                                : 'hover:bg-slate-900 text-slate-300'
                            }`}
                          >
                            <td className="py-2.5 px-2">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-slate-200 flex items-center gap-1">
                                  {opt.id}
                                  {opt.id === 'A' && <span className="text-emerald-400">✓</span>}
                                  {opt.id === 'B' && <span className="text-amber-400">⚠</span>}
                                  {opt.id === 'C' && <span className="text-red-400">✗</span>}
                                </span>
                                <span className="font-sans text-xs text-slate-200 line-clamp-1">
                                  {opt.action}
                                </span>
                              </div>
                            </td>
                            <td className="py-2.5 px-2 text-right font-bold text-slate-100">
                              {opt.recoveryCost}
                            </td>
                            <td className="py-2.5 px-2 text-right text-slate-300">
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
              <div className="mt-4 p-3 bg-slate-900/90 rounded-lg border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <span className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[10px] font-black">
                    3
                  </span>
                  <span>Checks on {selectedOption.id}:</span>
                </div>
                <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                  {selectedOption.checks.join(' · ')}
                </p>
                
                {/* Feasibility Legend Bar */}
                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <span>✓</span> Feasible
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-amber-400 font-medium">
                    <span>⚠</span> Customer consent required
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-red-400 font-medium">
                    <span>✗</span> Late
                  </span>
                  <span className="hidden sm:inline">·</span>
                  <span className="text-[10px] text-slate-500 italic block sm:inline">
                    Recovery cost excludes the cost of a failed delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Step 4: Human Approval Action & Log */}
            <div className="mt-5 pt-3 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                <span className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[10px] font-black">
                  4
                </span>
                <span>Decision & Governance</span>
              </div>

              {!isApproved ? (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900 p-3 rounded-lg border border-amber-500/40">
                  <div>
                    <span className="text-xs font-semibold text-slate-200">
                      Coordinated human signoff required
                    </span>
                    <p className="text-[11px] text-slate-400">
                      AI prepared Option {selectedOption.id} ({selectedOption.recoveryCost}). No automatic ERP write.
                    </p>
                  </div>
                  <button
                    onClick={handleApprove}
                    className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs rounded-md shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer pulse-glow"
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
                    <span className="text-xs text-slate-300">
                      Fulfilment coordinator · {order.approvedTimestamp} · <span className="text-emerald-300 font-mono">logged</span>
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
            <div className="w-full max-w-[280px] bg-slate-900 rounded-[32px] p-3 shadow-2xl border-4 border-slate-700 ring-1 ring-slate-900/50">
              {/* Speaker / Camera Notch */}
              <div className="w-24 h-4 bg-slate-950 rounded-full mx-auto mb-2 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60"></div>
              </div>

              {/* Phone Screen */}
              <div className="bg-slate-100 rounded-[22px] p-3 text-slate-900 min-h-[380px] flex flex-col justify-between shadow-inner">
                <div>
                  {/* SMS Header */}
                  <div className="text-center border-b border-slate-200 pb-2 mb-2">
                    <h3 className="text-xs font-bold text-slate-800">{order.sms.senderName}</h3>
                    <p className="text-[10px] text-slate-500">SMS Notification</p>
                  </div>

                  {/* Speech Bubble: Swedish */}
                  <div className="bg-slate-200/90 text-slate-800 text-[11px] p-3 rounded-2xl rounded-tl-sm shadow-sm leading-relaxed mb-3">
                    {order.sms.swedish}
                  </div>

                  {/* Sent Policy Note */}
                  <div className="text-[9px] text-slate-500 italic text-center px-1 mb-2">
                    {order.sms.policyNote}
                  </div>

                  {/* English Translation Box for Reviewers */}
                  <div className="bg-amber-50/90 border border-amber-200 text-slate-700 text-[10px] p-2.5 rounded-xl leading-relaxed">
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
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px]">
                  <span className="text-slate-500 flex items-center gap-1">
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

            <p className="text-[10px] text-slate-400 mt-2 text-center max-w-[260px]">
              Customer SMS is triggered <strong>only after</strong> inventory reservation & transport are locked.
            </p>
          </div>

        </div>

        {/* Central Slogan Bar (From alert to approved fix on one screen) */}
        <div className="my-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-xl p-3 text-center border border-slate-700 shadow-md">
          <p className="text-sm sm:text-base font-extrabold tracking-wide flex items-center justify-center gap-2">
            <span>From alert to approved fix on one screen</span>
            <span className="text-amber-400 font-normal">—</span>
            <span className="text-amber-300 font-bold">AI drafts, people decide</span>
          </p>
        </div>

        {/* Timeline: What happens next with Order #2004 */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
              What happens next with Order {order.id} · Illustrative scenario
            </span>
            <span className="text-[11px] text-slate-500 font-mono">
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
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-950' 
                      : isCurrent
                      ? 'bg-amber-50 border-amber-300 text-amber-950 ring-2 ring-amber-400/50'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  <div className="font-bold text-xs truncate">{item.step}</div>
                  <div className="font-mono text-[10px] text-slate-500 mt-0.5">{item.time}</div>
                  <div className="text-[9px] text-slate-400 mt-1 line-clamp-2 leading-tight">
                    {item.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Navigation Bar (Summary · Identify · Prioritise · Solve · Scale) */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-4 font-semibold overflow-x-auto max-w-full">
            <button 
              onClick={() => setCurrentView('story')} 
              className="text-slate-600 hover:text-slate-900 transition cursor-pointer"
            >
              Summary
            </button>
            <span className="text-slate-300">•</span>
            <button 
              onClick={() => setCurrentView('story')} 
              className="text-slate-600 hover:text-slate-900 transition cursor-pointer"
            >
              Identify
            </button>
            <span className="text-slate-300">•</span>
            <button 
              onClick={() => setCurrentView('story')} 
              className="text-slate-600 hover:text-slate-900 transition cursor-pointer"
            >
              Prioritise
            </button>
            <span className="text-slate-300">•</span>
            <button 
              onClick={() => setCurrentView('prototype')} 
              className="text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200 cursor-pointer"
            >
              Solve (Current)
            </button>
            <span className="text-slate-300">•</span>
            <button 
              onClick={() => setCurrentView('story')} 
              className="text-slate-600 hover:text-slate-900 transition cursor-pointer"
            >
              Scale
            </button>
          </div>

          <div className="text-[10px] text-slate-400 text-right">
            ² Team financial model (Slide 09): ~€200 avoidable cost per failed delivery minus ~€50 recovery; before technology costs. Source: Team operating model · Simulated UI
          </div>
        </div>
      </div>
    </div>
  );
}
