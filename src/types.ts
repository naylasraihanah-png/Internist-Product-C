export type ViewMode =
  | 'verification'
  | 'dashboard'
  | 'case-overview'
  | 'case-q1'
  | 'case-q2'
  | 'case-q3'
  | 'case-complete'
  | 'dosing-guide'
  | 'evidence-hub'
  | 'webinar-registration'
  | 'multimorbidity'
  | 'ask-question'
  | 'request-discussion';

export interface UserProfile {
  name: string;
  hcpId: string;
  institution: string;
  country: string;
  isVerified: boolean;
  isDemo: boolean;
  savedResourcesCount: number;
  engagementPercentile: number;
  completedCasesCount: number;
  unlockedDosingGuide: boolean;
}

export interface QuizProgress {
  q1Selected: string | null;
  q1Submitted: boolean;
  q2Selected: string | null;
  q2Submitted: boolean;
  q3Selected: string | null;
  q3Submitted: boolean;
  startTime: number | null;
  endTime: number | null;
  score: number;
}

export interface EvidenceItem {
  id: string;
  title: string;
  category: string;
  categoryTag: 'Efficacy' | 'CV Outcomes' | 'Survival' | 'Safety' | 'Guidelines' | 'Multimorbidity' | 'Dosing' | 'Case Studies';
  description: string;
  readTime: string;
  date: string;
  saved: boolean;
  accentColor?: string;
  fileSize?: string;
}

export interface SavedResource {
  id: string;
  title: string;
  type: string;
  dateAdded: string;
}
