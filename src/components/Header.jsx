import { ArrowLeft, Bell } from 'lucide-react';

export default function Header({ orderId }) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
      <button className="p-1 rounded-full hover:bg-gray-100 text-gray-700">
        <ArrowLeft size={20} />
      </button>
      <div className="text-center">
        <h1 className="text-sm font-semibold text-gray-900">Order Tracking</h1>
        <p className="text-xs text-gray-500">{orderId}</p>
      </div>
      <button className="p-1 rounded-full hover:bg-gray-100 text-gray-700">
        <Bell size={20} />
      </button>
    </header>
  );
}