import React, { useState } from 'react';
import { ViewMode } from '../../types';

interface CaseOverviewProps {
  setView: (view: ViewMode) => void;
}

export const CaseOverview: React.FC<CaseOverviewProps> = ({ setView }) => {
  const [learningObjectivesOpen, setLearningObjectivesOpen] = useState(true);

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8 pt-20 md:pt-24 pb-24 md:pb-12">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col gap-2 text-center">
          <span className="inline-flex items-center justify-center bg-[#490021]/10 text-[#490021] font-label-sm text-xs font-semibold px-3.5 py-1 rounded-full w-max mx-auto border border-[#490021]/20">
            <span className="material-symbols-outlined text-[16px] mr-1.5">school</span>
            CME-style educational prototype
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-2xl md:text-3xl font-bold text-[#000a1e]">
            3-Minute Internal Medicine Case Challenge
          </h2>
          <p className="font-body-lg text-[#44474e] text-base md:text-lg max-w-2xl mx-auto">
            Evaluate a complex patient presentation, answer 3 clinical questions, and receive immediate feedback to unlock dosing guidelines.
          </p>
        </div>

        {/* Challenge Details Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-4 md:p-6 rounded-xl border border-[#dfe3e7] flex flex-col items-center justify-center text-center shadow-xs">
            <span className="material-symbols-outlined text-[#006a6a] text-3xl mb-2">timer</span>
            <span className="font-headline-sm text-xl font-bold text-[#000a1e]">3 mins</span>
            <span className="font-label-sm text-xs text-[#44474e]">Estimated Time</span>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-xl border border-[#dfe3e7] flex flex-col items-center justify-center text-center shadow-xs">
            <span className="material-symbols-outlined text-[#006a6a] text-3xl mb-2">quiz</span>
            <span className="font-headline-sm text-xl font-bold text-[#000a1e]">3 Questions</span>
            <span className="font-label-sm text-xs text-[#44474e]">Clinical Decision</span>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-xl border border-[#dfe3e7] flex flex-col items-center justify-center text-center shadow-xs">
            <span className="material-symbols-outlined text-[#006a6a] text-3xl mb-2">lock_open</span>
            <span className="font-headline-sm text-xl font-bold text-[#000a1e]">Dosing Guide</span>
            <span className="font-label-sm text-xs text-[#44474e]">Completion Reward</span>
          </div>
        </div>

        {/* Patient Preview Card */}
        <div className="bg-white rounded-xl border border-[#dfe3e7] shadow-sm overflow-hidden relative">
          <div className="h-1 w-full bg-[#490021]" />
          <div className="p-6">
            <h3 className="font-headline-sm text-lg font-bold text-[#000a1e] flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#44474e]">person</span>
              Patient Preview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#f0f4f8] rounded-lg text-[#000a1e]">
                  <span className="material-symbols-outlined">elderly</span>
                </div>
                <div>
                  <h4 className="font-label-md text-xs text-[#44474e]">Demographics</h4>
                  <p className="font-body-md text-sm text-[#000a1e] font-semibold">Older adult, High CV Risk</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#f0f4f8] rounded-lg text-[#000a1e]">
                  <span className="material-symbols-outlined">monitor_heart</span>
                </div>
                <div>
                  <h4 className="font-label-md text-xs text-[#44474e]">Comorbidities</h4>
                  <p className="font-body-md text-sm text-[#000a1e] font-semibold">Dyslipidaemia, Hypertension, Type 2 Diabetes</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:col-span-2">
                <div className="p-2.5 bg-[#f0f4f8] rounded-lg text-[#000a1e]">
                  <span className="material-symbols-outlined">medication</span>
                </div>
                <div>
                  <h4 className="font-label-md text-xs text-[#44474e]">Current Regimen Focus</h4>
                  <p className="font-body-md text-sm text-[#000a1e] font-semibold">Polypharmacy management</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Objectives Accordion */}
        <div className="bg-white rounded-xl border border-[#dfe3e7] overflow-hidden">
          <button
            onClick={() => setLearningObjectivesOpen(!learningObjectivesOpen)}
            className="w-full px-6 py-4 flex justify-between items-center bg-[#f0f4f8] hover:bg-[#e4e9ed] transition-colors cursor-pointer text-left"
          >
            <span className="font-headline-sm text-base font-bold text-[#000a1e]">Learning Objectives</span>
            <span className={`material-symbols-outlined text-[#000a1e] transition-transform duration-300 ${learningObjectivesOpen ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </button>
          {learningObjectivesOpen && (
            <div className="bg-white px-6 py-4 border-t border-[#dfe3e7]">
              <ul className="list-disc list-inside space-y-2 font-body-md text-sm text-[#44474e]">
                <li>Identify key risk factors for adverse events in older adults with polypharmacy.</li>
                <li>Evaluate the efficacy of combined antihypertensive and lipid-lowering therapies.</li>
                <li>Determine appropriate dosing adjustments for patients with Type 2 Diabetes and high CV risk.</li>
              </ul>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => setView('case-q1')}
            className="bg-[#006a6a] text-white font-label-md text-base font-semibold h-[48px] px-8 rounded-full hover:bg-[#006e6e] transition-all shadow-sm flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Challenge
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </main>
  );
};
