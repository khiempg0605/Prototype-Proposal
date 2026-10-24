import React, { useState } from 'react';
import { 
  proposalMeta, 
  proposalPillars 
} from '../data/proposalData';
import { 
  TrendingUp, 
  Clock, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  AlertOctagon, 
  Cpu, 
  ShieldAlert, 
  HelpCircle,
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export function ProposalStoryView({ setCurrentView }) {
  const [activePillarId, setActivePillarId] = useState('summary');

  const activePillar = proposalPillars.find(p => p.id === activePillarId) || proposalPillars[0];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Hero Banner: Strategic Foundation */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 text-amber-400 px-2.5 py-1 rounded-full text-xs font-semibold border border-amber-400/20">
              <span>TAMCA Strategic Deck Reasoning</span>
              <span>•</span>
              <span>Netcompany Challenge 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              AI Delivery & Fulfilment Orchestrator
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Company A sells building materials across Denmark, Norway, and Sweden. Each market built isolated systems, causing slow warehouse and transport coordination. For B2B contractors, a failed delivery stops construction sites. Here is our 5-stage deductive pyramid.
            </p>
          </div>

          <button
            onClick={() => setCurrentView('prototype')}
            className="self-start lg:self-center bg-amber-400 hover:bg-amber-300 text-slate-950 px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-lg shadow-amber-400/20 flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Launch Slide 06 Prototype</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* The 3 Anchor Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800">
          {proposalMeta.threeNumbers.map((num, idx) => (
            <div key={idx} className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/80">
              <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 block mb-1">
                {num.badge}
              </span>
              <div className="text-2xl sm:text-3xl font-black font-mono text-white">
                {num.value}
              </div>
              <h3 className="text-xs font-bold text-slate-200 mt-1">{num.label}</h3>
              <p className="text-xs text-slate-400 mt-1 leading-snug">{num.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5-Pillar Tabs Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {proposalPillars.map((pillar) => {
          const isActive = activePillarId === pillar.id;
          return (
            <button
              key={pillar.id}
              onClick={() => setActivePillarId(pillar.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-700'
              }`}>
                {pillar.slideNumber.split('–')[0]}
              </span>
              <span>{pillar.title}</span>
            </button>
          );
        })}
      </div>

      {/* Pillar Detail Exhibit Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-slate-100 text-slate-800 text-[11px] font-mono font-bold px-2 py-0.5 rounded">
                SLIDE {activePillar.slideNumber}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {activePillar.tagline}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {activePillar.subtitle}
            </h2>
          </div>

          <div className="bg-amber-50 border border-amber-200 px-4 py-2.5 rounded-xl text-right self-start md:self-auto flex-shrink-0">
            <span className="text-[10px] uppercase font-bold text-amber-800 block">Hero Metric</span>
            <span className="text-2xl font-black font-mono text-amber-600">{activePillar.heroStat}</span>
            <span className="text-[10px] text-amber-900 block font-medium">{activePillar.heroStatLabel}</span>
          </div>
        </div>

        {/* Narrative Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Core Evidence & Logic
            </h3>
            <ul className="space-y-3">
              {activePillar.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contextual Visual / Exhibit per Pillar */}
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-3">
            <h3 className="font-bold text-slate-900 uppercase tracking-wide text-xs">
              Strategic Takeaway for Judges
            </h3>
            <blockquote className="border-l-4 border-amber-400 pl-3 py-1 text-slate-800 font-medium italic text-sm">
              "{activePillar.takeaway}"
            </blockquote>

            {activePillar.id === 'summary' && (
              <div className="pt-2 text-xs text-slate-600 space-y-2">
                <p>
                  <strong>Decision Requested:</strong> Approve a 4-week Proof of Value (~€80k) in Sweden to test replay data and prove addressable failure reduction before approving full build.
                </p>
                <div className="bg-white p-2.5 rounded border border-slate-200 font-mono text-[11px] text-slate-700">
                  Total ROI target: €680k investment → ~17 month payback
                </div>
              </div>
            )}

            {activePillar.id === 'identify' && (
              <div className="pt-2 text-xs space-y-2">
                <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <div className="font-bold text-slate-900">Denmark</div>
                    <div className="text-slate-500">Manual processes</div>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-200">
                    <div className="font-bold text-slate-900">Norway</div>
                    <div className="text-slate-500">Store operations</div>
                  </div>
                  <div className="bg-amber-100/60 p-2 rounded border border-amber-300">
                    <div className="font-bold text-amber-900">Sweden</div>
                    <div className="text-amber-800 font-semibold">Delivery & fulfilment (#1)</div>
                  </div>
                </div>
              </div>
            )}

            {activePillar.id === 'prioritise' && (
              <div className="pt-2 text-xs space-y-2">
                <p className="leading-relaxed">
                  <strong>Why Material Shortfall First?</strong> Unlike route delays or truck breakdowns, material shortfalls have high predictability in warehouse logs, clear recovery actions (shuttle, split, substitute), and direct €150 net margin recovery.
                </p>
              </div>
            )}

            {activePillar.id === 'solve' && (
              <div className="pt-2 text-xs space-y-2">
                <button
                  onClick={() => setCurrentView('prototype')}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Experience Interactive Orchestrator</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {activePillar.id === 'scale' && (
              <div className="pt-2 text-xs space-y-2">
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="flex justify-between bg-white p-1.5 rounded border border-slate-200">
                    <span>Conservative Scenario:</span>
                    <span className="text-red-600 font-bold">−€247k (Stop at Gate 1)</span>
                  </div>
                  <div className="flex justify-between bg-emerald-50 p-1.5 rounded border border-emerald-200">
                    <span>Base Case (30% recovery):</span>
                    <span className="text-emerald-700 font-bold">+€248k / yr net</span>
                  </div>
                  <div className="flex justify-between bg-white p-1.5 rounded border border-slate-200">
                    <span>Aggressive Rollout (1→3):</span>
                    <span className="text-slate-900 font-bold">+€1.37M / yr net</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Deductive Ladder Footer */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <span>TAMCA Deductive Storyline: Summary → Identify → Prioritise → Solve → Scale</span>
          <span className="text-slate-400 font-mono text-[11px]">
            Next Step: Gate 1 approval (€80k PoV)
          </span>
        </div>
      </div>
    </div>
  );
}
