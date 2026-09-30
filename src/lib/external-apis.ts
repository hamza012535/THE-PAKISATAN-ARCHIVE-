// ============================================================
// External Free Public APIs Integration for Pakistan Archive
// Uses public-apis: https://github.com/public-apis/public-apis
// ============================================================

/**
 * Wikidata API - Structured data about Pakistan personalities, events, places
 * No auth required, free to use
 */
export async function searchWikidata(query: string) {
  try {
    const params = new URLSearchParams({
      action: 'wbsearchentities',
      search: query,
      language: 'en',
      format: 'json',
      limit: '5',
    });

    const res = await fetch(`https://www.wikidata.org/w/api.php?${params}`, {
      headers: { 'User-Agent': 'Pakistan-Archive/1.0' },
    });

    const data = await res.json();
    return data.search || [];
  } catch {
    return [];
  }
}

/**
 * DBpedia - Semantic Web data from Wikipedia
 * Useful for historical events, people, places
 */
export async function searchDBpedia(query: string) {
  try {
    const params = new URLSearchParams({
      query: `SELECT ?resource ?label ?abstract WHERE { ?resource rdfs:label "${query}"@en; rdfs:comment ?abstract. FILTER(lang(?abstract) = 'en') } LIMIT 10`,
      format: 'json',
    });

    const res = await fetch(`http://dbpedia.org/sparql?${params}`);
    const data = await res.json();
    return data.results?.bindings || [];
  } catch {
    return [];
  }
}

/**
 * REST Countries API - Get info about Pakistan and neighboring countries
 * Free, no auth needed
 */
export async function getCountryData(countryCode: string = 'PK') {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    const data = await res.json();
    return data[0] || null;
  } catch {
    return null;
  }
}

/**
 * Open Library API - Books about Pakistan
 */
export async function searchBooks(query: string) {
  try {
    const params = new URLSearchParams({
      q: query,
      limit: '10',
    });

    const res = await fetch(`https://openlibrary.org/search.json?${params}`);
    const data = await res.json();
    return data.docs || [];
  } catch {
    return [];
  }
}

/**
 * Pixabay API - Free images (requires free API key)
 * Sign up at https://pixabay.com/api/
 */
export async function searchPixabayImages(query: string, apiKey?: string) {
  if (!apiKey) {
    console.warn('Pixabay API key not configured');
    return [];
  }

  try {
    const params = new URLSearchParams({
      key: apiKey,
      q: query,
      per_page: '10',
      image_type: 'photo',
    });

    const res = await fetch(`https://pixabay.com/api/?${params}`);
    const data = await res.json();
    return data.hits || [];
  } catch {
    return [];
  }
}

/**
 * OpenStreetMap Nominatim - Geocoding for Pakistan cities and landmarks
 * Free, no auth, but please respect rate limits (1 req/sec)
 */
export async function geocodePakistanLocation(location: string) {
  try {
    const params = new URLSearchParams({
      q: `${location}, Pakistan`,
      format: 'json',
      limit: '5',
    });

    const res = await fetch(`https://nominatim.openstreetmap.org/search?${params}`, {
      headers: { 'User-Agent': 'Pakistan-Archive/1.0' },
    });

    const data = await res.json();
    return data || [];
  } catch {
    return [];
  }
}

/**
 * TimeZoneDB - Pakistan timezone and time data
 * Free tier available: https://timezonedb.com/api
 */
export async function getPakistanTimeInfo(apiKey?: string) {
  if (!apiKey) {
    return {
      timezone: 'PKT (UTC+5)',
      region: 'Asia/Karachi',
    };
  }

  try {
    const params = new URLSearchParams({
      key: apiKey,
      format: 'json',
      by: 'zone',
      zone: 'Asia/Karachi',
    });

    const res = await fetch(`https://api.timezonedb.com/v2/get-time-zone?${params}`);
    const data = await res.json();
    return data || {};
  } catch {
    return { timezone: 'PKT (UTC+5)', region: 'Asia/Karachi' };
  }
}

/**
 * Exchangerate.host - Currency exchange rates
 * Free, no auth needed
 */
export async function getPakistaniRupeeRate(baseCurrency: string = 'USD') {
  try {
    const res = await fetch(`https://api.exchangerate.host/latest?base=${baseCurrency}&symbols=PKR`);
    const data = await res.json();
    return data.rates?.PKR || null;
  } catch {
    return null;
  }
}

/**
 * Suggested Public APIs for Future Integration:
 *
 * 1. NewsAPI (https://newsapi.org) - Real-time news
 *    - Requires free API key
 *    - Great for Pakistan news updates
 *
 * 2. YouTube API (https://developers.google.com/youtube/v3)
 *    - Video search and metadata
 *    - Already mentioned in project
 *
 * 3. Twitter API v2 (https://developer.twitter.com/)
 *    - Pakistan social sentiment
 *    - Requires free developer account
 *
 * 4. Wikipedia API (already integrated in your project)
 *
 * 5. Spotify API (https://developer.spotify.com/)
 *    - Pakistani music/artists
 *    - Requires free registration
 *
 * 6. Google Books API (https://developers.google.com/books)
 *    - Books about Pakistan
 *    - Free, no auth for basic queries
 */
