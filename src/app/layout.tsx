import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { Poppins, Orbitron, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

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
    default: "Gupta Investment Zone | Free Demat Account | Angel One Authorized Partner",
    template: "%s | Gupta Investment Zone",
  },

  description:
    "Gupta Investment Zone is an Authorized Partner of Angel One. Open your FREE Demat & Trading Account with lowest brokerage, expert investment support, mutual funds, IPOs, stocks, and 24x7 customer assistance.",

  keywords: [
    "Gupta Investment Zone",
    "Gupta Investment Zone Jamshedpur",
    "Angel One Partner",
    "Angel One Authorized Partner",
    "Free Demat Account",
    "Open Demat Account",
    "Stock Market",
    "Trading Account",
    "Investment Advisor",
    "Mutual Funds",
    "IPO Investment",
    "Lowest Brokerage",
    "Share Market",
    "Nifty",
    "Sensex",
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
    title: "Gupta Investment Zone | Angel One Authorized Partner",
    description:
      "Open your FREE Demat Account with Gupta Investment Zone. Authorized Partner of Angel One offering lowest brokerage, expert support, IPOs, mutual funds, and stock market investing.",

    url: "https://gupta-investment-zone.vercel.app/",
    siteName: "Gupta Investment Zone",
    locale: "en_IN",
    type: "website",


  },

  twitter: {
    card: "summary_large_image",
    title: "Gupta Investment Zone",
    description:
      "Open your FREE Demat Account with Gupta Investment Zone - Authorized Partner of Angel One.",
    images: ["/og-image.jpg"],
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
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navigation />
          {children}
          <Footer />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
