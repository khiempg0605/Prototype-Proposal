import React from 'react';
import { 
  Monitor, 
  Smartphone, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  RefreshCw, 
  Sparkles,
  Home
} from 'lucide-react';

export function Header({ currentView, setCurrentView, selectedOrder, setSelectedOrder, sampleOrders, isApproved, handleReset }) {
  return (
    <header className="bg-tamca-navy border-b border-tamca-borderGray/30 text-tamca-white sticky top-0 z-50 shadow-lg">
      {/* Top Banner with exact colors */}
      <div className="bg-tamca-amber text-tamca-darkNavy px-4 py-1.5 text-xs font-bold flex flex-wrap items-center justify-between gap-2 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="bg-tamca-darkNavy text-tamca-amber px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider">
            Challenge 2026
          </span>
          <span>Netcompany IT Consultant Challenge · Round 1 Prototype Portal</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] bg-tamca-darkNavy/10 px-2 py-0.5 rounded text-tamca-darkNavy font-extrabold">
            Team TAMCA — AI Delivery & Fulfilment Orchestrator
          </span>
          <span className="hidden sm:inline font-bold">•</span>
          <span className="text-tamca-darkNavy font-semibold hidden sm:inline">PoV Gate: €80k (4 Weeks)</span>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand Logo */}
        <div 
          onClick={() => setCurrentView('overview')}
          className="flex items-center gap-3.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-tamca-amber text-tamca-darkNavy flex items-center justify-center shadow-lg font-black text-xl group-hover:scale-105 transition-transform">
            T
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-black tracking-tight text-tamca-white flex items-center gap-1.5">
                TAMCA <span className="text-tamca-amber font-light">| Netcompany</span>
              </span>
              <span className="bg-tamca-darkNavy text-tamca-amber text-[10px] font-mono px-2 py-0.5 rounded border border-tamca-amber/40 font-bold">
                PROTOTYPE PORTAL
              </span>
            </div>
            <p className="text-xs text-tamca-lightBlue font-medium">
              Web & Mobile Prototype Suite · Company A
            </p>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <nav className="flex items-center gap-1 bg-tamca-darkNavy p-1 rounded-xl border border-tamca-borderGray/20 overflow-x-auto max-w-full">
          <button
            onClick={() => setCurrentView('overview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              currentView === 'overview'
                ? 'bg-tamca-amber text-tamca-darkNavy shadow-sm'
                : 'text-tamca-lightBlue hover:text-tamca-white hover:bg-tamca-navy/60'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setCurrentView('prototype')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              currentView === 'prototype'
                ? 'bg-tamca-amber text-tamca-darkNavy shadow-sm'
                : 'text-tamca-lightBlue hover:text-tamca-white hover:bg-tamca-navy/60'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Web Orchestrator</span>
            {isApproved && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            )}
          </button>

          <button
            onClick={() => setCurrentView('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              currentView === 'mobile'
                ? 'bg-tamca-amber text-tamca-darkNavy shadow-sm'
                : 'text-tamca-lightBlue hover:text-tamca-white hover:bg-tamca-navy/60'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Apps & SMS</span>
          </button>

          <button
            onClick={() => setCurrentView('workflow')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              currentView === 'workflow'
                ? 'bg-tamca-amber text-tamca-darkNavy shadow-sm'
                : 'text-tamca-lightBlue hover:text-tamca-white hover:bg-tamca-navy/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>System Workflow</span>
          </button>

          <button
            onClick={() => setCurrentView('story')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              currentView === 'story'
                ? 'bg-tamca-amber text-tamca-darkNavy shadow-sm'
                : 'text-tamca-lightBlue hover:text-tamca-white hover:bg-tamca-navy/60'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>5-Pillar Story</span>
          </button>

          <button
            onClick={() => setCurrentView('financial')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              currentView === 'financial'
                ? 'bg-tamca-amber text-tamca-darkNavy shadow-sm'
                : 'text-tamca-lightBlue hover:text-tamca-white hover:bg-tamca-navy/60'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>ROI Model</span>
          </button>
        </nav>

        {/* Order Selector & Reset */}
        <div className="flex items-center gap-2">
          <select
            value={selectedOrder.id}
            onChange={(e) => {
              const found = sampleOrders.find(o => o.id === e.target.value);
              if (found) {
                setSelectedOrder(found);
                handleReset();
              }
            }}
            className="bg-tamca-darkNavy text-tamca-iceBlue text-xs font-semibold rounded-xl px-3 py-1.5 border border-tamca-borderGray/30 focus:outline-none focus:ring-2 focus:ring-tamca-amber cursor-pointer"
          >
            {sampleOrders.map(order => (
              <option key={order.id} value={order.id}>
                {order.id} ({order.country})
              </option>
            ))}
          </select>

          <button
            onClick={handleReset}
            title="Reset simulation state"
            className="flex items-center gap-1 px-2.5 py-1.5 bg-tamca-darkNavy hover:bg-tamca-navy border border-tamca-borderGray/30 text-tamca-lightBlue hover:text-tamca-white rounded-xl text-xs transition cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>
    </header>
  );
}
