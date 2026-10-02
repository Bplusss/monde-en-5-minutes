// Builds vietnam-regions.json (see data/vietnam/regions.ts). The outline comes
// from new-country-maps.mjs (Natural Earth 1:10m, unchanged).
//
// Why a dedicated script: Natural Earth's admin1 layer still carries the 63
// pre-2025 provinces. Resolution 202/2025/QH15 (12 June 2025, in force 1 July
// 2025) merged them into 34 provincial-level units, always by joining WHOLE
// former provinces — so the current units are rebuilt here as exact unions of
// the Natural Earth polygons, with no external boundary source needed.
//
// Codes: ISO 3166-2:VN has not been updated since the reform (it still lists
// the 63 former units). Each merged unit took the name of one of its
// constituent provinces, so it keeps that province's former ISO code
// (e.g. the new Tuyên Quang = old Tuyên Quang VN-07 + Hà Giang VN-03 → VN-07).
// Names are then synced from regions.ts by sync-region-names.mjs.
//
// Usage: node scripts/geo/build-vietnam-regions.mjs
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import * as turf from "@turf/turf";
import { ensureNaturalEarthData } from "./fetch-natural-earth.mjs";

const GEO_DIR = path.resolve(import.meta.dirname, "../../public/geo");

// New unit code → [name, former Natural Earth iso_3166_2 codes merged into it].
const MERGES = {
  // Unchanged (11)
  "VN-HN": ["Hanoï", ["VN-HN"]],
  "VN-26": ["Hué", ["VN-26"]],
  "VN-01": ["Lai Châu", ["VN-01"]],
  "VN-71": ["Điện Biên", ["VN-71"]],
  "VN-05": ["Sơn La", ["VN-05"]],
  "VN-09": ["Lạng Sơn", ["VN-09"]],
  "VN-13": ["Quảng Ninh", ["VN-13"]],
  "VN-21": ["Thanh Hóa", ["VN-21"]],
  "VN-22": ["Nghệ An", ["VN-22"]],
  "VN-23": ["Hà Tĩnh", ["VN-23"]],
  "VN-04": ["Cao Bằng", ["VN-04"]],
  // Merged (23)
  "VN-07": ["Tuyên Quang", ["VN-07", "VN-03"]], // + Hà Giang
  "VN-02": ["Lào Cai", ["VN-02", "VN-06"]], // + Yên Bái
  "VN-69": ["Thái Nguyên", ["VN-69", "VN-53"]], // + Bắc Kạn
  "VN-68": ["Phú Thọ", ["VN-68", "VN-70", "VN-14"]], // + Vĩnh Phúc, Hòa Bình
  "VN-56": ["Bắc Ninh", ["VN-56", "VN-54"]], // + Bắc Giang
  "VN-66": ["Hưng Yên", ["VN-66", "VN-20"]], // + Thái Bình
  "VN-HP": ["Haïphong", ["VN-HP", "VN-61"]], // + Hải Dương
  "VN-18": ["Ninh Bình", ["VN-18", "VN-63", "VN-67"]], // + Hà Nam, Nam Định
  "VN-25": ["Quảng Trị", ["VN-25", "VN-24"]], // + Quảng Bình
  "VN-DN": ["Da Nang", ["VN-DN", "VN-27"]], // + Quảng Nam
  "VN-29": ["Quảng Ngãi", ["VN-29", "VN-28"]], // + Kon Tum
  "VN-30": ["Gia Lai", ["VN-30", "VN-31"]], // + Bình Định
  "VN-34": ["Khánh Hòa", ["VN-34", "VN-36"]], // + Ninh Thuận
  "VN-35": ["Lâm Đồng", ["VN-35", "VN-72", "VN-40"]], // + Đắk Nông, Bình Thuận
  "VN-33": ["Đắk Lắk", ["VN-33", "VN-32"]], // + Phú Yên
  "VN-SG": ["Hô Chi Minh-Ville", ["VN-SG", "VN-57", "VN-43"]], // + Bình Dương, Bà Rịa-Vũng Tàu
  "VN-39": ["Đồng Nai", ["VN-39", "VN-58"]], // + Bình Phước
  "VN-37": ["Tây Ninh", ["VN-37", "VN-41"]], // + Long An
  "VN-CT": ["Cần Thơ", ["VN-CT", "VN-52", "VN-73"]], // + Sóc Trăng, Hậu Giang
  "VN-49": ["Vĩnh Long", ["VN-49", "VN-50", "VN-51"]], // + Bến Tre, Trà Vinh
  "VN-45": ["Đồng Tháp", ["VN-45", "VN-46"]], // + Tiền Giang
  "VN-59": ["Cà Mau", ["VN-59", "VN-55"]], // + Bạc Liêu
  "VN-44": ["An Giang", ["VN-44", "VN-47"]], // + Kiên Giang
};

function writeFeatureCollection(filePath, features) {
  const body = features.map((f) => JSON.stringify(f)).join(",\n");
  writeFileSync(filePath, `{"type":"FeatureCollection", "features": [\n${body}\n]}\n`);
}

function round(geometry) {
  return turf.truncate(turf.feature(geometry), { precision: 5, mutate: true }).geometry;
}

async function main() {
  const { admin1: admin1Path } = await ensureNaturalEarthData();
  const admin1 = JSON.parse(readFileSync(admin1Path, "utf8"));
  const byCode = new Map(admin1.features.filter((f) => f.properties.adm0_a3 === "VNM").map((f) => [f.properties.iso_3166_2, f]));
  if (byCode.size !== 63) throw new Error(`Expected 63 Natural Earth provinces for VNM, got ${byCode.size}`);

  const used = new Set();
  const features = [];
  for (const [code, [name, parts]] of Object.entries(MERGES)) {
    const polys = parts.map((p) => {
      const f = byCode.get(p);
      if (!f) throw new Error(`Missing Natural Earth province ${p}`);
      if (used.has(p)) throw new Error(`${p} used twice`);
      used.add(p);
      return turf.feature(f.geometry);
    });
    const merged = polys.length === 1 ? polys[0] : turf.union(turf.featureCollection(polys));
    features.push({ type: "Feature", geometry: round(merged.geometry), properties: { name, code } });
  }
  const unused = [...byCode.keys()].filter((c) => !used.has(c));
  if (unused.length) throw new Error(`Unassigned Natural Earth provinces: ${unused.join(", ")}`);

  features.sort((a, b) => a.properties.code.localeCompare(b.properties.code));
  writeFeatureCollection(path.join(GEO_DIR, "vietnam-regions.json"), features);
  for (const f of features) console.log(`${f.properties.code} ${f.properties.name}: ${Math.round(turf.area(f) / 1e6)} km²`);
  console.log(`${features.length} units written.`);
}

main();
