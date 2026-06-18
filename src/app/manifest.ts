import type { MetadataRoute } from "next";

import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TEAMZ: Web, App & AI Product Studio",
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#f2f2f4",
    theme_color: "#0a0b0d",
  };
}
