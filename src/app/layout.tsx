import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
  title: "Gupta Investment Zone",
  description:
    "Open your Free Demat Account with Gupta Investment Zone - Authorized Partner of Angel One. Enjoy lowest brokerage rates, 24/7 CRM support & smarter investing today!",
  icons: {
    icon: "/logo.png",
  },
  keywords:
    "Angel One, Demat Account, Nifty, Lowest Brokerage, Investment, Trading, Gupta Investment Zone",
  authors: [{ name: "Gupta Investment Zone" }],
  openGraph: {
    title: "Gupta Investment Zone",
    description:
      "Open your Free Demat Account with Gupta Investment Zone - Authorized Partner of Angel One. Enjoy lowest brokerage rates, 24/7 CRM support & smarter investing today!",
    type: "website",
  },
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
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
