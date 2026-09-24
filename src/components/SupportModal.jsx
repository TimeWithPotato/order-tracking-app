import React, { useState } from 'react';
import { X, MessageSquare, PhoneCall, CheckCircle } from 'lucide-react';

export default function SupportModal({ isOpen, onClose, orderId }) {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setMessage('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-xl relative animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <CheckCircle className="mx-auto text-emerald-600 mb-2" size={48} />
            <h3 className="text-base font-bold text-gray-900">Request Received</h3>
            <p className="text-xs text-gray-500 mt-1">Our support team will contact you regarding {orderId} within 2 hours.</p>
          </div>
        ) : (
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-1">Customer Support</h3>
            <p className="text-xs text-gray-500 mb-4">Help with order ID: <span className="font-medium text-gray-700">{orderId}</span></p>
            
            <div className="space-y-2 mb-4">
              <a 
                href="#chat" 
                onClick={(e) => { e.preventDefault(); alert("Live chat connection simulated!"); }}
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-xs font-medium text-gray-800 transition-colors"
              >
                <MessageSquare size={18} className="text-indigo-600" />
                <div>
                  <p className="font-semibold">Start Live Agent Chat</p>
                  <p className="text-gray-500 text-[10px]">Average wait time: &lt; 2 minutes</p>
                </div>
              </a>

              <a 
                href="#call" 
                onClick={(e) => { e.preventDefault(); alert("Connecting to automated support line..."); }}
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-xs font-medium text-gray-800 transition-colors"
              >
                <PhoneCall size={18} className="text-emerald-600" />
                <div>
                  <p className="font-semibold">Request Callback</p>
                  <p className="text-gray-500 text-[10px]">We'll call your registered phone number</p>
                </div>
              </a>
            </div>

            <form onSubmit={handleSubmit}>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Or send a quick message:</label>
              <textarea 
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your delivery issue..."
                className="w-full text-xs p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none mb-3 resize-none"
                required
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg text-xs transition-colors shadow-sm"
              >
                Submit Issue Ticket
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}