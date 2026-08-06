import React, { useState } from 'react';
import { ViewMode, EvidenceItem } from '../types';

interface EvidenceHubScreenProps {
  setView: (view: ViewMode) => void;
  onSaveResource: (id: string) => void;
  savedIds: string[];
}

export const EvidenceHubScreen: React.FC<EvidenceHubScreenProps> = ({
  setView,
  onSaveResource,
  savedIds,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [replayModalOpen, setReplayModalOpen] = useState<boolean>(false);

  const categories = [
    'All',
    'Efficacy',
    'Safety',
    'CV Risk',
    'Multimorbidity',
    'Case Studies',
    'Dosing',
    'Webinar',
  ];

  const articles: EvidenceItem[] = [
    {
      id: 'art-1',
      title: 'LDL-C Reduction Efficacy Analysis',
      category: 'Clinical Trial',
      categoryTag: 'Efficacy',
      description: 'Phase 3 double-blind randomized controlled trial evaluating 52-week lipid lowering and cardiovascular safety outcomes.',
      readTime: '4 min read',
      date: 'Oct 2023',
      saved: savedIds.includes('art-1'),
    },
    {
      id: 'art-2',
      title: 'CV Outcomes Trial Summary',
      category: 'Pivotal Data',
      categoryTag: 'CV Outcomes',
      description: 'Long-term reduction in major adverse cardiovascular events (MACE) in high-risk patients with type 2 diabetes.',
      readTime: '6 min read',
      date: 'Sep 2023',
      saved: savedIds.includes('art-2'),
    },
    {
      id: 'art-3',
      title: '3-Minute Case Replay',
      category: 'Interactive Case',
      categoryTag: 'Case Studies',
      description: 'Review the step-by-step diagnostic reasoning and treatment pathways for complex multimorbid cases.',
      readTime: 'Interactive',
      date: 'Nov 2023',
      saved: savedIds.includes('art-3'),
    },
    {
      id: 'art-4',
      title: 'Product C Safety Profile',
      category: 'Tolerability',
      categoryTag: 'Safety',
      description: 'Detailed hepatic, renal, and muscular tolerability profiles synthesized across 10,000+ patient-years.',
      readTime: '5 min read',
      date: 'Aug 2023',
      saved: savedIds.includes('art-4'),
    },
    {
      id: 'art-5',
      title: 'Managing Dyslipidaemia in Multimorbid Patients',
      category: 'Clinical Practice',
      categoryTag: 'Multimorbidity',
      description: 'Organ-system considerations, drug-drug interaction alerts, and patient adherence strategies for internal medicine.',
      readTime: '7 min read',
      date: 'Nov 2023',
      saved: savedIds.includes('art-5'),
    },
    {
      id: 'art-6',
      title: 'Practical Product C Dosing Guide',
      category: 'Clinical Tool',
      categoryTag: 'Dosing',
      description: 'Quick-reference pocket guide for dose initiation, lab monitoring timelines, and special population adjustments.',
      readTime: 'PDF Guide',
      date: 'Current',
      saved: savedIds.includes('art-6'),
    },
  ];

  const filteredArticles = articles.filter((item) => {
    const matchesCategory =
      activeCategory === 'All' ||
      item.categoryTag.toLowerCase() === activeCategory.toLowerCase() ||
      (activeCategory === 'Case Studies' && item.categoryTag === 'Case Studies') ||
      (activeCategory === 'CV Risk' && item.categoryTag === 'CV Outcomes');

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleCardClick = (item: EvidenceItem) => {
    if (item.categoryTag === 'Multimorbidity') {
      setView('multimorbidity');
    } else if (item.categoryTag === 'Dosing') {
      setView('dosing-guide');
    } else if (item.categoryTag === 'Case Studies') {
      setReplayModalOpen(true);
    } else {
      // Default action: open replay modal or notification
      setReplayModalOpen(true);
    }
  };

  return (
    <main className="pt-20 md:pt-24 px-4 md:px-10 max-w-[1280px] mx-auto w-full pb-24 md:pb-12">
      {/* Header */}
      <div className="py-6 border-b border-[#dfe3e7] mb-6">
        <h1 className="font-headline-lg-mobile text-2xl md:font-headline-lg md:text-3xl font-bold text-[#000a1e] mb-2">
          Scientific Library & Evidence Hub
        </h1>
        <p className="font-body-md text-sm md:text-base text-[#44474e] max-w-3xl">
          Search pivotal trials, clinical guidelines, dosing tools, and case study replays.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="flex flex-col gap-4 mb-8">
        {/* Search Bar */}
        <div className="relative w-full max-w-2xl">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#74777f]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search trials, guidelines, topics..."
            className="w-full bg-white border border-[#dfe3e7] rounded-xl pl-11 pr-4 py-3 text-sm text-[#171c1f] placeholder-[#74777f] focus:outline-none focus:border-[#006a6a] shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#74777f] hover:text-[#000a1e]"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 md:mx-0 md:px-0">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-label-md text-xs px-4 py-2 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#006a6a] text-white font-bold shadow-xs'
                    : 'bg-white text-[#44474e] border border-[#dfe3e7] hover:bg-[#f0f4f8]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {filteredArticles.map((item) => {
          const isSaved = savedIds.includes(item.id);
          return (
            <div
              key={item.id}
              className="bg-white border border-[#dfe3e7] rounded-xl p-6 shadow-xs flex flex-col justify-between hover:border-[#006a6a] transition-all c-link-accent group relative"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-block bg-[#f0f4f8] text-[#006a6a] font-label-sm text-xs px-2.5 py-1 rounded-md font-semibold">
                    {item.categoryTag}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSaveResource(item.id);
                    }}
                    aria-label="Save resource"
                    className={`p-1.5 rounded-full hover:bg-[#f0f4f8] transition-colors cursor-pointer ${
                      isSaved ? 'text-[#006a6a]' : 'text-[#74777f]'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-[20px] ${isSaved ? 'filled' : ''}`}>
                      bookmark
                    </span>
                  </button>
                </div>

                <h3
                  onClick={() => handleCardClick(item)}
                  className="font-headline-sm text-lg font-bold text-[#000a1e] mb-2 group-hover:text-[#006a6a] transition-colors cursor-pointer"
                >
                  {item.title}
                </h3>
                <p className="font-body-md text-xs md:text-sm text-[#44474e] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#dfe3e7] text-xs text-[#74777f]">
                <span className="flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  {item.readTime}
                </span>
                <button
                  onClick={() => handleCardClick(item)}
                  className="text-[#006a6a] font-label-md text-xs font-semibold flex items-center gap-0.5 hover:underline cursor-pointer"
                >
                  Read More
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Upcoming Webinar Banner */}
      <div className="bg-[#000a1e] text-white rounded-xl p-6 md:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-start gap-4 relative z-10">
          <div className="w-14 h-14 rounded-full bg-[#90efef] text-[#006a6a] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-3xl">videocam</span>
          </div>
          <div>
            <div className="inline-block bg-[#ff2b89] text-white font-label-sm text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2">
              Live Webinar
            </div>
            <h3 className="font-headline-md text-lg md:text-xl font-bold text-white mb-1">
              Navigating Complex Comorbidities in Internal Medicine
            </h3>
            <p className="font-body-md text-xs md:text-sm text-[#dfe3e7]">
              Led by Prof. Dr. Alexander Wright • Thursday, Nov 16 at 18:00 CET (90 mins)
            </p>
          </div>
        </div>
        <button
          onClick={() => setView('webinar-registration')}
          className="z-10 w-full md:w-auto bg-[#006a6a] hover:bg-[#006e6e] text-white font-label-md text-sm font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-xs min-h-[48px]"
        >
          Register Now
        </button>
      </div>

      {/* Case Replay Overlay Modal */}
      {replayModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-[#000a1e]/50 backdrop-blur-xs" onClick={() => setReplayModalOpen(false)} />
          <div className="relative bg-white w-full max-w-lg rounded-xl shadow-2xl p-6 z-10 animate-scale-in">
            <button
              onClick={() => setReplayModalOpen(false)}
              className="absolute top-4 right-4 text-[#44474e] hover:text-[#000a1e] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#90efef] text-[#006a6a] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined">play_circle</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-lg font-bold text-[#000a1e]">3-Minute Case Replay</h3>
                <p className="font-label-sm text-xs text-[#44474e]">Interactive Clinical Decision Review</p>
              </div>
            </div>

            <p className="font-body-md text-sm text-[#171c1f] mb-6">
              Would you like to review the step-by-step decision rationale from the interactive case challenge?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setReplayModalOpen(false)}
                className="px-4 py-2 border border-[#dfe3e7] rounded-lg text-sm font-semibold text-[#44474e] hover:bg-[#f0f4f8] cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setReplayModalOpen(false);
                  setView('case-overview');
                }}
                className="px-5 py-2 bg-[#006a6a] text-white rounded-lg text-sm font-semibold hover:bg-[#006e6e] cursor-pointer"
              >
                Start Case Replay
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
