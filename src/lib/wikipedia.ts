// Wikipedia API Service for fetching Pakistan-related content

const WIKIPEDIA_API = 'https://en.wikipedia.org/w/api.php';

export interface WikipediaSearchResult {
  title: string;
  pageid: number;
  snippet: string;
}

export interface WikipediaArticle {
  title: string;
  pageid: number;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
  fullurl?: string;
  timestamp?: string;
}

export interface WikipediaCategoryMember {
  pageid: number;
  title: string;
}

// Search Wikipedia
export async function searchWikipedia(query: string, limit: number = 10): Promise<WikipediaSearchResult[]> {
  const params = new URLSearchParams({
    action: 'opensearch',
    search: query,
    limit: limit.toString(),
    namespace: '0',
    format: 'json',
    origin: '*',
  });

  try {
    const response = await fetch(`${WIKIPEDIA_API}?${params}`);
    const data = await response.json();
    
    // OpenSearch returns [query, [titles], [descriptions], [urls]]
    const titles = data[1] || [];
    const descriptions = data[2] || [];
    
    return titles.map((title: string, index: number) => ({
      title,
      pageid: 0,
      snippet: descriptions[index] || '',
    }));
  } catch (error) {
    console.error('Wikipedia search error:', error);
    return [];
  }
}

// Get article summary
export async function getArticleSummary(title: string): Promise<WikipediaArticle | null> {
  const params = new URLSearchParams({
    action: 'query',
    titles: title,
    prop: 'extracts|pageimages|info',
    exintro: 'true',
    explaintext: 'true',
    piprop: 'thumbnail',
    pithumbsize: '500',
    inprop: 'url',
    format: 'json',
    origin: '*',
  });

  try {
    const response = await fetch(`${WIKIPEDIA_API}?${params}`);
    const data = await response.json();
    const pages = data.query?.pages;
    
    if (!pages) return null;
    
    const pageId = Object.keys(pages)[0];
    const page = pages[pageId];
    
    if (pageId === '-1' || !page.extract) return null;
    
    return {
      title: page.title,
      pageid: page.pageid,
      extract: page.extract,
      thumbnail: page.thumbnail,
      fullurl: page.fullurl,
    };
  } catch (error) {
    console.error('Wikipedia article fetch error:', error);
    return null;
  }
}

// Get full article content
export async function getFullArticle(title: string): Promise<WikipediaArticle | null> {
  const params = new URLSearchParams({
    action: 'query',
    titles: title,
    prop: 'extracts|pageimages|info',
    explaintext: 'true',
    piprop: 'thumbnail',
    pithumbsize: '800',
    inprop: 'url',
    format: 'json',
    origin: '*',
  });

  try {
    const response = await fetch(`${WIKIPEDIA_API}?${params}`);
    const data = await response.json();
    const pages = data.query?.pages;
    
    if (!pages) return null;
    
    const pageId = Object.keys(pages)[0];
    const page = pages[pageId];
    
    if (pageId === '-1' || !page.extract) return null;
    
    return {
      title: page.title,
      pageid: page.pageid,
      extract: page.extract,
      thumbnail: page.thumbnail,
      fullurl: page.fullurl,
    };
  } catch (error) {
    console.error('Wikipedia full article fetch error:', error);
    return null;
  }
}

// Get category members
export async function getCategoryMembers(category: string, limit: number = 50): Promise<WikipediaCategoryMember[]> {
  const params = new URLSearchParams({
    action: 'query',
    list: 'categorymembers',
    cmtitle: `Category:${category}`,
    cmlimit: limit.toString(),
    cmtype: 'page',
    format: 'json',
    origin: '*',
  });

  try {
    const response = await fetch(`${WIKIPEDIA_API}?${params}`);
    const data = await response.json();
    return data.query?.categorymembers || [];
  } catch (error) {
    console.error('Wikipedia category members error:', error);
    return [];
  }
}

// Get Pakistan-specific articles
export async function getPakistanArticles(): Promise<WikipediaCategoryMember[]> {
  return getCategoryMembers('Pakistan', 100);
}

// Get Pakistani politicians from Wikidata
export async function getPakistaniPoliticians(): Promise<WikipediaCategoryMember[]> {
  return getCategoryMembers('Pakistani politicians', 50);
}

// Get historical events of Pakistan
export async function getHistoricalEvents(): Promise<WikipediaCategoryMember[]> {
  return getCategoryMembers('History of Pakistan', 50);
}

// Parse Wikipedia content into sections
export function parseWikipediaContent(content: string): { sections: string[]; content: string } {
  const lines = content.split('\n');
  const sections: string[] = [];
  let currentSection = '';
  
  for (const line of lines) {
    if (line.match(/^==+.+==+$/)) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = line.replace(/=/g, '').trim();
    }
  }
  
  if (currentSection) {
    sections.push(currentSection);
  }
  
  return {
    sections: sections.length > 0 ? sections : ['Overview'],
    content,
  };
}

// Get images for an article
export async function getArticleImages(title: string): Promise<string[]> {
  const params = new URLSearchParams({
    action: 'query',
    titles: title,
    prop: 'images',
    imlimit: '10',
    format: 'json',
    origin: '*',
  });

  try {
    const response = await fetch(`${WIKIPEDIA_API}?${params}`);
    const data = await response.json();
    const pages = data.query?.pages;
    
    if (!pages) return [];
    
    const pageId = Object.keys(pages)[0];
    const images = pages[pageId]?.images || [];
    
    return images
      .filter((img: any) => !img.title.includes('icon') && !img.title.includes('logo'))
      .map((img: any) => img.title);
  } catch (error) {
    console.error('Wikipedia images error:', error);
    return [];
  }
}