import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import SignatureVideo from "@/components/SignatureVideo";
import OfficeMap from "@/components/OfficeMap";
import ContactForm from "@/components/ContactForm";
import { accountOpeningHref, siteConfig, socialLinks } from "@/data/siteConfig";

const socialIcons: Record<string, LucideIcon> = {
  Instagram,
  Facebook,
  YouTube: Youtube,
  Telegram: Send,
};

const socialDescriptions: Record<string, string> = {
  Instagram: "Daily market updates and bite-sized insights.",
  Facebook: "News, announcements, and community updates.",
  YouTube: "Subscribe for market explainers and new videos.",
  Telegram: "Join for market signals and timely updates.",
};

const benefits = [
  {
    icon: TrendingUp,
    number: "01",
    title: "Angel One demat account",
    description:
      "Understand the online application and digital KYC steps before starting your account application.",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Trading platform and tools",
    description:
      "Explore Angel One's trading platform, charts, market data, and tools, subject to availability.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Brokerage and charges",
    description:
      "Review Angel One's current brokerage schedule and applicable account charges before applying.",
  },
  {
    icon: MessageCircle,
    number: "04",
    title: "Investor education",
    description:
      "Get general information about stock market concepts, platform features, and investing risks.",
  },
];

const steps = [
  "Start your account application",
  "Complete digital KYC",
  "Get ready to explore the markets",
];

const principles = [
  {
    icon: BarChart3,
    title: "Access to Angel One",
    description:
      "Explore the trading platform, products, and tools offered by our authorized partner.",
  },
  {
    icon: MessageCircle,
    title: "A person to ask",
    description:
      "Get help understanding the account-opening process and where to find support.",
  },
  {
    icon: Shield,
    title: "Your decisions, informed",
    description:
      "Learn about the process and risks, then make choices that fit your own situation.",
  },
];

const faqs = [
  {
    question: "What is Gupta Investment Zone?",
    answer:
      "Gupta Investment Zone is an authorized Angel One partner based in Jamshedpur. We help people understand the demat account application process and get familiar with Angel One's platform and available tools.",
  },
  {
    question: "How do I open an Angel One demat account?",
    answer:
      "Use the account-opening link to start Angel One's online application, complete the requested KYC steps, and review the current account terms and charges. Verification and account activation are handled by Angel One.",
  },
  {
    question: "Can you provide stock market tips or guarantee returns?",
    answer:
      "No. Market updates and educational content are for general information only, not personalized investment advice or a promise of returns. Investments are subject to market risks.",
  },
  {
    question: "Where is the Gupta Investment Zone office?",
    answer:
      "Our office is in Dimna, Mango, Jamshedpur, Jharkhand. Use the interactive map and directions link below to find the location.",
  },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gupta Investment Zone",
  url: "https://gupta-investment-zone.vercel.app/",
  logo: "https://gupta-investment-zone.vercel.app/logo.png",
  description:
    "Authorized Angel One partner in Jamshedpur providing demat account opening guidance, trading platform orientation, and investor education.",
  telephone: siteConfig.contactNumber,
  email: siteConfig.officialGmail,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mango, Jamshedpur",
    addressRegion: "Jharkhand",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Jamshedpur",
  },
  sameAs: socialLinks.map(({ href }) => href),
};

