import React, { useState } from 'react';
import { ViewMode, UserProfile } from '../types';

interface NavigationHeaderProps {
  currentView: ViewMode;
  setView: (view: ViewMode) => void;
  user: UserProfile;
  onOpenNotifications: () => void;
  onOpenProfile: () => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  currentView,
  setView,
  user,
  onOpenNotifications,
  onOpenProfile,
}) => {
  const [unreadCount] = useState(2);

  // Determine if back button should be visible
  const isHomeView = currentView === 'dashboard' || currentView === 'verification';

  const handleBackClick = () => {
    if (currentView.startsWith('case-q') || currentView === 'case-overview' || currentView === 'case-complete') {
      setView('dashboard');
    } else if (currentView === 'multimorbidity' || currentView === 'webinar-registration') {
      setView('evidence-hub');
    } else {
      setView('dashboard');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#f6fafe] dark:bg-[#d6dade] border-b border-[#dfe3e7] shadow-xs">
      <div className="flex justify-between items-center px-4 md:px-10 py-2 max-w-[1280px] mx-auto h-[64px] md:h-[72px]">
        {/* Left Side: Mobile Menu / Back Button & Title */}
        <div className="flex items-center gap-3">
          {!isHomeView ? (
            <button
              onClick={handleBackClick}
              aria-label="Go back"
              className="text-[#000a1e] hover:bg-[#f0f4f8] transition-colors rounded-full p-2 flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          ) : (
            <button
              onClick={onOpenProfile}
              aria-label="Menu"
              className="md:hidden text-[#000a1e] hover:bg-[#f0f4f8] transition-colors rounded-full p-2 flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          )}

          <div
            onClick={() => user.isVerified && setView('dashboard')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="material-symbols-outlined text-[#000a1e] hidden md:block">local_hospital</span>
            <h1 className="font-headline-md text-xl md:text-2xl font-bold text-[#000a1e] tracking-tight group-hover:text-[#006a6a] transition-colors">
              C-LINK Internist
            </h1>
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        {user.isVerified && (
          <nav className="hidden md:flex gap-2 items-center">
            <button
              onClick={() => setView('dashboard')}
              className={`font-label-md px-3.5 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentView === 'dashboard'
                  ? 'text-[#006a6a] font-bold bg-[#90efef]/20'
                  : 'text-[#44474e] hover:bg-[#f0f4f8]'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">home</span>
              Home
            </button>
            <button
              onClick={() => setView('case-overview')}
              className={`font-label-md px-3.5 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentView.startsWith('case')
                  ? 'text-[#006a6a] font-bold bg-[#90efef]/20'
                  : 'text-[#44474e] hover:bg-[#f0f4f8]'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">clinical_notes</span>
              Cases
            </button>
            <button
              onClick={() => setView('evidence-hub')}
              className={`font-label-md px-3.5 py-2 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentView === 'evidence-hub' || currentView === 'multimorbidity' || currentView === 'webinar-registration' || currentView === 'dosing-guide'
                  ? 'text-[#006a6a] font-bold bg-[#90efef]/20'
                  : 'text-[#44474e] hover:bg-[#f0f4f8]'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">menu_book</span>
              Evidence
            </button>
          </nav>
        )}

        {/* Right Side: Notifications & User Profile Chip */}
        <div className="flex items-center gap-2">
          {user.isVerified ? (
            <>
              <button
                onClick={onOpenNotifications}
                aria-label="Notifications"
                className="relative text-[#000a1e] hover:bg-[#f0f4f8] transition-colors rounded-full p-2 flex items-center justify-center cursor-pointer"
              >
                <span className="material-symbols-outlined">notifications</span>
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#ff2b89] rounded-full ring-2 ring-[#f6fafe]" />
                )}
              </button>

              <button
                onClick={onOpenProfile}
                className="hidden sm:flex items-center gap-2 bg-[#f0f4f8] hover:bg-[#e4e9ed] border border-[#dfe3e7] rounded-full py-1.5 px-3 transition-colors cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-[#002147] text-white flex items-center justify-center text-xs font-bold">
                  {user.name.split(' ').map(n => n[0]).join('').slice(0, 2) || 'DR'}
                </div>
                <span className="text-xs font-semibold text-[#000a1e] max-w-[120px] truncate">
                  {user.name}
                </span>
              </button>
            </>
          ) : (
            <span className="text-xs font-semibold text-[#006a6a] bg-[#90efef]/30 px-3 py-1 rounded-full">
              Guest
            </span>
          )}
        </div>
      </div>
    </header>
  );
};
