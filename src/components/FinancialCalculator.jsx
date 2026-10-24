import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Euro, 
  Clock, 
  ShieldCheck, 
  AlertCircle, 
  ArrowRight,
  Layers
} from 'lucide-react';

export function FinancialCalculator({ setCurrentView }) {
  // Model state variables with defaults matching Slide 09 & proposal_docs.md
  const [annualOrders, setAnnualOrders] = useState(375000);
  const [failureRate, setFailureRate] = useState(4.0); // 4% failure rate
  const [addressableRate, setAddressableRate] = useState(30); // 30% addressable (Base case)
  const failureCost = 200; // €200 avoidable cost per failed delivery
  const recoveryCost = 50; // €50 recovery cost (Option A shuttle average)
  const totalInvestment = 680000; // €80k PoV + €600k build & rollout

  // Calculations
  const totalFailures = Math.round(annualOrders * (failureRate / 100));
  const addressableFailures = Math.round(totalFailures * (addressableRate / 100));
  const grossSavings = addressableFailures * failureCost;
  const totalRecoverySpend = addressableFailures * recoveryCost;
  const techAnnualOperatingCost = 427000; // Cloud infrastructure, maintenance & ops overhead
  const netAnnualBenefit = grossSavings - totalRecoverySpend - techAnnualOperatingCost;
  
  // Payback in months
  const paybackMonths = netAnnualBenefit > 0 
    ? Math.min(60, Math.round((totalInvestment / netAnnualBenefit) * 12)) 
    : 999;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Slide 09 Header */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-slate-100 pb-5 gap-4">
          <div className="flex items-start gap-4">
            <div className="bg-slate-950 text-white font-mono font-black text-2xl sm:text-3xl px-3 py-1 rounded-md shadow-sm">
              09
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Business Case & Break-Even Analysis
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium max-w-3xl">
                Swedish savings alone pay back the full €680k investment in ~17 months; break-even is reached at ~19% recovery
              </p>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-900 self-start md:self-auto">
            Payback: ~17 Months (Base Case)
          </div>
        </div>

        {/* 3 Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          {/* Conservative Scenario */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold uppercase text-slate-500">Conservative</span>
              <span className="text-[10px] font-mono bg-red-100 text-red-700 px-1.5 py-0.2 rounded font-bold">Gate 1 Stop</span>
            </div>
            <div className="text-2xl font-black font-mono text-red-600">−€247k</div>
            <p className="text-xs text-slate-500 mt-1">
              Low addressable failures (&lt;19%). Demonstrates why PoV gate is mandatory to protect capital.
            </p>
          </div>

          {/* Base Case Scenario */}
          <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-300 ring-2 ring-emerald-500/20">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold uppercase text-emerald-900">Base Case (Our Target)</span>
              <span className="text-[10px] font-mono bg-emerald-200 text-emerald-900 px-1.5 py-0.2 rounded font-bold">30% Recovery</span>
            </div>
            <div className="text-2xl font-black font-mono text-emerald-700">+€248k / yr</div>
            <p className="text-xs text-emerald-900 mt-1">
              17-month payback in Sweden alone. 4,500 delivery failures prevented annually.
            </p>
          </div>

          {/* Aggressive Scenario */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold uppercase text-slate-500">Nordic Scale (1 → 3)</span>
              <span className="text-[10px] font-mono bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded font-bold">SE + NO + DK</span>
            </div>
            <div className="text-2xl font-black font-mono text-slate-900">+€1.37M / yr</div>
            <p className="text-xs text-slate-500 mt-1">
              Extending shared orchestrator core across all three markets upon validation.
            </p>
          </div>
        </div>

        {/* Interactive Sensitivity Simulator */}
        <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 my-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-amber-400" />
              <h2 className="text-sm font-bold text-slate-100 uppercase tracking-wide">
                Interactive Sensitivity & Value Bridge Simulator
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Break-Even Point: ~19% Addressable
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            {/* Sliders (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Addressable Recovery Rate Slider */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-semibold text-slate-200">
                    Addressable Failure Recovery Rate
                  </span>
                  <span className="font-mono font-bold text-amber-400 text-sm">
                    {addressableRate}% {addressableRate === 30 ? '(Base Case)' : addressableRate === 19 ? '(Break-Even)' : ''}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="1"
                  value={addressableRate}
                  onChange={(e) => setAddressableRate(Number(e.target.value))}
                  className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>10% (Low)</span>
                  <span className="text-amber-400 font-bold">19% (Break-Even)</span>
                  <span className="text-emerald-400 font-bold">30% (Base Target)</span>
                  <span>50% (High)</span>
                </div>
              </div>

              {/* Delivery Failure Rate Slider */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-semibold text-slate-200">
                    Baseline Order Failure Rate
                  </span>
                  <span className="font-mono font-bold text-slate-300 text-sm">
                    {failureRate.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="2.0"
                  max="8.0"
                  step="0.5"
                  value={failureRate}
                  onChange={(e) => setFailureRate(Number(e.target.value))}
                  className="w-full accent-slate-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>2.0%</span>
                  <span className="text-slate-300">4.0% (Company A Est.)</span>
                  <span>8.0%</span>
                </div>
              </div>

              {/* Value Bridge Steps */}
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-xs space-y-2 font-mono">
                <div className="text-[11px] font-sans font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Value Bridge Calculation (Sweden)
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Total Annual Orders:</span>
                  <span>{annualOrders.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Total Unmitigated Failures ({failureRate}%):</span>
                  <span>{totalFailures.toLocaleString()} orders</span>
                </div>
                <div className="flex justify-between text-amber-400 font-semibold">
                  <span>Addressable Failures Prevented ({addressableRate}%):</span>
                  <span>{addressableFailures.toLocaleString()} orders</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Gross Cost Avoided (€{failureCost}/failure):</span>
                  <span>€{grossSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-red-400">
                  <span>Less Recovery Spend (€{recoveryCost}/transfer):</span>
                  <span>−€{totalRecoverySpend.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400 pt-1 border-t border-slate-800">
                  <span>Less Annual Operating & Support Tech Costs:</span>
                  <span>−€{techAnnualOperatingCost.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Simulated Output Metrics (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Simulated Net Annual Benefit
                  </span>
                  <div className={`text-3xl sm:text-4xl font-black font-mono ${
                    netAnnualBenefit >= 0 ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {netAnnualBenefit >= 0 ? `+€${netAnnualBenefit.toLocaleString()}` : `−€${Math.abs(netAnnualBenefit).toLocaleString()}`}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Annual net operational cash generation for Sweden
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Payback on €680k Investment
                  </span>
                  <div className="text-3xl font-black font-mono text-amber-400">
                    {netAnnualBenefit > 0 ? `~${paybackMonths} months` : 'No Payback'}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    PoV €80k + Full Build €600k combined
                  </p>
                </div>
              </div>

              {/* Conservatism Note */}
              <div className="mt-6 pt-3 border-t border-slate-800 text-[10px] text-slate-400 leading-relaxed">
                <strong className="text-slate-300">Not included:</strong> Repeat orders, contractor retention, and jobsite delay penalties. Model intentionally remains conservative by evaluating only direct avoided failure costs.
              </div>
            </div>
          </div>
        </div>

        {/* 4 Investment Gates Table */}
        <div className="pt-4 border-t border-slate-100">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Milestone Investment Gates (Risk Mitigation)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="font-mono font-bold text-amber-700">GATE 1 · Week 4</span>
              <h3 className="font-bold text-slate-900 mt-1">PoV Verification</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Budget: ~€80k</p>
              <p className="text-[10px] text-slate-600 mt-1">Pass if historical replay demonstrates ≥19% addressable recovery.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="font-mono font-bold text-slate-700">GATE 2 · Week 10</span>
              <h3 className="font-bold text-slate-900 mt-1">Cluster MVP Launch</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Release Build Capital</p>
              <p className="text-[10px] text-slate-600 mt-1">Pass if coordinators achieve 80%+ recommendation acceptance.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="font-mono font-bold text-slate-700">GATE 3 · Week 16</span>
              <h3 className="font-bold text-slate-900 mt-1">Sweden Rollout</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">National Deployment</p>
              <p className="text-[10px] text-slate-600 mt-1">Pass if delivery failure rate drops in target regional depots.</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <span className="font-mono font-bold text-slate-700">GATE 4 · Week 22</span>
              <h3 className="font-bold text-slate-900 mt-1">Nordic Scale</h3>
              <p className="text-[11px] text-slate-500 mt-0.5">Extend to NO & DK</p>
              <p className="text-[10px] text-slate-600 mt-1">Port core logic into Danish manual processes & Norwegian store ops.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
