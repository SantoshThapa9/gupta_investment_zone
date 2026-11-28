import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gupta-investment-zone.vercel.app/",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
