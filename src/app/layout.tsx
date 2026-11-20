import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

/*
  One typeface for the whole site: Space Grotesk (variable, weights 300 to 700), self-hosted.
  SIL Open Font License 1.1, file from Fontsource. Hierarchy comes from weight and size only.
*/
const spaceGrotesk = localFont({
  src: [{ path: "./fonts/space-grotesk-latin-wght-normal.woff2", weight: "300 700", style: "normal" }],
  display: "swap",
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${site.fullName} Portfolio`,
    title: site.title,
    description: site.description,
    locale: site.locale,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [{ url: site.ogImage, alt: site.ogImageAlt }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={spaceGrotesk.variable}
    >
      <body>
        <JsonLd />
        <MotionProvider>
          <LenisProvider>{children}</LenisProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
