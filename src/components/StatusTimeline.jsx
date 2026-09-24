import { CheckCircle2, Clock, AlertTriangle, PackageX, HelpCircle } from 'lucide-react';

export default function StatusTimeline({ order, onOpenSupport }) {
  const renderStatusBanner = () => {
    if (order.stateType === 'delayed') {
      return (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="text-sm font-semibold text-amber-900">Delivery Delayed</h4>
              <p className="text-xs text-amber-700 mt-1">{order.delayReason}</p>
              <button 
                onClick={onOpenSupport}
                className="mt-3 text-xs bg-amber-600 hover:bg-amber-700 text-white font-medium px-3 py-1.5 rounded-lg transition-colors"
              >
                Contact Support about Delay
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (order.stateType === 'notReceived') {
      return (
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-4">
          <div className="flex items-start gap-3">
            <PackageX className="text-rose-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="text-sm font-semibold text-rose-900">Marked as Delivered, But Not Here?</h4>
              <p className="text-xs text-rose-700 mt-1">{order.issueNotice}</p>
              <div className="mt-3 flex gap-2">
                <button 
                  onClick={onOpenSupport}
                  className="text-xs bg-rose-600 hover:bg-rose-700 text-white font-medium px-3 py-1.5 rounded-lg transition-colors"
                >
                  Report Missing Item
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (order.stateType === 'noTracking') {
      return (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <div className="flex items-start gap-3">
            <Clock className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="text-sm font-semibold text-blue-900">Tracking Not Available Yet</h4>
              <p className="text-xs text-blue-700 mt-1">{order.noticeMessage}</p>
            </div>
          </div>
        </div>
      );
    }

    // Default active status banner
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4 flex items-center justify-between">
        <div>
          <span className="text-xs font-medium text-emerald-800 uppercase tracking-wider">Current Status</span>
          <h4 className="text-base font-bold text-emerald-900 mt-0.5">{order.currentStatus}</h4>
          <p className="text-xs text-emerald-700 mt-0.5">Estimated: {order.estimatedDelivery}</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
          <Clock size={20} />
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderStatusBanner()}

      {/* Timeline Steps */}
      {order.steps.length > 0 ? (
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 mb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Tracking Progress</h3>
          <div className="relative pl-4 space-y-6 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
            {order.steps.map((step, idx) => (
              <div key={idx} className="relative flex items-start gap-3">
                <div 
                  className={`absolute -left-4 w-6 h-6 rounded-full flex items-center justify-center z-10 text-xs font-bold ${
                    step.active 
                      ? 'bg-indigo-600 text-white ring-4 ring-indigo-50' 
                      : step.completed 
                      ? 'bg-emerald-600 text-white' 
                      : step.delayed
                      ? 'bg-amber-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step.completed ? <CheckCircle2 size={14} /> : idx + 1}
                </div>
                <div className="pl-3">
                  <p className={`text-sm font-medium ${step.active || step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{step.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200 mb-4">
          <HelpCircle className="mx-auto text-gray-400 mb-2" size={32} />
          <h4 className="text-sm font-medium text-gray-800">Timeline will update soon</h4>
          <p className="text-xs text-gray-500 mt-1">Carrier logs will populate automatically once dispatched.</p>
        </div>
      )}
    </div>
  );
}