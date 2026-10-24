import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  FileCheck, 
  ArrowRight, 
  Database, 
  Eye, 
  Users, 
  RotateCcw,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { architectureSafeguards } from '../data/proposalData';

export function ArchitectureView({ setCurrentView }) {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Slide 07 Header */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-slate-100 pb-5 gap-4">
          <div className="flex items-start gap-4">
            <div className="bg-slate-950 text-white font-mono font-black text-2xl sm:text-3xl px-3 py-1 rounded-md shadow-sm">
              07
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Technical Architecture & Feasibility
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium max-w-3xl">
                Orchestrator sits on existing systems: deterministic rules verify, AI drafts recovery options, humans make the decision
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-900 self-start md:self-auto">
            Motif: AI reads data, never acts alone
          </div>
        </div>

        {/* The 5-Stage Data Pipeline Diagram (Horizontal Flow) */}
        <div className="my-8">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            End-to-End Orchestration Flow & Governance Boundary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-stretch">
            
            {/* Step 1: Existing Systems */}
            <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-2">
                  <span>STEP 1</span>
                  <Database className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="font-bold text-sm text-slate-100 mb-1">Existing Systems</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Legacy ERP, WMS, and TMS across Swedish stores and regional hubs.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <Lock className="w-3 h-3" />
                <span>Read-Only API Sync</span>
              </div>
            </div>

            {/* Step 2: Rules Detect */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-amber-600 mb-2">
                  <span>STEP 2</span>
                  <Eye className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 mb-1">Deterministic Rules</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Continuous scan flags shortfalls against delivery commitments 16+ hrs early.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                Guaranteed detection
              </div>
            </div>

            {/* Step 3: AI Drafts */}
            <div className="bg-amber-500 text-slate-950 p-4 rounded-xl border border-amber-600 flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center justify-between text-xs font-black tracking-wider text-slate-950 mb-2">
                  <span>STEP 3</span>
                  <Cpu className="w-4 h-4 text-slate-950" />
                </div>
                <h3 className="font-black text-sm text-slate-950 mb-1">AI Orchestrator</h3>
                <p className="text-xs text-slate-900 font-medium leading-relaxed">
                  Parses unscripted site notes (crane slots, access) & synthesizes recovery options A, B, C.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-amber-600/40 text-[11px] font-mono font-bold text-slate-950">
                Option drafting
              </div>
            </div>

            {/* Step 4: Rules Validate */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-emerald-600 mb-2">
                  <span>STEP 4</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 mb-1">Rules Validation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Checks physical cut-offs, branch availability, transport feasibility, and budget limits.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-200 text-[11px] font-mono text-emerald-700 font-semibold">
                Mathematical safety
              </div>
            </div>

            {/* Step 5: Human Approves */}
            <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-amber-400 mb-2">
                  <span>STEP 5</span>
                  <Users className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="font-bold text-sm text-slate-100 mb-1">Human Decision</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fulfilment coordinator confirms option; staff execute transfer in existing ERP.
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-800 text-[11px] font-mono text-amber-400 font-semibold flex items-center gap-1">
                <FileText className="w-3 h-3" />
                <span>Audited & Logged</span>
              </div>
            </div>

          </div>

          {/* Feedback Return Arrow Note */}
          <div className="mt-4 bg-slate-100 rounded-xl p-3 text-center border border-slate-200 text-xs text-slate-700 flex items-center justify-center gap-2">
            <RotateCcw className="w-4 h-4 text-amber-600" />
            <span>
              <strong>Execution Loop:</strong> People execute in existing systems — AI reads data, never writes it. Legacy IT remains untouched.
            </span>
          </div>
        </div>

        {/* 4 Enterprise Safeguards Grid */}
        <div className="pt-6 border-t border-slate-100">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            4 Enterprise Safeguards Protecting Company A
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {architectureSafeguards.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Precedent Callout (Cemex Go) */}
        <div className="mt-6 bg-slate-900 text-white rounded-xl p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">
              Industry Precedent Benchmark
            </span>
            <h3 className="text-sm sm:text-base font-bold text-slate-100">
              Cemex Go: Building Materials Digital Fulfillment Overlay
            </h3>
            <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
              Cemex successfully implemented a global multi-country delivery coordination layer over existing legacy ERPs without replacement. Used as an architectural precedent, not as a direct financial benchmark.
            </p>
          </div>

          <button
            onClick={() => setCurrentView('prototype')}
            className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg transition cursor-pointer flex-shrink-0"
          >
            See in Action (Slide 06)
          </button>
        </div>
      </div>
    </div>
  );
}
