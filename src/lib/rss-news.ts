// ============================================================
// Pakistan News via FREE RSS Feeds — Zero API key required!
// Sources: Dawn News, Express Tribune, ARY News, Geo News
// ============================================================

export interface RSSArticle {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  source: string;
  imageUrl?: string;
}

// Extract value from XML tag (handles CDATA)
function xmlTag(xml: string, tag: string): string {
  // CDATA version
  const cdata = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i');
  const cdataMatch = xml.match(cdata);
  if (cdataMatch) return cdataMatch[1].trim();

  // Plain version
  const plain = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const plainMatch = xml.match(plain);
  if (plainMatch) return plainMatch[1].trim();

  return '';
}

// Extract <item> blocks from RSS XML
function extractItems(xml: string): string[] {
  const items: string[] = [];
  const re = /<item[\s>]([\s\S]*?)<\/item>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) items.push(m[1]);
  return items;
}

// Try to grab a thumbnail from various RSS image patterns
function extractImage(itemXml: string): string | undefined {
  const patterns = [
    /media:content[^>]+url="([^"]+)"/i,
    /media:thumbnail[^>]+url="([^"]+)"/i,
    /<enclosure[^>]+url="([^"]+\.(?:jpg|jpeg|png|webp))"/i,
    /<image[^>]*>\s*<url>([^<]+)<\/url>/i,
    /og:image"[^>]+content="([^"]+)"/i,
  ];
  for (const p of patterns) {
    const m = itemXml.match(p);
    if (m) return m[1];
  }
  return undefined;
}

function parseItems(xml: string, sourceName: string): RSSArticle[] {
  return extractItems(xml)
    .slice(0, 8)
    .map((item) => ({
      title: xmlTag(item, 'title').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"'),
      link:  xmlTag(item, 'link') || xmlTag(item, 'guid'),
      description: xmlTag(item, 'description')
        .replace(/<[^>]*>/g, '')
        .replace(/&amp;/g, '&')
        .replace(/&nbsp;/g, ' ')
        .slice(0, 220)
        .trim(),
      pubDate: xmlTag(item, 'pubDate'),
      source: sourceName,
      imageUrl: extractImage(item),
    }))
    .filter((a) => a.title.length > 4 && a.link.startsWith('http'));
}

// Pakistan news RSS feeds — all completely free, no registration
const FEEDS = [
  { url: 'https://www.dawn.com/feeds/home',          name: 'Dawn News' },
  { url: 'https://arynews.tv/feed/',                 name: 'ARY News' },
  { url: 'https://tribune.com.pk/feed',              name: 'Express Tribune' },
  { url: 'https://www.geo.tv/rss/1',                 name: 'Geo News' },
  { url: 'https://www.thenews.com.pk/rss/1/1',       name: 'The News' },
];

export async function getPakistanNewsFromRSS(limit: number = 12): Promise<RSSArticle[]> {
  const all: RSSArticle[] = [];

  for (const feed of FEEDS) {
    if (all.length >= limit) break;
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 6000);

      const res = await fetch(feed.url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Pakistan-Archive/1.0 (Educational)',
          Accept: 'application/rss+xml, application/xml, text/xml, */*',
        },
        // Next.js ISR: cache 30 min
        cache: 'force-cache',
      } as RequestInit);

      clearTimeout(timer);
      if (!res.ok) continue;

      const xml = await res.text();
      const articles = parseItems(xml, feed.name);
      all.push(...articles);
    } catch {
      // Feed unreachable — try next
    }
  }

  return all.slice(0, limit);
}
