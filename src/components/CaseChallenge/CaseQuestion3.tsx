import React, { useState } from 'react';
import { ViewMode } from '../../types';

interface CaseQuestion3Props {
  setView: (view: ViewMode) => void;
  selectedAnswer: string | null;
  onSelectAnswer: (ans: string) => void;
  onCompleteQuiz: () => void;
}

export const CaseQuestion3: React.FC<CaseQuestion3Props> = ({
  setView,
  selectedAnswer,
  onSelectAnswer,
  onCompleteQuiz,
}) => {
  const [submitted, setSubmitted] = useState(false);

  const options = [
    {
      id: 'A',
      label: 'Option A',
      text: 'Baseline liver function tests (LFTs) and creatine kinase (CK), followed by routine monitoring every 3 months for the first year.',
    },
    {
      id: 'B',
      label: 'Option B',
      text: 'Baseline LFTs and CK, but routine monitoring is only required if the patient becomes symptomatic for myopathy or hepatotoxicity.',
    },
    {
      id: 'C',
      label: 'Option C',
      text: 'No baseline LFTs or CK required prior to initiation unless the patient has a documented history of severe liver disease.',
    },
    {
      id: 'D',
      label: 'Option D',
      text: 'Monthly LFTs and CK monitoring for the first 6 months, regardless of baseline levels or symptom presentation.',
    },
  ];

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    setSubmitted(true);
  };

  const handleFinish = () => {
    onCompleteQuiz();
    setView('case-complete');
  };

  return (
    <main className="flex-grow pt-[72px] pb-[88px] md:pb-12 px-4 md:px-10 max-w-[1280px] mx-auto w-full">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {/* Progress Indicator */}
        <div>
          <div className="flex justify-between items-center mb-2 font-label-md text-sm text-[#44474e]">
            <span>Case Progress</span>
            <span className="font-bold text-[#000a1e]">3 of 3</span>
          </div>
          <div className="h-2 w-full bg-[#e4e9ed] rounded-full overflow-hidden">
            <div className="h-full bg-[#006a6a] transition-all duration-500 w-full rounded-full" />
          </div>
        </div>

        {/* Question Container */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-[#dfe3e7]">
          <div className="mb-4 flex items-center gap-2 text-[#490021] bg-[#490021]/10 px-3 py-1 rounded-full w-fit">
            <span className="material-symbols-outlined text-[20px] filled">lightbulb</span>
            <span className="font-label-sm text-xs font-semibold uppercase tracking-wider">Scenario Update</span>
          </div>

          <h2 className="font-headline-lg-mobile md:font-headline-lg text-xl md:text-2xl font-bold text-[#000a1e] mb-3">
            Considering educational requirements for Product C initiation, which of the following monitoring protocols is most critical for patient safety?
          </h2>
          <p className="font-body-md text-sm text-[#44474e] mb-6">
            Focus on the established guidelines regarding LDL-C management, cardiovascular outcomes, and hepatic/muscular tolerability profiles.
          </p>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {options.map((opt) => {
              const isSelected = selectedAnswer === opt.id;
              const isCorrect = opt.id === 'B';

              let cardStyle = 'bg-[#f6fafe] border-[#c4c6cf] hover:bg-[#f0f4f8]';
              if (submitted) {
                if (isCorrect) {
                  cardStyle = 'border-[#006a6a] bg-[#90efef]/20 ring-1 ring-[#006a6a]';
                } else if (isSelected) {
                  cardStyle = 'border-[#ba1a1a] bg-[#ffdad6]/30';
                } else {
                  cardStyle = 'opacity-50 border-[#dfe3e7] bg-white';
                }
              } else if (isSelected) {
                cardStyle = 'border-[#006a6a] bg-[#90efef]/10 ring-1 ring-[#006a6a]';
              }

              return (
                <label
                  key={opt.id}
                  onClick={() => !submitted && onSelectAnswer(opt.id)}
                  className={`cursor-pointer border rounded-xl p-4 transition-colors flex items-start gap-3 relative ${cardStyle}`}
                >
                  <input
                    type="radio"
                    name="quiz_q3"
                    value={opt.id}
                    checked={isSelected}
                    onChange={() => {}}
                    disabled={submitted}
                    className="mt-1 text-[#006a6a] focus:ring-[#006a6a] h-4 w-4 border-[#c4c6cf]"
                  />
                  <div className="flex-1">
                    <h3 className="font-headline-sm text-sm font-bold text-[#000a1e] mb-1">{opt.label}</h3>
                    <p className="font-body-md text-xs text-[#44474e]">{opt.text}</p>
                  </div>
                </label>
              );
            })}
          </div>

          {!submitted && (
            <div className="flex justify-end">
              <button
                type="button"
                disabled={!selectedAnswer}
                onClick={handleSubmit}
                className="bg-[#006a6a] text-white font-label-md text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#006e6e] transition-colors min-h-[48px] flex items-center justify-center shadow-xs cursor-pointer disabled:opacity-50"
              >
                Submit Answer
              </button>
            </div>
          )}
        </div>

        {/* Inline Feedback Container */}
        {submitted && (
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-l-[#006a6a] border border-[#dfe3e7] animate-fade-in">
            <div className="flex items-start gap-3 mb-4">
              <span className="material-symbols-outlined text-[#006a6a] text-[28px] filled">check_circle</span>
              <div>
                <h3 className="font-headline-sm text-base font-bold text-[#000a1e]">Correct Assessment</h3>
                <p className="font-body-md text-sm text-[#44474e] mt-1 leading-relaxed">
                  <strong>Option B</strong> is the correct protocol. While baseline LFTs and CK are standard practice prior to initiating Product C, current guidelines emphasize that routine, scheduled monitoring of these parameters is largely unnecessary for asymptomatic patients. Monitoring should be symptom-driven to avoid unnecessary discontinuation due to mild, transient elevations that do not confer clinical risk.
                </p>
              </div>
            </div>

            <div className="bg-[#f0f4f8] p-4 rounded-lg mb-4">
              <h4 className="font-label-md text-xs font-bold text-[#000a1e] mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">library_books</span> Clinical Rationale
              </h4>
              <p className="font-body-md text-xs text-[#44474e]">
                The safety profile regarding liver and muscle toxicity for this class of agents is well-established. Over-monitoring often leads to 'pseudo-toxicity' events where mild, non-clinically significant enzyme elevations lead to inappropriate therapy cessation, thereby increasing the patient's long-term cardiovascular risk.
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleFinish}
                className="bg-[#000a1e] text-white font-label-md text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#002147] transition-colors min-h-[48px] flex items-center justify-center shadow-xs cursor-pointer"
              >
                Complete Challenge
                <span className="material-symbols-outlined ml-2 text-[20px]">flag</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
