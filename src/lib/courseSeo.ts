// Every course on the website, with the words people search for.
// Each course gets its own page at /courses/<slug>. Add new courses here.

export const SITE_URL = "https://www.scrbb-app.site";

// Where the "Get the app" buttons on course pages go.
// Put your APK or Play Store link here.
export const DOWNLOAD_URL = "/";

export type Course = {
  slug: string;
  title: string;
  blurb: string; // short line on cards
  plan: "free" | "pro";
  color: string;
  comingSoon?: boolean;
  level: "Beginner" | "Intermediate";

  // Course page content (written in the words people type into Google)
  seoTitle: string; // browser tab and Google result title
  seoDescription: string; // Google result description, about 150 characters
  heading: string; // the big title on the course page
  intro: string[]; // paragraphs
  forWho: string[];
  lessons?: string[]; // lesson titles, in order
  topics?: string[]; // used when the lesson list isn't final yet
  minutes?: number; // total reading time
  faq: { q: string; a: string }[];
};

export const COURSES: Course[] = [
  {
    slug: "accounting-basics",
    title: "Accounting Basics",
    blurb: "Record money in and out, find your real profit, and learn how accounting works under OHADA.",
    plan: "free",
    color: "#16A34A",
    level: "Beginner",
    seoTitle: "Free Accounting Course for Beginners in Cameroon (OHADA)",
    seoDescription:
      "Learn accounting basics on your phone: cash book, profit, debits and credits, and OHADA/SYSCOHADA. A free course with quizzes, made for Cameroon.",
    heading: "Learn accounting basics, the Cameroonian way.",
    intro: [
      "Most small businesses in Cameroon don't fail because the product is bad. They fail because nobody knows where the money went. This free course teaches you to record money in and out, separate business money from house money, and find your real profit.",
      "You'll also learn the basics of accounting under OHADA and SYSCOHADA, the rules used across Cameroon and Central Africa, explained in plain words with examples from shops, workshops and caterers in Bamenda, Douala and Yaoundé.",
    ],
    forWho: [
      "Small business owners and traders",
      "Students starting accounting or business studies",
      "Anyone who wants to manage money better",
    ],
    lessons: [
      "Why Every Business Needs Accounting",
      "The Cash Book: Recording Money In and Out",
      "Separate Business Money from Personal Money",
      "Assets, Liabilities and Equity",
      "Double Entry: Debits and Credits Made Simple",
      "Profit: Know What You Really Earn",
      "Accounting in Cameroon: OHADA and SYSCOHADA",
      "Your Simple Monthly Accounting Routine",
    ],
    faq: [
      {
        q: "Is the accounting course really free?",
        a: "Yes. Every lesson and quiz in Accounting Basics is free in the Scrbb app.",
      },
      {
        q: "Do I need to know accounting already?",
        a: "No. The course starts from zero and uses everyday examples from small businesses in Cameroon.",
      },
    ],
  },
  {
    slug: "intro-to-cyber-security",
    title: "Introduction to Cyber Security",
    blurb: "What cyber security is, the career paths in it, and the basics every path needs.",
    plan: "free",
    color: "#0284C7",
    level: "Beginner",
    minutes: 72,
    seoTitle: "Learn Cyber Security in Cameroon: Free Beginner Course",
    seoDescription:
      "Start a career in cyber security. Learn how attacks work, networking, defence, cyber security jobs and the law in Cameroon. Free course with quizzes.",
    heading: "Start your cyber security journey, for free.",
    intro: [
      "Banks, telecom operators and government agencies in Cameroon need people who can protect their systems, and there aren't enough of them yet. This free course is your first step into the field.",
      "You'll learn how attacks really happen, the networking and operating system basics every defender needs, how organisations protect themselves, the different career paths, what the law in Cameroon says, and a clear roadmap to your first job.",
    ],
    forWho: [
      "Complete beginners curious about cyber security",
      "IT and computer science students",
      "Anyone thinking about a career change into tech",
    ],
    lessons: [
      "What Is Cyber Security?",
      "Who Attacks and Why",
      "How an Attack Happens, Step by Step",
      "Networking Basics Every Defender Needs",
      "Operating Systems and the Command Line",
      "Layers of Defence",
      "Cryptography Made Simple",
      "Career Paths in Cyber Security",
      "Law and Ethics: Stay on the Right Side",
      "Your Roadmap: From Beginner to First Job",
    ],
    faq: [
      {
        q: "Do I need experience to start?",
        a: "No. The course is for complete beginners. You only need curiosity and a phone.",
      },
      {
        q: "Will this course get me a job?",
        a: "It gives you the foundations and a clear roadmap. For hands-on job skills, continue with The Employable Defender.",
      },
    ],
  },
  {
    slug: "ai-for-business",
    title: "AI for Business",
    blurb: "Use free AI tools to market, sell, serve customers and cut admin. No tech skills needed.",
    plan: "pro",
    color: "#5B4BFF",
    level: "Beginner",
    seoTitle: "AI for Business in Cameroon: Use AI to Grow Your Business",
    seoDescription:
      "Learn to use free AI tools like ChatGPT to write posts, serve customers, sell more and save time. A practical course for business owners in Cameroon.",
    heading: "Use AI to grow your business, without the tech talk.",
    intro: [
      "AI tools can write your marketing posts, answer customer questions, help you price your products and save you hours of admin every week. Most business owners just don't know how to use them well.",
      "This course shows you step by step, with free tools and real examples from businesses in Cameroon. No technical skills needed.",
    ],
    forWho: [
      "Small business owners and shop owners",
      "People selling on WhatsApp, Facebook and Instagram",
      "Freelancers and service providers",
    ],
    lessons: [
      "AI Is Your New Assistant",
      "The Prompt Formula",
      "Marketing Posts in Minutes",
      "Look Pro, Sound Human",
      "Customer Service That Never Sleeps",
      "Selling More with AI",
      "Know Your Numbers",
      "Win Back Your Time",
      "Short Videos That Sell",
      "Your AI Business System",
    ],
    faq: [
      {
        q: "Do I need to pay for AI tools?",
        a: "No. The course uses tools that have free versions.",
      },
      {
        q: "How much does the course cost?",
        a: "The first 3 lessons are free. The rest is included in Scrbb Pro, which you pay for with MTN Mobile Money or Orange Money.",
      },
    ],
  },
  {
    slug: "build-your-website",
    title: "Build Your Website",
    blurb: "From idea to a live website with your own domain. No coding experience needed.",
    plan: "pro",
    color: "#EA580C",
    level: "Beginner",
    minutes: 103,
    seoTitle: "How to Build a Website in Cameroon, No Coding Needed",
    seoDescription:
      "Plan, build and publish your own website with AI, host it for free, connect a domain and get found on Google. Step-by-step course for beginners.",
    heading: "Build your own website, from idea to online.",
    intro: [
      "A website makes your business look serious, shows up on Google and puts your products, prices and WhatsApp button in one link. You don't need to pay a developer or learn to code to have one.",
      "This course takes you from a blank page to a live website: plan it, write your content, build it with AI, add WhatsApp and Google Maps, host it for free, connect your own domain and get found on Google. You finish with a real site, and a skill you can sell to other businesses.",
    ],
    forWho: [
      "Business owners who need a website",
      "Freelancers who want a portfolio",
      "Anyone who wants to earn by building websites for others",
    ],
    lessons: [
      "What a Website Really Is",
      "Plan Your Website on One Page",
      "Write Your Content and Gather Photos",
      "Set Up Your Free Toolkit",
      "HTML and CSS in Plain Language",
      "Build Your Site with AI",
      "Make It Fast, Clear and Phone-Friendly",
      "Add the Features Customers Actually Use",
      "Put Your Website Online for Free",
      "Get Your Own Domain Name",
      "Get Found on Google and WhatsApp",
      "Maintain, Improve and Earn",
    ],
    faq: [
      {
        q: "Do I need a computer?",
        a: "You can read the lessons on your phone, but you'll need a laptop or desktop computer to build the website.",
      },
      {
        q: "How much does hosting cost?",
        a: "The course shows you how to host your site for free. Only a custom domain name has a yearly fee.",
      },
    ],
  },
  {
    slug: "prompting-for-creators",
    title: "Prompting for Creators",
    blurb: "Make AI write ideas, hooks, scripts and captions that sound like you.",
    plan: "pro",
    color: "#DB2777",
    level: "Intermediate",
    minutes: 99,
    seoTitle: "Prompting for Creators: Use AI to Plan and Write Your Content",
    seoDescription:
      "Write better AI prompts for TikTok, YouTube and Instagram: ideas, hooks, scripts, captions and thumbnails in your own voice. Course for creators.",
    heading: "Turn AI into your content team.",
    intro: [
      "Two creators can use the same AI tool. One gets bland captions, the other gets a month of content. The difference is the prompt.",
      "This course teaches you to write prompts that sound like you, generate ideas that aren't generic, script hooks and short videos, turn one video into ten posts, create images and thumbnails, and build a weekly content system, with examples from creators in Cameroon.",
    ],
    forWho: [
      "TikTok, YouTube and Instagram creators",
      "Podcasters and writers",
      "Small businesses that create their own content",
    ],
    lessons: [
      "Why Prompting Is a Creator's Superpower",
      "The CRAFT Formula for Great Prompts",
      "Iterate Like an Editor",
      "Teach the AI Your Voice",
      "Ideas That Don't Feel Generic",
      "Hooks and Short-Video Scripts",
      "Long-Form: YouTube, Podcasts and Blogs",
      "Captions, Hashtags and Repurposing",
      "Prompting for Images and Thumbnails",
      "Advanced Techniques: Chains, Templates and Critique",
      "Your Prompt Library and Weekly Content System",
      "Stay Original, Honest and Paid",
    ],
    faq: [
      {
        q: "Which AI tools does the course use?",
        a: "The techniques work with any major AI chat tool, including free versions of ChatGPT, Claude and Gemini.",
      },
      {
        q: "Will my content sound like AI?",
        a: "A whole lesson teaches you to make AI write in your own voice, including local expressions.",
      },
    ],
  },
  {
    slug: "stay-safe-online",
    title: "Stay Safe Online",
    blurb: "Protect your phone, your accounts and your mobile money from scams.",
    plan: "free",
    color: "#0EA5A4",
    level: "Beginner",
    seoTitle: "Stay Safe Online: Avoid Mobile Money Scams in Cameroon",
    seoDescription:
      "Protect your phone, WhatsApp, Facebook and mobile money from scams and hackers. A free online safety course made for Cameroon.",
    heading: "Protect your phone, accounts and mobile money.",
    intro: [
      "Fake mobile money messages, stolen WhatsApp accounts and scam calls are part of daily life now. One mistake can cost you your savings or your business account.",
      "This free course teaches you the simple habits that stop most scams, in plain language, with examples from everyday life in Cameroon.",
    ],
    forWho: ["Everyone with a smartphone", "Parents, students and business owners", "Anyone who uses mobile money"],
    topics: [
      "Spotting fake mobile money messages and scam calls",
      "Strong passwords and two-step verification",
      "Keeping your WhatsApp and Facebook accounts safe",
      "SIM swap fraud and how to protect your number",
      "Safe links, apps and downloads",
      "What to do if you've been scammed",
    ],
    faq: [
      {
        q: "Is Stay Safe Online free?",
        a: "Yes, the whole course is free in the Scrbb app.",
      },
    ],
  },
  {
    slug: "the-employable-defender",
    title: "The Employable Defender",
    blurb: "Hands-on cyber security skills that employers look for in a first hire.",
    plan: "pro",
    color: "#DC2626",
    level: "Intermediate",
    seoTitle: "Get Your First Cyber Security Job: Hands-On Course",
    seoDescription:
      "Hands-on cyber security skills employers look for in a first hire: practical labs, a portfolio and job preparation. For learners in Cameroon.",
    heading: "Build the skills that get you hired in cyber security.",
    intro: [
      "Knowing the theory isn't enough to get hired. Employers want people who can show what they can do.",
      "The Employable Defender is the hands-on follow-up to Introduction to Cyber Security. It focuses on the practical skills, projects and preparation that help you land your first role.",
    ],
    forWho: [
      "Learners who finished Introduction to Cyber Security",
      "IT graduates looking for a first security role",
      "IT support staff moving into security",
    ],
    topics: [
      "Practical, hands-on exercises",
      "Skills employers look for in a first hire",
      "Building a portfolio that proves your skills",
      "Preparing for interviews",
    ],
    faq: [
      {
        q: "Should I take Introduction to Cyber Security first?",
        a: "Yes, it's the best starting point. It's free and gives you the foundations this course builds on.",
      },
    ],
  },
  {
    slug: "ai-for-teachers",
    title: "AI for Teachers",
    blurb: "Plan lessons, prepare quizzes and save hours every week with AI.",
    plan: "pro",
    color: "#F59E0B",
    level: "Beginner",
    comingSoon: true,
    seoTitle: "AI for Teachers in Cameroon (Coming Soon)",
    seoDescription: "Plan lessons, prepare quizzes and save hours every week with AI. Coming soon to Scrbb.",
    heading: "AI for Teachers is coming soon.",
    intro: ["Plan lessons, prepare quizzes and save hours every week with AI. This course is being written now."],
    forWho: ["Primary and secondary school teachers", "University lecturers", "Tutors and trainers"],
    faq: [],
  },
];

export function getCourse(slug: string) {
  return COURSES.find((c) => c.slug === slug);
}

// Courses that are ready (coming-soon pages stay out of Google until they launch)
export const LIVE_COURSES = COURSES.filter((c) => !c.comingSoon);
