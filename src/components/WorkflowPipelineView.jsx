import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Database, 
  Eye, 
  Cpu, 
  ShieldCheck, 
  Monitor, 
  Truck, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Sparkles,
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export function WorkflowPipelineView({ setCurrentView }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      time: "Mon 14:00",
      title: "1. Shortfall Detection (ERP Read-Only)",
      system: "Existing ERP & Rules Engine",
      icon: Eye,
      status: "Triggered 16½ hrs before delivery",
      desc: "Deterministic rule detects Order #2004 (100 plasterboard sheets) has only 80 available at Stockholm Hub due to prior reservation. Supplier replenishment arrives Thursday (too late).",
      action: "Shortfall flagged automatically in central memory.",
      badge: "Detection Phase"
    },
    {
      time: "Mon 14:01",
      title: "2. AI Synthesis & Site Note Parsing",
      system: "AI Orchestrator Layer",
      icon: Cpu,
      status: "AI drafts 3 recovery options",
      desc: "AI parses unscripted contractor site note: 'Crane slot booked for 07:00 — option B needs a new slot'. Generates Option A (Transfer 20 from Branch B for €50), Option B (Split order for €120), Option C (Wait).",
      action: "Drafts recovery packages A, B, and C.",
      badge: "Drafting Phase"
    },
    {
      time: "Mon 14:02",
      title: "3. Deterministic Validation Rules",
      system: "Feasibility Rules Engine",
      icon: ShieldCheck,
      status: "Mathematical guardrails applied",
      desc: "Rules check Branch B inventory (20 available after reservations), shuttle departure cut-off (18:00), and arrival time (Mon 21:00, well before Tue 07:00 crane appointment).",
      action: "Option A certified: Feasible ✓. Option B flagged: Crane conflict ⚠.",
      badge: "Guardrail Phase"
    },
    {
      time: "Mon 14:20",
      title: "4. Human Coordinator Approval (Web Portal)",
      system: "Web Portal (Coordinator Terminal)",
      icon: Monitor,
      status: "Decision logged in 20 minutes",
      desc: "Fulfilment coordinator reviews the 4-step screen on the Web Portal. Confirms Option A (€50). The human decision is audited and logged to ERP.",
      action: "Action ticket #SH-8842 dispatched to warehouse & transport.",
      badge: "Governance Phase"
    },
    {
      time: "Mon 15:00",
      title: "5. Mobile Warehouse Staging (Branch B)",
      system: "Warehouse Mobile PDA",
      icon: Layers,
      status: "Stock reserved & staged",
      desc: "Branch B warehouse staff receive priority pick task on PDA. 20 sheets picked from aisle C-14 and staged at shuttle bay 04 before the 18:00 cut-off.",
      action: "Pallet QR barcode scanned and locked.",
      badge: "Execution Phase"
    },
    {
      time: "Mon 15:15",
      title: "6. Proactive Contractor SMS Sent",
      system: "Contractor Proffsservice Mobile / SMS",
      icon: Smartphone,
      status: "Sent only after stock is secured",
      desc: "Swedish SMS dispatched to Byggmästare Nilsson AB confirming full 100-sheet delivery on Tuesday at 07:00. Contractor site crew schedule preserved.",
      action: "Customer informed 16 hours ahead of jobsite arrival.",
      badge: "Customer Reassurance"
    },
    {
      time: "Mon 17:30 – 21:00",
      title: "7. Inter-Branch Shuttle Transport",
      system: "Driver Shuttle Mobile App",
      icon: Truck,
      status: "12 km shuttle transit",
      desc: "Shuttle Van #S-14 departs Branch B at 17:30. Driver app provides GPS route. 20 sheets arrive at Central Stockholm Depot at 21:00 and are consolidated for morning wave.",
      action: "All 100 sheets now physically staged at central hub.",
      badge: "Physical Logistics"
    },
    {
      time: "Tue 07:00",
      title: "8. On-Time Jobsite Crane Delivery",
      system: "Final Mile Truck & Crane Offload",
      icon: CheckCircle2,
      status: "Delivered in full & on time",
      desc: "Truck arrives at construction site at 06:55. 100 sheets hoisted directly by crane at 07:00 sharp. Drywall crew begins immediately without delay.",
      action: "Promise kept. ~€150 net saving achieved vs €200 failure penalty.",
      badge: "Value Realized"
    }
  ];

  // Auto-play simulation timer
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-tamca-navy text-tamca-white rounded-2xl p-6 sm:p-8 shadow-xl border border-tamca-navy">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-tamca-amber/20 text-tamca-amber px-3 py-1 rounded-full text-xs font-semibold border border-tamca-amber/40">
              <span>End-to-End System Workflow</span>
              <span>•</span>
              <span>Live Process Simulation</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-tamca-white tracking-tight">
              Interactive Workflow & System Architecture
            </h1>
            <p className="text-tamca-lightBlue text-xs sm:text-sm leading-relaxed">
              Explore how data flows between legacy ERP systems, AI decision drafting, deterministic guardrails, web coordinator portal, frontline mobile apps, and jobsite delivery.
            </p>
          </div>

          {/* Interactive Player Controls */}
          <div className="flex items-center gap-2 bg-tamca-darkNavy p-2 rounded-xl border border-tamca-slateGray/40">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 bg-tamca-amber hover:bg-amber-400 text-tamca-darkNavy rounded-lg text-xs font-bold transition cursor-pointer shadow-md"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause Simulation' : 'Auto-Play Simulation'}</span>
            </button>
            <button
              onClick={() => {
                setIsPlaying(false);
                setActiveStep(0);
              }}
              title="Reset workflow to Step 1"
              className="p-2 bg-tamca-navy hover:bg-tamca-darkNavy text-tamca-white rounded-lg transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 pt-6 border-t border-tamca-slateGray/40">
          <div className="flex justify-between items-center text-xs text-tamca-lightBlue mb-2">
            <span>Workflow Progression: Step {activeStep + 1} of {steps.length}</span>
            <span className="font-mono text-tamca-amber font-bold">{steps[activeStep].time}</span>
          </div>
          <div className="w-full bg-tamca-darkNavy h-2.5 rounded-full overflow-hidden border border-tamca-slateGray/40">
            <div 
              className="bg-tamca-amber h-full transition-all duration-500 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Process Pipeline: Step Selector Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {steps.map((st, idx) => {
          const isCurrent = activeStep === idx;
          const isPassed = activeStep > idx;
          const IconComp = st.icon;
          return (
            <button
              key={idx}
              onClick={() => {
                setIsPlaying(false);
                setActiveStep(idx);
              }}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isCurrent
                  ? 'bg-tamca-navy text-tamca-white border-tamca-amber ring-2 ring-tamca-amber shadow-lg'
                  : isPassed
                  ? 'bg-tamca-white text-tamca-darkNavy border-emerald-400'
                  : 'bg-tamca-white text-tamca-slateGray border-tamca-borderGray hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-mono font-bold ${
                  isCurrent ? 'text-tamca-amber' : isPassed ? 'text-emerald-700' : 'text-tamca-slateGray'
                }`}>
                  0{idx + 1}
                </span>
                <IconComp className={`w-4 h-4 ${
                  isCurrent ? 'text-tamca-amber' : isPassed ? 'text-emerald-600' : 'text-tamca-slateGray'
                }`} />
              </div>
              <div className="font-mono text-[10px] truncate mb-0.5">{st.time}</div>
              <div className="text-[11px] font-bold line-clamp-2 leading-tight">
                {st.title.split('. ')[1]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Deep-Dive Card */}
      <div className="bg-tamca-white rounded-2xl border border-tamca-borderGray p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-tamca-borderGray gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-tamca-navy text-tamca-amber flex items-center justify-center flex-shrink-0 shadow-md">
              {React.createElement(steps[activeStep].icon, { className: "w-6 h-6" })}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-tamca-iceBlue text-tamca-darkNavy font-mono font-bold text-xs px-2.5 py-0.5 rounded border border-tamca-borderGray">
                  {steps[activeStep].time}
                </span>
                <span className="text-xs font-bold text-tamca-amber uppercase tracking-wider">
                  {steps[activeStep].badge}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-tamca-darkNavy">
                {steps[activeStep].title}
              </h2>
              <p className="text-xs text-tamca-slateGray mt-1 font-medium">
                Active Component: <span className="font-bold text-tamca-darkNavy">{steps[activeStep].system}</span>
              </p>
            </div>
          </div>

          <div className="bg-tamca-iceBlue p-3 rounded-xl border border-tamca-borderGray text-right self-start md:self-auto">
            <span className="text-[10px] uppercase font-bold text-tamca-slateGray block">Phase Status</span>
            <span className="text-xs font-bold text-emerald-700">{steps[activeStep].status}</span>
          </div>
        </div>

        {/* Narrative & Action Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-8 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-tamca-slateGray">
              Detailed Workflow Description
            </h3>
            <p className="text-sm text-tamca-darkNavy leading-relaxed">
              {steps[activeStep].desc}
            </p>
            <div className="bg-tamca-iceBlue p-4 rounded-xl border border-tamca-borderGray">
              <span className="text-[11px] font-bold uppercase text-tamca-darkNavy block mb-1">
                Direct System Output & Data Packet:
              </span>
              <p className="text-xs text-tamca-slateGray font-mono">
                {steps[activeStep].action}
              </p>
            </div>
          </div>

          <div className="md:col-span-4 bg-tamca-darkNavy text-tamca-white p-5 rounded-2xl shadow-lg space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-tamca-amber block">
              Architectural Guardrail
            </span>
            <div className="text-xs text-tamca-lightBlue space-y-2">
              <p>
                <strong>No Core Re-platforming:</strong> Existing ERP / WMS remains untouched. AI only reads data; humans trigger downstream writes.
              </p>
              <p>
                <strong>Auditability:</strong> Every decision is cryptographically signed and stored in the operational audit log.
              </p>
            </div>

            <button
              onClick={() => setCurrentView('prototype')}
              className="w-full py-2 bg-tamca-amber hover:bg-amber-400 text-tamca-darkNavy font-bold rounded-xl text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Inspect Coordinator Screen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Next / Previous Step Buttons */}
        <div className="pt-4 border-t border-tamca-borderGray flex items-center justify-between text-xs">
          <button
            disabled={activeStep === 0}
            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
            className="px-3 py-1.5 rounded-lg border border-tamca-borderGray text-tamca-slateGray hover:text-tamca-darkNavy disabled:opacity-40 transition cursor-pointer"
          >
            ← Previous Step
          </button>
          <span className="text-tamca-slateGray font-mono text-[11px]">
            {activeStep + 1} / {steps.length}
          </span>
          <button
            disabled={activeStep === steps.length - 1}
            onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
            className="px-3 py-1.5 rounded-lg bg-tamca-navy text-tamca-white hover:bg-tamca-darkNavy disabled:opacity-40 transition cursor-pointer"
          >
            Next Step →
          </button>
        </div>
      </div>
    </div>
  );
}
