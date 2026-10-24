import React, { useState } from 'react';
import { 
  Truck, 
  Smartphone, 
  Package, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  QrCode, 
  Send, 
  User, 
  ShieldCheck, 
  Building2,
  Navigation,
  FileCheck,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';

export function MobileAppView({ order, isApproved, handleApprove }) {
  const [activePersona, setActivePersona] = useState('driver'); // 'driver' | 'contractor' | 'warehouse'
  const [driverStep, setDriverStep] = useState(isApproved ? 2 : 0);
  const [showEnglishSMS, setShowEnglishSMS] = useState(true);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-tamca-navy text-tamca-white rounded-2xl p-6 sm:p-8 shadow-xl border border-tamca-navy">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-tamca-amber/20 text-tamca-amber px-3 py-1 rounded-full text-xs font-semibold border border-tamca-amber/40">
              <span>Mobile Ecosystem Prototypes</span>
              <span>•</span>
              <span>Edge Execution Layer</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-tamca-white tracking-tight">
              Mobile Handheld & Customer Apps
            </h1>
            <p className="text-tamca-lightBlue text-xs sm:text-sm leading-relaxed">
              When the Web Portal approves recovery Option A, action triggers immediately across three frontline mobile applications: Driver Shuttle Transport, Warehouse Staging PDA, and Contractor Proffsservice Mobile.
            </p>
          </div>

          {/* Persona Switcher Buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-tamca-darkNavy p-1.5 rounded-xl border border-tamca-slateGray/40">
            <button
              onClick={() => setActivePersona('driver')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                activePersona === 'driver'
                  ? 'bg-tamca-amber text-tamca-darkNavy shadow-md'
                  : 'text-tamca-white hover:text-tamca-amber'
              }`}
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Driver Shuttle App</span>
            </button>

            <button
              onClick={() => setActivePersona('contractor')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                activePersona === 'contractor'
                  ? 'bg-tamca-amber text-tamca-darkNavy shadow-md'
                  : 'text-tamca-white hover:text-tamca-amber'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Contractor App & SMS</span>
            </button>

            <button
              onClick={() => setActivePersona('warehouse')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                activePersona === 'warehouse'
                  ? 'bg-tamca-amber text-tamca-darkNavy shadow-md'
                  : 'text-tamca-white hover:text-tamca-amber'
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              <span>Warehouse PDA</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Mobile Simulator + Context Explanation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Mobile Phone Container (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[340px] bg-tamca-darkNavy rounded-[42px] p-4 shadow-2xl border-4 border-tamca-navy ring-2 ring-tamca-borderGray/40">
            {/* Speaker & Dynamic Island */}
            <div className="w-28 h-4.5 bg-tamca-darkNavy rounded-full mx-auto mb-3 flex items-center justify-center gap-2 border border-slate-800">
              <div className="w-2 h-2 rounded-full bg-slate-800"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60"></div>
            </div>

            {/* Phone Screen Canvas */}
            <div className="bg-tamca-white rounded-[28px] overflow-hidden shadow-inner min-h-[560px] flex flex-col justify-between border border-tamca-borderGray">
              
              {/* Persona 1: Driver Shuttle App */}
              {activePersona === 'driver' && (
                <div className="flex-1 flex flex-col justify-between">
                  {/* Driver App Header */}
                  <div className="bg-tamca-navy text-tamca-white p-4">
                    <div className="flex items-center justify-between text-[11px] text-tamca-lightBlue mb-1">
                      <span>Company A Transport Fleet</span>
                      <span className="font-mono bg-tamca-darkNavy px-2 py-0.5 rounded text-tamca-amber">Shuttle #S-14</span>
                    </div>
                    <h3 className="font-bold text-sm text-tamca-white flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-tamca-amber" />
                      <span>Inter-Branch Transfer Route</span>
                    </h3>
                    <p className="text-[11px] text-tamca-iceBlue mt-0.5">
                      Branch B ➜ Central Depot (12 km)
                    </p>
                  </div>

                  {/* Route & Cargo Manifest */}
                  <div className="p-4 space-y-3 flex-1 bg-tamca-iceBlue">
                    <div className="bg-tamca-white p-3 rounded-xl border border-tamca-borderGray shadow-sm space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-tamca-darkNavy">Emergency Stock Transfer</span>
                        <span className="text-[10px] font-mono bg-tamca-amber/20 text-tamca-darkNavy font-bold px-1.5 py-0.5 rounded">
                          Order {order.id}
                        </span>
                      </div>
                      <div className="text-xs text-tamca-slateGray">
                        <p><strong className="text-tamca-darkNavy">Item:</strong> 20x Plasterboard sheets 12.5mm</p>
                        <p><strong className="text-tamca-darkNavy">Pick Location:</strong> Branch B, Bay 04</p>
                        <p><strong className="text-tamca-darkNavy">Delivery Target:</strong> Central Hub before 21:00</p>
                      </div>
                      <div className="pt-2 border-t border-tamca-borderGray flex items-center justify-between text-[11px]">
                        <span className="text-tamca-slateGray flex items-center gap-1">
                          <Clock className="w-3 h-3 text-tamca-amber" /> Shuttle Cut-off 18:00
                        </span>
                        <span className="font-bold text-emerald-700">Cost: €50</span>
                      </div>
                    </div>

                    {/* Step Checklist for Driver */}
                    <div className="bg-tamca-white p-3 rounded-xl border border-tamca-borderGray shadow-sm space-y-2">
                      <span className="text-[10px] font-bold uppercase text-tamca-slateGray tracking-wider block">
                        Driver Action Checklist
                      </span>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center gap-2 text-tamca-darkNavy">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>17:15 Pallet QR Scanned at Branch B</span>
                        </div>
                        <div className="flex items-center gap-2 text-tamca-darkNavy">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>17:30 Shuttle Departed on Route 73</span>
                        </div>
                        <div className="flex items-center gap-2 text-tamca-darkNavy font-semibold">
                          <div className="w-4 h-4 rounded-full border-2 border-tamca-amber flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-tamca-amber"></div>
                          </div>
                          <span>21:00 Arrival & Inbound Check at Depot</span>
                        </div>
                      </div>
                    </div>

                    {/* GPS Navigation Map Snippet */}
                    <div className="bg-tamca-white p-3 rounded-xl border border-tamca-borderGray shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-tamca-navy text-tamca-amber flex items-center justify-center">
                          <Navigation className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-tamca-darkNavy">Route Progress</div>
                          <div className="text-[10px] text-tamca-slateGray">12 km · 22 mins remaining</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-700">ON TIME</span>
                    </div>
                  </div>

                  {/* Driver Footer Button */}
                  <div className="p-3 bg-tamca-white border-t border-tamca-borderGray">
                    <button 
                      onClick={() => alert("Simulated action: Digital Proof of Handover signed at Central Depot.")}
                      className="w-full py-2.5 bg-tamca-navy hover:bg-tamca-darkNavy text-tamca-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <FileCheck className="w-4 h-4 text-tamca-amber" />
                      <span>Confirm Depot Inbound Handover</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Persona 2: Contractor App & SMS */}
              {activePersona === 'contractor' && (
                <div className="flex-1 flex flex-col justify-between">
                  {/* Contractor Header */}
                  <div className="bg-tamca-navy text-tamca-white p-4">
                    <div className="flex items-center justify-between text-[11px] text-tamca-lightBlue mb-1">
                      <span>Company A Proffsservice</span>
                      <span className="bg-tamca-amber text-tamca-darkNavy font-bold px-2 py-0.5 rounded text-[10px]">B2B VIP</span>
                    </div>
                    <h3 className="font-bold text-sm text-tamca-white">
                      Byggmästare Nilsson AB
                    </h3>
                    <p className="text-[11px] text-tamca-iceBlue">
                      Site: Stockholm Central Project #S-2004
                    </p>
                  </div>

                  {/* Live Tracking & Notifications */}
                  <div className="p-4 space-y-3 flex-1 bg-tamca-iceBlue overflow-y-auto">
                    {/* Order Status Card */}
                    <div className="bg-tamca-white p-3 rounded-xl border border-tamca-borderGray shadow-sm space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-tamca-darkNavy">Delivery Commitment</span>
                        <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                          CONFIRMED TUE 07:00
                        </span>
                      </div>
                      <p className="text-xs text-tamca-slateGray">
                        100 Plasterboard sheets (Gipsskivor Standard 12.5mm)
                      </p>
                      <div className="bg-tamca-iceBlue p-2 rounded-lg text-[11px] text-tamca-darkNavy border border-tamca-borderGray flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Crane Slot Preserved:</strong> 07:00 sharp. No standby worker downtime.</span>
                      </div>
                    </div>

                    {/* SMS Bubble Preview */}
                    <div className="bg-tamca-white p-3 rounded-xl border border-tamca-borderGray shadow-sm space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold uppercase text-tamca-slateGray tracking-wider">
                          SMS Notification Received
                        </span>
                        <button
                          onClick={() => setShowEnglishSMS(!showEnglishSMS)}
                          className="text-[9px] text-tamca-navy font-semibold underline cursor-pointer"
                        >
                          {showEnglishSMS ? 'Show Swedish' : 'Show English'}
                        </button>
                      </div>

                      <div className="bg-tamca-iceBlue text-tamca-darkNavy text-xs p-3 rounded-2xl rounded-tl-sm border border-tamca-borderGray leading-relaxed">
                        {showEnglishSMS ? order.sms.englishTranslation : order.sms.swedish}
                      </div>

                      <p className="text-[9px] text-tamca-slateGray italic">
                        Sent only after stock and transport are secured · Approved by account manager
                      </p>
                    </div>
                  </div>

                  {/* Contractor Action */}
                  <div className="p-3 bg-tamca-white border-t border-tamca-borderGray">
                    <button 
                      onClick={() => alert("Simulated action: Johan Nilsson confirmed site crane readiness for 07:00.")}
                      className="w-full py-2.5 bg-tamca-amber hover:bg-amber-400 text-tamca-darkNavy rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm Site Gate Access for 07:00</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Persona 3: Warehouse PDA */}
              {activePersona === 'warehouse' && (
                <div className="flex-1 flex flex-col justify-between">
                  {/* Warehouse Header */}
                  <div className="bg-tamca-darkNavy text-tamca-white p-4">
                    <div className="flex items-center justify-between text-[11px] text-tamca-lightBlue mb-1">
                      <span>Branch B Warehouse Logistics</span>
                      <span className="bg-tamca-navy border border-tamca-slateGray px-2 py-0.5 rounded text-[10px] text-tamca-amber">
                        PDA Terminal #W-02
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-tamca-white flex items-center gap-1.5">
                      <Package className="w-4 h-4 text-tamca-amber" />
                      <span>Expedited Pick & Stage Task</span>
                    </h3>
                    <p className="text-[11px] text-tamca-iceBlue">
                      Aisle C-14 · Bay 04 Shuttle Dock
                    </p>
                  </div>

                  {/* Warehouse Pick Task */}
                  <div className="p-4 space-y-3 flex-1 bg-tamca-iceBlue">
                    <div className="bg-tamca-white p-3 rounded-xl border border-tamca-borderGray shadow-sm space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-tamca-darkNavy">Task #PK-8842</span>
                        <span className="text-[10px] font-mono bg-red-100 text-red-800 font-bold px-1.5 py-0.5 rounded">
                          PRIORITY 1
                        </span>
                      </div>
                      <div className="text-xs text-tamca-slateGray">
                        <p><strong className="text-tamca-darkNavy">Item:</strong> Gipsskivor Standard 12.5mm</p>
                        <p><strong className="text-tamca-darkNavy">Quantity:</strong> 20 sheets (1 bundle)</p>
                        <p><strong className="text-tamca-darkNavy">Destination:</strong> Shuttle Van #S-14 (leaves 17:30)</p>
                      </div>
                      <div className="bg-emerald-50 text-emerald-900 p-2 rounded-lg text-[11px] font-medium border border-emerald-200">
                        ✓ Inventory confirmed available after existing reservations.
                      </div>
                    </div>

                    {/* Barcode Scanner Graphic */}
                    <div className="bg-tamca-white p-4 rounded-xl border border-tamca-borderGray shadow-sm text-center space-y-2">
                      <QrCode className="w-16 h-16 text-tamca-navy mx-auto" />
                      <div className="text-xs font-mono font-bold text-tamca-darkNavy">
                        BARCODE: 7318520042004
                      </div>
                      <p className="text-[10px] text-tamca-slateGray">
                        Scan pallet tag to confirm staging onto shuttle dock Bay 04
                      </p>
                    </div>
                  </div>

                  {/* Warehouse Action */}
                  <div className="p-3 bg-tamca-white border-t border-tamca-borderGray">
                    <button 
                      onClick={() => alert("Simulated action: 20 sheets staged and locked for 17:30 shuttle departure.")}
                      className="w-full py-2.5 bg-tamca-navy hover:bg-tamca-darkNavy text-tamca-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <CheckCircle2 className="w-4 h-4 text-tamca-amber" />
                      <span>Confirm Staged at Bay 04</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Right: Technical Architecture & Real-world Value (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-tamca-white rounded-2xl p-6 border border-tamca-borderGray shadow-lg space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase text-tamca-slateGray tracking-wider">
              <span className="w-2 h-2 rounded-full bg-tamca-amber"></span>
              <span>Frontline Mobile Synergy</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-tamca-darkNavy">
              How the Mobile Apps Complete the Orchestration Loop
            </h2>
            <p className="text-xs sm:text-sm text-tamca-slateGray leading-relaxed">
              An AI recommendation on a coordinator's desktop is only as valuable as its frontline execution. The TAMCA solution coordinates the full physical fulfillment chain without requiring workers to log into complex legacy ERP screens:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div 
                onClick={() => setActivePersona('driver')}
                className={`p-3 rounded-xl border transition cursor-pointer ${
                  activePersona === 'driver' 
                    ? 'bg-tamca-iceBlue border-tamca-navy ring-2 ring-tamca-navy/20' 
                    : 'bg-tamca-white border-tamca-borderGray hover:bg-slate-50'
                }`}
              >
                <Truck className="w-5 h-5 text-tamca-navy mb-1" />
                <h3 className="font-bold text-xs text-tamca-darkNavy">1. Driver App</h3>
                <p className="text-[11px] text-tamca-slateGray mt-1">
                  Automated routing, GPS tracking, and QR barcode scanning between branches.
                </p>
              </div>

              <div 
                onClick={() => setActivePersona('warehouse')}
                className={`p-3 rounded-xl border transition cursor-pointer ${
                  activePersona === 'warehouse' 
                    ? 'bg-tamca-iceBlue border-tamca-navy ring-2 ring-tamca-navy/20' 
                    : 'bg-tamca-white border-tamca-borderGray hover:bg-slate-50'
                }`}
              >
                <Package className="w-5 h-5 text-tamca-navy mb-1" />
                <h3 className="font-bold text-xs text-tamca-darkNavy">2. Warehouse PDA</h3>
                <p className="text-[11px] text-tamca-slateGray mt-1">
                  Instant staging tasks dispatched to branch staff before the 18:00 cut-off.
                </p>
              </div>

              <div 
                onClick={() => setActivePersona('contractor')}
                className={`p-3 rounded-xl border transition cursor-pointer ${
                  activePersona === 'contractor' 
                    ? 'bg-tamca-iceBlue border-tamca-navy ring-2 ring-tamca-navy/20' 
                    : 'bg-tamca-white border-tamca-borderGray hover:bg-slate-50'
                }`}
              >
                <Smartphone className="w-5 h-5 text-tamca-navy mb-1" />
                <h3 className="font-bold text-xs text-tamca-darkNavy">3. Contractor App</h3>
                <p className="text-[11px] text-tamca-slateGray mt-1">
                  Proactive SMS & app alerts reassure site managers of guaranteed crane delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Key Value Callout */}
          <div className="bg-tamca-iceBlue rounded-2xl p-6 border border-tamca-borderGray space-y-3">
            <h3 className="text-sm font-bold text-tamca-darkNavy flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Zero Customer Surprises: The 16½ Hour Advantage</span>
            </h3>
            <p className="text-xs text-tamca-slateGray leading-relaxed">
              In the traditional process, the contractor discovers a 20-sheet shortfall on Tuesday at 07:00 when the truck arrives empty. Their expensive drywall crew (€43.5/hour) is idled, incurring massive site delays.
            </p>
            <p className="text-xs text-tamca-slateGray leading-relaxed">
              With the <strong>AI Delivery & Fulfilment Orchestrator</strong>, the contractor receives an SMS on Monday afternoon confirming their 100 sheets are fully secured and on schedule. Trust is protected, and Company A earns repeat B2B loyalty.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
