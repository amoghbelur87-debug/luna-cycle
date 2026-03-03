import React from 'react';

interface AppShellProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  children: React.ReactNode;
}

const navItems = [
  { id: 'tracker', label: 'Tracker', icon: '📅' },
  { id: 'symptoms', label: 'Symptoms', icon: '🩺' },
  { id: 'mood', label: 'Mood', icon: '💭' },
  { id: 'assistant', label: 'Assistant', icon: '🤖' },
  { id: 'products', label: 'Products', icon: '🛍️' },
  { id: 'emergency', label: 'Emergency', icon: '🚨' },
];

const AppShell: React.FC<AppShellProps> = ({ currentPage, setCurrentPage, children }) => {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      <header className="bg-gradient-to-r from-pink-500 to-rose-400 text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">🌸 FemCare</h1>
        <p className="text-sm text-pink-100">Your menstrual health companion</p>
      </header>

      <main className="flex-1 p-4 max-w-2xl mx-auto w-full">
        {children}
      </main>

      <nav className="bg-white border-t border-pink-200 shadow-inner">
        <div className="flex justify-around py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex flex-col items-center text-xs px-2 py-1 rounded-lg transition-colors ${
                currentPage === item.id
                  ? 'text-pink-600 font-semibold'
                  : 'text-gray-400 hover:text-pink-400'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default AppShell;
