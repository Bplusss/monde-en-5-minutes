import { NextResponse } from "next/server";
import { getFullCountryWithLiveData } from "@/data/countries-full";

export const revalidate = 3600;

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = await getFullCountryWithLiveData(slug);
  if (!country) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json(country);
}
