import {
  Map,
  Users,
  Languages,
  Church,
  Landmark,
  Coins,
  Scroll,
  Drama,
  Leaf,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import type { CategoryKey } from "./types";
import type { Locale } from "./i18n/config";

export interface CategoryConfig {
  key: CategoryKey;
  /** Canonical (French) slug — the internal id; public URLs use `slugs[locale]`. */
  slug: string;
  slugs: Record<Locale, string>;
  emoji: string;
  labels: Record<Locale, string>;
  icon: LucideIcon;
  /** Tailwind classes — kept literal (not composed) so the JIT scanner picks them up. */
  text: string;
  bg: string;
  border: string;
  ring: string;
  bar: string;
}

export const CATEGORIES: CategoryConfig[] = [
  {
    key: "geographie",
    slug: "geographie",
    slugs: { fr: "geographie", en: "geography" },
    emoji: "🗺️",
    labels: { fr: "Géographie et territoire", en: "Geography & territory" },
    icon: Map,
    text: "text-emerald-700 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    border: "border-emerald-200 dark:border-emerald-900",
    ring: "ring-emerald-500",
    bar: "bg-emerald-500",
  },
  {
    key: "population",
    slug: "population",
    slugs: { fr: "population", en: "population" },
    emoji: "👥",
    labels: { fr: "Population", en: "Population" },
    icon: Users,
    text: "text-blue-700 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-200 dark:border-blue-900",
    ring: "ring-blue-500",
    bar: "bg-blue-500",
  },
  {
    key: "langues",
    slug: "langues",
    slugs: { fr: "langues", en: "languages" },
    emoji: "🗣️",
    labels: { fr: "Langues", en: "Languages" },
    icon: Languages,
    text: "text-violet-700 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/40",
    border: "border-violet-200 dark:border-violet-900",
    ring: "ring-violet-500",
    bar: "bg-violet-500",
  },
  {
    key: "religion",
    slug: "religion",
    slugs: { fr: "religion", en: "religion" },
    emoji: "🛐",
    labels: { fr: "Religions", en: "Religions" },
    icon: Church,
    text: "text-stone-700 dark:text-stone-300",
    bg: "bg-stone-100 dark:bg-stone-800/40",
    border: "border-stone-300 dark:border-stone-700",
    ring: "ring-stone-500",
    bar: "bg-stone-500",
  },
  {
    key: "politique",
    slug: "politique",
    slugs: { fr: "politique", en: "politics" },
    emoji: "🏛️",
    labels: { fr: "Politique", en: "Politics" },
    icon: Landmark,
    text: "text-slate-700 dark:text-slate-300",
    bg: "bg-slate-100 dark:bg-slate-800/40",
    border: "border-slate-300 dark:border-slate-700",
    ring: "ring-slate-500",
    bar: "bg-slate-500",
  },
  {
    key: "economie",
    slug: "economie",
    slugs: { fr: "economie", en: "economy" },
    emoji: "💰",
    labels: { fr: "Économie", en: "Economy" },
    icon: Coins,
    text: "text-amber-700 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-200 dark:border-amber-900",
    ring: "ring-amber-500",
    bar: "bg-amber-500",
  },
  {
    key: "histoire",
    slug: "histoire",
    slugs: { fr: "histoire", en: "history" },
    emoji: "📜",
    labels: { fr: "Histoire", en: "History" },
    icon: Scroll,
    text: "text-rose-700 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/40",
    border: "border-rose-200 dark:border-rose-900",
    ring: "ring-rose-500",
    bar: "bg-rose-500",
  },
  {
    key: "culture",
    slug: "culture",
    slugs: { fr: "culture", en: "culture" },
    emoji: "🎭",
    labels: { fr: "Culture", en: "Culture" },
    icon: Drama,
    text: "text-pink-700 dark:text-pink-400",
    bg: "bg-pink-50 dark:bg-pink-950/40",
    border: "border-pink-200 dark:border-pink-900",
    ring: "ring-pink-500",
    bar: "bg-pink-500",
  },
  {
    key: "environnement",
    slug: "environnement",
    slugs: { fr: "environnement", en: "environment" },
    emoji: "🌱",
    labels: { fr: "Environnement", en: "Environment" },
    icon: Leaf,
    text: "text-teal-700 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-950/40",
    border: "border-teal-200 dark:border-teal-900",
    ring: "ring-teal-500",
    bar: "bg-teal-500",
  },
  {
    key: "a_retenir",
    slug: "a-retenir",
    slugs: { fr: "a-retenir", en: "key-facts" },
    emoji: "💡",
    labels: { fr: "À retenir", en: "Key facts" },
    icon: Lightbulb,
    text: "text-fuchsia-700 dark:text-fuchsia-400",
    bg: "bg-fuchsia-50 dark:bg-fuchsia-950/40",
    border: "border-fuchsia-200 dark:border-fuchsia-900",
    ring: "ring-fuchsia-500",
    bar: "bg-fuchsia-500",
  },
];

export function getCategory(slug: string): CategoryConfig | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

/** Resolves a public category slug in `locale` (e.g. "economy" in English). */
export function getCategoryBySlug(slug: string, locale: Locale): CategoryConfig | undefined {
  return CATEGORIES.find((c) => c.slugs[locale] === slug);
}

export function getCategoryByKey(key: CategoryKey): CategoryConfig {
  return CATEGORIES.find((c) => c.key === key)!;
}

export const DEFAULT_CATEGORY = CATEGORIES[0].slug;
