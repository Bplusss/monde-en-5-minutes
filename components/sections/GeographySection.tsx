import { Mountain, Waves, MapPinned } from "lucide-react";
import type { Country } from "@/lib/types";
import { getCategory } from "@/lib/categories";
import { formatNumber, withUnit } from "@/lib/format";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { StatTile } from "@/components/ui/StatTile";
import { SourceTag } from "@/components/ui/SourceTag";
import { CountryBadgeLink } from "@/components/ui/CountryBadgeLink";
import { CountryMap } from "@/components/map/CountryMap";
import { WorldTerritoriesMap } from "@/components/map/WorldTerritoriesMap";
import { OverseasTerritoriesGrid } from "@/components/OverseasTerritoriesGrid";
import { getCountryByName } from "@/data/countries-registry";

export function GeographySection({ country }: { country: Country }) {
  const cat = getCategory("geographie")!;
  const { geography, rivers, territories } = country;
  const overseasWithMap = territories.overseas.filter((t) => t.mapGroupId);
  const overlayLabels = Object.fromEntries(overseasWithMap.map((t) => [t.mapGroupId!, t.name]));

  return (
    <div>
      <SectionHeading
        eyebrow={cat.label}
        icon={<cat.icon className="size-4" aria-hidden />}
        accentText={cat.text}
        accentBg={cat.bg}
        title={geography.headline}
        description={geography.summary}
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile
          label="Superficie"
          value={withUnit(formatNumber(geography.areaKm2.value), geography.areaKm2.unit ?? "km²")}
          icon={<MapPinned className="size-4" aria-hidden />}
          accentText={cat.text}
          accentBg={cat.bg}
          source={geography.areaKm2.source}
          sourceUrl={geography.areaKm2.sourceUrl}
          year={geography.areaKm2.year}
          size="lg"
        />
        {geography.highestPoint && (
          <StatTile
            label={`Point culminant · ${geography.highestPoint.name}`}
            value={withUnit(formatNumber(geography.highestPoint.elevationM), "m")}
            icon={<Mountain className="size-4" aria-hidden />}
            accentText={cat.text}
            accentBg={cat.bg}
            source={geography.highestPoint.source}
            sourceUrl={geography.highestPoint.sourceUrl}
            size="lg"
          />
        )}
        <StatTile
          label="Frontières terrestres"
          value={String(geography.borderingCountries.length)}
          icon={<Waves className="size-4" aria-hidden />}
          accentText={cat.text}
          accentBg={cat.bg}
          size="lg"
        />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <Card className="overflow-hidden">
          <div className="aspect-[4/3] w-full sm:aspect-video">
            <CountryMap maps={country.maps} layer="rivers" rivers={rivers} className="size-full" />
          </div>
          <CardContent className="pt-4">
            <p className="text-sm text-muted">
              Les principaux fleuves de {country.name}. Cliquez sur un tracé pour voir sa longueur, sa source et son
              embouchure.
            </p>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <Card>
            <CardContent className="pt-5">
              <h3 className="mb-3 text-sm font-semibold">Climat</h3>
              <p className="text-sm leading-relaxed text-muted">{geography.climate}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-5">
              <h3 className="mb-3 text-sm font-semibold">Pays frontaliers</h3>
              <div className="flex flex-wrap gap-1.5">
                {geography.borderingCountries.map((c) => {
                  const match = getCountryByName(c);
                  return (
                    <CountryBadgeLink key={c} name={c} slug={match?.slug} available={match?.status === "available"} />
                  );
                })}
              </div>
              <div className="mt-4">
                <SourceTag source={geography.generalSource.source} sourceUrl={geography.generalSource.sourceUrl} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-1 text-sm font-semibold">Organisation administrative du territoire</h3>
        <p className="mb-4 text-xs leading-relaxed text-muted">{territories.summary}</p>

        <div className="grid gap-4 sm:grid-cols-3">
          {territories.divisions.map((d) => (
            <StatTile
              key={d.name}
              label={d.note ?? d.name}
              value={formatNumber(d.count)}
              accentText={cat.text}
              accentBg={cat.bg}
              source={d.source}
              sourceUrl={d.sourceUrl}
              size="lg"
            />
          ))}
        </div>

        <Card className="mt-4 overflow-hidden">
          <div className="aspect-[4/3] w-full sm:aspect-[21/9]">
            <CountryMap maps={country.maps} layer="regions" className="size-full" />
          </div>
          <CardContent className="pt-4">
            <p className="text-sm text-muted">
              Les {territories.metropolitanRegions.length} régions du territoire principal de {country.name}.
            </p>
          </CardContent>
        </Card>

        {territories.overseas.length > 0 && (
          <div className="mt-8">
            <h3 className="mb-1 text-sm font-semibold">Outre-mer</h3>
            <p className="mb-4 text-xs leading-relaxed text-muted">
              Territoires non contigus au territoire principal, chacun avec un statut institutionnel propre.
            </p>

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
                  <p className="text-sm text-muted">
                    Territoire principal (en couleur) et {overseasWithMap.length} territoires d&apos;outre-mer,
                    positionnés à leur emplacement réel sur le globe.
                  </p>
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
