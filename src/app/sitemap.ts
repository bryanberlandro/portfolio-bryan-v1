import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// One public route today. Add new pages here as the site grows.
// lastModified is intentionally omitted: no reliable per-page modification date exists.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 }];
}
