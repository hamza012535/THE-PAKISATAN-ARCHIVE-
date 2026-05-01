# Pakistan Archive

A comprehensive archive of Pakistan history, political events, famous personalities, and cultural heritage. Built with Next.js and styled with a Wikipedia/newspaper-inspired theme.

## Features

- 📚 **Comprehensive Content** - History, Politics, Personalities, Events, Culture, Geography, Economy, Sports, Arts
- 🔍 **Search Functionality** - Local database and Wikipedia API integration
- 📅 **Historical Timeline** - Major events from 1947 to present
- 👤 **Person Profiles** - Detailed biographies of famous Pakistanis
- 📰 **Newspaper Theme** - Clean, readable Wikipedia-style layout
- 📱 **Responsive Design** - Works on mobile, tablet, and desktop
- 🌐 **Wikipedia Integration** - Fetches live content from Wikipedia API

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data**: Wikipedia API + Local content

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Base layout
│   ├── category/[slug]/   # Category pages
│   ├── article/[slug]/    # Article pages
│   ├── person/[slug]/     # Person profiles
│   ├── search/            # Search page
│   └── timeline/          # Timeline page
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── SearchBar.tsx
└── lib/                   # Utilities
    ├── content.ts         # Local content data
    └── wikipedia.ts       # Wikipedia API client
```

## Content Sources

- **Wikipedia API** - For live content fetching
- **Wikidata** - For structured data
- **Local Content** - Curated articles and profiles

## License

Content sourced from Wikipedia under CC BY-SA 3.0 license.

## Contributing

This is a starting point for building a comprehensive Pakistan history archive. Contributions are welcome!