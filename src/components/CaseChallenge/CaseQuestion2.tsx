import React, { useState } from 'react';
import { ViewMode } from '../../types';

interface CaseQuestion2Props {
  setView: (view: ViewMode) => void;
  selectedAnswer: string | null;
  onSelectAnswer: (ans: string) => void;
}

export const CaseQuestion2: React.FC<CaseQuestion2Props> = ({
  setView,
  selectedAnswer,
  onSelectAnswer,
}) => {
  const [submitted, setSubmitted] = useState(false);

  const options = [
    {
      id: 'A',
      label: 'Option A',
      text: 'Immediately discontinue therapy and switch to an alternative agent class.',
    },
    {
      id: 'B',
      label: 'Option B',
      text: 'Reduce the dose by 50% and recheck hepatic panel in 2 weeks.',
    },
    {
      id: 'C',
      label: 'Option C',
      text: 'Continue current dose and monitor hepatic panel weekly; discontinue if ALT >3x ULN with symptoms.',
    },
    {
      id: 'D',
      label: 'Option D',
      text: 'Add a hepatoprotective agent and continue current therapy unadjusted.',
    },
  ];

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    setSubmitted(true);
  };

  return (
    <main className="flex-grow pt-[72px] pb-[88px] md:pb-12 px-4 md:px-10 max-w-[1280px] mx-auto w-full">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {/* Progress Indicator */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-label-sm text-xs text-[#44474e]">Question 2 of 3</span>
            <span className="font-label-sm text-xs font-bold text-[#006a6a]">Efficacy & Safety (66%)</span>
          </div>
          <div className="h-2 w-full bg-[#dfe3e7] rounded-full overflow-hidden">
            <div className="h-full bg-[#006a6a] transition-all duration-500 w-2/3" />
          </div>
        </div>

        {/* Scenario Update / Question Context */}
        <div className="bg-[#f0f4f8] rounded-xl p-5 md:p-6 border border-[#dfe3e7] shadow-xs relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#490021]" />
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#006a6a] mt-1">medical_information</span>
            <div>
              <h2 className="font-headline-sm text-lg font-bold text-[#002147] mb-2">Scenario Update</h2>
              <p className="font-body-md text-sm text-[#171c1f] mb-4">
                The patient has been initiated on therapy. However, recent lab results indicate a mild elevation in hepatic enzymes (ALT 2.5x ULN). The patient remains asymptomatic and bilirubin levels are normal.
              </p>
              <div className="bg-white p-3.5 rounded-lg border border-[#c4c6cf]">
                <p className="font-headline-md text-base md:text-lg font-semibold text-[#171c1f]">
                  Based on the clinical evidence and safety profile, what is the most appropriate next step in managing this patient's therapy?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Answer Selection Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((opt) => {
            const isSelected = selectedAnswer === opt.id;
            const isCorrect = opt.id === 'C';

            let cardStyle = 'bg-white border-[#c4c6cf] hover:bg-[#f0f4f8]';
            if (submitted) {
              if (isCorrect) {
                cardStyle = 'border-[#006a6a] bg-[#90efef]/20 ring-1 ring-[#006a6a]';
              } else if (isSelected) {
                cardStyle = 'border-[#ba1a1a] bg-[#ffdad6]/30';
              } else {
                cardStyle = 'opacity-50 border-[#dfe3e7] bg-white';
              }
            } else if (isSelected) {
              cardStyle = 'border-[#006a6a] bg-[#f6fafe] ring-1 ring-[#006a6a]';
            }

            return (
              <button
                key={opt.id}
                disabled={submitted}
                onClick={() => onSelectAnswer(opt.id)}
                className={`p-4 rounded-xl border text-left flex flex-col gap-2 transition-all cursor-pointer ${cardStyle}`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold transition-colors ${
                      isSelected || (submitted && isCorrect)
                        ? 'border-[#006a6a] bg-[#006a6a] text-white'
                        : 'border-[#74777f] text-[#44474e]'
                    }`}
                  >
                    {submitted && isCorrect ? (
                      <span className="material-symbols-outlined text-sm">check</span>
                    ) : (
                      opt.id
                    )}
                  </div>
                  <span className="font-label-md text-xs font-semibold text-[#44474e]">{opt.label}</span>
                </div>
                <p className="font-body-md text-sm text-[#171c1f]">{opt.text}</p>
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        {!submitted && (
          <div className="flex justify-end">
            <button
              type="button"
              disabled={!selectedAnswer}
              onClick={handleSubmit}
              className="bg-[#006a6a] hover:bg-[#006e6e] text-white font-label-md text-sm font-semibold py-3 px-6 rounded-lg min-h-[48px] transition-colors shadow-xs disabled:opacity-50 cursor-pointer"
            >
              Submit Answer
            </button>
          </div>
        )}

        {/* Inline Feedback Section */}
        {submitted && (
          <div className="mt-4 animate-fade-in">
            <div className="bg-[#eaeef2] border-l-4 border-[#006a6a] rounded-r-xl p-5 mb-4">
              <div className="flex items-center gap-2 mb-2 text-[#006a6a]">
                <span className="material-symbols-outlined">check_circle</span>
                <h3 className="font-headline-sm text-base font-bold">Correct. Option C is the optimal approach.</h3>
              </div>
              <p className="font-body-md text-sm text-[#171c1f] mb-3">
                In the absence of clinical symptoms or elevated bilirubin, mild isolated ALT elevations (&lt;3x ULN) often resolve spontaneously or stabilize without intervention. The clinical guidelines recommend close monitoring before initiating dose modifications.
              </p>

              {/* Evidence Snapshot */}
              <div className="bg-white border border-[#c4c6cf] rounded-lg p-3.5 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#002147] mt-0.5">article</span>
                <div>
                  <h4 className="font-label-sm text-xs font-bold text-[#44474e] uppercase tracking-wider mb-1">
                    Clinical Evidence Snapshot
                  </h4>
                  <p className="font-body-md text-xs text-[#171c1f] italic">
                    "Phase 3 trial data demonstrated that 85% of patients with transient asymptomatic ALT elevations up to 3x ULN returned to baseline without requiring dose interruption."
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setView('case-q3')}
                className="bg-[#002147] hover:bg-[#2d476f] text-white font-label-md text-sm font-semibold py-3 px-6 rounded-lg min-h-[48px] transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
              >
                Next Question
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
