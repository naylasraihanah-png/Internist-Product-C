import React, { useState } from 'react';
import { ViewMode } from '../types';

interface DosingGuideScreenProps {
  setView: (view: ViewMode) => void;
}

export const DosingGuideScreen: React.FC<DosingGuideScreenProps> = ({ setView }) => {
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const [goalsOpen, setGoalsOpen] = useState(false);
  const [comorbOpen, setComorbOpen] = useState(false);

  const [checklist, setChecklist] = useState({
    week2: false,
    month3: false,
    month6: false,
  });

  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const toggleCheck = (key: 'week2' | 'month3' | 'month6') => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleConfirmDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      setDownloadModalOpen(false);
    }, 1500);
  };

  return (
    <main className="pt-20 md:pt-24 px-4 md:px-10 max-w-[1280px] mx-auto w-full pb-24 md:pb-12">
      {/* Page Header */}
      <div className="py-6 border-b border-[#dfe3e7] mb-8">
        <h1 className="font-headline-lg-mobile text-2xl md:font-headline-lg md:text-3xl font-bold text-[#000a1e] mb-2">
          Practical Product C Dosing Guide
        </h1>
        <p className="font-body-md text-sm md:text-base text-[#44474e] max-w-3xl">
          Comprehensive guide for initiating and monitoring Product C 10mg therapy in appropriate clinical scenarios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Content Area */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-6">
          {/* Dosing Core Info */}
          <div className="bg-white rounded-xl shadow-sm border border-[#f0f4f8] p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#ff2b89]" /> {/* Magenta Accent */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="font-headline-sm text-lg font-bold text-[#000a1e] mb-2">Recommended Starting Dose</h2>
                <div className="flex items-center gap-3">
                  <span className="bg-[#002147] text-white font-headline-md text-xl md:text-2xl px-3.5 py-1 rounded-lg font-bold">
                    10mg
                  </span>
                  <span className="font-body-md text-sm font-semibold text-[#44474e]">Once Daily</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#006a6a] text-4xl filled">medication</span>
            </div>
            <p className="font-body-md text-sm md:text-base text-[#171c1f]">
              Administer orally, with or without food. Ensure patient understands the importance of daily adherence for optimal outcomes.
            </p>
          </div>

          {/* Assessment Considerations (Accordion) */}
          <div className="bg-white rounded-xl shadow-sm border border-[#f0f4f8] overflow-hidden">
            <button
              onClick={() => setAssessmentOpen(!assessmentOpen)}
              className="w-full flex items-center justify-between p-5 bg-[#f0f4f8] hover:bg-[#eaeef2] transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#000a1e]">assignment_ind</span>
                <h3 className="font-headline-sm text-base font-bold text-[#000a1e]">Pre-Treatment Assessment</h3>
              </div>
              <span className={`material-symbols-outlined text-[#000a1e] transition-transform duration-300 ${assessmentOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>
            {assessmentOpen && (
              <div className="p-5 border-t border-[#dfe3e7] bg-white">
                <ul className="list-disc pl-5 font-body-md text-sm text-[#44474e] space-y-2">
                  <li>Review complete medical history, focusing on renal and hepatic function.</li>
                  <li>Assess current concomitant medications to avoid potential CYP3A4 interactions.</li>
                  <li>Evaluate baseline vitals, specifically blood pressure and heart rate.</li>
                  <li>Confirm absence of contraindications as listed in full prescribing information.</li>
                </ul>
              </div>
            )}
          </div>

          {/* Treatment Goals (Accordion) */}
          <div className="bg-white rounded-xl shadow-sm border border-[#f0f4f8] overflow-hidden">
            <button
              onClick={() => setGoalsOpen(!goalsOpen)}
              className="w-full flex items-center justify-between p-5 bg-[#f0f4f8] hover:bg-[#eaeef2] transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#000a1e]">flag</span>
                <h3 className="font-headline-sm text-base font-bold text-[#000a1e]">Treatment Goals & Efficacy</h3>
              </div>
              <span className={`material-symbols-outlined text-[#000a1e] transition-transform duration-300 ${goalsOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>
            {goalsOpen && (
              <div className="p-5 border-t border-[#dfe3e7] bg-white">
                <ul className="list-disc pl-5 font-body-md text-sm text-[#44474e] space-y-2">
                  <li>Achieve target biomarker reduction within 12 weeks of initiation.</li>
                  <li>Stabilize disease progression markers relative to baseline.</li>
                  <li>Improve patient-reported quality of life metrics (QoL survey).</li>
                </ul>
              </div>
            )}
          </div>

          {/* Comorbidities (Accordion) */}
          <div className="bg-white rounded-xl shadow-sm border border-[#f0f4f8] overflow-hidden">
            <button
              onClick={() => setComorbOpen(!comorbOpen)}
              className="w-full flex items-center justify-between p-5 bg-[#f0f4f8] hover:bg-[#eaeef2] transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#000a1e]">vital_signs</span>
                <h3 className="font-headline-sm text-base font-bold text-[#000a1e]">Comorbidity Considerations</h3>
              </div>
              <span className={`material-symbols-outlined text-[#000a1e] transition-transform duration-300 ${comorbOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </button>
            {comorbOpen && (
              <div className="p-5 border-t border-[#dfe3e7] bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#f6fafe] p-4 rounded-lg border border-[#dfe3e7]">
                    <h4 className="font-label-md text-sm font-bold text-[#000a1e] mb-1">Renal Impairment</h4>
                    <p className="font-body-md text-xs text-[#44474e]">
                      No dose adjustment required for mild to moderate impairment (eGFR &gt; 30 mL/min). Use caution in severe impairment.
                    </p>
                  </div>
                  <div className="bg-[#f6fafe] p-4 rounded-lg border border-[#dfe3e7]">
                    <h4 className="font-label-md text-sm font-bold text-[#000a1e] mb-1">Hepatic Impairment</h4>
                    <p className="font-body-md text-xs text-[#44474e]">
                      Not recommended for use in patients with severe hepatic impairment (Child-Pugh Class C).
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Monitoring Checklist */}
          <div className="bg-white rounded-xl shadow-sm border border-[#f0f4f8] p-6 relative">
            <h3 className="font-headline-sm text-lg font-bold text-[#000a1e] mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined">checklist</span>
              Monitoring Checklist
            </h3>
            <p className="font-body-md text-xs text-[#44474e] mb-4">
              Track key milestones during the first 6 months of therapy.
            </p>

            <div className="space-y-3">
              {/* Checklist Item 1 */}
              <label
                onClick={() => toggleCheck('week2')}
                className="flex items-start gap-3 cursor-pointer p-2.5 rounded-lg hover:bg-[#f0f4f8] transition-colors"
              >
                <div
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors mt-0.5 ${
                    checklist.week2 ? 'bg-[#90efef] border-[#006a6a]' : 'border-[#74777f] bg-white'
                  }`}
                >
                  {checklist.week2 && (
                    <span className="material-symbols-outlined text-[#006a6a] text-sm font-bold">check</span>
                  )}
                </div>
                <div>
                  <h4 className={`font-label-md text-sm font-bold ${checklist.week2 ? 'text-[#006a6a] line-through' : 'text-[#171c1f]'}`}>
                    Week 2: Initial Tolerability Check
                  </h4>
                  <p className="font-body-md text-xs text-[#44474e]">Assess for GI upset or unusual fatigue.</p>
                </div>
              </label>

              {/* Checklist Item 2 */}
              <label
                onClick={() => toggleCheck('month3')}
                className="flex items-start gap-3 cursor-pointer p-2.5 rounded-lg hover:bg-[#f0f4f8] transition-colors"
              >
                <div
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors mt-0.5 ${
                    checklist.month3 ? 'bg-[#90efef] border-[#006a6a]' : 'border-[#74777f] bg-white'
                  }`}
                >
                  {checklist.month3 && (
                    <span className="material-symbols-outlined text-[#006a6a] text-sm font-bold">check</span>
                  )}
                </div>
                <div>
                  <h4 className={`font-label-md text-sm font-bold ${checklist.month3 ? 'text-[#006a6a] line-through' : 'text-[#171c1f]'}`}>
                    Month 3: Biomarker Panel
                  </h4>
                  <p className="font-body-md text-xs text-[#44474e]">
                    Complete comprehensive metabolic panel and specific disease markers.
                  </p>
                </div>
              </label>

              {/* Checklist Item 3 */}
              <label
                onClick={() => toggleCheck('month6')}
                className="flex items-start gap-3 cursor-pointer p-2.5 rounded-lg hover:bg-[#f0f4f8] transition-colors"
              >
                <div
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors mt-0.5 ${
                    checklist.month6 ? 'bg-[#90efef] border-[#006a6a]' : 'border-[#74777f] bg-white'
                  }`}
                >
                  {checklist.month6 && (
                    <span className="material-symbols-outlined text-[#006a6a] text-sm font-bold">check</span>
                  )}
                </div>
                <div>
                  <h4 className={`font-label-md text-sm font-bold ${checklist.month6 ? 'text-[#006a6a] line-through' : 'text-[#171c1f]'}`}>
                    Month 6: Clinical Re-evaluation
                  </h4>
                  <p className="font-body-md text-xs text-[#44474e]">
                    Determine continuation of therapy based on efficacy and tolerability.
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Sidebar / Action Area */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-5">
          {/* Action Cards */}
          <div className="bg-white rounded-xl shadow-sm border border-[#f0f4f8] p-5 flex flex-col gap-3">
            <button
              onClick={() => setDownloadModalOpen(true)}
              className="w-full min-h-[48px] bg-[#006a6a] hover:bg-[#004f4f] text-white font-label-md text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <span className="material-symbols-outlined">download</span>
              Download Pocket Guide
            </button>
            <button
              onClick={() => setView('ask-question')}
              className="w-full min-h-[48px] bg-transparent border-2 border-[#006a6a] text-[#006a6a] hover:bg-[#90efef]/20 font-label-md text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined">contact_support</span>
              Ask Medical Information
            </button>
          </div>

          {/* Disclaimer */}
          <div className="bg-[#ffdad6]/20 p-4 rounded-xl border border-[#ffdad6]">
            <div className="flex items-start gap-2 text-[#44474e]">
              <span className="material-symbols-outlined text-[#ba1a1a] mt-0.5">warning</span>
              <div>
                <h4 className="font-label-sm text-xs font-bold text-[#171c1f] mb-1 uppercase tracking-wider">
                  Disclaimer
                </h4>
                <p className="font-label-sm text-xs leading-relaxed text-[#44474e]">
                  This guide is intended for reference only and is not a comprehensive prescribing algorithm. Treatment decisions should be based on clinical judgment. Please refer to the full prescribing information before initiating therapy.
                </p>
              </div>
            </div>
          </div>

          {/* Contextual Image Placeholder */}
          <div className="rounded-xl overflow-hidden shadow-sm h-48 w-full border border-[#dfe3e7] relative group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsoAm7KvEvQNeN9wIrb3m6hzCKaYKNJw55BgJfNGnpDbZxB6jz9y2SkONJpW9maUByPoGdwLM0O7HmKiKEFqyPIbIAveM2dor-XHN4v88lIEiL7ZjvDZB2wNERZt3suNgck17wmeZ5Z619fk5nHCyqXumFUwVympk8eX5LOqxvcvlL7_GMW2Gvdw9fbbKV81M4RtoqAAOjUPYsa0gBn_O9MPAX8EZC5H4JbAxAlrR7A7-Ecnz7LW-H"
              alt="Physician reviewing digital charts on tablet"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Download Modal */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-[#000a1e]/40 backdrop-blur-xs"
            onClick={() => setDownloadModalOpen(false)}
          />
          <div className="relative bg-white w-full max-w-md rounded-xl shadow-2xl p-6 z-10 animate-scale-in">
            <button
              onClick={() => setDownloadModalOpen(false)}
              className="absolute top-4 right-4 text-[#44474e] hover:text-[#000a1e] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#90efef] rounded-full flex items-center justify-center mx-auto mb-4 text-[#006a6a]">
                <span className="material-symbols-outlined text-3xl">file_download</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-[#000a1e] mb-1">Download Pocket Guide</h3>
              <p className="font-body-md text-xs text-[#44474e]">
                Get the quick-reference PDF for Product C 10mg dosing and clinical management.
              </p>
            </div>

            {downloadSuccess ? (
              <div className="p-3 bg-[#90efef]/40 text-[#006e6e] rounded-lg text-center font-semibold text-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-base">check_circle</span>
                Downloading Pocket Guide PDF...
              </div>
            ) : (
              <button
                onClick={handleConfirmDownload}
                className="w-full min-h-[48px] bg-[#006a6a] hover:bg-[#004f4f] text-white font-label-md text-sm font-semibold rounded-lg flex items-center justify-center transition-colors cursor-pointer"
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
