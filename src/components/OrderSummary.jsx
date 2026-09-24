import React from 'react';
import { Package } from 'lucide-react';

export default function OrderSummary({ order }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 mb-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Product Summary</span>
        <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
          Qty: {order.quantity}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <img
          src={order.productImage}
          alt={order.productName}
          className="w-16 h-16 object-cover rounded-lg border border-gray-100 flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 truncate">{order.productName}</h3>
          <p className="text-sm font-semibold text-gray-900 mt-0.5">{order.price}</p>
          <p className="text-xs text-gray-500 mt-0.5">Carrier: {order.carrier}</p>
        </div>
      </div>
    </div>
  );
}