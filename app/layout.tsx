import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const MAPLIBRE_VERSION = "5.24.0";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const SITE_URL = "https://le-monde-en-5-minutes.example";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Le Monde en 5 minutes",
    template: "%s · Le Monde en 5 minutes",
  },
  description:
    "Découvrez un pays en quelques minutes : géographie, population, économie, histoire et culture, présentés de façon claire, visuelle et sourcée.",
  openGraph: {
    type: "website",
    siteName: "Le Monde en 5 minutes",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <head>
        <link rel="stylesheet" href={`https://unpkg.com/maplibre-gl@${MAPLIBRE_VERSION}/dist/maplibre-gl.css`} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script
          src={`https://unpkg.com/maplibre-gl@${MAPLIBRE_VERSION}/dist/maplibre-gl.js`}
          strategy="beforeInteractive"
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
