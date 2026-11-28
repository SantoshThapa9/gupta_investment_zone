import { ArrowUpRight, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const officeMapEmbedUrl =
  "https://maps.google.com/maps?output=embed&q=22.8362835%2C86.2282525&z=16";

export default function OfficeMap() {
  if (!siteConfig.googleMapLink) {
    return null;
  }

  return (
    <section id="location" className="office-location-section" aria-labelledby="office-location-title">
      <div className="office-location-inner">
        <div className="office-location-heading">
          <div>
            <p className="office-location-kicker">
              <MapPin size={14} /> VISIT US IN PERSON
            </p>
            <h2 id="office-location-title">Find us in Jamshedpur.</h2>
            <p>
              Our office is in Dimna, Mango, Jamshedpur, Jharkhand.
              We&apos;d be glad to welcome you.
            </p>
          </div>
          <a
            className="office-directions-link"
            href={siteConfig.googleMapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="office-map-card">
          <iframe
            src={officeMapEmbedUrl}
            title="Interactive map to Gupta Investment Zone in Dimna, Mango, Jamshedpur"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="office-map-label">
            <span className="office-map-pin"><MapPin size={17} /></span>
            <span>
              <strong>Gupta Investment Zone</strong>
              <small>Dimna · Mango · Jamshedpur</small>
            </span>
          </div>
          <a
            className="office-map-open"
            href={siteConfig.googleMapLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open office location in Google Maps"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
