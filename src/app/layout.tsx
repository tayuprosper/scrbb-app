import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/styles/landing.css";

// The app's font, shipped with the site (no request to Google, works offline in dev)
const nunito = localFont({
  src: [
    { path: "../fonts/nunito-400.woff2", weight: "400" },
    { path: "../fonts/nunito-600.woff2", weight: "600" },
    { path: "../fonts/nunito-700.woff2", weight: "700" },
    { path: "../fonts/nunito-800.woff2", weight: "800" },
    { path: "../fonts/nunito-900.woff2", weight: "900" },
  ],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scrbb-app.site"),
  title: {
    default: "Scrbb: practical skills for Cameroon",
    template: "%s · Scrbb",
  },
  description:
    "Short, practical lessons on money, AI, business, careers and online safety, written for Cameroon. Download the Scrbb app for Android.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Scrbb: practical skills for Cameroon",
    description: "Learn skills that pay, five minutes at a time. Download the Scrbb app for Android.",
    url: "/",
    siteName: "Scrbb",
    images: [{ url: "/icon-512.png", width: 512, height: 512 }],
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#5B4BFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
