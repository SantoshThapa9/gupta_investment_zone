export interface KnowledgeEntry {
  id: string;
  topic: string;
  keywords: string[];
  content: string;
}

/** Site content used by the chatbot — keep in sync with the homepage. */
export const siteKnowledge: KnowledgeEntry[] = [
  {
    id: "about-company",
    topic: "About Gupta Investment Zone",
    keywords: [
      "about",
      "who",
      "company",
      "gupta",
      "investment zone",
      "partner",
      "angel one",
    ],
    content:
      "Gupta Investment Zone is an authorized partner of Angel One. We help people understand the account-opening process and get familiar with the platform and available tools.",
  },
  {
    id: "mission",
    topic: "Our Mission",
    keywords: ["mission", "goal", "purpose", "democratize"],
    content:
      "Our aim is to make it easier for people to understand account options, explore the Angel One platform, and take informed first steps.",
  },
  {
    id: "vision",
    topic: "Our Vision",
    keywords: ["vision", "future", "trusted", "india"],
    content:
      "Our goal is to make the demat account process, platform features, and investing risks easier to understand so people can take informed first steps.",
  },
  {
    id: "brokerage",
    topic: "Brokerage and Fees",
    keywords: [
      "brokerage",
      "fees",
      "charges",
      "commission",
      "rates",
      "cost",
      "cheap",
      "lowest",
    ],
    content:
      "Brokerage, account maintenance, and other charges depend on Angel One's current schedule. Review the official fee details before applying; contact us if you need help finding them.",
  },
  {
    id: "demat-account",
    topic: "Demat Account Opening",
    keywords: [
      "demat",
      "account",
      "open",
      "opening",
      "trading account",
      "free",
      "start",
    ],
    content:
      "Review the current account features, charges, and KYC requirements on Angel One's official application. Application and activation timing can vary with verification. Use the account-opening link or the contact form on our homepage to get started.",
  },
  {
    id: "angel-one-partnership",
    topic: "Angel One Partnership",
    keywords: [
      "angel one",
      "angel",
      "platform",
      "credibility",
      "authorized",
      "partner",
    ],
    content:
      "As an authorized partner, Gupta Investment Zone helps visitors access Angel One's platform and understand available tools. Features and charges are determined by Angel One's current offerings.",
  },
  {
    id: "services-trading",
    topic: "Trading Platforms & Tools",
    keywords: [
      "trading",
      "platform",
      "app",
      "mobile",
      "chart",
      "tools",
      "web",
    ],
    content:
      "Angel One's trading platform may include web and mobile access, charts, and market data. Check Angel One for current features, charges, and availability.",
  },
  {
    id: "services-advisory",
    topic: "Investor Education",
    keywords: [
      "advisory",
      "advice",
      "guidance",
      "portfolio",
      "research",
      "planning",
      "mutual fund",
      "ipo",
      "stock",
    ],
    content:
      "We share general educational information about platform features and market concepts. This is not personalized investment advice. Consider consulting a qualified financial professional for advice specific to your situation.",
  },
  {
    id: "services-digital",
    topic: "Digital Services",
    keywords: ["digital", "kyc", "online", "transfer", "instant"],
    content:
      "Angel One provides its account application and digital KYC process online. Check Angel One for current account features and the services available to your account.",
  },
  {
    id: "support",
    topic: "Customer Support",
    keywords: [
      "support",
      "help",
      "contact",
      "helpline",
      "chat",
      "manager",
      "assistance",
    ],
    content:
      "We can help with questions about the account-opening process and point you toward the contact options and platform resources listed on our website.",
  },
  {
    id: "onboarding",
    topic: "Digital Onboarding",
    keywords: ["onboarding", "fast", "quick", "documentation", "kyc"],
    content:
      "Account opening includes an online application and KYC steps. The time needed for verification and activation may vary.",
  },
  {
    id: "contact-info",
    topic: "Contact Information",
    keywords: [
      "email",
      "phone",
      "address",
      "location",
      "reach",
      "call",
      "whatsapp",
    ],
    content:
      "Use the contact form, phone, or email shown on our homepage, or connect through the social links there.",
  },
  {
    id: "why-choose",
    topic: "Why Choose Us",
    keywords: [
      "why",
      "choose",
      "benefits",
      "advantages",
      "track record",
      "personalized",
    ],
    content:
      "Visitors can explore the Angel One platform through an authorized partner, get help understanding the account-opening process, and find educational information about investing risks.",
  },
];

export const CHATBOT_FALLBACK =
  "I don't have specific information about that in our knowledge base. For help with the account-opening process, use the contact form on our homepage.";

export const CHATBOT_GREETING =
  "Hi! I'm the Gupta Investment Zone assistant. Ask me about our services, demat accounts, current fees, contact details, or our Angel One partnership — I'll answer using information from our website.";

export const SUGGESTED_QUESTIONS = [
  "How do I open a demat account?",
  "What are your brokerage rates?",
  "How can I contact you?",
];
