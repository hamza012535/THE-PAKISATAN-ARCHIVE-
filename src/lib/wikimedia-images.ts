// ============================================================
// Wikimedia Commons Image Search — 100% FREE, no API key!
// https://commons.wikimedia.org — the world's largest free media library
// ============================================================

export interface WikimediaImage {
  title: string;
  url: string;
  thumbUrl: string;
  description: string;
  author: string;
  license: string;
  pageUrl: string;
}

// Search Wikimedia Commons for images
export async function searchWikimediaImages(
  query: string,
  limit: number = 10,
): Promise<WikimediaImage[]> {
  try {
    // Step 1: Search for image files matching the query
    const searchParams = new URLSearchParams({
      action: 'query',
      list: 'search',
      srsearch: query + ' filetype:bitmap',
      srnamespace: '6', // File namespace
      srlimit: String(Math.min(limit * 2, 20)),
      srprop: 'snippet|titlesnippet',
      format: 'json',
      origin: '*',
    });

    const searchRes = await fetch(
      `https://commons.wikimedia.org/w/api.php?${searchParams}`,
    );
    if (!searchRes.ok) return [];
    const searchData = await searchRes.json();
    const results: { title: string }[] = searchData.query?.search || [];
    if (results.length === 0) return [];

    // Step 2: Get image info (URL, description, license) for found files
    const titles = results
      .slice(0, limit)
      .map((r) => r.title)
      .join('|');

    const infoParams = new URLSearchParams({
      action: 'query',
      titles,
      prop: 'imageinfo|info',
      iiprop: 'url|extmetadata',
      iiurlwidth: '800',
      inprop: 'url',
      format: 'json',
      origin: '*',
    });

    const infoRes = await fetch(
      `https://commons.wikimedia.org/w/api.php?${infoParams}`,
    );
    if (!infoRes.ok) return [];
    const infoData = await infoRes.json();
    const pages = Object.values(infoData.query?.pages || {}) as any[];

    const images: WikimediaImage[] = [];

    for (const page of pages) {
      if (page.missing || !page.imageinfo?.[0]) continue;
      const info = page.imageinfo[0];
      const meta = info.extmetadata || {};

      // Skip SVG and audio files — only images
      const url: string = info.url || '';
      if (!url.match(/\.(jpg|jpeg|png|webp|gif)$/i)) continue;
      if (!info.thumburl) continue;

      images.push({
        title: page.title.replace('File:', '').replace(/_/g, ' '),
        url,
        thumbUrl: info.thumburl,
        description: meta.ImageDescription?.value?.replace(/<[^>]*>/g, '').slice(0, 150) || 'Pakistan',
        author: meta.Artist?.value?.replace(/<[^>]*>/g, '') || 'Wikimedia Commons',
        license: meta.LicenseShortName?.value || 'CC',
        pageUrl: page.canonicalurl || `https://commons.wikimedia.org/wiki/${page.title}`,
      });
    }

    return images.slice(0, limit);
  } catch (err) {
    console.error('Wikimedia Commons error:', err);
    return [];
  }
}

export async function getPakistanImages(limit: number = 8): Promise<WikimediaImage[]> {
  return searchWikimediaImages('Pakistan landscape heritage', limit);
}

export async function getPakistanCityImages(city: string, limit: number = 6): Promise<WikimediaImage[]> {
  return searchWikimediaImages(city + ' Pakistan', limit);
}
