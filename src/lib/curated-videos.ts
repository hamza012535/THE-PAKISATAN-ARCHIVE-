// ============================================================
// Curated Pakistan History YouTube Topics
// Zero API key — uses YouTube's free embed + thumbnail CDN
// Clicking a topic opens a YouTube search for it
// ============================================================

export interface CuratedTopic {
  id: string;
  title: string;
  description: string;
  searchQuery: string;    // Opens YouTube search with this query
  emoji: string;
  category: string;
}

// These are curated search topics — clicking opens a YouTube search
// so users always find currently-available, relevant content
export const CURATED_VIDEO_TOPICS: CuratedTopic[] = [
  {
    id: 'independence-1947',
    title: 'Pakistan Independence 1947',
    description: 'The historic creation of Pakistan on 14 August 1947 — partition, celebrations, and the founding story.',
    searchQuery: 'Pakistan independence 1947 documentary partition history',
    emoji: '🇵🇰',
    category: 'History',
  },
  {
    id: 'quaid-e-azam',
    title: 'Quaid-e-Azam Muhammad Ali Jinnah',
    description: 'Life and legacy of the founder of Pakistan — lawyer, statesman, and visionary leader.',
    searchQuery: 'Muhammad Ali Jinnah Quaid e Azam documentary biography',
    emoji: '👤',
    category: 'Personalities',
  },
  {
    id: 'allama-iqbal',
    title: 'Allama Iqbal — National Poet',
    description: 'The philosopher-poet who dreamed of Pakistan. His poetry, philosophy, and lasting influence.',
    searchQuery: 'Allama Iqbal national poet Pakistan philosophy documentary',
    emoji: '✍️',
    category: 'Culture',
  },
  {
    id: 'indus-valley',
    title: 'Indus Valley Civilization',
    description: "Mohenjo-daro and Harappa — world's earliest urban civilizations in Pakistan's soil.",
    searchQuery: 'Indus Valley civilization Mohenjo daro Harappa documentary Pakistan',
    emoji: '🏛️',
    category: 'History',
  },
  {
    id: 'lahore-heritage',
    title: 'Lahore — City of Heritage',
    description: 'Lahore Fort, Badshahi Mosque, Shalimar Gardens — a journey through Mughal grandeur.',
    searchQuery: 'Lahore heritage Mughal monuments Badshahi Mosque Lahore Fort documentary',
    emoji: '🕌',
    category: 'Culture',
  },
  {
    id: 'k2-karakoram',
    title: 'K2 & The Karakoram',
    description: "The world's second-highest peak and Pakistan's spectacular mountain ranges.",
    searchQuery: 'K2 mountain Karakoram Pakistan documentary climbing',
    emoji: '🏔️',
    category: 'Geography',
  },
  {
    id: 'cricket-1992',
    title: 'Pakistan Cricket World Cup 1992',
    description: 'Imran Khan\'s "cornered tigers" — Pakistan\'s legendary triumph at the 1992 World Cup.',
    searchQuery: 'Pakistan 1992 cricket world cup Imran Khan final highlights',
    emoji: '🏏',
    category: 'Sports',
  },
  {
    id: 'sufi-qawwali',
    title: 'Sufi Music & Qawwali',
    description: "Pakistan's rich Sufi tradition and Nusrat Fateh Ali Khan's immortal qawwali.",
    searchQuery: 'Pakistan qawwali Nusrat Fateh Ali Khan Sufi music documentary',
    emoji: '🎵',
    category: 'Culture',
  },
  {
    id: 'pakistan-nature',
    title: 'Pakistan Natural Beauty',
    description: "From Hunza Valley to coastal Makran — Pakistan's breathtaking landscapes.",
    searchQuery: 'Pakistan natural beauty Hunza Swat Skardu travel documentary 4K',
    emoji: '🌿',
    category: 'Geography',
  },
];

export function getTopicsByCategory(category: string): CuratedTopic[] {
  return CURATED_VIDEO_TOPICS.filter((t) => t.category === category);
}

export function getAllTopics(): CuratedTopic[] {
  return CURATED_VIDEO_TOPICS;
}
