import React from 'react';
import { UserProfile, ViewMode } from '../types';

interface DashboardScreenProps {
  user: UserProfile;
  setView: (view: ViewMode) => void;
  onOpenSavedResources: () => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  user,
  setView,
  onOpenSavedResources,
}) => {
  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-6 md:py-8 flex flex-col gap-8 pb-24 md:pb-12 pt-20 md:pt-24">
      {/* Header & Greeting */}
      <section className="flex flex-col gap-2 items-start">
        <div className="inline-flex items-center gap-2 bg-[#ffd9e1] text-[#3f001c] px-3.5 py-1 rounded-full font-label-sm text-xs font-semibold">
          <span className="material-symbols-outlined filled text-[16px]">verified</span>
          Internist — Medium-High Priority
        </div>
        <h2 className="font-headline-lg-mobile text-2xl md:font-headline-lg md:text-3xl font-bold text-[#000a1e]">
          Welcome, {user.name || 'Dr. Internist'}.
        </h2>
        <p className="font-body-lg text-[#44474e] max-w-2xl text-base md:text-lg">
          Practical clinical education in three minutes.
        </p>
      </section>

      {/* Primary Actions Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Primary CTA Card */}
        <div className="bg-[#000a1e] text-white p-6 md:p-8 rounded-xl shadow-xs relative overflow-hidden flex flex-col justify-between min-h-[220px] c-link-accent">
          <div className="z-10 flex flex-col gap-2">
            <span className="material-symbols-outlined filled text-4xl text-[#90efef]">assignment_turned_in</span>
            <h3 className="font-headline-sm text-xl md:text-2xl font-bold">Start 3-Minute Case Challenge</h3>
            <p className="font-body-md text-white/90 text-sm md:text-base">
              Test your diagnostic skills with our latest complex case study.
            </p>
          </div>
          <button
            onClick={() => setView('case-overview')}
            className="z-10 mt-6 bg-[#006a6a] text-white px-6 py-3 rounded-lg font-label-md text-sm font-semibold hover:bg-[#006e6e] transition-colors self-start inline-flex items-center gap-2 min-h-[48px] cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            Begin Challenge
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          {/* Decorative element */}
          <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none select-none">
            <span className="material-symbols-outlined filled text-[180px]">local_hospital</span>
          </div>
        </div>

        {/* Secondary CTA Card */}
        <div className="bg-white border border-[#dfe3e7] p-6 md:p-8 rounded-xl shadow-xs flex flex-col justify-between min-h-[220px]">
          <div className="flex flex-col gap-2">
            <span className="material-symbols-outlined text-4xl text-[#006a6a]">menu_book</span>
            <h3 className="font-headline-sm text-xl md:text-2xl font-bold text-[#000a1e]">Explore Clinical Evidence</h3>
            <p className="font-body-md text-[#44474e] text-sm md:text-base">
              Review the latest pivotal trial data and guideline updates.
            </p>
          </div>
          <button
            onClick={() => setView('evidence-hub')}
            className="mt-6 border-2 border-[#006a6a] text-[#006a6a] px-6 py-3 rounded-lg font-label-md text-sm font-semibold hover:bg-[#f0f4f8] transition-colors self-start inline-flex items-center gap-2 min-h-[48px] cursor-pointer"
          >
            View Library
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </section>

      {/* Clinical Evidence Cards (Horizontal Scroll on Mobile) */}
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <h3 className="font-headline-sm text-xl font-bold text-[#000a1e]">Practical Evidence Highlights</h3>
          <button
            onClick={() => setView('evidence-hub')}
            className="text-[#006a6a] font-label-md text-sm font-semibold flex items-center hover:underline cursor-pointer"
          >
            View all
            <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
          </button>
        </div>

        <div className="flex overflow-x-auto no-scrollbar gap-4 pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3">
          {/* Card 1 */}
          <div
            onClick={() => setView('evidence-hub')}
            className="flex-none w-[280px] md:w-auto bg-white border border-[#dfe3e7] rounded-xl shadow-xs p-5 c-link-accent hover:border-[#006a6a] transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#dfe3e7] flex items-center justify-center text-[#000a1e]">
                <span className="material-symbols-outlined">trending_down</span>
              </div>
              <span className="font-label-sm text-xs text-[#44474e] uppercase tracking-wider font-semibold">
                Lipid Management
              </span>
            </div>
            <div className="font-headline-md text-2xl font-bold text-[#000a1e] mb-1 group-hover:text-[#006a6a] transition-colors">
              50%
            </div>
            <div className="font-body-md text-sm text-[#171c1f]">
              LDL-C Reduction observed in recent phase 3 trials vs placebo.
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => setView('evidence-hub')}
            className="flex-none w-[280px] md:w-auto bg-white border border-[#dfe3e7] rounded-xl shadow-xs p-5 c-link-accent hover:border-[#006a6a] transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#dfe3e7] flex items-center justify-center text-[#000a1e]">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <span className="font-label-sm text-xs text-[#44474e] uppercase tracking-wider font-semibold">
                Cardiovascular
              </span>
            </div>
            <div className="font-headline-md text-2xl font-bold text-[#000a1e] mb-1 group-hover:text-[#006a6a] transition-colors">
              45%
            </div>
            <div className="font-body-md text-sm text-[#171c1f]">
              MACE Reduction in high-risk patient populations.
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => setView('evidence-hub')}
            className="flex-none w-[280px] md:w-auto bg-white border border-[#dfe3e7] rounded-xl shadow-xs p-5 c-link-accent hover:border-[#006a6a] transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#dfe3e7] flex items-center justify-center text-[#000a1e]">
                <span className="material-symbols-outlined">monitor_heart</span>
              </div>
              <span className="font-label-sm text-xs text-[#44474e] uppercase tracking-wider font-semibold">
                Outcomes
              </span>
            </div>
            <div className="font-headline-md text-2xl font-bold text-[#000a1e] mb-1 group-hover:text-[#006a6a] transition-colors">
              20%
            </div>
            <div className="font-body-md text-sm text-[#171c1f]">
              Overall mortality reduction documented in long-term follow-up.
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Resources Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Dosing Resource (Locked / Unlocked) */}
        {user.unlockedDosingGuide ? (
          <div
            onClick={() => setView('dosing-guide')}
            className="bg-white border-2 border-[#006a6a] rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#006a6a]" />
            <div>
              <span className="material-symbols-outlined text-3xl text-[#006a6a] mb-2 group-hover:scale-110 transition-transform">
                lock_open
              </span>
              <h4 className="font-headline-sm text-lg font-bold text-[#000a1e]">Practical Dosing Guide</h4>
              <p className="font-body-md text-xs text-[#44474e] mt-1">
                Unlocked! Review Product C 10mg dosing and monitoring checklists.
              </p>
            </div>
            <div className="mt-4 flex items-center text-[#006a6a] font-label-md text-sm font-semibold">
              Open Dosing Guide <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
            </div>
          </div>
        ) : (
          <div className="bg-[#e4e9ed]/70 rounded-xl p-6 flex flex-col items-center justify-center text-center relative border border-[#dfe3e7]">
            <span className="material-symbols-outlined text-4xl text-[#74777f] mb-2">lock</span>
            <h4 className="font-label-md text-base font-semibold text-[#000a1e]">Dosing Resource</h4>
            <p className="font-body-md text-[#44474e] text-xs mt-1 mb-4">
              Complete case challenge to unlock full clinical dosing guide.
            </p>
            <button
              onClick={() => setView('case-overview')}
              className="bg-[#dfe3e7] text-[#000a1e] hover:bg-[#006a6a] hover:text-white px-4 py-2 rounded-lg font-label-sm text-xs font-semibold min-h-[44px] w-full transition-colors cursor-pointer"
            >
              Start Case to Unlock
            </button>
          </div>
        )}

        {/* Saved Resources */}
        <div
          onClick={onOpenSavedResources}
          className="bg-white border border-[#dfe3e7] rounded-xl p-6 flex flex-col justify-between hover:border-[#006a6a] transition-colors cursor-pointer group"
        >
          <div>
            <span className="material-symbols-outlined text-3xl text-[#000a1e] mb-3 group-hover:text-[#006a6a] transition-colors">
              bookmarks
            </span>
            <h4 className="font-headline-sm text-lg font-bold text-[#000a1e]">Saved Resources</h4>
            <p className="font-body-md text-[#44474e] text-xs mt-1">
              {user.savedResourcesCount} clinical guidelines saved.
            </p>
          </div>
          <div className="mt-4 flex items-center text-[#006a6a] font-label-md text-sm font-semibold">
            View list <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
          </div>
        </div>

        {/* Engagement Progress */}
        <div className="bg-white border border-[#dfe3e7] rounded-xl p-6 flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-3xl text-[#000a1e] mb-3">trending_up</span>
            <h4 className="font-headline-sm text-lg font-bold text-[#000a1e]">Engagement Progress</h4>
            <p className="font-body-md text-[#44474e] text-xs mt-1">
              You are in the top {100 - user.engagementPercentile}% of internists this month.
            </p>
          </div>
          {/* Progress Bar */}
          <div className="mt-4 w-full bg-[#e4e9ed] rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-[#006a6a] h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${user.engagementPercentile}%` }}
            />
          </div>
        </div>
      </section>

      {/* Scientific Support */}
      <section className="bg-[#f0f4f8] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#dfe3e7]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#002147] text-[#708ab5] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-2xl">forum</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-lg font-bold text-[#000a1e]">Scientific Support</h3>
            <p className="font-body-md text-xs md:text-sm text-[#44474e] mt-1">
              Need clarification on clinical data? Connect with a Medical Science Liaison.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button
            onClick={() => setView('ask-question')}
            className="bg-white border-2 border-[#006a6a] text-[#006a6a] px-6 py-2.5 rounded-lg font-label-md text-sm font-semibold hover:bg-[#f0f4f8] transition-colors min-h-[48px] whitespace-nowrap cursor-pointer text-center"
          >
            Ask Question
          </button>
          <button
            onClick={() => setView('request-discussion')}
            className="bg-[#006a6a] text-white px-6 py-2.5 rounded-lg font-label-md text-sm font-semibold hover:bg-[#006e6e] transition-colors min-h-[48px] whitespace-nowrap cursor-pointer text-center"
          >
            Request Discussion
          </button>
        </div>
      </section>
    </main>
  );
};
