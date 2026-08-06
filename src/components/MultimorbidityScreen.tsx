import React, { useState } from 'react';
import { ViewMode } from '../types';

interface MultimorbidityScreenProps {
  setView: (view: ViewMode) => void;
}

export const MultimorbidityScreen: React.FC<MultimorbidityScreenProps> = ({ setView }) => {
  const [accordionOpen, setAccordionOpen] = useState(true);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setDownloadModalOpen(false);
    }, 1500);
  };

  return (
    <main className="pt-20 md:pt-24 px-4 md:px-10 max-w-[1280px] mx-auto w-full pb-24 md:pb-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-semibold text-[#44474e] mb-4">
        <button onClick={() => setView('evidence-hub')} className="hover:text-[#006a6a] cursor-pointer">
          Evidence Hub
        </button>
        <span>&gt;</span>
        <span className="text-[#000a1e]">Multimorbidity</span>
      </div>

      {/* Article Header */}
      <div className="py-6 border-b border-[#dfe3e7] mb-8">
        <span className="inline-block bg-[#f0f4f8] text-[#006a6a] font-label-sm text-xs font-semibold px-3 py-1 rounded-md mb-2">
          Clinical Guidance Article
        </span>
        <h1 className="font-headline-lg-mobile text-2xl md:font-headline-lg md:text-3xl font-bold text-[#000a1e] mb-3">
          Managing Dyslipidaemia in Multimorbid Patients
        </h1>
        <p className="font-body-lg text-sm md:text-base text-[#44474e] max-w-3xl">
          A practical guide for internal medicine specialists balancing polypharmacy, renal considerations, and long-term cardiovascular risk reduction.
        </p>
      </div>

      {/* Organ-System Considerations (4 Cards Grid with Magenta Top Accents) */}
      <section className="mb-8">
        <h2 className="font-headline-sm text-xl font-bold text-[#000a1e] mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#006a6a]">organ_biomedical</span>
          Organ-System Considerations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-[#dfe3e7] p-5 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#ff2b89]" />
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-[#f0f4f8] text-[#000a1e] rounded-lg shrink-0">
                <span className="material-symbols-outlined">cardiology</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-base font-bold text-[#000a1e] mb-1">
                  Hypertension &amp; Vascular Stiffening
                </h3>
                <p className="font-body-md text-xs md:text-sm text-[#44474e]">
                  Combined RAS inhibition and high-potency lipid reduction demonstrates synergistic MACE risk reduction in patient cohorts with resistant hypertension.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-[#dfe3e7] p-5 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#ff2b89]" />
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-[#f0f4f8] text-[#000a1e] rounded-lg shrink-0">
                <span className="material-symbols-outlined">bloodglucose</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-base font-bold text-[#000a1e] mb-1">
                  Type 2 Diabetes &amp; Metabolic Risk
                </h3>
                <p className="font-body-md text-xs md:text-sm text-[#44474e]">
                  Comprehensive metabolic control paired with intensive LDL-C targeting reduces diabetic micro- and macrovascular complications by up to 40%.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl border border-[#dfe3e7] p-5 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#ff2b89]" />
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-[#f0f4f8] text-[#000a1e] rounded-lg shrink-0">
                <span className="material-symbols-outlined">nephrology</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-base font-bold text-[#000a1e] mb-1">
                  Renal Function &amp; eGFR Safety
                </h3>
                <p className="font-body-md text-xs md:text-sm text-[#44474e]">
                  Dose calibration guidelines for eGFR &lt; 45 mL/min/1.73m² with regular electrolyte monitoring and avoidance of nephrotoxic drug interactions.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl border border-[#dfe3e7] p-5 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#ff2b89]" />
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-[#f0f4f8] text-[#000a1e] rounded-lg shrink-0">
                <span className="material-symbols-outlined">monitor_heart</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-base font-bold text-[#000a1e] mb-1">
                  Cumulative CV Risk Profile
                </h3>
                <p className="font-body-md text-xs md:text-sm text-[#44474e]">
                  Stratified approach for patients with previous ACS, multi-vessel CAD, or peripheral artery disease to reach stringent &lt; 55 mg/dL LDL-C goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Polypharmacy & Safety Accordion */}
      <section className="bg-white rounded-xl border border-[#dfe3e7] overflow-hidden mb-8 shadow-xs">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="w-full flex items-center justify-between p-5 bg-[#f0f4f8] hover:bg-[#eaeef2] transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#000a1e]">medication_liquid</span>
            <h3 className="font-headline-sm text-base font-bold text-[#000a1e]">Polypharmacy &amp; Organ Safety Matrix</h3>
          </div>
          <span className={`material-symbols-outlined text-[#000a1e] transition-transform duration-300 ${accordionOpen ? 'rotate-180' : ''}`}>
            expand_more
          </span>
        </button>
        {accordionOpen && (
          <div className="p-6 space-y-4 border-t border-[#dfe3e7]">
            <div className="bg-[#f6fafe] p-4 rounded-lg border border-[#dfe3e7]">
              <h4 className="font-label-md text-sm font-bold text-[#000a1e] mb-1">CYP3A4 Co-administration</h4>
              <p className="font-body-md text-xs text-[#44474e]">
                Avoid concurrent strong CYP3A4 inhibitors. When mild inhibitors are required, monitor hepatic markers at weeks 4 and 12 post-initiation.
              </p>
            </div>
            <div className="bg-[#f6fafe] p-4 rounded-lg border border-[#dfe3e7]">
              <h4 className="font-label-md text-sm font-bold text-[#000a1e] mb-1">SGLT2i and GLP-1RA Synergy</h4>
              <p className="font-body-md text-xs text-[#44474e]">
                Lipid lowering works additively with SGLT2 inhibitors and GLP-1 receptor agonists to provide renal protection and cardiovascular event reduction.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Adherence Alert Banner */}
      <div className="bg-[#90efef]/30 rounded-xl p-6 border border-[#006a6a]/30 mb-8 flex items-start gap-4">
        <span className="material-symbols-outlined text-[#006a6a] text-3xl shrink-0 mt-0.5">verified</span>
        <div>
          <h3 className="font-headline-sm text-base font-bold text-[#002020] mb-1">
            Adherence Strategy Insight
          </h3>
          <p className="font-body-md text-xs md:text-sm text-[#004f4f]">
            Fixed-dose combination strategies and simplified once-daily regimens improve 12-month patient compliance by up to 38% in complex multimorbid internal medicine cohorts.
          </p>
        </div>
      </div>

      {/* Patient Discussion Prompts */}
      <section className="bg-white rounded-xl border border-[#dfe3e7] p-6 shadow-xs mb-8">
        <h3 className="font-headline-sm text-lg font-bold text-[#000a1e] mb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#006a6a]">chat</span>
          Patient Discussion Prompts
        </h3>
        <ul className="space-y-2 font-body-md text-xs md:text-sm text-[#44474e] list-disc list-inside">
          <li>"Managing your cholesterol is an active partner to your diabetes and blood pressure medications."</li>
          <li>"The once-daily 10mg dose simplifies your schedule without adding pill burden."</li>
          <li>"Routine lab checks ensure we protect your liver and kidney function while shielding your heart."</li>
        </ul>
      </section>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#f0f4f8] p-6 rounded-xl border border-[#dfe3e7]">
        <div className="text-center sm:text-left">
          <h4 className="font-headline-sm text-base font-bold text-[#000a1e]">Need quick reference materials?</h4>
          <p className="font-body-md text-xs text-[#44474e]">Download the complete multimorbidity management checklist.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setDownloadModalOpen(true)}
            className="bg-[#006a6a] text-white font-label-md text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-[#006e6e] transition-colors cursor-pointer shadow-xs min-h-[48px] flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            Download Checklist
          </button>
          <button
            onClick={() => setView('case-overview')}
            className="bg-white border border-[#dfe3e7] text-[#000a1e] font-label-md text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-[#eaeef2] transition-colors cursor-pointer min-h-[48px] flex items-center gap-2"
          >
            Explore Another Case
          </button>
        </div>
      </div>

      {/* Download Modal */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-[#000a1e]/50 backdrop-blur-xs" onClick={() => setDownloadModalOpen(false)} />
          <div className="relative bg-white w-full max-w-md rounded-xl shadow-2xl p-6 z-10 animate-scale-in text-center">
            <button
              onClick={() => setDownloadModalOpen(false)}
              className="absolute top-4 right-4 text-[#44474e] hover:text-[#000a1e] cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="w-16 h-16 bg-[#90efef] text-[#006a6a] rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
            </div>
            <h3 className="font-headline-sm text-lg font-bold text-[#000a1e] mb-1">Multimorbidity Management Checklist</h3>
            <p className="font-body-md text-xs text-[#44474e] mb-6">
              Clinical decision algorithms and renal/hepatic safety tables in PDF format.
            </p>

            {downloadSuccess ? (
              <div className="p-3 bg-[#90efef]/40 text-[#006e6e] rounded-lg text-center font-semibold text-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-base">check_circle</span>
                Downloading PDF Checklist...
              </div>
            ) : (
              <button
                onClick={handleDownload}
                className="w-full py-3 bg-[#006a6a] hover:bg-[#006e6e] text-white font-label-md text-sm font-semibold rounded-lg cursor-pointer"
              >
                Confirm Download
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
};
