import { NextResponse } from "next/server";
import { hasLocale } from "@/lib/i18n";
import { getLocalizedCountryWithLiveData } from "@/data/countries-localized";

export const revalidate = 3600;

/** A country in a given language — `slug` is the canonical (French) slug. `/api/country/[slug]` alone serves French. */
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string; lang: string }> }) {
  const { slug, lang } = await params;
  const country = hasLocale(lang) ? await getLocalizedCountryWithLiveData(slug, lang) : undefined;
  if (!country) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json(country);
}
