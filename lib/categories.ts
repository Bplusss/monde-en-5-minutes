import {
  Map,
  Users,
  Languages,
  Church,
  Landmark,
  Coins,
  History,
  UtensilsCrossed,
  Globe2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { CategoryKey } from "./types";

export interface CategoryConfig {
  key: CategoryKey;
  slug: string;
  emoji: string;
  label: string;
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
    emoji: "🗺️",
    label: "Géographie",
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
    emoji: "👥",
    label: "Population",
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
    emoji: "🗣️",
    label: "Langues",
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
    emoji: "🕊️",
    label: "Religion",
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
    emoji: "🏛️",
    label: "Politique",
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
    emoji: "💰",
    label: "Économie",
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
    emoji: "🕰️",
    label: "Les grandes périodes",
    icon: History,
    text: "text-rose-700 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/40",
    border: "border-rose-200 dark:border-rose-900",
    ring: "ring-rose-500",
    bar: "bg-rose-500",
  },
  {
    key: "culture",
    slug: "culture",
    emoji: "🍜",
    label: "Culture & vie quotidienne",
    icon: UtensilsCrossed,
    text: "text-pink-700 dark:text-pink-400",
    bg: "bg-pink-50 dark:bg-pink-950/40",
    border: "border-pink-200 dark:border-pink-900",
    ring: "ring-pink-500",
    bar: "bg-pink-500",
  },
  {
    key: "territoire",
    slug: "territoire",
    emoji: "🌍",
    label: "Territoire",
    icon: Globe2,
    text: "text-cyan-700 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-950/40",
    border: "border-cyan-200 dark:border-cyan-900",
    ring: "ring-cyan-500",
    bar: "bg-cyan-500",
  },
  {
    key: "curiosites",
    slug: "curiosites",
    emoji: "🤯",
    label: "Curiosités",
    icon: Sparkles,
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

export const DEFAULT_CATEGORY = CATEGORIES[0].slug;
