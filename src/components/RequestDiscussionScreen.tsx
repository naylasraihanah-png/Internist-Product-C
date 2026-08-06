import React, { useState } from 'react';
import { UserProfile, ViewMode } from '../types';

interface RequestDiscussionScreenProps {
  user: UserProfile;
  setView: (view: ViewMode) => void;
}

export const RequestDiscussionScreen: React.FC<RequestDiscussionScreenProps> = ({ user, setView }) => {
  const [fullName, setFullName] = useState(user.name || 'Dr. Jane Doe');
  const [institution, setInstitution] = useState(user.institution || 'General Hospital');
  const [format, setFormat] = useState<'virtual' | 'phone' | 'in-person' | 'email'>('virtual');
  const [dateTime, setDateTime] = useState('2023-11-20T14:00');
  const [topic, setTopic] = useState('Multimorbid Risk Stratification');
  const [contextText, setContextText] = useState(
    'Requesting a brief 15-minute virtual meeting to review Product C outcomes data in elderly patients with T2D and renal impairment.'
  );

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-20 md:pt-24 px-4 md:px-10 max-w-[1280px] mx-auto w-full pb-24 md:pb-12">
      <div className="max-w-3xl mx-auto">
        {!submitted ? (
          <>
            {/* Header */}
            <div className="py-6 border-b border-[#dfe3e7] mb-6">
              <h1 className="font-headline-lg-mobile text-2xl md:font-headline-lg md:text-3xl font-bold text-[#000a1e] mb-2">
                Request a Scientific Discussion
              </h1>
              <p className="font-body-md text-sm md:text-base text-[#44474e]">
                Schedule a dedicated 1-on-1 discussion with a Medical Science Liaison (MSL) to review clinical data or complex patient profiles.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-[#dfe3e7] p-6 md:p-8 shadow-xs space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-md text-xs font-semibold text-[#000a1e] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#f6fafe] border border-[#dfe3e7] rounded-lg px-3 py-2 text-sm text-[#171c1f]"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-xs font-semibold text-[#000a1e] mb-1">Institution</label>
                  <input
                    type="text"
                    required
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="w-full bg-[#f6fafe] border border-[#dfe3e7] rounded-lg px-3 py-2 text-sm text-[#171c1f]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-label-md text-xs font-semibold text-[#000a1e] mb-2">Discussion Format</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className={`p-3 rounded-lg border flex items-center gap-3 cursor-pointer transition-colors ${format === 'virtual' ? 'border-[#006a6a] bg-[#90efef]/20 font-bold' : 'border-[#dfe3e7] bg-[#f6fafe]'}`}>
                    <input
                      type="radio"
                      name="format"
                      checked={format === 'virtual'}
                      onChange={() => setFormat('virtual')}
                      className="text-[#006a6a]"
                    />
                    <span className="material-symbols-outlined text-[#006a6a]">videocam</span>
                    <span className="text-xs text-[#000a1e]">Virtual Meeting (Zoom/Teams)</span>
                  </label>

                  <label className={`p-3 rounded-lg border flex items-center gap-3 cursor-pointer transition-colors ${format === 'phone' ? 'border-[#006a6a] bg-[#90efef]/20 font-bold' : 'border-[#dfe3e7] bg-[#f6fafe]'}`}>
                    <input
                      type="radio"
                      name="format"
                      checked={format === 'phone'}
                      onChange={() => setFormat('phone')}
                      className="text-[#006a6a]"
                    />
                    <span className="material-symbols-outlined text-[#006a6a]">call</span>
                    <span className="text-xs text-[#000a1e]">Phone Call</span>
                  </label>

                  <label className={`p-3 rounded-lg border flex items-center gap-3 cursor-pointer transition-colors ${format === 'in-person' ? 'border-[#006a6a] bg-[#90efef]/20 font-bold' : 'border-[#dfe3e7] bg-[#f6fafe]'}`}>
                    <input
                      type="radio"
                      name="format"
                      checked={format === 'in-person'}
                      onChange={() => setFormat('in-person')}
                      className="text-[#006a6a]"
                    />
                    <span className="material-symbols-outlined text-[#006a6a]">groups</span>
                    <span className="text-xs text-[#000a1e]">In-Person Office Visit</span>
                  </label>

                  <label className={`p-3 rounded-lg border flex items-center gap-3 cursor-pointer transition-colors ${format === 'email' ? 'border-[#006a6a] bg-[#90efef]/20 font-bold' : 'border-[#dfe3e7] bg-[#f6fafe]'}`}>
                    <input
                      type="radio"
                      name="format"
                      checked={format === 'email'}
                      onChange={() => setFormat('email')}
                      className="text-[#006a6a]"
                    />
                    <span className="material-symbols-outlined text-[#006a6a]">mail</span>
                    <span className="text-xs text-[#000a1e]">Email Summary &amp; Slides</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-label-md text-xs font-semibold text-[#000a1e] mb-1">Preferred Date &amp; Time</label>
                <input
                  type="datetime-local"
                  required
                  value={dateTime}
                  onChange={(e) => setDateTime(e.target.value)}
                  className="w-full bg-[#f6fafe] border border-[#dfe3e7] rounded-lg px-3 py-2 text-sm text-[#171c1f]"
                />
              </div>

              <div>
                <label className="block font-label-md text-xs font-semibold text-[#000a1e] mb-1">Primary Topic</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-[#f6fafe] border border-[#dfe3e7] rounded-lg px-3 py-2 text-sm text-[#171c1f] cursor-pointer"
                >
                  <option value="Multimorbid Risk Stratification">Multimorbid Risk Stratification</option>
                  <option value="Pivotal CV Outcomes Trial Review">Pivotal CV Outcomes Trial Review</option>
                  <option value="Renal & Hepatic Dosing Adjustments">Renal &amp; Hepatic Dosing Adjustments</option>
                  <option value="Hospital Formulary Data Request">Hospital Formulary Data Request</option>
                </select>
              </div>

              <div>
                <label className="block font-label-md text-xs font-semibold text-[#000a1e] mb-1">Discussion Context / Specific Agenda</label>
                <textarea
                  rows={3}
                  value={contextText}
                  onChange={(e) => setContextText(e.target.value)}
                  className="w-full bg-[#f6fafe] border border-[#dfe3e7] rounded-lg p-3 text-sm text-[#171c1f]"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#006a6a] hover:bg-[#006e6e] text-white font-label-md text-sm font-semibold px-8 py-3 rounded-lg transition-colors cursor-pointer shadow-xs min-h-[48px] flex items-center gap-2"
                >
                  Submit Discussion Request
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="bg-white rounded-xl border border-[#dfe3e7] p-8 text-center shadow-md animate-fade-in my-8">
            <div className="w-20 h-20 bg-[#90efef] text-[#006a6a] rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              <span className="material-symbols-outlined text-4xl">event_available</span>
            </div>
            <h2 className="font-headline-md text-2xl font-bold text-[#000a1e] mb-2">Scientific Follow-up Requested</h2>
            <p className="font-body-md text-sm text-[#44474e] max-w-lg mx-auto mb-6">
              Thank you, {fullName}. Your request for a scientific discussion has been scheduled with our Medical Affairs team.
            </p>

            <div className="bg-[#f0f4f8] p-4 rounded-xl border border-[#dfe3e7] max-w-md mx-auto mb-6 text-left space-y-2 text-xs">
              <div className="flex justify-between text-[#44474e]">
                <span>Topic</span>
                <span className="font-semibold text-[#000a1e]">{topic}</span>
              </div>
              <div className="flex justify-between text-[#44474e]">
                <span>Format</span>
                <span className="font-semibold text-[#006a6a] uppercase">{format}</span>
              </div>
              <div className="flex justify-between text-[#44474e]">
                <span>Requested Time</span>
                <span className="font-semibold text-[#000a1e]">{new Date(dateTime).toLocaleString()}</span>
              </div>
            </div>

            <p className="font-body-md text-xs text-[#44474e] mb-6">
              Your assigned Medical Science Liaison will confirm availability and send a calendar invitation shortly.
            </p>

            <button
              onClick={() => setView('dashboard')}
              className="bg-[#000a1e] text-white font-label-md text-sm font-semibold px-8 py-3 rounded-lg hover:bg-[#002147] transition-colors cursor-pointer min-h-[48px]"
            >
              Return to Dashboard
            </button>
          </div>
        )}
      </div>
    </main>
  );
};
