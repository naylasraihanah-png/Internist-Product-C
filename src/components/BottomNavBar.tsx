import React from 'react';
import { ViewMode } from '../types';

interface BottomNavBarProps {
  currentView: ViewMode;
  setView: (view: ViewMode) => void;
  onOpenProfile: () => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ currentView, setView, onOpenProfile }) => {
  const isHomeActive = currentView === 'dashboard' || currentView === 'verification';
  const isCasesActive = currentView.startsWith('case');
  const isEvidenceActive = currentView === 'evidence-hub' || currentView === 'multimorbidity' || currentView === 'dosing-guide' || currentView === 'webinar-registration';

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full z-50 h-[72px] bg-[#f6fafe] border-t border-[#dfe3e7] shadow-xs flex justify-around items-center px-4 pb-safe">
      {/* Home Tab */}
      <button
        onClick={() => setView('dashboard')}
        className={`flex flex-col items-center justify-center transition-all px-3 py-1 rounded-xl cursor-pointer ${
          isHomeActive
            ? 'text-[#006a6a] bg-[#90efef]/20 scale-95 font-bold'
            : 'text-[#44474e] hover:bg-[#dfe3e7]'
        }`}
      >
        <span className={`material-symbols-outlined text-[24px] ${isHomeActive ? 'filled' : ''}`}>home</span>
        <span className="font-label-sm text-[11px] mt-0.5">Home</span>
      </button>

      {/* Cases Tab */}
      <button
        onClick={() => setView('case-overview')}
        className={`flex flex-col items-center justify-center transition-all px-3 py-1 rounded-xl cursor-pointer ${
          isCasesActive
            ? 'text-[#006a6a] bg-[#90efef]/20 scale-95 font-bold'
            : 'text-[#44474e] hover:bg-[#dfe3e7]'
        }`}
      >
        <span className={`material-symbols-outlined text-[24px] ${isCasesActive ? 'filled' : ''}`}>clinical_notes</span>
        <span className="font-label-sm text-[11px] mt-0.5">Cases</span>
      </button>

      {/* Evidence Tab */}
      <button
        onClick={() => setView('evidence-hub')}
        className={`flex flex-col items-center justify-center transition-all px-3 py-1 rounded-xl cursor-pointer ${
          isEvidenceActive
            ? 'text-[#006a6a] bg-[#90efef]/20 scale-95 font-bold'
            : 'text-[#44474e] hover:bg-[#dfe3e7]'
        }`}
      >
        <span className={`material-symbols-outlined text-[24px] ${isEvidenceActive ? 'filled' : ''}`}>menu_book</span>
        <span className="font-label-sm text-[11px] mt-0.5">Evidence</span>
      </button>

      {/* Profile Tab */}
      <button
        onClick={onOpenProfile}
        className="flex flex-col items-center justify-center text-[#44474e] hover:bg-[#dfe3e7] transition-all px-3 py-1 rounded-xl cursor-pointer"
      >
        <span className="material-symbols-outlined text-[24px]">account_circle</span>
        <span className="font-label-sm text-[11px] mt-0.5">Profile</span>
      </button>
    </nav>
  );
};
