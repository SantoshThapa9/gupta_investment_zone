"use client";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FiYoutube, FiInstagram } from "react-icons/fi";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8  flex items-center justify-center rounded-full">
              {mounted && theme && (
                <Image
                  src={theme === "light" ? "/darkLogo.png" : "/logo.png"}
                  alt="Gupta Investment Zone"
                  width={50}
                  height={50}
                />
              )}
            </div>
            <span className=" font-bold text-xl text-foreground">
              Gupta Investment Zone
            </span>
          </div>
          <p className="  mb-4 max-w-md">
            Authorized Partner of Angel One. Start your investment journey with
            the lowest brokerage rates and trusted support.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="  hover:text-primary transition-colors">
              <FiYoutube size={24} />
            </Link>
            <Link href="#" className="  hover:text-primary transition-colors">
              <FiInstagram size={24} />
            </Link>
            <Link href="#" className="  hover:text-primary transition-colors">
              <MessageCircle size={24} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="  hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="  hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="  hover:text-primary transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="  hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className=" font-semibold text-foreground mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <span>Demat Account Opening</span>
            </li>
            <li>
              <span>Trading Support</span>
            </li>
            <li>
              <span>Investment Guidance</span>
            </li>
            <li>
              <span>Portfolio Management</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-8 text-center">
        <footer className="text-center text-sm  mt-10">
          © {new Date().getFullYear()} . Built by{" "}
          <a
            href="https://www.santoshthapa.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Santosh
          </a>
        </footer>
      </div>
    </footer>
  );
}
