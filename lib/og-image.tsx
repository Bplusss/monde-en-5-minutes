import { ImageResponse } from "next/og";
import type { Country } from "@/lib/types";
import { formatCompact, withUnit } from "@/lib/format";
import { loadFrauncesBold, loadInterRegular, loadInterSemiBold } from "@/lib/og-fonts";
import { type Locale, getDictionary } from "@/lib/i18n";

export const OG_SIZE = { width: 1200, height: 630 };

const BRAND_BG = "#16233f";
const BRAND_TEXT = "#faf9f7";
const BRAND_MUTED = "#9aa1ac";
const BRAND_ACCENT = "#e2536a";
const BRAND_SUBTLE_BLUE = "#8ea3cf";

async function loadFonts() {
  const [fraunces, interRegular, interSemiBold] = await Promise.all([
    loadFrauncesBold(),
    loadInterRegular(),
    loadInterSemiBold(),
  ]);
  const toEntries = (name: string, weight: 400 | 600 | 700, subsets: ArrayBuffer[]) =>
    subsets.map((data) => ({ name, data, weight, style: "normal" as const }));
  return {
    ...OG_SIZE,
    fonts: [
      ...toEntries("Fraunces", 700, fraunces),
      ...toEntries("Inter", 400, interRegular),
      ...toEntries("Inter", 600, interSemiBold),
    ],
  };
}

function BrandFooter({ locale }: { locale: Locale }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 26, color: BRAND_ACCENT, fontFamily: "Inter", fontWeight: 600 }}>
      <div style={{ display: "flex", width: 10, height: 10, borderRadius: 999, background: BRAND_ACCENT }} />
      {getDictionary(locale).site.name}
    </div>
  );
}

export async function renderCountryOgImage(country: Country, locale: Locale) {
  const options = await loadFonts();
  const t = getDictionary(locale);

  const kpis = [
    { value: withUnit(formatCompact(country.population.total.value, 1, locale), t.units.inhabitants), label: t.country.population },
    {
      value: withUnit(formatCompact(country.geography.areaKm2.value, country.geography.areaKm2.value < 1 ? 2 : 0, locale), "km²"),
      label: t.country.area,
    },
    { value: withUnit(String(country.regions.length), t.units.regions), label: t.country.territory },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          background: BRAND_BG,
          color: BRAND_TEXT,
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <div style={{ display: "flex", fontSize: 130, lineHeight: 1 }}>{country.flag}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Fraunces", fontSize: 74, fontWeight: 700, lineHeight: 1.08 }}>{country.name}</div>
            <div style={{ display: "flex", fontSize: 30, color: BRAND_SUBTLE_BLUE, marginTop: 10 }}>{t.country.capital(country.capital)}</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 20, marginBottom: 28 }}>
          {kpis.map((k) => (
            <div
              key={k.label}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "22px 28px",
                flex: 1,
              }}
            >
              <div style={{ display: "flex", fontFamily: "Fraunces", fontSize: 34, fontWeight: 700 }}>{k.value}</div>
              <div style={{ display: "flex", fontSize: 20, color: BRAND_MUTED, marginTop: 6 }}>{k.label}</div>
            </div>
          ))}
        </div>

        <BrandFooter locale={locale} />
      </div>
    ),
    options,
  );
}

export async function renderSiteOgImage(locale: Locale) {
  const options = await loadFonts();
  const t = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: BRAND_BG,
          color: BRAND_TEXT,
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", fontSize: 90, lineHeight: 1 }}>🌍</div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "Fraunces", fontSize: 84, fontWeight: 700, lineHeight: 1.08 }}>{t.site.name}</div>
          <div style={{ display: "flex", fontSize: 32, color: BRAND_SUBTLE_BLUE, marginTop: 18, maxWidth: 900 }}>
            {t.site.ogTagline}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 26, color: BRAND_ACCENT, fontFamily: "Inter", fontWeight: 600 }}>
          <div style={{ display: "flex", width: 10, height: 10, borderRadius: 999, background: BRAND_ACCENT }} />
          theworldin5.com
        </div>
      </div>
    ),
    options,
  );
}
