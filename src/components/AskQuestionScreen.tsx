import React, { useState } from 'react';
import { UserProfile, ViewMode } from '../types';

interface AskQuestionScreenProps {
  user: UserProfile;
  setView: (view: ViewMode) => void;
}

export const AskQuestionScreen: React.FC<AskQuestionScreenProps> = ({ user, setView }) => {
  const [fullName, setFullName] = useState(user.name || 'Dr. Jane Doe');
  const [institution, setInstitution] = useState(user.institution || 'General Hospital');
  const [email, setEmail] = useState('j.doe@hospital.org');
  const [phone, setPhone] = useState('+1 (555) 234-5678');
  const [topic, setTopic] = useState('Safety & Tolerability');
  const [questionText, setQuestionText] = useState(
    'Could you clarify the transient hepatic enzyme elevation management protocols for patients with baseline eGFR < 45 mL/min?'
  );
  const [channel, setChannel] = useState<'email' | 'phone'>('email');

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `MED-2023-${Math.floor(1000 + Math.random() * 9000)}A`;
    setReferenceId(randomRef);
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
                Ask a Medical Question
              </h1>
              <p className="font-body-md text-sm md:text-base text-[#44474e]">
                Submit a scientific or clinical inquiry directly to our Medical Information and MSL team.
              </p>
            </div>

            {/* Compliance Warning */}
            <div className="bg-[#ffdad6]/20 border border-[#ffdad6] p-4 rounded-xl mb-6 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#ba1a1a] shrink-0 mt-0.5">error</span>
              <div>
                <h4 className="font-label-sm text-xs font-bold text-[#171c1f] uppercase tracking-wider mb-0.5">
                  Compliance Notice
                </h4>
                <p className="font-body-md text-xs text-[#44474e]">
                  Please do not submit patient-identifiable healthcare information (PHI). Questions should be framed around general clinical concepts or Product C scientific data.
                </p>
              </div>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-md text-xs font-semibold text-[#000a1e] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#f6fafe] border border-[#dfe3e7] rounded-lg px-3 py-2 text-sm text-[#171c1f]"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-xs font-semibold text-[#000a1e] mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#f6fafe] border border-[#dfe3e7] rounded-lg px-3 py-2 text-sm text-[#171c1f]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-label-md text-xs font-semibold text-[#000a1e] mb-1">Inquiry Topic</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-[#f6fafe] border border-[#dfe3e7] rounded-lg px-3 py-2 text-sm text-[#171c1f] cursor-pointer"
                >
                  <option value="Efficacy Data">Efficacy &amp; Lipid Outcomes</option>
                  <option value="Safety & Tolerability">Safety &amp; Tolerability</option>
                  <option value="Drug Interactions">Drug Interactions / Polypharmacy</option>
                  <option value="Dosing & Administration">Dosing &amp; Administration Protocol</option>
                  <option value="Clinical Trial Design">Clinical Trial Methodology</option>
                  <option value="Other">Other Clinical Question</option>
                </select>
              </div>

              <div>
                <label className="block font-label-md text-xs font-semibold text-[#000a1e] mb-1">Your Question</label>
                <textarea
                  required
                  rows={4}
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder="Detail your clinical or scientific question..."
                  className="w-full bg-[#f6fafe] border border-[#dfe3e7] rounded-lg p-3 text-sm text-[#171c1f]"
                />
              </div>

              <div>
                <label className="block font-label-md text-xs font-semibold text-[#000a1e] mb-2">Preferred Response Channel</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer font-body-md text-sm text-[#44474e]">
                    <input
                      type="radio"
                      name="channel"
                      value="email"
                      checked={channel === 'email'}
                      onChange={() => setChannel('email')}
                      className="text-[#006a6a] focus:ring-[#006a6a]"
                    />
                    Email Response
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-body-md text-sm text-[#44474e]">
                    <input
                      type="radio"
                      name="channel"
                      value="phone"
                      checked={channel === 'phone'}
                      onChange={() => setChannel('phone')}
                      className="text-[#006a6a] focus:ring-[#006a6a]"
                    />
                    Phone Call from MSL
                  </label>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#006a6a] hover:bg-[#006e6e] text-white font-label-md text-sm font-semibold px-8 py-3 rounded-lg transition-colors cursor-pointer shadow-xs min-h-[48px] flex items-center gap-2"
                >
                  Submit Question
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="bg-white rounded-xl border border-[#dfe3e7] p-8 text-center shadow-md animate-fade-in my-8">
            <div className="w-20 h-20 bg-[#90efef] text-[#006a6a] rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
              <span className="material-symbols-outlined text-4xl">mark_email_read</span>
            </div>
            <h2 className="font-headline-md text-2xl font-bold text-[#000a1e] mb-2">Question Submitted Successfully</h2>
            <p className="font-body-md text-sm text-[#44474e] max-w-lg mx-auto mb-6">
              Thank you, {fullName}. Your inquiry has been routed to our Medical Science Liaison team.
            </p>

            <div className="bg-[#f0f4f8] p-4 rounded-xl border border-[#dfe3e7] max-w-md mx-auto mb-6 text-left">
              <div className="flex justify-between items-center mb-2 text-xs text-[#44474e]">
                <span>Request Reference ID</span>
                <span className="font-mono font-bold text-[#000a1e]">{referenceId}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#44474e]">
                <span>Topic</span>
                <span className="font-semibold text-[#006a6a]">{topic}</span>
              </div>
            </div>

            <p className="font-body-md text-xs text-[#44474e] mb-6">
              An MSL or Medical Information Specialist will review your request and respond via {channel} within 1-2 business days.
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
