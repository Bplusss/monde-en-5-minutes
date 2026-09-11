const fontCache = new Map<string, Promise<ArrayBuffer[]>>();

/**
 * Fetches every subset (latin, latin-ext, vietnamese, ...) of a static Google Font weight as
 * ArrayBuffers, for use in next/og's ImageResponse (which supports ttf/otf/woff, not woff2).
 * Google Fonts serves woff files — instead of the modern woff2 default — to old user agents,
 * the standard workaround for font-fetching outside a browser. Google splits Latin-family fonts
 * into several @font-face blocks by unicode range (accents, Vietnamese, etc.); passing all of
 * them to ImageResponse under the same name/weight lets Satori pick whichever covers a given
 * character, so accented country/city names render correctly.
 */
function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer[]> {
  const cacheKey = `${family}:${weight}`;
  const cached = fontCache.get(cacheKey);
  if (cached) return cached;

  const promise = (async () => {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`;
    const css = await fetch(cssUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36",
      },
    }).then((res) => res.text());
    const urls = [...css.matchAll(/src: url\((.+?)\) format\('(?:truetype|opentype|woff)'\)/g)].map((m) => m[1]);
    if (!urls.length) throw new Error(`No font source found for Google Font ${family} ${weight}`);
    return Promise.all(urls.map((url) => fetch(url).then((res) => res.arrayBuffer())));
  })();

  fontCache.set(cacheKey, promise);
  return promise;
}

export const loadFrauncesBold = () => loadGoogleFont("Fraunces", 700);
export const loadInterRegular = () => loadGoogleFont("Inter", 400);
export const loadInterSemiBold = () => loadGoogleFont("Inter", 600);
