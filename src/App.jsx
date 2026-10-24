import React, { useState } from 'react';
import { Header } from './components/Header';
import { OverviewPortalView } from './components/OverviewPortalView';
import { OrchestratorView } from './components/OrchestratorView';
import { MobileAppView } from './components/MobileAppView';
import { WorkflowPipelineView } from './components/WorkflowPipelineView';
import { ProposalStoryView } from './components/ProposalStoryView';
import { FinancialCalculator } from './components/FinancialCalculator';
import { Footer } from './components/Footer';
import { sampleOrders } from './data/proposalData';
import { CheckCircle2, X } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState('overview');
  const [selectedOrder, setSelectedOrder] = useState(sampleOrders[0]);
  const [isApproved, setIsApproved] = useState(false);
  const [showApprovalNotice, setShowApprovalNotice] = useState(false);

  const handleApprove = (val) => {
    setIsApproved(val);
    if (val) {
      setShowApprovalNotice(true);
      setTimeout(() => {
        setShowApprovalNotice(false);
      }, 6000);
    }
  };

  const handleReset = () => {
    setIsApproved(false);
    setShowApprovalNotice(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-tamca-iceBlue text-tamca-darkNavy selection:bg-tamca-amber selection:text-tamca-darkNavy">
      {/* Global Header */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
        sampleOrders={sampleOrders}
        isApproved={isApproved}
        handleReset={handleReset}
      />

      {/* Floating Approval Notification Toast */}
      {showApprovalNotice && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-tamca-darkNavy text-tamca-white p-4 rounded-xl shadow-2xl border border-tamca-amber flex items-start gap-3 animate-bounce">
          <div className="w-8 h-8 rounded-full bg-tamca-amber/20 text-tamca-amber flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5 text-tamca-amber" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-tamca-white flex items-center gap-1.5">
              <span>Order {selectedOrder.id} Recovery Approved</span>
              <span className="bg-tamca-amber text-tamca-darkNavy text-[10px] px-1.5 py-0.2 rounded font-mono font-bold">
                Logged
              </span>
            </h4>
            <p className="text-xs text-tamca-lightBlue leading-snug">
              Option A transfer ticket logged to central ERP. Automated Swedish SMS notification released to customer {selectedOrder.contractor}.
            </p>
          </div>
          <button
            onClick={() => setShowApprovalNotice(false)}
            className="text-tamca-borderGray hover:text-tamca-white transition p-1 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {currentView === 'overview' && (
          <OverviewPortalView
            setCurrentView={setCurrentView}
            order={selectedOrder}
          />
        )}

        {currentView === 'prototype' && (
          <OrchestratorView
            order={selectedOrder}
            isApproved={isApproved}
            setIsApproved={handleApprove}
            setCurrentView={setCurrentView}
          />
        )}

        {currentView === 'mobile' && (
          <MobileAppView
            order={selectedOrder}
            isApproved={isApproved}
            handleApprove={() => handleApprove(true)}
          />
        )}

        {currentView === 'workflow' && (
          <WorkflowPipelineView
            setCurrentView={setCurrentView}
          />
        )}

        {currentView === 'story' && (
          <ProposalStoryView
            setCurrentView={setCurrentView}
          />
        )}

        {currentView === 'financial' && (
          <FinancialCalculator
            setCurrentView={setCurrentView}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
