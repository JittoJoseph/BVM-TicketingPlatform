import { MetadataRoute } from "next";
import { EVENTS } from "@/lib/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bvmtechfest.com";

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/organizers/event-summary`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Add event pages
  EVENTS.forEach((event) => {
    sitemap.push({
      url: `${baseUrl}/events/${event.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });

  return sitemap;
}
