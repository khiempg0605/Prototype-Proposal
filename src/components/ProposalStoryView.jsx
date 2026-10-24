import React, { useState } from 'react';
import { 
  proposalMeta, 
  proposalPillars 
} from '../data/proposalData';
import { 
  CheckCircle, 
  ArrowRight, 
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
      <div className="bg-tamca-navy text-tamca-white rounded-3xl p-6 sm:p-8 shadow-xl border border-tamca-navy">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-tamca-amber/20 text-tamca-amber px-3 py-1 rounded-full text-xs font-semibold border border-tamca-amber/40">
              <span>TAMCA Strategic Deck Reasoning</span>
              <span>•</span>
              <span>Netcompany Challenge 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-tamca-white tracking-tight">
              AI Delivery & Fulfilment Orchestrator
            </h1>
            <p className="text-tamca-lightBlue text-xs sm:text-sm leading-relaxed">
              Company A sells building materials across Denmark, Norway, and Sweden. Each market built isolated systems, causing slow warehouse and transport coordination. For B2B contractors, a failed delivery stops construction sites. Here is our 5-stage deductive pyramid.
            </p>
          </div>

          <button
            onClick={() => setCurrentView('prototype')}
            className="self-start lg:self-center bg-tamca-amber hover:bg-amber-400 text-tamca-darkNavy px-5 py-2.5 rounded-xl text-xs font-extrabold transition shadow-lg flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Launch Slide 06 Prototype</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* The 3 Anchor Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-tamca-slateGray/40">
          {proposalMeta.threeNumbers.map((num, idx) => (
            <div key={idx} className="bg-tamca-darkNavy/80 p-4 rounded-xl border border-tamca-slateGray/30 shadow-inner">
              <span className="text-[10px] uppercase font-mono tracking-wider text-tamca-amber block mb-1 font-bold">
                {num.badge}
              </span>
              <div className="text-2xl sm:text-3xl font-black font-mono text-tamca-white">
                {num.value}
              </div>
              <h3 className="text-xs font-bold text-tamca-iceBlue mt-1">{num.label}</h3>
              <p className="text-xs text-tamca-lightBlue mt-1 leading-snug">{num.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5-Pillar Tabs Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-tamca-borderGray">
        {proposalPillars.map((pillar) => {
          const isActive = activePillarId === pillar.id;
          return (
            <button
              key={pillar.id}
              onClick={() => setActivePillarId(pillar.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-tamca-navy text-tamca-white shadow-md'
                  : 'bg-tamca-white text-tamca-slateGray hover:text-tamca-darkNavy hover:bg-tamca-iceBlue border border-tamca-borderGray'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${
                isActive ? 'bg-tamca-amber text-tamca-darkNavy font-black' : 'bg-tamca-iceBlue text-tamca-darkNavy'
              }`}>
                {pillar.slideNumber.split('–')[0]}
              </span>
              <span>{pillar.title}</span>
            </button>
          );
        })}
      </div>

      {/* Pillar Detail Exhibit Card */}
      <div className="bg-tamca-white rounded-2xl border border-tamca-borderGray shadow-lg p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-tamca-borderGray gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-tamca-iceBlue text-tamca-navy text-[11px] font-mono font-bold px-2 py-0.5 rounded border border-tamca-borderGray">
                SLIDE {activePillar.slideNumber}
              </span>
              <span className="text-xs text-tamca-slateGray font-medium">
                {activePillar.tagline}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-tamca-darkNavy">
              {activePillar.subtitle}
            </h2>
          </div>

          <div className="bg-tamca-iceBlue border border-tamca-borderGray px-4 py-2.5 rounded-xl text-right self-start md:self-auto flex-shrink-0">
            <span className="text-[10px] uppercase font-bold text-tamca-slateGray block">Hero Metric</span>
            <span className="text-2xl font-black font-mono text-tamca-amber">{activePillar.heroStat}</span>
            <span className="text-[10px] text-tamca-darkNavy block font-medium">{activePillar.heroStatLabel}</span>
          </div>
        </div>

        {/* Narrative Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-tamca-slateGray">
              Core Evidence & Logic
            </h3>
            <ul className="space-y-3">
              {activePillar.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-tamca-darkNavy leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contextual Visual / Exhibit per Pillar */}
          <div className="bg-tamca-iceBlue p-5 rounded-xl border border-tamca-borderGray text-xs text-tamca-darkNavy space-y-3">
            <h3 className="font-bold text-tamca-darkNavy uppercase tracking-wide text-xs">
              Strategic Takeaway for Judges
            </h3>
            <blockquote className="border-l-4 border-tamca-amber pl-3 py-1 text-tamca-darkNavy font-medium italic text-sm">
              "{activePillar.takeaway}"
            </blockquote>

            {activePillar.id === 'summary' && (
              <div className="pt-2 text-xs text-tamca-slateGray space-y-2">
                <p>
                  <strong className="text-tamca-darkNavy">Decision Requested:</strong> Approve a 4-week Proof of Value (<span className="text-tamca-amber font-bold">~€80k</span>) in Sweden to test historical replay data before approving full build.
                </p>
                <div className="bg-tamca-white p-2.5 rounded border border-tamca-borderGray font-mono text-[11px] text-tamca-darkNavy">
                  Total ROI target: €680k investment → ~17 month payback
                </div>
              </div>
            )}

            {activePillar.id === 'identify' && (
              <div className="pt-2 text-xs space-y-2">
                <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                  <div className="bg-tamca-white p-2 rounded border border-tamca-borderGray">
                    <div className="font-bold text-tamca-darkNavy">Denmark</div>
                    <div className="text-tamca-slateGray">Manual processes</div>
                  </div>
                  <div className="bg-tamca-white p-2 rounded border border-tamca-borderGray">
                    <div className="font-bold text-tamca-darkNavy">Norway</div>
                    <div className="text-tamca-slateGray">Store operations</div>
                  </div>
                  <div className="bg-tamca-navy text-tamca-white p-2 rounded border border-tamca-amber">
                    <div className="font-bold text-tamca-white">Sweden</div>
                    <div className="text-tamca-amber font-semibold">Delivery #1</div>
                  </div>
                </div>
              </div>
            )}

            {activePillar.id === 'prioritise' && (
              <div className="pt-2 text-xs space-y-2 text-tamca-slateGray">
                <p className="leading-relaxed">
                  <strong className="text-tamca-darkNavy">Why Material Shortfall First?</strong> Unlike route delays or truck breakdowns, material shortfalls have high predictability in warehouse logs, clear recovery actions (shuttle, split, substitute), and direct €150 net margin recovery.
                </p>
              </div>
            )}

            {activePillar.id === 'solve' && (
              <div className="pt-2 text-xs space-y-2">
                <button
                  onClick={() => setCurrentView('prototype')}
                  className="w-full py-2 bg-tamca-navy hover:bg-tamca-darkNavy text-tamca-white font-bold rounded-lg text-xs transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Experience Interactive Orchestrator</span>
                  <ExternalLink className="w-3.5 h-3.5 text-tamca-amber" />
                </button>
              </div>
            )}

            {activePillar.id === 'scale' && (
              <div className="pt-2 text-xs space-y-2">
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="flex justify-between bg-tamca-white p-1.5 rounded border border-tamca-borderGray">
                    <span>Conservative Scenario:</span>
                    <span className="text-red-600 font-bold">−€247k (Stop at Gate 1)</span>
                  </div>
                  <div className="flex justify-between bg-tamca-white p-1.5 rounded border border-emerald-300">
                    <span>Base Case (30% recovery):</span>
                    <span className="text-emerald-700 font-bold">+€248k / yr net</span>
                  </div>
                  <div className="flex justify-between bg-tamca-white p-1.5 rounded border border-tamca-borderGray">
                    <span>Aggressive Rollout (1→3):</span>
                    <span className="text-tamca-darkNavy font-bold">+€1.37M / yr net</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Deductive Ladder Footer */}
        <div className="pt-4 border-t border-tamca-borderGray flex flex-wrap items-center justify-between text-xs text-tamca-slateGray gap-2">
          <span>TAMCA Deductive Storyline: Summary → Identify → Prioritise → Solve → Scale</span>
          <span className="text-tamca-slateGray font-mono text-[11px]">
            Next Step: Gate 1 approval (€80k PoV)
          </span>
        </div>
      </div>
    </div>
  );
}
