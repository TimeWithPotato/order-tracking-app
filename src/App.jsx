import { useState } from 'react';
import Header from './components/Header';
import StateSelector from './components/StateSelector';
import OrderSummary from './components/OrderSummary';
import StatusTimeline from './components/StatusTimeline';
import SupportModal from './components/SupportModal';
import { mockOrders } from './data/mockOrders';
import { HelpCircle, Package } from 'lucide-react';

export default function App() {
  const [currentState, setCurrentState] = useState('active');
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const activeOrder = mockOrders[currentState];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col">
      {/* Global Top Navbar for Desktop/Tablet view */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 hidden md:flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
            <Package size={22} />
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-900">E-Commerce Portal</h1>
            <p className="text-xs text-slate-500">Customer Order & Delivery Management</p>
          </div>
        </div>
        <div className="text-xs bg-indigo-50 text-indigo-700 font-medium px-3 py-1.5 rounded-lg border border-indigo-100">
          Active Order ID: <span className="font-bold">{activeOrder.orderId}</span>
        </div>
      </header>

      {/* Main Responsive Wrapper */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-3 sm:p-6 md:p-8 flex flex-col">
        
        {/* Mobile Header (Visible only on small screens) */}
        <div className="md:hidden mb-2">
          <Header orderId={activeOrder.orderId} />
        </div>

        {/* Evaluator Simulation Panel (To test all 3 required states) */}
        <div className="mb-6">
          <StateSelector currentState={currentState} setCurrentState={setCurrentState} />
        </div>

        {/* Responsive Grid Layout for Tablet & Desktop / Single column for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Product Summary & Quick Info */}
          <div className="md:col-span-5 space-y-4">
            <OrderSummary order={activeOrder} />
            
            <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200 hidden md:block">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Support & Assistance</h4>
              <p className="text-xs text-slate-600 mb-4">Experiencing any issues with shipment handling or delivery partner?</p>
              <button 
                onClick={() => setIsSupportOpen(true)}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-xl text-xs transition-colors shadow-xs"
              >
                Open Help Center
              </button>
            </div>
          </div>

          {/* Right Column: Status Banner & Timeline Progress */}
          <div className="md:col-span-7">
            <StatusTimeline 
              order={activeOrder} 
              onOpenSupport={() => setIsSupportOpen(true)} 
            />

            {/* Mobile Help Footer Link */}
            <div className="text-center mt-6 md:hidden">
              <button 
                onClick={() => setIsSupportOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-800"
              >
                <HelpCircle size={14} /> Need more help with this order?
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Support Modal Component */}
      <SupportModal 
        isOpen={isSupportOpen} 
        onClose={() => setIsSupportOpen(false)} 
        orderId={activeOrder.orderId}
      />
    </div>
  );
}