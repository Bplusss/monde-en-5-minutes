import { Mountain, Waves, MapPinned } from "lucide-react";
import type { Country } from "@/lib/types";
import { getCategory } from "@/lib/categories";
import { type Locale, getDictionary } from "@/lib/i18n";
import { formatNumber, withUnit } from "@/lib/format";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { StatTile } from "@/components/ui/StatTile";
import { SourceTag } from "@/components/ui/SourceTag";
import { CountryBadgeLink } from "@/components/ui/CountryBadgeLink";
import { CountryMap } from "@/components/map/CountryMap";
import { WorldTerritoriesMap } from "@/components/map/WorldTerritoriesMap";
import { OverseasTerritoriesGrid } from "@/components/OverseasTerritoriesGrid";
import { getCountries } from "@/data/countries-localized";

export function GeographySection({ country, locale }: { country: Country; locale: Locale }) {
  const cat = getCategory("geographie")!;
  const dict = getDictionary(locale);
  const t = dict.sections;
  const of = dict.country.of(country.nameWithArticle);
  const { geography, rivers, territories } = country;
  const overseasWithMap = territories.overseas.filter((t) => t.mapGroupId);
  const overlayLabels = Object.fromEntries(overseasWithMap.map((t) => [t.mapGroupId!, t.name]));
  const regionLabels = Object.fromEntries(
    country.regions.filter((r) => r.geoName && r.geoName !== r.name).map((r) => [r.geoName!, r.name]),
  );
  // Bordering countries are named in `locale`, like the localized registry.
  const registry = getCountries(locale);

  return (
    <div>
      <SectionHeading
        eyebrow={cat.labels[locale]}
        icon={<cat.icon className="size-4" aria-hidden />}
        accentText={cat.text}
        accentBg={cat.bg}
        title={geography.headline}
        description={geography.summary}
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile
          label={t.area}
          value={withUnit(
            formatNumber(geography.areaKm2.value, geography.areaKm2.value < 1 ? 2 : 0, locale),
            geography.areaKm2.unit ?? "km²",
          )}
          icon={<MapPinned className="size-4" aria-hidden />}
          accentText={cat.text}
          accentBg={cat.bg}
          source={geography.areaKm2.source}
          sourceUrl={geography.areaKm2.sourceUrl}
          year={geography.areaKm2.year}
          size="lg"
          locale={locale}
        />
        {geography.highestPoint && (
          <StatTile
            label={t.highestPoint(geography.highestPoint.name)}
            value={withUnit(formatNumber(geography.highestPoint.elevationM, 0, locale), "m")}
            icon={<Mountain className="size-4" aria-hidden />}
            accentText={cat.text}
            accentBg={cat.bg}
            source={geography.highestPoint.source}
            sourceUrl={geography.highestPoint.sourceUrl}
            size="lg"
            locale={locale}
          />
        )}
        <StatTile
          label={t.landBorders}
          value={String(geography.borderingCountries.length)}
          icon={<Waves className="size-4" aria-hidden />}
          accentText={cat.text}
          accentBg={cat.bg}
          size="lg"
          locale={locale}
        />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <Card className="overflow-hidden">
          <div className="aspect-[4/3] w-full sm:aspect-video">
            <CountryMap maps={country.maps} layer="rivers" rivers={rivers} locale={locale} className="size-full" />
          </div>
          <CardContent className="pt-4">
            <p className="text-sm text-muted">{t.riversCaption(of)}</p>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <Card>
            <CardContent className="pt-5">
              <h3 className="mb-3 text-sm font-semibold">{t.climate}</h3>
              <p className="text-sm leading-relaxed text-muted">{geography.climate}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-5">
              <h3 className="mb-3 text-sm font-semibold">{t.borderingCountries}</h3>
              <div className="flex flex-wrap gap-1.5">
                {geography.borderingCountries.map((c) => {
                  const match = registry.find((r) => r.name === c);
                  return (
                    <CountryBadgeLink
                      key={c}
                      name={c}
                      slug={match?.slug}
                      available={match?.status === "available"}
                      locale={locale}
                    />
                  );
                })}
              </div>
              <div className="mt-4">
                <SourceTag source={geography.generalSource.source} sourceUrl={geography.generalSource.sourceUrl} locale={locale} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-1 text-sm font-semibold">{t.administration}</h3>
        <p className="mb-4 text-xs leading-relaxed text-muted">{territories.summary}</p>

        <div className="grid gap-4 sm:grid-cols-3">
          {territories.divisions.map((d) => (
            <StatTile
              key={d.name}
              label={d.note ?? d.name}
              value={formatNumber(d.count, 0, locale)}
              accentText={cat.text}
              accentBg={cat.bg}
              source={d.source}
              sourceUrl={d.sourceUrl}
              size="lg"
              locale={locale}
            />
          ))}
        </div>

        <Card className="mt-4 overflow-hidden">
          <div className="aspect-[4/3] w-full sm:aspect-[21/9]">
            <CountryMap maps={country.maps} layer="regions" regionLabels={regionLabels} locale={locale} className="size-full" />
          </div>
          <CardContent className="pt-4">
            <p className="text-sm text-muted">{t.regionsCaption(territories.metropolitanRegions.length, of)}</p>
          </CardContent>
        </Card>

        {territories.overseas.length > 0 && (
          <div className="mt-8">
            <h3 className="mb-1 text-sm font-semibold">{t.overseas}</h3>
            <p className="mb-4 text-xs leading-relaxed text-muted">{t.overseasIntro}</p>

            {overseasWithMap.length > 0 && territories.overseasMapGeojsonUrl && (
              <Card className="mb-4 overflow-hidden">
                <div className="aspect-[4/3] w-full sm:aspect-[21/9]">
                  <WorldTerritoriesMap
                    mainIso={country.id}
                    overlayGeojsonUrl={territories.overseasMapGeojsonUrl}
                    overlayLabels={overlayLabels}
                    className="size-full"
                  />
                </div>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted">{t.overseasMapCaption(overseasWithMap.length)}</p>
                </CardContent>
              </Card>
            )}

            <OverseasTerritoriesGrid territories={territories} />
          </div>
        )}
      </div>
    </div>
  );
}
