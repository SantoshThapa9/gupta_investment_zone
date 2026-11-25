export interface KnowledgeEntry {
  id: string;
  topic: string;
  keywords: string[];
  content: string;
}

/** Site content used by the chatbot — keep in sync with public pages. */
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
      "Gupta Investment Zone is a trusted authorized partner of Angel One, one of India's leading stockbroking companies. We help individuals and families build wealth through smart investment strategies and the lowest brokerage rates in the market. Our mission is to make investing accessible, affordable, and profitable for everyone.",
  },
  {
    id: "mission",
    topic: "Our Mission",
    keywords: ["mission", "goal", "purpose", "democratize"],
    content:
      "Our mission is to democratize investing by providing the lowest brokerage rates, expert guidance, and seamless access to financial markets through our partnership with Angel One.",
  },
  {
    id: "vision",
    topic: "Our Vision",
    keywords: ["vision", "future", "trusted", "india"],
    content:
      "Our vision is to become the most trusted investment partner in India, empowering millions of investors to achieve their financial goals through smart, informed investment decisions.",
  },
  {
    id: "brokerage",
    topic: "Lowest Brokerage",
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
      "We offer the lowest brokerage rates guaranteed when you open your account through Gupta Investment Zone. Get the most competitive brokerage rates in the market compared to opening directly elsewhere.",
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
      "You can open a FREE Demat & Trading Account with zero account opening charges and minimal maintenance fees. The process is quick with minimal documentation, typically completed within 24–48 hours. Visit our Contact page or click 'Open Demat Account' to get started.",
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
      "As an authorized partner of Angel One, we provide access to advanced trading platforms and tools, comprehensive research and market insights, secure and reliable trading infrastructure, 24/7 customer support, and lowest brokerage rates guaranteed.",
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
      "Our trading services include a web-based trading platform, mobile trading app, advanced charting tools, and real-time market data — all powered by Angel One's technology.",
  },
  {
    id: "services-advisory",
    topic: "Investment Advisory",
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
      "We offer investment advisory including portfolio analysis & optimization, risk assessment & management, market research & insights, and goal-based investment planning.",
  },
  {
    id: "services-digital",
    topic: "Digital Services",
    keywords: ["digital", "kyc", "online", "transfer", "instant"],
    content:
      "Our digital services include online account opening, digital KYC process, instant fund transfers, and digital contract notes for a seamless experience.",
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
      "We provide 24/7 customer support including a helpline, live chat, email support, and a dedicated relationship manager. Our team offers dedicated investment support and guidance.",
  },
  {
    id: "onboarding",
    topic: "Fast Onboarding",
    keywords: ["onboarding", "fast", "quick", "documentation", "kyc", "hours"],
    content:
      "Account opening is quick and hassle-free with minimal documentation. Most accounts are activated within 24–48 hours.",
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
      "Contact us at info@guptainvestmentzone.com or +91 98765 43210. We are located in Mumbai, Maharashtra, India. You can also connect via YouTube, Instagram, or WhatsApp. Visit our Contact page to send a message.",
  },
  {
    id: "office-hours",
    topic: "Office Hours",
    keywords: ["hours", "timing", "open", "closed", "saturday", "sunday"],
    content:
      "Office hours: Monday–Friday 9:00 AM – 6:00 PM, Saturday 9:00 AM – 2:00 PM, Sunday closed.",
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
      "Investors choose us for: lowest brokerage rates, Angel One credibility, fast onboarding, trusted 24/7 support, proven track record, personalized service, and a goal-oriented approach to investing.",
  },
  {
    id: "testimonials",
    topic: "Client Reviews",
    keywords: ["review", "testimonial", "rating", "feedback", "clients"],
    content:
      "We are trusted by thousands of investors. Clients praise our excellent service, lowest brokerage rates, smooth account opening, great support team, and reliable platform.",
  },
];

export const CHATBOT_FALLBACK =
  "I don't have specific information about that in our knowledge base. For personalized help, please contact us at info@guptainvestmentzone.com or +91 98765 43210, or visit our Contact page.";

export const CHATBOT_GREETING =
  "Hi! I'm the Gupta Investment Zone assistant. Ask me about our services, demat accounts, brokerage rates, contact details, or office hours — I'll answer using information from our website.";

export const SUGGESTED_QUESTIONS = [
  "How do I open a demat account?",
  "What are your brokerage rates?",
  "What are your office hours?",
  "How can I contact you?",
];
