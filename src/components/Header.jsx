import React from 'react';
import { Layers, ShieldCheck, TrendingUp, Cpu, Smartphone, RefreshCw, CheckCircle2 } from 'lucide-react';

export function Header({ currentView, setCurrentView, selectedOrder, setSelectedOrder, sampleOrders, isApproved, handleReset }) {
  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50 shadow-md">
      {/* Top micro banner */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 px-4 py-1.5 text-xs font-semibold flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-slate-950 text-amber-400 px-2 py-0.5 rounded text-[10px] font-extrabold tracking-wider uppercase">
            Challenge 2026
          </span>
          <span>Netcompany IT Consultant Challenge · Round 1 Prototype</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] bg-slate-950/10 px-2 py-0.5 rounded">
            Team TAMCA — AI Delivery & Fulfilment Orchestrator
          </span>
          <span className="hidden sm:inline text-slate-800 font-bold">•</span>
          <span className="text-slate-900 font-medium hidden sm:inline">Vercel Production Preview</span>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20 text-slate-950 font-black text-xl">
            T
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                TAMCA <span className="text-amber-400 font-light">| Netcompany</span>
              </span>
              <span className="bg-slate-800 text-amber-400 text-[10px] font-mono px-1.5 py-0.5 rounded border border-amber-400/30">
                PROPOSAL v2.3
              </span>
            </div>
            <p className="text-xs text-slate-400">AI Delivery & Fulfilment Orchestrator · Company A</p>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <nav className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60 overflow-x-auto max-w-full">
          <button
            onClick={() => setCurrentView('prototype')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
              currentView === 'prototype'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Slide 06 Prototype</span>
            {isApproved && (
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            )}
          </button>

          <button
            onClick={() => setCurrentView('story')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
              currentView === 'story'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>5-Pillar Proposal Story</span>
          </button>

          <button
            onClick={() => setCurrentView('architecture')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
              currentView === 'architecture'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Slide 07 Architecture</span>
          </button>

          <button
            onClick={() => setCurrentView('financial')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
              currentView === 'financial'
                ? 'bg-amber-400 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Slide 09 ROI Model</span>
          </button>
        </nav>

        {/* Order Selector & Simulation Reset */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={selectedOrder.id}
              onChange={(e) => {
                const found = sampleOrders.find(o => o.id === e.target.value);
                if (found) {
                  setSelectedOrder(found);
                  handleReset();
                }
              }}
              className="bg-slate-800 text-slate-200 text-xs font-medium rounded-lg px-2.5 py-1.5 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50 cursor-pointer"
            >
              {sampleOrders.map(order => (
                <option key={order.id} value={order.id}>
                  {order.id} ({order.country} - {order.commitment})
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleReset}
            title="Reset interactive simulation state"
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white rounded-lg text-xs transition cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>
    </header>
  );
}
