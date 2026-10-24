import React from 'react';
import { 
  Monitor, 
  Smartphone, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Truck, 
  Cpu, 
  Sparkles,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { proposalMeta } from '../data/proposalData';

export function OverviewPortalView({ setCurrentView, order }) {
  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="bg-tamca-navy text-tamca-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-tamca-navy relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-tamca-amber/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-tamca-amber/20 text-tamca-amber px-3 py-1 rounded-full text-xs font-bold border border-tamca-amber/40">
            <span>TAMCA · Netcompany Challenge 2026</span>
            <span>•</span>
            <span>Proof of Value: €80k (4 Weeks)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-tamca-white tracking-tight leading-tight">
            AI Delivery & Fulfilment Orchestrator
          </h1>

          <p className="text-tamca-lightBlue text-sm sm:text-base leading-relaxed font-normal">
            A unified digital operations ecosystem for Company A: Early detection of B2B delivery shortfalls, automated recovery option drafting, and frontline execution across Web, Driver Mobile, and Customer Apps.
          </p>

          <p className="text-xs sm:text-sm text-tamca-amber font-mono font-bold tracking-wide">
            "From alert to approved fix on one screen — AI drafts, people decide."
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => setCurrentView('prototype')}
              className="px-5 py-3 bg-tamca-amber hover:bg-amber-400 text-tamca-darkNavy font-extrabold text-xs sm:text-sm rounded-xl transition shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Monitor className="w-4 h-4" />
              <span>Launch Web Orchestrator</span>
            </button>

            <button
              onClick={() => setCurrentView('mobile')}
              className="px-5 py-3 bg-tamca-darkNavy hover:bg-slate-900 text-tamca-white border border-tamca-slateGray/40 font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-2 cursor-pointer"
            >
              <Smartphone className="w-4 h-4 text-tamca-amber" />
              <span>Explore Mobile Apps</span>
            </button>

            <button
              onClick={() => setCurrentView('workflow')}
              className="px-4 py-3 bg-tamca-navy hover:bg-tamca-darkNavy text-tamca-lightBlue border border-tamca-lightBlue/30 font-semibold text-xs sm:text-sm rounded-xl transition flex items-center gap-2 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-tamca-amber" />
              <span>Simulate End-to-End Workflow</span>
            </button>
          </div>
        </div>

        {/* 3 Anchor Numbers Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 pt-8 border-t border-tamca-slateGray/40">
          {proposalMeta.threeNumbers.map((item, idx) => (
            <div key={idx} className="bg-tamca-darkNavy/80 p-4 rounded-2xl border border-tamca-slateGray/30 shadow-inner">
              <span className="text-[10px] font-mono uppercase tracking-wider text-tamca-amber block mb-1 font-bold">
                {item.badge}
              </span>
              <div className="text-2xl sm:text-3xl font-black font-mono text-tamca-white">
                {item.value}
              </div>
              <h3 className="text-xs font-bold text-tamca-iceBlue mt-1">{item.label}</h3>
              <p className="text-[11px] text-tamca-lightBlue mt-1 leading-snug">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Ecosystem Grid (Web + Mobile + Workflow) */}
      <div className="space-y-4">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-tamca-slateGray">
            Integrated Product Suite
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-tamca-darkNavy tracking-tight">
            Coordinated Prototypes Across Frontlines
          </h2>
          <p className="text-xs sm:text-sm text-tamca-slateGray">
            Explore the three interconnected interactive prototype modules developed for the challenge:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          {/* Card 1: Web Coordinator Terminal */}
          <div className="bg-tamca-white rounded-2xl p-6 border border-tamca-borderGray shadow-lg hover:border-tamca-navy transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-tamca-navy text-tamca-amber flex items-center justify-center shadow-md">
                <Monitor className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono bg-tamca-iceBlue text-tamca-navy px-2 py-0.5 rounded font-bold uppercase border border-tamca-borderGray">
                Slide 06 Core Exhibit
              </span>
              <h3 className="text-lg font-bold text-tamca-darkNavy group-hover:text-tamca-navy transition">
                Web Coordinator Portal
              </h3>
              <p className="text-xs text-tamca-slateGray leading-relaxed">
                Central control tower for fulfilment coordinators. Inspects Order #2004 shortfall, parses AI crane slot notes, evaluates 3 recovery options, and approves stock transfers with 1 click.
              </p>
              <ul className="text-xs text-tamca-slateGray space-y-1 font-medium">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>16½ hours earlier detection</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Audited human approval log</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setCurrentView('prototype')}
              className="mt-6 w-full py-2.5 bg-tamca-navy hover:bg-tamca-darkNavy text-tamca-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Open Web Portal Prototype</span>
              <ArrowRight className="w-3.5 h-3.5 text-tamca-amber" />
            </button>
          </div>

          {/* Card 2: Mobile Handheld & Customer Apps */}
          <div className="bg-tamca-white rounded-2xl p-6 border border-tamca-borderGray shadow-lg hover:border-tamca-navy transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-tamca-amber text-tamca-darkNavy flex items-center justify-center shadow-md">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono bg-tamca-iceBlue text-tamca-navy px-2 py-0.5 rounded font-bold uppercase border border-tamca-borderGray">
                Frontline Execution
              </span>
              <h3 className="text-lg font-bold text-tamca-darkNavy group-hover:text-tamca-navy transition">
                Mobile Apps & SMS
              </h3>
              <p className="text-xs text-tamca-slateGray leading-relaxed">
                Interactive mobile smartphone simulator supporting 3 operational roles: Driver Shuttle App with GPS route, Warehouse PDA with QR barcode picking, and Contractor Proffsservice SMS tracking.
              </p>
              <ul className="text-xs text-tamca-slateGray space-y-1 font-medium">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Bilingual SMS (Swedish + English)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Barcode scan & digital POD</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setCurrentView('mobile')}
              className="mt-6 w-full py-2.5 bg-tamca-navy hover:bg-tamca-darkNavy text-tamca-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Explore Mobile Prototypes</span>
              <ArrowRight className="w-3.5 h-3.5 text-tamca-amber" />
            </button>
          </div>

          {/* Card 3: Interactive System Workflow */}
          <div className="bg-tamca-white rounded-2xl p-6 border border-tamca-borderGray shadow-lg hover:border-tamca-navy transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-tamca-darkNavy text-tamca-lightBlue flex items-center justify-center shadow-md">
                <Layers className="w-6 h-6 text-tamca-amber" />
              </div>
              <span className="text-[10px] font-mono bg-tamca-iceBlue text-tamca-navy px-2 py-0.5 rounded font-bold uppercase border border-tamca-borderGray">
                End-to-End Pipeline
              </span>
              <h3 className="text-lg font-bold text-tamca-darkNavy group-hover:text-tamca-navy transition">
                System Workflow Simulation
              </h3>
              <p className="text-xs text-tamca-slateGray leading-relaxed">
                Step-by-step interactive simulator illustrating real-time event flow between read-only ERP, rules engines, AI option generation, human decision, transport dispatch, and crane offload.
              </p>
              <ul className="text-xs text-tamca-slateGray space-y-1 font-medium">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>8 timestamped lifecycle phases</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Interactive auto-play engine</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => setCurrentView('workflow')}
              className="mt-6 w-full py-2.5 bg-tamca-navy hover:bg-tamca-darkNavy text-tamca-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Simulate System Pipeline</span>
              <ArrowRight className="w-3.5 h-3.5 text-tamca-amber" />
            </button>
          </div>

        </div>
      </div>

      {/* Nordic Context Showcase: Sweden (#1), Denmark, Norway */}
      <div className="bg-tamca-iceBlue rounded-3xl p-6 sm:p-8 border border-tamca-borderGray shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-tamca-borderGray gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-tamca-slateGray">
              Strategic Market Prioritization
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-tamca-darkNavy">
              1 Business · 3 Nordic Markets · 1 Capability
            </h2>
            <p className="text-xs text-tamca-slateGray mt-1">
              Why Sweden's delivery bottleneck is the single highest-value starting point:
            </p>
          </div>
          <div className="bg-tamca-white px-4 py-2 rounded-xl border border-tamca-borderGray text-right">
            <span className="text-[10px] uppercase font-bold text-tamca-slateGray block">Initial PoV Scope</span>
            <span className="text-base font-black text-tamca-navy">Sweden Cluster (4 Weeks)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {/* Denmark */}
          <div className="bg-tamca-white p-4 rounded-xl border border-tamca-borderGray">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-tamca-darkNavy">Denmark</span>
              <span className="w-3 h-3 rounded-full bg-tamca-lightBlue"></span>
            </div>
            <p className="text-xs text-tamca-slateGray leading-relaxed">
              <strong>Case Fact:</strong> Operational priority is manual-process automation. Shared orchestrator logic can be adapted after Swedish validation.
            </p>
          </div>

          {/* Norway */}
          <div className="bg-tamca-white p-4 rounded-xl border border-tamca-borderGray">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-tamca-darkNavy">Norway</span>
              <span className="w-3 h-3 rounded-full bg-tamca-lightBlue"></span>
            </div>
            <p className="text-xs text-tamca-slateGray leading-relaxed">
              <strong>Case Fact:</strong> Operational priority is store operations and merchandising. Reuses shared integration core at Gate 4.
            </p>
          </div>

          {/* Sweden (Priority #1 Highlighted) */}
          <div className="bg-tamca-navy text-tamca-white p-4 rounded-xl border-2 border-tamca-amber shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-tamca-white">Sweden (#1 Priority)</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-tamca-amber text-tamca-darkNavy">
                START HERE
              </span>
            </div>
            <p className="text-xs text-tamca-lightBlue leading-relaxed">
              <strong>Case Fact:</strong> Delivery & fulfilment is the #1 pain point. ~85% B2B revenue, €43.5/h construction labor rate, ~€200 avoidable failure cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
