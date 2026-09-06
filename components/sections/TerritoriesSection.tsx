import { getCategory } from "@/lib/categories";
import type { Country } from "@/lib/types";
import { formatNumber } from "@/lib/format";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { StatTile } from "@/components/ui/StatTile";
import { CountryMap } from "@/components/map/CountryMap";
import { WorldTerritoriesMap } from "@/components/map/WorldTerritoriesMap";
import { OverseasTerritoriesGrid } from "@/components/OverseasTerritoriesGrid";

export function TerritoriesSection({ country }: { country: Country }) {
  const cat = getCategory("territoire")!;
  const { territories } = country;
  const overseasWithMap = territories.overseas.filter((t) => t.mapGroupId);
  const overlayLabels = Object.fromEntries(overseasWithMap.map((t) => [t.mapGroupId!, t.name]));

  return (
    <div>
      <SectionHeading
        eyebrow={cat.label}
        icon={<cat.icon className="size-4" aria-hidden />}
        accentText={cat.text}
        accentBg={cat.bg}
        title="Organisation administrative du territoire"
        description={territories.summary}
      />

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
  );
}
