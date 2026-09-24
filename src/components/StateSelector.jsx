import React from 'react';

export default function StateSelector({ currentState, setCurrentState }) {
  const states = [
    { id: 'active', label: '1. Normal / Active' },
    { id: 'delayed', label: '2. Delayed Order' },
    { id: 'notReceived', label: '3. Delivered, Not Received' },
    { id: 'noTracking', label: '4. No Tracking Yet' },
  ];

  return (
    <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-lg mb-4 text-xs">
      <span className="font-semibold text-indigo-900 block mb-2">
        Evaluator Simulation Panel (Switch UI Situations):
      </span>
      <div className="grid grid-cols-2 gap-1.5">
        {states.map((s) => (
          <button
            key={s.id}
            onClick={() => setCurrentState(s.id)}
            className={`py-1.5 px-2 rounded font-medium text-left transition-colors ${
              currentState === s.id
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white text-indigo-700 hover:bg-indigo-100 border border-indigo-200'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}