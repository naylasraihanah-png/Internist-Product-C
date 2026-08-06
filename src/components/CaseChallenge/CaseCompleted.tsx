import React from 'react';
import { ViewMode } from '../../types';

interface CaseCompletedProps {
  setView: (view: ViewMode) => void;
  onResetQuiz: () => void;
}

export const CaseCompleted: React.FC<CaseCompletedProps> = ({ setView, onResetQuiz }) => {
  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-8 pt-20 md:pt-24 pb-24 md:pb-12">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {/* Result Header */}
        <div className="text-center mb-2 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#90efef] text-[#006a6a] mb-4 shadow-xs">
            <span className="material-symbols-outlined text-4xl md:text-5xl">emoji_events</span>
          </div>
          <h1 className="font-headline-lg-mobile text-2xl md:font-headline-lg md:text-3xl font-bold text-[#000a1e] mb-2">
            Challenge Completed
          </h1>
          <p className="font-body-lg text-[#44474e] text-base md:text-lg">
            Excellent work analyzing the complex presentation.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white rounded-xl border border-[#dfe3e7] p-5 shadow-xs flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-[#006a6a] text-3xl mb-1.5">score</span>
            <span className="font-headline-lg-mobile text-2xl md:text-3xl font-bold text-[#000a1e]">95%</span>
            <span className="font-label-md text-xs text-[#44474e]">Score</span>
          </div>
          <div className="bg-white rounded-xl border border-[#dfe3e7] p-5 shadow-xs flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-[#006a6a] text-3xl mb-1.5">check_circle</span>
            <span className="font-headline-lg-mobile text-2xl md:text-3xl font-bold text-[#000a1e]">9/10</span>
            <span className="font-label-md text-xs text-[#44474e]">Answers Correct</span>
          </div>
          <div className="bg-white rounded-xl border border-[#dfe3e7] p-5 shadow-xs flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-[#006a6a] text-3xl mb-1.5">timer</span>
            <span className="font-headline-lg-mobile text-2xl md:text-3xl font-bold text-[#000a1e]">4:12</span>
            <span className="font-label-md text-xs text-[#44474e]">Total Time</span>
          </div>
        </div>

        {/* Reward Banner */}
        <div className="bg-gradient-to-r from-[#006a6a] to-[#000a1e] rounded-xl p-6 shadow-md text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-4xl">lock_open</span>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="font-headline-md text-xl font-bold mb-1">Digital Dosing Guide Unlocked</h2>
              <p className="font-body-md text-xs md:text-sm opacity-90">
                You have earned access to the comprehensive clinical dosing resource based on your performance.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setView('dosing-guide')}
              className="bg-white text-[#000a1e] font-label-md text-sm font-semibold px-6 py-3 rounded-lg hover:bg-[#f6fafe] transition-colors flex items-center gap-2 whitespace-nowrap min-h-[48px] cursor-pointer shadow-xs hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="material-symbols-outlined">menu_book</span>
              Open Dosing Guide
            </button>
          </div>
        </div>

        {/* Status & System Log */}
        <div className="bg-[#f0f4f8] rounded-xl p-5 border border-[#dfe3e7]">
          <div className="flex items-center gap-3 mb-2 text-[#44474e]">
            <span className="material-symbols-outlined text-[#006a6a]">analytics</span>
            <span className="font-label-md text-xs font-semibold">Status: Engagement level updated: High Potential</span>
          </div>
          <div className="flex items-center gap-3 text-[#44474e]">
            <span className="material-symbols-outlined text-[#006a6a]">task_alt</span>
            <span className="font-label-md text-xs font-semibold">Label: Case completion recorded</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <button
            type="button"
            onClick={() => setView('evidence-hub')}
            className="w-full sm:w-auto bg-[#000a1e] text-white font-label-md text-sm font-semibold px-8 py-3 rounded-lg hover:bg-[#002147] transition-colors flex items-center justify-center gap-2 min-h-[48px] cursor-pointer"
          >
            <span className="material-symbols-outlined">science</span>
            Review Evidence
          </button>

          <button
            type="button"
            onClick={() => {
              onResetQuiz();
              setView('case-overview');
            }}
            className="w-full sm:w-auto bg-transparent border-2 border-[#006a6a] text-[#006a6a] font-label-md text-sm font-semibold px-8 py-3 rounded-lg hover:bg-[#006a6a]/10 transition-colors flex items-center justify-center gap-2 min-h-[48px] cursor-pointer"
          >
            <span className="material-symbols-outlined">clinical_notes</span>
            Try Another Case
          </button>
        </div>
      </div>
    </main>
  );
};
