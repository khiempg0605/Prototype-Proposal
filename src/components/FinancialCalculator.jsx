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
  const [annualOrders, setAnnualOrders] = useState(375000);
  const [failureRate, setFailureRate] = useState(4.0);
  const [addressableRate, setAddressableRate] = useState(30);
  const failureCost = 200;
  const recoveryCost = 50;
  const totalInvestment = 680000;

  // Calculations
  const totalFailures = Math.round(annualOrders * (failureRate / 100));
  const addressableFailures = Math.round(totalFailures * (addressableRate / 100));
  const grossSavings = addressableFailures * failureCost;
  const totalRecoverySpend = addressableFailures * recoveryCost;
  const techAnnualOperatingCost = 427000;
  const netAnnualBenefit = grossSavings - totalRecoverySpend - techAnnualOperatingCost;
  
  const paybackMonths = netAnnualBenefit > 0 
    ? Math.min(60, Math.round((totalInvestment / netAnnualBenefit) * 12)) 
    : 999;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Slide 09 Header */}
      <div className="bg-tamca-white rounded-2xl border border-tamca-borderGray shadow-xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-tamca-borderGray pb-5 gap-4">
          <div className="flex items-start gap-4">
            <div className="bg-tamca-navy text-tamca-white font-mono font-black text-2xl sm:text-3xl px-3.5 py-1 rounded-md shadow-sm">
              09
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-tamca-darkNavy tracking-tight">
                Business Case & Break-Even Analysis
              </h1>
              <p className="text-sm sm:text-base text-tamca-slateGray mt-1 font-medium max-w-3xl">
                Swedish savings alone pay back the full €680k investment in ~17 months; break-even is reached at ~19% recovery
              </p>
            </div>
          </div>

          <div className="bg-tamca-iceBlue border border-tamca-borderGray px-3.5 py-1.5 rounded-lg text-xs font-semibold text-tamca-darkNavy self-start md:self-auto">
            Payback: <span className="text-tamca-amber font-bold">~17 Months</span> (Base Case)
          </div>
        </div>

        {/* 3 Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          {/* Conservative Scenario */}
          <div className="bg-tamca-iceBlue p-4 rounded-xl border border-tamca-borderGray">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold uppercase text-tamca-slateGray">Conservative</span>
              <span className="text-[10px] font-mono bg-red-100 text-red-700 px-1.5 py-0.2 rounded font-bold">Gate 1 Stop</span>
            </div>
            <div className="text-2xl font-black font-mono text-red-600">−€247k</div>
            <p className="text-xs text-tamca-slateGray mt-1">
              Low addressable recovery (&lt;19%). Proves why PoV (~€80k) gate protects capital.
            </p>
          </div>

          {/* Base Case Scenario */}
          <div className="bg-tamca-white p-4 rounded-xl border-2 border-tamca-amber shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold uppercase text-tamca-darkNavy">Base Case (Target)</span>
              <span className="text-[10px] font-mono bg-tamca-amber/20 text-tamca-darkNavy px-1.5 py-0.2 rounded font-bold">30% Recovery</span>
            </div>
            <div className="text-2xl font-black font-mono text-emerald-700">+€248k / yr</div>
            <p className="text-xs text-tamca-darkNavy mt-1">
              17-month payback in Sweden alone. 4,500 delivery failures prevented annually.
            </p>
          </div>

          {/* Aggressive Scenario */}
          <div className="bg-tamca-iceBlue p-4 rounded-xl border border-tamca-borderGray">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold uppercase text-tamca-slateGray">Nordic Scale (1 → 3)</span>
              <span className="text-[10px] font-mono bg-tamca-navy text-tamca-white px-1.5 py-0.2 rounded font-bold">SE + NO + DK</span>
            </div>
            <div className="text-2xl font-black font-mono text-tamca-darkNavy">+€1.37M / yr</div>
            <p className="text-xs text-tamca-slateGray mt-1">
              Extending shared orchestrator core across all three markets upon validation.
            </p>
          </div>
        </div>

        {/* Interactive Sensitivity Simulator */}
        <div className="bg-tamca-darkNavy text-tamca-white rounded-xl p-6 border border-tamca-navy my-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-tamca-slateGray/30">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-tamca-amber" />
              <h2 className="text-sm font-bold text-tamca-white uppercase tracking-wide">
                Interactive Sensitivity & Value Bridge Simulator
              </h2>
            </div>
            <span className="text-xs text-tamca-amber font-mono font-bold">
              Break-Even Point: ~19% Addressable
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            {/* Sliders (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Addressable Recovery Rate Slider */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-semibold text-tamca-iceBlue">
                    Addressable Failure Recovery Rate
                  </span>
                  <span className="font-mono font-bold text-tamca-amber text-sm">
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
                  className="w-full accent-tamca-amber h-2 bg-tamca-navy rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-tamca-lightBlue font-mono mt-1">
                  <span>10% (Low)</span>
                  <span className="text-tamca-amber font-bold">19% (Break-Even)</span>
                  <span className="text-emerald-400 font-bold">30% (Base Target)</span>
                  <span>50% (High)</span>
                </div>
              </div>

              {/* Delivery Failure Rate Slider */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-semibold text-tamca-iceBlue">
                    Baseline Order Failure Rate
                  </span>
                  <span className="font-mono font-bold text-tamca-lightBlue text-sm">
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
                  className="w-full accent-tamca-lightBlue h-2 bg-tamca-navy rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-tamca-slateGray font-mono mt-1">
                  <span>2.0%</span>
                  <span className="text-tamca-iceBlue">4.0% (Company A Est.)</span>
                  <span>8.0%</span>
                </div>
              </div>

              {/* Value Bridge Steps */}
              <div className="bg-tamca-navy/90 p-4 rounded-xl border border-tamca-borderGray/20 text-xs space-y-2 font-mono">
                <div className="text-[11px] font-sans font-bold text-tamca-lightBlue uppercase tracking-wider mb-2">
                  Value Bridge Calculation (Sweden)
                </div>
                <div className="flex justify-between text-tamca-iceBlue">
                  <span>Total Annual Orders:</span>
                  <span>{annualOrders.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-tamca-iceBlue">
                  <span>Total Unmitigated Failures ({failureRate}%):</span>
                  <span>{totalFailures.toLocaleString()} orders</span>
                </div>
                <div className="flex justify-between text-tamca-amber font-bold">
                  <span>Addressable Failures Prevented ({addressableRate}%):</span>
                  <span>{addressableFailures.toLocaleString()} orders</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Gross Cost Avoided (€{failureCost}/failure):</span>
                  <span>€{grossSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-red-300">
                  <span>Less Recovery Spend (€{recoveryCost}/transfer):</span>
                  <span>−€{totalRecoverySpend.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-tamca-slateGray pt-1 border-t border-tamca-slateGray/40">
                  <span>Less Annual Operating & Support Tech Costs:</span>
                  <span>−€{techAnnualOperatingCost.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Simulated Output Metrics (5 cols) */}
            <div className="lg:col-span-5 bg-tamca-navy p-5 rounded-xl border border-tamca-borderGray/20 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-tamca-lightBlue block mb-1">
                    Simulated Net Annual Benefit
                  </span>
                  <div className={`text-3xl sm:text-4xl font-black font-mono ${
                    netAnnualBenefit >= 0 ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {netAnnualBenefit >= 0 ? `+€${netAnnualBenefit.toLocaleString()}` : `−€${Math.abs(netAnnualBenefit).toLocaleString()}`}
                  </div>
                  <p className="text-[11px] text-tamca-lightBlue mt-1">
                    Annual net operational cash generation for Sweden
                  </p>
                </div>

                <div className="pt-4 border-t border-tamca-slateGray/30">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-tamca-lightBlue block mb-1">
                    Payback on €680k Investment
                  </span>
                  <div className="text-3xl font-black font-mono text-tamca-amber">
                    {netAnnualBenefit > 0 ? `~${paybackMonths} months` : 'No Payback'}
                  </div>
                  <p className="text-[11px] text-tamca-lightBlue mt-1">
                    PoV <span className="text-tamca-amber font-bold">€80k</span> + Full Build €600k combined
                  </p>
                </div>
              </div>

              {/* Conservatism Note */}
              <div className="mt-6 pt-3 border-t border-tamca-slateGray/30 text-[10px] text-tamca-lightBlue leading-relaxed">
                <strong className="text-tamca-white">Not included:</strong> Repeat orders, contractor retention, and jobsite delay penalties. Model intentionally remains conservative by evaluating only direct avoided failure costs.
              </div>
            </div>
          </div>
        </div>

        {/* 4 Investment Gates Table */}
        <div className="pt-4 border-t border-tamca-borderGray">
          <h2 className="text-xs font-bold text-tamca-slateGray uppercase tracking-wider mb-3">
            Milestone Investment Gates (Risk Mitigation)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-tamca-iceBlue p-3 rounded-lg border-2 border-tamca-amber">
              <span className="font-mono font-bold text-tamca-navy">GATE 1 · Week 4</span>
              <h3 className="font-bold text-tamca-darkNavy mt-1">PoV Verification</h3>
              <p className="text-[11px] text-tamca-amber font-extrabold mt-0.5">Budget: ~€80k</p>
              <p className="text-[10px] text-tamca-slateGray mt-1">Pass if historical replay proves ≥19% addressable recovery.</p>
            </div>
            <div className="bg-tamca-iceBlue p-3 rounded-lg border border-tamca-borderGray">
              <span className="font-mono font-bold text-tamca-slateGray">GATE 2 · Week 10</span>
              <h3 className="font-bold text-tamca-darkNavy mt-1">Cluster MVP Launch</h3>
              <p className="text-[11px] text-tamca-slateGray mt-0.5">Release Build Capital</p>
              <p className="text-[10px] text-tamca-slateGray mt-1">Pass if coordinators achieve 80%+ acceptance.</p>
            </div>
            <div className="bg-tamca-iceBlue p-3 rounded-lg border border-tamca-borderGray">
              <span className="font-mono font-bold text-tamca-slateGray">GATE 3 · Week 16</span>
              <h3 className="font-bold text-tamca-darkNavy mt-1">Sweden Rollout</h3>
              <p className="text-[11px] text-tamca-slateGray mt-0.5">National Deployment</p>
              <p className="text-[10px] text-tamca-slateGray mt-1">Pass if failure rate drops in target regional depots.</p>
            </div>
            <div className="bg-tamca-iceBlue p-3 rounded-lg border border-tamca-borderGray">
              <span className="font-mono font-bold text-tamca-slateGray">GATE 4 · Week 22</span>
              <h3 className="font-bold text-tamca-darkNavy mt-1">Nordic Scale</h3>
              <p className="text-[11px] text-tamca-slateGray mt-0.5">Extend to NO & DK</p>
              <p className="text-[10px] text-tamca-slateGray mt-1">Port core logic into Danish manual processes & Norwegian store ops.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
