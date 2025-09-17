"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X, Home, Info, Briefcase, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home", icon: <Home size={18} /> },
  { href: "/about", label: "About", icon: <Info size={18} /> },
  { href: "/services", label: "Services", icon: <Briefcase size={18} /> },
  { href: "/contact", label: "Contact", icon: <Phone size={18} /> },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="bg-background text-foreground border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {mounted && theme ? (
              <Image
                src={theme === "dark" ? "/logo.png" : "/darkLogo.png"}
                width={40}
                height={40}
                alt="logo"
                className="rounded-full"
              />
            ) : (
              <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="logo"
                className="rounded-full"
              />
            )}
            <strong className="hidden lg:flex font-font3">
              Gupta Investment Zone
            </strong>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex font-font2 items-center space-x-6">
            {navLinks.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                {icon} {label}
              </Link>
            ))}
            <Button>Open Demat Account</Button>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  {icon} {label}
                </Link>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                Open Demat Account
              </Button>
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center justify-center gap-2 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
