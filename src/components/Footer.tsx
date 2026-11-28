import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/siteConfig";

const quickLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Demat & trading" },
  { href: "/#community", label: "Follow us" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_.75fr_1fr]">
        <div>
          <Link href="/#home" className="font-font3 text-sm font-semibold tracking-tight">
            Gupta Investment Zone
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-foreground/60">
            An authorized Angel One partner, here to make your first steps in
            investing feel a little more personal.
          </p>
          {socialLinks.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-4">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-foreground/70 transition-colors hover:text-primary"
                >
                  {label} <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[.13em]">Explore</h2>
          <ul className="mt-4 space-y-3">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-foreground/60 transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[.13em]">Say hello</h2>
          <div className="mt-4 space-y-3">
            {siteConfig.officialGmail && (
              <a
                href={`mailto:${siteConfig.officialGmail}`}
                className="flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                <Mail size={15} /> {siteConfig.officialGmail}
              </a>
            )}
            {siteConfig.contactNumber && (
              <a
                href={`tel:${siteConfig.contactNumber.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                <Phone size={15} /> {siteConfig.contactNumber}
              </a>
            )}
            {siteConfig.googleMapLink && (
              <a
                href={siteConfig.googleMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                <MapPin size={15} /> Find us on Google Maps
              </a>
            )}
            {!siteConfig.officialGmail &&
              !siteConfig.contactNumber &&
              !siteConfig.googleMapLink && (
              <Link
                href="/#contact"
                className="text-sm text-foreground/60 transition-colors hover:text-primary"
              >
                Send us a message
              </Link>
              )}
          </div>
        </div>
      </div>

      <div className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-5 text-xs text-foreground/50 sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} Gupta Investment Zone</span>
          <span>Investing involves risk. Please make informed decisions.</span>
        </div>
      </div>
    </footer>
  );
}
