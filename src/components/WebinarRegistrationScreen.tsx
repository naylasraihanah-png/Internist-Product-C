import React, { useState } from 'react';
import { UserProfile, ViewMode } from '../types';

interface WebinarRegistrationScreenProps {
  user: UserProfile;
  setView: (view: ViewMode) => void;
}

export const WebinarRegistrationScreen: React.FC<WebinarRegistrationScreenProps> = ({
  user,
  setView,
}) => {
  const [fullName, setFullName] = useState(user.name || 'Dr. Jane Doe');
  const [institution, setInstitution] = useState(user.institution || 'General Hospital');
  const [hcpId, setHcpId] = useState(user.hcpId || '123456789');
  const [email, setEmail] = useState('j.doe@hospital.org');
  const [phone, setPhone] = useState('+1 (555) 234-5678');
  const [question, setQuestion] = useState('');

  const [submittedModalOpen, setSubmittedModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedModalOpen(true);
  };

  return (
    <main className="pt-20 md:pt-24 px-4 md:px-10 max-w-[1280px] mx-auto w-full pb-24 md:pb-12">
      {/* Back Button & Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-semibold text-[#44474e] mb-4">
        <button onClick={() => setView('evidence-hub')} className="hover:text-[#006a6a] cursor-pointer">
          Evidence Hub
        </button>
        <span>&gt;</span>
        <span className="text-[#000a1e]">Webinar Registration</span>
      </div>

      {/* Header */}
      <div className="bg-[#000a1e] text-white rounded-xl p-6 md:p-8 mb-8 relative overflow-hidden shadow-md">
        <div className="inline-block bg-[#ff2b89] text-white font-label-sm text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
          Live Webinar
        </div>
        <h1 className="font-headline-lg-mobile text-2xl md:font-headline-lg md:text-3xl font-bold mb-3">
          Practical Dyslipidaemia Management in Complex Internal Medicine Patients
        </h1>
        <p className="font-body-lg text-sm md:text-base text-[#dfe3e7] max-w-3xl">
          Interactive case reviews, organ-system considerations, and live Q&amp;A with leading clinical experts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Speaker, Agenda, Event Info */}
        <div className="col-span-1 md:col-span-7 flex flex-col gap-6">
          {/* Event Info Card */}
          <div className="bg-white rounded-xl border border-[#dfe3e7] p-6 shadow-xs flex flex-col gap-4">
            <h2 className="font-headline-sm text-lg font-bold text-[#000a1e] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#006a6a]">event</span>
              Event Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="font-label-sm text-xs text-[#44474e] block">Date</span>
                <span className="font-body-md text-sm font-semibold text-[#000a1e]">Thursday, Nov 16, 2023</span>
              </div>
              <div>
                <span className="font-label-sm text-xs text-[#44474e] block">Time</span>
                <span className="font-body-md text-sm font-semibold text-[#000a1e]">18:00 - 19:30 CET (90 mins)</span>
              </div>
              <div className="sm:col-span-2 bg-[#f0f4f8] p-3 rounded-lg border border-[#dfe3e7]">
                <span className="font-label-sm text-xs font-bold text-[#006a6a] uppercase">CME Accreditation</span>
                <p className="font-body-md text-xs text-[#171c1f]">1.5 Category 1 CME Credits Pending Approval</p>
              </div>
            </div>
          </div>

          {/* Key Opinion Leader */}
          <div className="bg-white rounded-xl border border-[#dfe3e7] p-6 shadow-xs flex flex-col sm:flex-row items-center gap-5">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMsZ5x_jBqV2qT4L4z3PjJ_K5jN3l8x1_R9J0fK72x34mYv2013A"
              alt="Prof. Dr. Alexander Wright"
              className="w-24 h-24 rounded-full object-cover border-2 border-[#006a6a] shrink-0"
            />
            <div>
              <span className="font-label-sm text-xs text-[#006a6a] font-bold uppercase tracking-wider block mb-0.5">
                Key Opinion Leader
              </span>
              <h3 className="font-headline-sm text-lg font-bold text-[#000a1e]">
                Prof. Dr. Alexander Wright, MD, PhD, FACP
              </h3>
              <p className="font-body-md text-xs text-[#44474e] mt-1">
                Head of Cardiology &amp; Internal Medicine, University Clinical Center. Author of over 120 peer-reviewed articles on cardiometabolic disease.
              </p>
            </div>
          </div>

          {/* Agenda */}
          <div className="bg-white rounded-xl border border-[#dfe3e7] p-6 shadow-xs">
            <h2 className="font-headline-sm text-lg font-bold text-[#000a1e] mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#006a6a]">list_alt</span>
              Webinar Agenda
            </h2>
            <ol className="space-y-3 font-body-md text-sm text-[#171c1f]">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f0f4f8] text-[#006a6a] font-bold text-xs flex items-center justify-center shrink-0">1</span>
                <span>Epidemiology of residual CV risk in multimorbid internal medicine patients</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f0f4f8] text-[#006a6a] font-bold text-xs flex items-center justify-center shrink-0">2</span>
                <span>Organ-system considerations: Renal, Hepatic, and Metabolic interactions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f0f4f8] text-[#006a6a] font-bold text-xs flex items-center justify-center shrink-0">3</span>
                <span>Trial Deep Dive: Pivotal outcomes and safety profiles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f0f4f8] text-[#006a6a] font-bold text-xs flex items-center justify-center shrink-0">4</span>
                <span>Case Workshop: Patient profiles and decision algorithms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f0f4f8] text-[#006a6a] font-bold text-xs flex items-center justify-center shrink-0">5</span>
                <span>Practical Dosing &amp; Tolerability Management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f0f4f8] text-[#006a6a] font-bold text-xs flex items-center justify-center shrink-0">6</span>
                <span>Live Interactive Q&amp;A Session with Prof. Wright</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Right Column: Registration Form */}
        <div className="col-span-1 md:col-span-5">
          <div className="bg-white rounded-xl border border-[#dfe3e7] p-6 md:p-8 shadow-sm sticky top-24">
            <h2 className="font-headline-sm text-xl font-bold text-[#000a1e] mb-1">Reserve Your Spot</h2>
            <p className="font-body-md text-xs text-[#44474e] mb-6">
              Complete the form below to receive your calendar invite and access link.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-label-md text-xs text-[#000a1e] font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#f6fafe] border border-[#dfe3e7] rounded-lg px-3 py-2 text-sm text-[#171c1f]"
                />
              </div>

              <div>
                <label className="block font-label-md text-xs text-[#000a1e] font-semibold mb-1">Institution</label>
                <input
                  type="text"
                  required
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full bg-[#f6fafe] border border-[#dfe3e7] rounded-lg px-3 py-2 text-sm text-[#171c1f]"
                />
              </div>

              <div>
                <label className="block font-label-md text-xs text-[#000a1e] font-semibold mb-1">HCP / License ID</label>
                <input
                  type="text"
                  required
                  value={hcpId}
                  onChange={(e) => setHcpId(e.target.value)}
                  className="w-full bg-[#f6fafe] border border-[#dfe3e7] rounded-lg px-3 py-2 text-sm text-[#171c1f]"
                />
              </div>

              <div>
                <label className="block font-label-md text-xs text-[#000a1e] font-semibold mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#f6fafe] border border-[#dfe3e7] rounded-lg px-3 py-2 text-sm text-[#171c1f]"
                />
              </div>

              <div>
                <label className="block font-label-md text-xs text-[#000a1e] font-semibold mb-1">Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#f6fafe] border border-[#dfe3e7] rounded-lg px-3 py-2 text-sm text-[#171c1f]"
                />
              </div>

              <div>
                <label className="block font-label-md text-xs text-[#000a1e] font-semibold mb-1">
                  Question for Speaker (Optional)
                </label>
                <textarea
                  rows={2}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask a question about dyslipidaemia management..."
                  className="w-full bg-[#f6fafe] border border-[#dfe3e7] rounded-lg px-3 py-2 text-sm text-[#171c1f]"
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] bg-[#006a6a] hover:bg-[#006e6e] text-white font-label-md text-sm font-semibold rounded-lg transition-colors cursor-pointer shadow-xs mt-2"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Registration Successful Modal */}
      {submittedModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-[#000a1e]/50 backdrop-blur-xs" onClick={() => setSubmittedModalOpen(false)} />
          <div className="relative bg-white w-full max-w-md rounded-xl shadow-2xl p-6 z-10 text-center animate-scale-in">
            <div className="w-16 h-16 rounded-full bg-[#90efef] text-[#006a6a] flex items-center justify-center mx-auto mb-4 font-bold">
              <span className="material-symbols-outlined text-4xl">event_available</span>
            </div>
            <h3 className="font-headline-sm text-xl font-bold text-[#000a1e] mb-2">Registration Successful</h3>
            <p className="font-body-md text-xs text-[#44474e] mb-6">
              Your spot has been reserved for Thursday, Nov 16 at 18:00 CET. A confirmation email with calendar invite has been sent to <strong>{email}</strong>.
            </p>
            <button
              onClick={() => {
                setSubmittedModalOpen(false);
                setView('evidence-hub');
              }}
              className="w-full py-3 bg-[#006a6a] text-white font-label-md text-sm font-semibold rounded-lg hover:bg-[#006e6e] cursor-pointer"
            >
              Return to Evidence Hub
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
