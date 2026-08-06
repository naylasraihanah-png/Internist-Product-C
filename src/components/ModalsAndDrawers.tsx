import React from 'react';
import { UserProfile, ViewMode } from '../types';

interface ModalsAndDrawersProps {
  notificationsOpen: boolean;
  onCloseNotifications: () => void;
  savedResourcesOpen: boolean;
  onCloseSavedResources: () => void;
  profileOpen: boolean;
  onCloseProfile: () => void;
  policyModalType: 'privacy' | 'terms' | 'medical' | 'adverse' | null;
  onClosePolicyModal: () => void;
  user: UserProfile;
  setView: (view: ViewMode) => void;
  savedIds: string[];
  onRemoveSavedResource: (id: string) => void;
  onResetDemo: () => void;
}

export const ModalsAndDrawers: React.FC<ModalsAndDrawersProps> = ({
  notificationsOpen,
  onCloseNotifications,
  savedResourcesOpen,
  onCloseSavedResources,
  profileOpen,
  onCloseProfile,
  policyModalType,
  onClosePolicyModal,
  user,
  setView,
  savedIds,
  onRemoveSavedResource,
  onResetDemo,
}) => {
  return (
    <>
      {/* Notifications Drawer */}
      {notificationsOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-[#000a1e]/40 backdrop-blur-xs" onClick={onCloseNotifications} />
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl p-6 overflow-y-auto animate-slide-in-right z-10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-[#dfe3e7] mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#006a6a]">notifications</span>
                  <h3 className="font-headline-sm text-lg font-bold text-[#000a1e]">Notifications</h3>
                </div>
                <button onClick={onCloseNotifications} className="text-[#44474e] hover:text-[#000a1e] p-1 cursor-pointer">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="space-y-3">
                <div
                  onClick={() => {
                    onCloseNotifications();
                    setView('case-overview');
                  }}
                  className="p-3 bg-[#f0f4f8] hover:bg-[#eaeef2] rounded-lg border border-[#dfe3e7] cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-label-sm text-xs font-bold text-[#006a6a]">Case Challenge</span>
                    <span className="text-[10px] text-[#74777f]">10m ago</span>
                  </div>
                  <h4 className="font-headline-sm text-xs font-bold text-[#000a1e]">3-Minute Case Challenge Available</h4>
                  <p className="font-body-md text-xs text-[#44474e] mt-1">
                    Test your diagnostic skills on complex dyslipidaemia presentations.
                  </p>
                </div>

                <div
                  onClick={() => {
                    onCloseNotifications();
                    setView('webinar-registration');
                  }}
                  className="p-3 bg-white hover:bg-[#f0f4f8] rounded-lg border border-[#dfe3e7] cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-label-sm text-xs font-bold text-[#ff2b89]">Live Webinar</span>
                    <span className="text-[10px] text-[#74777f]">2h ago</span>
                  </div>
                  <h4 className="font-headline-sm text-xs font-bold text-[#000a1e]">Webinar with Prof. Wright</h4>
                  <p className="font-body-md text-xs text-[#44474e] mt-1">
                    Registration is now open for Thursday, Nov 16.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onCloseNotifications}
              className="w-full py-2.5 bg-[#f0f4f8] text-[#000a1e] font-label-md text-xs font-semibold rounded-lg hover:bg-[#e4e9ed] transition-colors mt-6 cursor-pointer"
            >
              Mark All as Read
            </button>
          </div>
        </div>
      )}

      {/* Saved Resources Drawer */}
      {savedResourcesOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-[#000a1e]/40 backdrop-blur-xs" onClick={onCloseSavedResources} />
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl p-6 overflow-y-auto z-10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-[#dfe3e7] mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#006a6a]">bookmarks</span>
                  <h3 className="font-headline-sm text-lg font-bold text-[#000a1e]">Saved Resources</h3>
                </div>
                <button onClick={onCloseSavedResources} className="text-[#44474e] hover:text-[#000a1e] p-1 cursor-pointer">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {savedIds.length === 0 ? (
                <div className="text-center py-10 text-[#74777f]">
                  <span className="material-symbols-outlined text-4xl mb-2">bookmark_border</span>
                  <p className="font-body-md text-xs">No saved clinical resources yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {savedIds.map((id) => (
                    <div key={id} className="p-3 bg-[#f6fafe] border border-[#dfe3e7] rounded-lg flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-headline-sm text-xs font-bold text-[#000a1e]">
                          {id === 'art-1' && 'LDL-C Reduction Efficacy Analysis'}
                          {id === 'art-2' && 'CV Outcomes Trial Summary'}
                          {id === 'art-3' && '3-Minute Case Replay'}
                          {id === 'art-4' && 'Product C Safety Profile'}
                          {id === 'art-5' && 'Managing Dyslipidaemia in Multimorbid Patients'}
                          {id === 'art-6' && 'Practical Product C Dosing Guide'}
                        </h4>
                        <span className="font-label-sm text-[10px] text-[#006a6a]">Saved Article</span>
                      </div>
                      <button
                        onClick={() => onRemoveSavedResource(id)}
                        className="text-[#74777f] hover:text-[#ba1a1a] p-1 cursor-pointer"
                        aria-label="Remove saved item"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                onCloseSavedResources();
                setView('evidence-hub');
              }}
              className="w-full py-2.5 bg-[#006a6a] text-white font-label-md text-xs font-semibold rounded-lg hover:bg-[#006e6e] transition-colors mt-6 cursor-pointer"
            >
              Browse Evidence Hub
            </button>
          </div>
        </div>
      )}

      {/* User Profile Modal */}
      {profileOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-[#000a1e]/40 backdrop-blur-xs" onClick={onCloseProfile} />
          <div className="relative bg-white w-full max-w-md rounded-xl shadow-2xl p-6 z-10 animate-scale-in">
            <button onClick={onCloseProfile} className="absolute top-4 right-4 text-[#44474e] hover:text-[#000a1e] p-1 cursor-pointer">
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#dfe3e7]">
              <div className="w-14 h-14 rounded-full bg-[#002147] text-white font-bold text-xl flex items-center justify-center shadow-xs">
                {user.name.split(' ').map(n => n[0]).join('').slice(0, 2) || 'DR'}
              </div>
              <div>
                <h3 className="font-headline-sm text-lg font-bold text-[#000a1e]">{user.name}</h3>
                <span className="inline-flex items-center gap-1 font-label-sm text-xs text-[#006a6a] font-semibold bg-[#90efef]/30 px-2 py-0.5 rounded-full mt-1">
                  <span className="material-symbols-outlined text-xs">verified</span>
                  Verified HCP
                </span>
              </div>
            </div>

            <div className="space-y-3 font-body-md text-xs text-[#44474e] mb-6">
              <div className="flex justify-between py-1 border-b border-[#f0f4f8]">
                <span>HCP License ID:</span>
                <span className="font-semibold text-[#000a1e]">{user.hcpId}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#f0f4f8]">
                <span>Institution:</span>
                <span className="font-semibold text-[#000a1e]">{user.institution}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#f0f4f8]">
                <span>Country:</span>
                <span className="font-semibold text-[#000a1e]">{user.country}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#f0f4f8]">
                <span>Case Challenges Completed:</span>
                <span className="font-semibold text-[#000a1e]">{user.completedCasesCount}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#f0f4f8]">
                <span>Dosing Guide Access:</span>
                <span className="font-semibold text-[#006a6a]">
                  {user.unlockedDosingGuide ? 'Unlocked' : 'Locked'}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                onResetDemo();
                onCloseProfile();
              }}
              className="w-full py-2.5 bg-[#ffdad6] text-[#93000a] font-label-md text-xs font-semibold rounded-lg hover:bg-[#ffb4ab] transition-colors cursor-pointer"
            >
              Reset HCP Verification / Demo Mode
            </button>
          </div>
        </div>
      )}

      {/* Policy Modal */}
      {policyModalType && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-[#000a1e]/40 backdrop-blur-xs" onClick={onClosePolicyModal} />
          <div className="relative bg-white w-full max-w-lg rounded-xl shadow-2xl p-6 z-10 animate-scale-in max-h-[80vh] flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-[#dfe3e7] mb-4">
                <h3 className="font-headline-sm text-lg font-bold text-[#000a1e]">
                  {policyModalType === 'privacy' && 'Privacy Policy'}
                  {policyModalType === 'terms' && 'Terms of Service'}
                  {policyModalType === 'medical' && 'Medical Information Disclaimer'}
                  {policyModalType === 'adverse' && 'Adverse Event Reporting'}
                </h3>
                <button onClick={onClosePolicyModal} className="text-[#44474e] hover:text-[#000a1e] p-1 cursor-pointer">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="overflow-y-auto text-xs text-[#44474e] space-y-3 max-h-[50vh] pr-2">
                {policyModalType === 'privacy' && (
                  <>
                    <p>C-LINK Internist respects your privacy as a healthcare professional. We collect minimal personal details (Name, HCP ID, Institution, Email) strictly for verification and educational tracking.</p>
                    <p>No individual user tracking or patient-identifiable data is sold or shared with external third parties without explicit HCP consent.</p>
                  </>
                )}
                {policyModalType === 'terms' && (
                  <>
                    <p>By accessing C-LINK Internist, you represent that you are a licensed healthcare professional or medical educator.</p>
                    <p>The interactive case challenges and dosing guides are intended solely for educational reference and do not replace professional medical judgment.</p>
                  </>
                )}
                {policyModalType === 'medical' && (
                  <>
                    <p>All clinical trial data presented herein are derived from peer-reviewed publications and official prescribing information for Product C.</p>
                    <p>Treating physicians remain solely responsible for individual diagnostic and prescribing decisions.</p>
                  </>
                )}
                {policyModalType === 'adverse' && (
                  <>
                    <p>To report suspected adverse reactions associated with pharmaceutical products, please contact the regional Pharmacovigilance Department or national regulatory authority immediately.</p>
                    <p>Do not use this educational platform for emergency medical reporting.</p>
                  </>
                )}
              </div>
            </div>

            <button
              onClick={onClosePolicyModal}
              className="w-full py-2.5 bg-[#006a6a] text-white font-label-md text-xs font-semibold rounded-lg hover:bg-[#006e6e] transition-colors mt-6 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </>
  );
};
