import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Fraunces } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";
import { MAPLIBRE_CSS_URL } from "@/lib/maplibre-global";
import { LOCALES, OG_LOCALE, getDictionary, hasLocale } from "@/lib/i18n";
import { getAvailableCountries } from "@/data/countries-localized";
import "../globals.css";

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

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t.site.name,
      template: `%s · ${t.site.name}`,
    },
    description: t.site.description,
    openGraph: {
      type: "website",
      siteName: t.site.name,
      locale: OG_LOCALE[lang],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  // Countries readable in each language — lets the language switcher send a reader to the same page in the other language when it exists.
  const availability = Object.fromEntries(LOCALES.map((l) => [l, getAvailableCountries(l).map((c) => c.slug)]));

  return (
    <html lang={lang} className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <head>
        <link rel="stylesheet" href={MAPLIBRE_CSS_URL} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader locale={lang} availability={availability} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={lang} />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
    </html>
  );
}
