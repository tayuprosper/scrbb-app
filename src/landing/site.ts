// Everything you'll want to change lives in this file.

export const DOWNLOAD = {
  // Direct link to the APK file (GitHub Releases, Supabase Storage, etc.)
  apkUrl: "https://github.com/tayuprosper/scrbb-app/releases/download/v1.0.0/app-release.apk",
  version: "1.0.0",
  // Fill these in when the app is on the stores. Until then the badges show "Coming soon".
  playStoreUrl: null as string | null,
  appStoreUrl: null as string | null,
};

// Shown in the footer when filled in
export const CONTACT = {
  email: "hello@scrbb-app.site",
  whatsapp: "https://wa.me/237681479141"
};

// Same names as the app's Ionicons, so covers look identical
export type CoverIconName =
  | "calculator"
  | "sparkles"
  | "shield-checkmark"
  | "lock-closed"
  | "school"
  | "briefcase"
  | "trending-up"
  | "book";

export type Course = {
  title: string;
  blurb: string;
  plan: "free" | "pro";
  lessons?: number;
  color: string;
  icon: CoverIconName;
  imageUrl?: string; // optional: the cover photo URL from Scrbb Admin
  comingSoon?: boolean;
};

export const COURSES: Course[] = [
  {
    title: "Accounting Basics",
    blurb: "Record money in and out, find your real profit, and learn how accounting works under OHADA.",
    plan: "free",
    lessons: 8,
    color: "#16A34A",
    icon: "calculator",
  },
  {
    title: "AI for Business",
    blurb: "Use free AI tools to market, sell, serve customers and cut admin. No tech skills needed.",
    plan: "pro",
    lessons: 10,
    color: "#5B4BFF",
    icon: "sparkles",
  },
  {
    title: "Stay Safe Online",
    blurb: "Protect your phone, your accounts and your mobile money from scams.",
    plan: "free",
    color: "#0EA5A4",
    icon: "shield-checkmark",
  },
  {
    title: "Introduction to Cyber Security",
    blurb: "What cyber security is, the career paths in it, and the basics every path needs.",
    plan: "free",
    color: "#0284C7",
    icon: "lock-closed",
  },
  {
    title: "The Employable Defender",
    blurb: "Hands-on cyber security skills that employers look for in a first hire.",
    plan: "pro",
    color: "#DC2626",
    icon: "briefcase",
  },
  {
    title: "AI for Teachers",
    blurb: "Plan lessons, prepare quizzes and save hours every week with AI.",
    plan: "pro",
    color: "#F59E0B",
    icon: "school",
    comingSoon: true,
  },
];
