import React, { useState } from 'react';
import { UserProfile, ViewMode } from '../types';

interface VerificationScreenProps {
  onVerify: (profile: Partial<UserProfile>) => void;
  setView: (view: ViewMode) => void;
  onOpenPolicyModal: (type: 'privacy' | 'terms' | 'medical' | 'adverse') => void;
}

export const VerificationScreen: React.FC<VerificationScreenProps> = ({
  onVerify,
  onOpenPolicyModal,
}) => {
  const [fullName, setFullName] = useState('Dr. Jane Doe');
  const [hcpId, setHcpId] = useState('123456789');
  const [institution, setInstitution] = useState('General Hospital');
  const [country, setCountry] = useState('US');
  const [confirmedLicense, setConfirmedLicense] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !hcpId.trim() || !institution.trim() || !country) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!confirmedLicense || !acceptedTerms) {
      setErrorMsg('Please confirm your professional license and accept the terms.');
      return;
    }

    onVerify({
      name: fullName,
      hcpId,
      institution,
      country,
      isVerified: true,
      isDemo: false,
    });
  };

  const handleDemoMode = () => {
    onVerify({
      name: 'Dr. Jane Doe',
      hcpId: '123456789',
      institution: 'General Hospital',
      country: 'US',
      isVerified: true,
      isDemo: true,
    });
  };

  return (
    <div className="bg-[#f6fafe] text-[#171c1f] font-body-md min-h-screen flex flex-col pt-16 pb-12">
      <main className="flex-grow flex items-center justify-center p-4 md:p-10">
        <div className="w-full max-w-lg bg-white rounded-xl shadow-sm border border-[#dfe3e7] p-6 md:p-10 relative overflow-hidden">
          {/* Magenta Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#490021]" />

          {/* Header Section */}
          <div className="mb-8 text-center">
            {/* HCP Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e4e9ed] px-3.5 py-1.5 rounded-full mb-4">
              <span className="material-symbols-outlined text-[#006a6a] text-[16px]">verified_user</span>
              <span className="font-label-sm text-xs text-[#44474e] uppercase tracking-wider font-semibold">
                For Healthcare Professionals Only
              </span>
            </div>
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-2xl md:text-3xl text-[#000a1e] font-bold mb-3 leading-tight">
              Practical scientific engagement, designed for internists.
            </h1>
            <p className="font-body-md text-[#44474e]">
              Access short clinical cases, evidence summaries, practical dosing resources, and personalized scientific support.
            </p>
          </div>

          {errorMsg && (
            <div className="mb-6 p-3 rounded-lg bg-[#ffdad6] text-[#93000a] text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-base">error</span>
              {errorMsg}
            </div>
          )}

          {/* Verification Form */}
          <form onSubmit={handleVerify} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block font-label-md text-sm text-[#000a1e] font-medium" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Dr. Jane Doe"
                className="w-full bg-[#f6fafe] border-0 border-b border-[#dfe3e7] focus:border-[#006a6a] focus:ring-0 px-0 py-2 font-body-md text-[#171c1f] placeholder-[#74777f] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block font-label-md text-sm text-[#000a1e] font-medium" htmlFor="hcpId">
                HCP / License ID
              </label>
              <input
                id="hcpId"
                type="text"
                value={hcpId}
                onChange={(e) => setHcpId(e.target.value)}
                placeholder="123456789"
                className="w-full bg-[#f6fafe] border-0 border-b border-[#dfe3e7] focus:border-[#006a6a] focus:ring-0 px-0 py-2 font-body-md text-[#171c1f] placeholder-[#74777f] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block font-label-md text-sm text-[#000a1e] font-medium" htmlFor="institution">
                Institution
              </label>
              <input
                id="institution"
                type="text"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                placeholder="General Hospital"
                className="w-full bg-[#f6fafe] border-0 border-b border-[#dfe3e7] focus:border-[#006a6a] focus:ring-0 px-0 py-2 font-body-md text-[#171c1f] placeholder-[#74777f] transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block font-label-md text-sm text-[#000a1e] font-medium" htmlFor="country">
                Country
              </label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-[#f6fafe] border-0 border-b border-[#dfe3e7] focus:border-[#006a6a] focus:ring-0 px-0 py-2 font-body-md text-[#171c1f] transition-colors cursor-pointer"
              >
                <option value="" disabled>Select Country</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
              </select>
            </div>

            {/* Consent Checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={confirmedLicense}
                  onChange={(e) => setConfirmedLicense(e.target.checked)}
                  className="w-5 h-5 mt-0.5 rounded border-[#dfe3e7] text-[#006a6a] focus:ring-[#006a6a]/50 bg-[#f6fafe] cursor-pointer"
                />
                <span className="font-body-md text-sm text-[#44474e] group-hover:text-[#171c1f] transition-colors">
                  I confirm that I am a licensed healthcare professional authorized to practice medicine.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="w-5 h-5 mt-0.5 rounded border-[#dfe3e7] text-[#006a6a] focus:ring-[#006a6a]/50 bg-[#f6fafe] cursor-pointer"
                />
                <span className="font-body-md text-sm text-[#44474e] group-hover:text-[#171c1f] transition-colors">
                  I agree to the Terms of Service and Privacy Policy for clinical data access.
                </span>
              </label>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col gap-3">
              <button
                type="submit"
                className="w-full h-12 bg-[#006a6a] text-white font-label-md text-sm font-semibold rounded flex justify-center items-center gap-2 hover:bg-[#006a6a]/90 transition-colors shadow-xs cursor-pointer"
              >
                Verify and Continue
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>

              <button
                type="button"
                onClick={handleDemoMode}
                className="w-full h-12 bg-transparent border border-[#006a6a] text-[#006a6a] font-label-md text-sm font-semibold rounded flex justify-center items-center gap-2 hover:bg-[#006a6a]/10 transition-colors cursor-pointer"
              >
                Enter Demo Mode
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer Links */}
      <footer className="bg-[#f0f4f8] py-4 border-t border-[#dfe3e7] mt-auto">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 flex flex-wrap justify-center gap-6 text-center">
          <button
            onClick={() => onOpenPolicyModal('privacy')}
            className="font-label-sm text-xs text-[#44474e] hover:text-[#000a1e] transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => onOpenPolicyModal('terms')}
            className="font-label-sm text-xs text-[#44474e] hover:text-[#000a1e] transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            Terms of Service
          </button>
          <button
            onClick={() => onOpenPolicyModal('medical')}
            className="font-label-sm text-xs text-[#44474e] hover:text-[#000a1e] transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            Medical Information
          </button>
          <button
            onClick={() => onOpenPolicyModal('adverse')}
            className="font-label-sm text-xs text-[#44474e] hover:text-[#000a1e] transition-colors underline-offset-4 hover:underline cursor-pointer"
          >
            Adverse Event Reporting
          </button>
        </div>
      </footer>
    </div>
  );
};
