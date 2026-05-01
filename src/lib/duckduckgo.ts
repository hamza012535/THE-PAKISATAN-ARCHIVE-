// ============================================================
// DuckDuckGo Instant Answers API — FREE forever, no key needed
// https://duckduckgo.com/api — used by thousands of apps
// ============================================================

export interface DDGResult {
  text: string;
  url: string;
  icon?: string;
}

export interface DDGInstantAnswer {
  heading: string;
  abstractText: string;
  abstractSource: string;
  abstractUrl: string;
  answer: string;
  answerType: string;
  relatedTopics: DDGResult[];
  imageUrl?: string;
}

export async function duckduckgoSearch(query: string): Promise<DDGInstantAnswer | null> {
  try {
    const params = new URLSearchParams({
      q: query,
      format: 'json',
      no_redirect: '1',
      no_html: '1',
      skip_disambig: '1',
      kl: 'pk-en', // Pakistan/English region
    });

    const res = await fetch(`https://api.duckduckgo.com/?${params}`, {
      headers: { 'User-Agent': 'Pakistan-Archive/1.0 (Educational)' },
    });

    if (!res.ok) return null;
    const data = await res.json();

    const relatedTopics: DDGResult[] = (data.RelatedTopics || [])
      .filter((t: any) => t.Text && t.FirstURL)
      .slice(0, 6)
      .map((t: any) => ({
        text: t.Text.slice(0, 120),
        url: t.FirstURL,
        icon: t.Icon?.URL ? `https://duckduckgo.com${t.Icon.URL}` : undefined,
      }));

    return {
      heading: data.Heading || '',
      abstractText: data.AbstractText || '',
      abstractSource: data.AbstractSource || '',
      abstractUrl: data.AbstractURL || '',
      answer: data.Answer || '',
      answerType: data.AnswerType || '',
      relatedTopics,
      imageUrl: data.Image ? `https://duckduckgo.com${data.Image}` : undefined,
    };
  } catch (err) {
    console.error('DuckDuckGo search error:', err);
    return null;
  }
}
