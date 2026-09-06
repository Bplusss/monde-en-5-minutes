import { Mountain, Waves, MapPinned } from "lucide-react";
import type { Country } from "@/lib/types";
import { getCategory } from "@/lib/categories";
import { formatNumber, withUnit } from "@/lib/format";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { StatTile } from "@/components/ui/StatTile";
import { SourceTag } from "@/components/ui/SourceTag";
import { Badge } from "@/components/ui/Badge";
import { CountryMap } from "@/components/map/CountryMap";

export function GeographySection({ country }: { country: Country }) {
  const cat = getCategory("geographie")!;
  const { geography, rivers } = country;

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
                {geography.borderingCountries.map((c) => (
                  <Badge key={c}>{c}</Badge>
                ))}
              </div>
              <div className="mt-4">
                <SourceTag source={geography.generalSource.source} sourceUrl={geography.generalSource.sourceUrl} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
