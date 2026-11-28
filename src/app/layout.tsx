import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Poppins, Orbitron, Inter } from "next/font/google";
import { accountOpeningHref } from "@/data/siteConfig";

const font1 = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font1",
});
const font2 = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font2",
});
const font3 = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font3",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gupta-investment-zone.vercel.app/"),

  title: {
    default:
      "Gupta Investment Zone | Online Demat Account Guidance",
    template: "%s | Gupta Investment Zone",
  },

  description:
    "Based in Jamshedpur, Gupta Investment Zone offers online guidance on Angel One demat account opening, trading tools, and investor education. Account availability depends on Angel One's eligibility requirements and service areas.",

  keywords: [
    "Gupta Investment Zone",
    "Gupta Investment Zone Jamshedpur",
    "demat account Jamshedpur",
    "Angel One demat account",
    "stock market trading",
    "stock market trading Jamshedpur",
    "trading platform",
    "investor education",
  ],

  authors: [
    {
      name: "Gupta Investment Zone",
    },
  ],

  creator: "Gupta Investment Zone",

  publisher: "Gupta Investment Zone",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://gupta-investment-zone.vercel.app/",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title:
      "Gupta Investment Zone | Online Demat Account Guidance",
    description:
      "Jamshedpur-based online guidance on Angel One demat accounts, trading tools, and investor education. Account availability depends on Angel One's eligibility requirements and service areas.",
    url: "https://gupta-investment-zone.vercel.app/",
    siteName: "Gupta Investment Zone",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/darkLogo.png",
        alt: "Gupta Investment Zone",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Gupta Investment Zone | Online Demat Account Guidance",
    description:
      "Jamshedpur-based online guidance on Angel One demat accounts, trading tools, and investor education. Account availability depends on Angel One's eligibility requirements and service areas.",
    images: ["/darkLogo.png"],
  },

  category: "Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${font1.variable} ${font2.variable} ${font3.variable}`}
    >
      <body>
        <Navigation
          accountOpeningHref={accountOpeningHref}
        />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