export default function Home() {
  return (
    <main className="home-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section id="home" className="hero-section">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="status-dot" />
              Authorized Angel One partner · Jamshedpur
            </div>
            <h1>
              <span className="hero-brand-name">Gupta Investment Zone</span>
              Open a demat
              <br />
              <span>account with clarity.</span>
            </h1>
            <p className="hero-description">
              Gupta Investment Zone helps Jamshedpur clients understand Angel
              One account opening, stock market trading tools, and investor
              education.
            </p>
            <div className="hero-actions">
              <Link href={accountOpeningHref} className="button-primary">
                Open a demat account <ArrowUpRight size={17} />
              </Link>
              <Link href="/#community" className="button-text">
                Follow market updates <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hero-proof">
              <span className="proof-mark"><ShieldCheck size={16} /></span>
              <div>
                <strong>Authorized Angel One partner.</strong>
                <span>Local support in Jamshedpur.</span>
              </div>
            </div>
          </div>

          <div className="hero-art" aria-label="Illustration of a rising investment chart">
            <div className="art-glow" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="chart-card">
              <div className="chart-card-top">
                <div>
                  <span className="chart-label">YOUR NEXT CHAPTER</span>
                  <strong>Starts with a step</strong>
                </div>
                <span className="chart-icon"><TrendingUp size={19} /></span>
              </div>
              <div className="chart-graph">
                <div className="chart-y-labels" aria-hidden="true">
                  <span>GROW</span>
                  <span>LEARN</span>
                  <span>BEGIN</span>
                </div>
                <svg viewBox="0 0 360 150" role="img" aria-label="An illustrative upward trend line">
                  <defs>
                    <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#9bca9a" stopOpacity=".4" />
                      <stop offset="100%" stopColor="#9bca9a" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 128 C28 120 34 100 63 108 S101 88 126 95 S157 73 188 81 S222 58 247 68 S282 39 306 48 S340 26 360 19 V150 H0Z"
                    fill="url(#chartFill)"
                  />
                  <path
                    d="M0 128 C28 120 34 100 63 108 S101 88 126 95 S157 73 188 81 S222 58 247 68 S282 39 306 48 S340 26 360 19"
                    fill="none"
                    stroke="#bce4ae"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="306" cy="48" r="5" fill="#d2edc7" />
                </svg>
              </div>
              <div className="chart-card-bottom">
                <span><span className="live-dot" /> YOUR PACE. YOUR PLAN.</span>
                <ArrowUpRight size={17} />
              </div>
            </div>
            <div className="floating-note note-top">
              <span className="note-icon"><Sparkles size={16} /></span>
              <span><strong>Start where you are</strong><small>Every investor begins somewhere</small></span>
            </div>
            <div className="floating-note note-bottom">
              <span className="note-icon"><ShieldCheck size={17} /></span>
              <span><strong>Guidance that feels human</strong><small>Real support, whenever you need it</small></span>
            </div>
            <span className="art-caption">THINK LONG TERM <ArrowDownRight size={14} /></span>
          </div>
        </div>
        <div className="hero-bottom">
          <span>INVESTING, MADE MORE HUMAN</span>
          <span>01 — A BETTER BEGINNING</span>
        </div>
      </section>

      {socialLinks.length > 0 && (
        <section id="community" className="community-section section-wrap">
          <div className="community-heading">
            <div className="section-kicker"><span>FOLLOW</span> STAY IN THE LOOP</div>
            <h2>Follow Gupta Investment Zone.<br /><em>Stay market-aware.</em></h2>
            <p>
              Follow our channels for daily market updates and educational
              trading content.
              {socialLinks.some(({ label }) => label === "Telegram") &&
                " Join Telegram for timely market signals and updates."}
            </p>
          </div>
          <div className="community-links">
            {socialLinks.map(({ label, href }) => {
              const Icon = socialIcons[label] ?? ArrowUpRight;

              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="community-link"
                >
                  <span className="community-icon"><Icon size={18} /></span>
                  <span>
                    <strong>{label === "YouTube" ? "Subscribe on YouTube" : label === "Telegram" ? "Join Telegram" : `Follow on ${label}`}</strong>
                    <small>{socialDescriptions[label]}</small>
                  </span>
                  <ArrowUpRight size={17} className="community-arrow" />
                </a>
              );
            })}
            <p className="community-disclaimer">
              Market content is for information and education only, not a
              guarantee of returns or personalized investment advice.
            </p>
          </div>
        </section>
      )}

      <section className="featured-video-section">
        <div className="featured-video-grid section-wrap">
          <div className="featured-video-copy">
            <div className="section-kicker"><span>01</span> OUR ANGEL ONE PARTNERSHIP</div>
            <h2>Meet your platform.<br /><em>Know your support.</em></h2>
            <p>
              A quick introduction to Angel One&apos;s investing platform and the
              account-opening guidance available through Gupta Investment Zone.
            </p>
            <Link href="/#about" className="underlined-link">
              How we can help <ArrowRight size={16} />
            </Link>
          </div>
          <figure className="featured-video-frame">
            <SignatureVideo source={siteConfig.signatureVideo} />
            <figcaption className="featured-video-caption">
              Gupta Investment Zone — Angel One partner introduction
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="services" className="intro-section section-wrap">
        <div className="section-kicker"><span>02</span> DEMAT ACCOUNTS, TRADING & SUPPORT</div>
        <div className="intro-grid">
          <h2>Stock market tools.<br /><span>Clear guidance to begin.</span></h2>
          <div className="intro-copy">
            <p>
              Explore demat account opening, Angel One trading tools, current
              charges, and general investor education in one place.
            </p>
            <Link href={accountOpeningHref} className="underlined-link">
              Start your account application <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, number, title, description }) => (
            <article className="benefit-card" key={number}>
              <div className="benefit-card-top">
                <span className="benefit-icon"><Icon size={20} /></span>
                <span className="card-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ArrowUpRight className="card-arrow" size={18} />
            </article>
          ))}
        </div>
      </section>

      {siteConfig.liveTradingReel && (
        <section id="market-trading-video" className="live-reel-section section-wrap">
          <div className="live-reel-copy">
            <div className="section-kicker"><span>WATCH</span> ON THE PLATFORM</div>
            <h2>A closer look<br /><em>at trading.</em></h2>
            <p>
              Watch a short walkthrough of trading on the Angel One platform.
              It plays muted while in view; use the player controls for sound.
              Features and availability are set by Angel One.
            </p>
          </div>
          <figure className="featured-video-frame">
            <SignatureVideo
              source={siteConfig.liveTradingReel}
              title="Angel One trading walkthrough"
              portrait
            />
            <figcaption className="featured-video-caption">
              Trading platform walkthrough · muted autoplay when in view
            </figcaption>
          </figure>
        </section>
      )}

      <section id="how-it-works" className="steps-section">
        <div className="steps-inner section-wrap">
          <div className="steps-copy">
            <div className="section-kicker"><span>03</span> YOUR FIRST THREE STEPS</div>
            <h2>Getting started<br />should feel <em>simple.</em></h2>
            <p>We&apos;ll help you through the process, one clear step at a time.</p>
            <Link href={accountOpeningHref} className="button-primary">
              Let&apos;s get started <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="steps-list">
            {steps.map((step, index) => (
              <div className="step-row" key={step}>
                <span className="step-count">0{index + 1}</span>
                <span className="step-text">{step}</span>
                <span className="step-check"><Check size={16} /></span>
              </div>
            ))}
            <div className="steps-footnote">
              <span className="live-dot" />
              A friendly person is here if you need a hand.
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="trust-section section-wrap">
        <div className="trust-heading">
          <div>
            <div className="section-kicker"><span>04</span> ABOUT GUPTA INVESTMENT ZONE</div>
            <h2>Local guidance.<br /><em>Clearer first steps.</em></h2>
          </div>
          <p>
            Based in Dimna, Mango, Jamshedpur, Gupta Investment Zone is an
            authorized Angel One partner. We help people understand the demat
            account process, platform features, and available resources so they
            can make informed decisions at their own pace.
          </p>
        </div>
        <div className="trust-grid">
          {principles.map(({ icon: Icon, title, description }, index) => (
            <article className="trust-card" key={title}>
              <div className="trust-card-top">
                <span className="benefit-icon"><Icon size={19} /></span>
                <span className="card-number">0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="questions" className="faq-section section-wrap">
        <div className="section-kicker"><span>FAQ</span> DEMAT ACCOUNTS & STOCK MARKET TRADING</div>
        <h2>Questions before you get started?</h2>
        <div className="faq-list">
          {faqs.map(({ question, answer }) => (
            <details className="faq-item" key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <OfficeMap />

      <section id="contact" className="contact-section section-wrap">
        <div className="contact-section-copy">
          <div className="section-kicker"><span>CONTACT</span> TALK TO OUR TEAM</div>
          <h2>Have a question about opening an account?</h2>
          <p>
            Call, email, or send us a message. We can help you understand the
            application process and where to find Angel One&apos;s platform
            information.
          </p>
          <div className="contact-method-list">
            {siteConfig.contactNumber && (
              <a href={`tel:${siteConfig.contactNumber.replace(/[^\d+]/g, "")}`}>
                <Phone size={17} /> {siteConfig.contactNumber}
              </a>
            )}
            {siteConfig.officialGmail && (
              <a href={`mailto:${siteConfig.officialGmail}`}>
                <Mail size={17} /> {siteConfig.officialGmail}
              </a>
            )}
            {siteConfig.googleMapLink && (
              <a href="#location">
                <MapPin size={17} /> Visit us in Dimna, Mango, Jamshedpur
              </a>
            )}
          </div>
        </div>
        <div className="contact-form-card">
          <h3>Send us a message</h3>
          <p>Share your question and we&apos;ll point you toward the right next step.</p>
          <ContactForm contactEmail={siteConfig.officialGmail} />
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-orb closing-orb-one" aria-hidden="true" />
        <div className="closing-orb closing-orb-two" aria-hidden="true" />
        <div className="closing-content">
          <div className="section-kicker"><span>05</span> THE NEXT MOVE IS YOURS</div>
          <h2>Your future has<br />a first step.</h2>
          <p>Start a conversation. We&apos;ll help you take it from there.</p>
          <Link href={accountOpeningHref} className="button-light">
            Open a demat account <ArrowUpRight size={17} />
          </Link>
        </div>
        <span className="closing-caption">A MORE CONFIDENT START BEGINS HERE</span>
      </section>
    </main>
  );
}
