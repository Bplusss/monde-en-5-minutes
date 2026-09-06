import { MapPin } from "lucide-react";
import type { TerritoriesData } from "@/lib/types";
import { OverseasTerritoryMap } from "@/components/map/OverseasTerritoryMap";
import { Card } from "@/components/ui/Card";

/**
 * Renders every overseas / non-contiguous territory a country declares, each
 * as its own small map card. Entries without map data (no `mapGroupId`, or
 * no `overseasMapGeojsonUrl` on the country) fall back to a plain card — the
 * grid works the same for a future country with zero, one, or many such
 * territories, not just France's.
 */
export function OverseasTerritoriesGrid({ territories }: { territories: TerritoriesData }) {
  if (!territories.overseas.length) return null;
  const geojsonUrl = territories.overseasMapGeojsonUrl;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {territories.overseas.map((t) => (
        <Card key={t.name} className="overflow-hidden">
          <div className="aspect-square w-full bg-surface-muted">
            {geojsonUrl && t.mapGroupId ? (
              <OverseasTerritoryMap geojsonUrl={geojsonUrl} groupId={t.mapGroupId} className="size-full" />
            ) : (
              <div className="flex size-full items-center justify-center text-muted">
                <MapPin className="size-5" aria-hidden />
              </div>
            )}
          </div>
          <div className="p-3">
            <p className="truncate text-sm font-semibold leading-snug">{t.name}</p>
            <p className="mt-0.5 truncate text-[11px] text-muted">{t.status}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
