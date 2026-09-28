import type { MetadataRoute } from "next";

// Served at /manifest.webmanifest (used when someone adds the site to their home screen)
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Scrbb",
    short_name: "Scrbb",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F7FB",
    theme_color: "#5B4BFF",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
