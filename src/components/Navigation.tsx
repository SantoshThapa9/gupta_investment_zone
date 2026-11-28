"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#community", label: "Follow" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navigation({
  accountOpeningHref,
}: {
  accountOpeningHref: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#183a2b] text-[#f3f5ec] shadow-lg shadow-[#10271c]/10">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/#home"
          className="flex items-center gap-2.5"
          aria-label="Gupta Investment Zone home"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            width={42}
            height={42}
            alt=""
            className="rounded-full"
          />
          <span className="flex flex-col gap-1">
            <span className=" text-md font-semibold tracking-tight sm:text-sm">
              Gupta Investment Zone
            </span>
            <span className="hidden text-[8px] tracking-[.2em] text-[#b8cdb5] sm:block">
              ANGEL ONE PARTNER
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[.04] p-1 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-4 py-2.5 text-xs text-[#e2e8de]/75 transition-colors hover:bg-white/[.09] hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-full border border-white/15 p-2.5 text-[#e8eee4] transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#183a2b] px-5 py-5 md:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-[#e2e8de]/80 transition-colors hover:bg-white/[.07] hover:text-white"
              >
                {label}
              </Link>
            ))}
            <Link
              href={accountOpeningHref}
              target={accountOpeningHref.startsWith("/") ? undefined : "_blank"}
              rel={
                accountOpeningHref.startsWith("/")
                  ? undefined
                  : "noopener noreferrer"
              }
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 rounded-full bg-[#c4d6aa] px-4 py-3.5 text-center text-sm font-semibold text-[#183a2b]"
            >
              Open a demat account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
