import React, { useState } from 'react';
import { ViewMode } from '../../types';

interface CaseQuestion1Props {
  setView: (view: ViewMode) => void;
  selectedAnswer: string | null;
  onSelectAnswer: (ans: string) => void;
}

export const CaseQuestion1: React.FC<CaseQuestion1Props> = ({
  setView,
  selectedAnswer,
  onSelectAnswer,
}) => {
  const [errorText, setErrorText] = useState('');

  const options = [
    {
      id: 'A',
      text: 'Initiate high-intensity statin therapy to reduce LDL-C below 70 mg/dL.',
    },
    {
      id: 'B',
      text: 'Maintain current therapy as LDL-C is within acceptable range for his age group.',
    },
    {
      id: 'C',
      text: 'Add Ezetimibe immediately without altering current medication regimen.',
    },
    {
      id: 'D',
      text: 'Discontinue Aspirin to reduce bleeding risk in older adults.',
    },
  ];

  const handleSubmit = () => {
    if (!selectedAnswer) {
      setErrorText('Please select an answer option to proceed.');
      return;
    }
    setView('case-q2');
  };

  return (
    <main className="flex-grow pt-[72px] pb-[88px] md:pb-12 px-4 md:px-10 max-w-[1280px] mx-auto w-full">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-label-md text-sm text-[#44474e]">Question 1 of 3</span>
            <span className="font-label-sm text-xs font-bold text-[#006a6a]">33%</span>
          </div>
          <div className="w-full bg-[#e4e9ed] rounded-full h-2 overflow-hidden">
            <div className="bg-[#006a6a] h-2 rounded-full transition-all duration-500" style={{ width: '33%' }} />
          </div>
        </div>

        {/* Case Context / Scenario */}
        <section className="bg-white rounded-xl border border-[#dfe3e7] p-5 md:p-6 relative overflow-hidden shadow-xs">
          {/* Magenta C-LINK accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#490021]" />
          <div className="flex items-start gap-4">
            <div className="bg-[#002147] text-white p-3 rounded-lg flex-shrink-0">
              <span className="material-symbols-outlined">person_search</span>
            </div>
            <div>
              <h2 className="font-headline-sm text-lg font-bold text-[#000a1e] mb-2">Patient Scenario</h2>
              <p className="font-body-md text-sm md:text-base text-[#171c1f] leading-relaxed">
                A 72-year-old male presents with a history of type 2 diabetes mellitus, hypertension, and a recent non-ST-segment elevation myocardial infarction (NSTEMI) 6 months ago. His current medications include Metformin, Lisinopril, and Aspirin. Recent lipid panel shows LDL-C at 115 mg/dL.
              </p>
            </div>
          </div>
        </section>

        {/* Question Section */}
        <section>
          <h3 className="font-headline-lg-mobile md:font-headline-lg text-xl md:text-2xl font-bold text-[#000a1e] mb-4">
            Identify the main cardiovascular and lipid-management concern for this patient.
          </h3>

          {errorText && (
            <p className="text-[#ba1a1a] text-sm mb-3 font-medium flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">warning</span> {errorText}
            </p>
          )}

          {/* Answer Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {options.map((opt) => {
              const isSelected = selectedAnswer === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => {
                    setErrorText('');
                    onSelectAnswer(opt.id);
                  }}
                  className={`cursor-pointer rounded-xl border-2 p-5 transition-all flex items-start gap-4 active-shadow ${
                    isSelected
                      ? 'border-[#006a6a] bg-[#90efef]/10 shadow-sm'
                      : 'border-[#dfe3e7] bg-white hover:bg-[#f0f4f8]'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                      isSelected ? 'border-[#006a6a] bg-[#006a6a]' : 'border-[#74777f] bg-transparent'
                    }`}
                  >
                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                  </div>
                  <div>
                    <span className="font-headline-sm text-base font-bold text-[#000a1e] block mb-1">
                      {opt.id}
                    </span>
                    <span className="font-body-md text-sm text-[#171c1f]">{opt.text}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Button Area */}
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-[#006a6a] text-white font-label-md text-sm font-semibold px-8 py-3 min-h-[48px] rounded-lg hover:bg-[#006e6e] transition-all cursor-pointer shadow-xs active:scale-95"
            >
              Submit Answer
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};
