import React, { useState } from 'react';
import { ViewMode, UserProfile } from './types';
import { NavigationHeader } from './components/NavigationHeader';
import { BottomNavBar } from './components/BottomNavBar';
import { VerificationScreen } from './components/VerificationScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { CaseOverview } from './components/CaseChallenge/CaseOverview';
import { CaseQuestion1 } from './components/CaseChallenge/CaseQuestion1';
import { CaseQuestion2 } from './components/CaseChallenge/CaseQuestion2';
import { CaseQuestion3 } from './components/CaseChallenge/CaseQuestion3';
import { CaseCompleted } from './components/CaseChallenge/CaseCompleted';
import { DosingGuideScreen } from './components/DosingGuideScreen';
import { EvidenceHubScreen } from './components/EvidenceHubScreen';
import { WebinarRegistrationScreen } from './components/WebinarRegistrationScreen';
import { MultimorbidityScreen } from './components/MultimorbidityScreen';
import { AskQuestionScreen } from './components/AskQuestionScreen';
import { RequestDiscussionScreen } from './components/RequestDiscussionScreen';
import { ModalsAndDrawers } from './components/ModalsAndDrawers';

export function App() {
  // Navigation View State
  const [currentView, setView] = useState<ViewMode>('verification');

  // User Profile State
  const [user, setUser] = useState<UserProfile>({
    name: 'Dr. Jane Doe',
    hcpId: '123456789',
    institution: 'General Hospital',
    country: 'US',
    isVerified: false,
    isDemo: false,
    savedResourcesCount: 2,
    engagementPercentile: 80,
    completedCasesCount: 0,
    unlockedDosingGuide: false,
  });

  // Quiz Answers State
  const [q1Answer, setQ1Answer] = useState<string | null>(null);
  const [q2Answer, setQ2Answer] = useState<string | null>(null);
  const [q3Answer, setQ3Answer] = useState<string | null>(null);

  // Saved Resources State
  const [savedIds, setSavedIds] = useState<string[]>(['art-[#1]', 'art-[#5]']);

  // Modals and Drawers State
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [savedResourcesOpen, setSavedResourcesOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [policyModalType, setPolicyModalType] = useState<'privacy' | 'terms' | 'medical' | 'adverse' | null>(null);

  // HCP Verification Handler
  const handleVerify = (profileUpdate: Partial<UserProfile>) => {
    setUser((prev) => ({
      ...prev,
      ...profileUpdate,
      isVerified: true,
    }));
    setView('dashboard');
  };

  // Reset Demo / Unverify Handler
  const handleResetDemo = () => {
    setUser({
      name: 'Dr. Jane Doe',
      hcpId: '123456789',
      institution: 'General Hospital',
      country: 'US',
      isVerified: false,
      isDemo: false,
      savedResourcesCount: 2,
      engagementPercentile: 80,
      completedCasesCount: 0,
      unlockedDosingGuide: false,
    });
    setQ1Answer(null);
    setQ2Answer(null);
    setQ3Answer(null);
    setView('verification');
  };

  // Toggle Save Resource
  const handleSaveResource = (id: string) => {
    setSavedIds((prev) => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter((i) => i !== id) : [...prev, id];
      setUser((u) => ({ ...u, savedResourcesCount: next.length }));
      return next;
    });
  };

  // Quiz Completion Handler
  const handleCompleteQuiz = () => {
    setUser((prev) => ({
      ...prev,
      completedCasesCount: prev.completedCasesCount + 1,
      unlockedDosingGuide: true,
      engagementPercentile: Math.min(95, prev.engagementPercentile + 5),
    }));
  };

  // Reset Quiz State
  const handleResetQuiz = () => {
    setQ1Answer(null);
    setQ2Answer(null);
    setQ3Answer(null);
  };

  return (
    <div className="min-h-screen bg-[#f6fafe] text-[#171c1f] flex flex-col font-sans selection:bg-[#90efef]">
      {/* Navigation Header */}
      <NavigationHeader
        currentView={currentView}
        setView={setView}
        user={user}
        onOpenNotifications={() => setNotificationsOpen(true)}
        onOpenProfile={() => setProfileOpen(true)}
      />

      {/* Main View Router */}
      <div className="flex-grow flex flex-col">
        {!user.isVerified || currentView === 'verification' ? (
          <VerificationScreen
            onVerify={handleVerify}
            setView={setView}
            onOpenPolicyModal={(type) => setPolicyModalType(type)}
          />
        ) : (
          <>
            {currentView === 'dashboard' && (
              <DashboardScreen
                user={user}
                setView={setView}
                onOpenSavedResources={() => setSavedResourcesOpen(true)}
              />
            )}

            {currentView === 'case-overview' && <CaseOverview setView={setView} />}

            {currentView === 'case-q1' && (
              <CaseQuestion1
                setView={setView}
                selectedAnswer={q1Answer}
                onSelectAnswer={setQ1Answer}
              />
            )}

            {currentView === 'case-q2' && (
              <CaseQuestion2
                setView={setView}
                selectedAnswer={q2Answer}
                onSelectAnswer={setQ2Answer}
              />
            )}

            {currentView === 'case-q3' && (
              <CaseQuestion3
                setView={setView}
                selectedAnswer={q3Answer}
                onSelectAnswer={setQ3Answer}
                onCompleteQuiz={handleCompleteQuiz}
              />
            )}

            {currentView === 'case-complete' && (
              <CaseCompleted setView={setView} onResetQuiz={handleResetQuiz} />
            )}

            {currentView === 'dosing-guide' && <DosingGuideScreen setView={setView} />}

            {currentView === 'evidence-hub' && (
              <EvidenceHubScreen
                setView={setView}
                onSaveResource={handleSaveResource}
                savedIds={savedIds}
              />
            )}

            {currentView === 'webinar-registration' && (
              <WebinarRegistrationScreen user={user} setView={setView} />
            )}

            {currentView === 'multimorbidity' && <MultimorbidityScreen setView={setView} />}

            {currentView === 'ask-question' && <AskQuestionScreen user={user} setView={setView} />}

            {currentView === 'request-discussion' && (
              <RequestDiscussionScreen user={user} setView={setView} />
            )}
          </>
        )}
      </div>

      {/* Mobile Bottom Navigation Bar */}
      {user.isVerified && (
        <BottomNavBar
          currentView={currentView}
          setView={setView}
          onOpenProfile={() => setProfileOpen(true)}
        />
      )}

      {/* Global Modals & Drawers */}
      <ModalsAndDrawers
        notificationsOpen={notificationsOpen}
        onCloseNotifications={() => setNotificationsOpen(false)}
        savedResourcesOpen={savedResourcesOpen}
        onCloseSavedResources={() => setSavedResourcesOpen(false)}
        profileOpen={profileOpen}
        onCloseProfile={() => setProfileOpen(false)}
        policyModalType={policyModalType}
        onClosePolicyModal={() => setPolicyModalType(null)}
        user={user}
        setView={setView}
        savedIds={savedIds}
        onRemoveSavedResource={handleSaveResource}
        onResetDemo={handleResetDemo}
      />
    </div>
  );
}

export default App;
