import { LINKS } from "@/components/SiteShell";

export const programs = [
  { name: "Online", tagline: "Learn from wherever you are", description: "Build English skills through online learning. Ask the school about the current course format and next available start.", tone: "mint" as const, features: ["Online learning", "Beginner to advanced pathways", "Ask about the next start date"] },
  { name: "Group", tagline: "Learn alongside others", description: "Explore a group class and find out which level and schedule are currently open.", tone: "sun" as const, features: ["Group learning format", "Level options to confirm", "Ask about class size and schedule"] },
  { name: "VIP", tagline: "A more focused option", description: "Ask Yared about VIP learning, the available format, and whether it fits your goals.", tone: "peach" as const, features: ["Personal learning inquiry", "Program format confirmed by teacher", "Ask about availability and fees"] },
];

export const exams = [
  { short: "01", name: "IELTS", descriptor: "English proficiency", note: "Ask about preparation options and the skills currently covered." },
  { short: "02", name: "TOEFL", descriptor: "Academic English", note: "Discuss your target date and the preparation format available." },
  { short: "03", name: "SAT", descriptor: "College admissions", note: "Contact the school to confirm course scope and availability." },
  { short: "04", name: "Visa interview", descriptor: "Speak with confidence", note: "Ask about practice for clear, prepared interview answers." },
];

export const lessons = [
  { title: "Useful expressions", category: "Speaking", videoId: "nhV3o-R1TWc", href: "https://www.youtube.com/watch?v=nhV3o-R1TWc" },
  { title: "I used to … vs I’m used to …", category: "Grammar", videoId: "EsndjssWNgU", href: "https://www.youtube.com/watch?v=EsndjssWNgU" },
  { title: "Silent letters in English", category: "Pronunciation", videoId: "sc7AN1glsP8", href: "https://www.youtube.com/watch?v=sc7AN1glsP8" },
  { title: "Expressions and vocabularies related to restaurant", category: "Vocabulary", videoId: "VzOwtK0xWi8", href: "https://www.youtube.com/watch?v=VzOwtK0xWi8" },
  { title: "Common mistakes in English", category: "Grammar", videoId: "D2CbC0a9S1s", href: "https://www.youtube.com/watch?v=D2CbC0a9S1s" },
  { title: "Basic English for Beginners", category: "Beginner", videoId: "GOSBVIyd9P8", href: "https://www.youtube.com/watch?v=GOSBVIyd9P8" },
];

export const socials = [
  { label: "YouTube", href: LINKS.youtube, note: "Videos, podcasts and learning resources" },
  { label: "TikTok", href: LINKS.tiktok, note: "Short English lessons and updates" },
  { label: "Instagram", href: LINKS.instagram, note: "Follow My English and Yared Alemayehu" },
  { label: "Telegram", href: LINKS.telegram, note: "Contact the school directly" },
];
