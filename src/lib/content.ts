// THE NATIONAL PAKISTAN ARCHIVE: OFFICIAL CURATION SYSTEM
// A world-class institutional repository for historical, political, and cultural records.
// Last major update: 2024 — Expanded Edition

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  image?: string;
  date?: string;
  author?: string;
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  count: number;
  description: string;
}

export interface Person {
  slug: string;
  name: string;
  role: string;
  image?: string;
  emoji?: string;
  bio?: string;
  birthDate?: string;
  deathDate?: string;
  nationality?: string;
  category: string;
}

export interface PersonalityCategory {
  slug: string;
  name: string;
  icon: string;
}

export function getCategories(): Category[] {
  return [
    {
      slug: "history",
      name: "History",
      icon: "📜",
      count: 156,
      description: "Historical events and periods of Pakistan",
    },
    {
      slug: "politics",
      name: "Politics",
      icon: "🏛️",
      count: 234,
      description: "Political events, parties, and governance",
    },
    {
      slug: "personalities",
      name: "Personalities",
      icon: "👤",
      count: 312,
      description: "Famous Pakistani figures and leaders",
    },
    {
      slug: "events",
      name: "Events",
      icon: "📅",
      count: 89,
      description: "Historical events and national milestones",
    },
    {
      slug: "culture",
      name: "Culture",
      icon: "🎭",
      count: 145,
      description: "Arts, traditions, and cultural heritage",
    },
    {
      slug: "geography",
      name: "Geography",
      icon: "🗺️",
      count: 78,
      description: "Cities, provinces, rivers, and landscapes",
    },
    {
      slug: "economy",
      name: "Economy",
      icon: "💰",
      count: 67,
      description: "Economic development and trade history",
    },
    {
      slug: "sports",
      name: "Sports",
      icon: "🏏",
      count: 95,
      description: "Cricket, hockey, and sporting achievements",
    },
    {
      slug: "arts",
      name: "Arts & Entertainment",
      icon: "🎨",
      count: 112,
      description: "Movies, music, literature, and media",
    },
  ];
}

// ──────────────────────────────────────────────────────────────────────────────
// HISTORY ARTICLES
// ──────────────────────────────────────────────────────────────────────────────
const historyArticles: Article[] = [
  {
    slug: "history-of-pakistan",
    title: "The Definitive History of Pakistan",
    excerpt:
      "An institutional survey documenting the five-millennium narrative of the Indus territory, encompassing ancient urbanism, Islamic transformation, and the modern quest for sovereign statehood.",
    content: `
      The history of Pakistan is not merely the story of a 77-year-old state, but a grand narrative of human civilization spanning five millennia.

      ### The Dawn of Civilization (2500 BCE – 1500 BCE)
      Centred in the fertile plains of the Indus River, the Indus Valley Civilization (IVC) represented the pinnacle of ancient urban planning. At sites like Mohenjo-daro and Harappa, early Pakistanis developed sophisticated drainage systems, standardized weights, and maritime trade routes that reached as far as Mesopotamia.

      ### The Classical and Islamic Era (1500 BCE – 1526 CE)
      Following the Aryan migrations and the Vedic period, the region became a global center for learning under the Gandhara civilization. In 711 CE, the arrival of Muhammad ibn Qasim marked the beginning of a profound cultural and religious transformation.

      ### The Mughal Zenith and Colonial Struggle (1526 CE – 1947 CE)
      The Mughal Empire unified the subcontinent, leaving an indelible mark on architecture, law, and the arts. However, the subsequent British Raj introduced a century of colonial extraction. This period gave rise to the Pakistan Movement.

      ### Sovereign Statehood (1947 – Present)
      On August 14, 1947, Pakistan emerged as a sovereign state. Despite initial administrative challenges and multiple geopolitical conflicts, the nation has evolved into a nuclear power with a resilient democratic tradition.
    `,
    category: "History",
    image: "/media/history/history-of-pakistan.jpg",
    date: "Scholarly Update 2024",
  },
  {
    slug: "ancient-pakistan",
    title: "Ancient Pakistan & Indus Valley Civilization",
    excerpt:
      "The Indus Valley Civilization flourished around 2500 BCE in what is now Pakistan. Cities like Mohenjo-daro and Harappa were among the most advanced urban settlements of the ancient world, with planned streets, sanitation, and trade networks reaching Mesopotamia.",
    category: "History",
    image: "/media/history/ancient-pakistan.jpg",
    date: "circa 2500 BCE – 1900 BCE",
  },
  {
    slug: "partition-of-india",
    title: "Partition of India 1947",
    excerpt:
      "The Partition of India on 14–15 August 1947 divided British India into two independent dominions: India and Pakistan. It triggered one of the largest mass migrations in human history — an estimated 10–20 million people crossed new borders amid communal violence.",
    category: "History",
    image: "/media/history/partition-of-india.jpg",
    date: "August 14–15, 1947",
  },
  {
    slug: "mughal-empire",
    title: "The Mughal Empire in South Asia",
    excerpt:
      "The Mughal Empire (1526–1857) ruled most of the Indian subcontinent, including modern-day Pakistan. Under emperors like Akbar, Shah Jahan, and Aurangzeb, the empire reached its cultural and administrative zenith, leaving monuments like the Badshahi Mosque and Lahore Fort.",
    category: "History",
    image: "/media/history/mughal-empire.jpg",
    date: "1526–1857",
  },
  {
    slug: "british-raj",
    title: "The British Raj in South Asia",
    excerpt:
      "British rule over the Indian subcontinent lasted from 1858 to 1947. During this period, movements for independence grew, the railway network expanded, and English education transformed society — eventually leading to the creation of Pakistan.",
    category: "History",
    image: "/media/history/british-raj.jpg",
    date: "1858–1947",
  },
  {
    slug: "creation-of-pakistan",
    title: "Creation of Pakistan — The Independence Movement",
    excerpt:
      "The All-India Muslim League under Muhammad Ali Jinnah campaigned for a separate Muslim homeland. The Lahore Resolution of 1940 was the first formal demand for Pakistan, and after years of negotiations, partition was achieved in August 1947.",
    category: "History",
    image: "/media/history/creation-of-pakistan.jpg",
    date: "1906–1947",
  },
  {
    slug: "east-pakistan",
    title: "East Pakistan (1947–1971)",
    excerpt:
      "East Pakistan was the eastern part of Pakistan from 1947 until 1971, when it became the independent nation of Bangladesh following a war of independence. The separation resulted from long-standing linguistic, cultural, and political tensions.",
    category: "History",
    image: "/media/history/east-pakistan.jpg",
    date: "1947–1971",
  },
  {
    slug: "kargil-war-1999",
    title: "Kargil War of 1999",
    excerpt:
      "The Kargil War was an armed conflict between India and Pakistan that took place in the Kargil district of Jammu & Kashmir. It ended with Pakistan withdrawing after international pressure. The conflict raised fears of nuclear escalation.",
    category: "History",
    image: "/media/history/kargil-war-1999.jpg",
    date: "May–July 1999",
  },
  {
    slug: "indo-pak-war-1965",
    title: "Indo-Pakistani War of 1965",
    excerpt:
      "The 1965 war was a culmination of skirmishes that took place between April and September 1965. It involved the largest engagement of armored vehicles since World War II and ended with a UN-brokered ceasefire and the Tashkent Declaration.",
    category: "History",
    image: "/media/history/indo-pak-war-1965.jpg",
    date: "1965",
  },
  {
    slug: "simla-agreement",
    title: "The Simla Agreement (1972)",
    excerpt:
      "Signed between Zulfikar Ali Bhutto and Indira Gandhi, this treaty followed the 1971 war. It laid the principles for future bilateral relations and converted the cease-fire line in Kashmir into the Line of Control (LoC).",
    category: "History",
    image: "/media/history/simla-agreement.jpg",
    date: "July 2, 1972",
  },
  // ── NEW HISTORY ARTICLES ──
  {
    slug: "taxila-gandhara",
    title: "Taxila and the Gandhara Kingdom",
    excerpt:
      "Taxila was one of the greatest learning centres of the ancient world, situated at the crossroads of three trade routes. The Gandhara civilization produced a unique Buddhist art style blending Greek and Indian influences, whose ruins still stand in Khyber Pakhtunkhwa.",
    category: "History",
    image: "/media/history/taxila-gandhara.jpg",
    date: "6th century BCE – 5th century CE",
  },
  {
    slug: "sikh-empire-punjab",
    title: "The Sikh Empire in Punjab (1799–1849)",
    excerpt:
      "Maharaja Ranjit Singh forged a powerful Sikh Empire centred in Lahore between 1799 and 1849. The empire stretched from the Khyber Pass to the Sutlej River and patronized arts, architecture, and trade across the Punjab region before falling to British annexation.",
    category: "History",
    image: "/media/history/sikh-empire-punjab.jpg",
    date: "1799–1849",
  },
  {
    slug: "allahabad-address-1930",
    title: "Allama Iqbal's Allahabad Address 1930",
    excerpt:
      "In his presidential address at the Allahabad session of the All-India Muslim League in 1930, Allama Iqbal articulated the vision of a consolidated Muslim state in northwestern India. This speech is considered the intellectual foundation of the Pakistan idea.",
    category: "History",
    image: "/media/history/allahabad-address-1930.jpg",
    date: "December 29, 1930",
  },
  {
    slug: "balochistan-history",
    title: "Balochistan — History and Ancient Culture",
    excerpt:
      "Balochistan, Pakistan's largest province by area, has a rich history spanning thousands of years. The Mehrgarhian culture (7000 BCE) predates even the Indus Valley Civilization. Baloch tribes, Brahui speakers, and ancient trade routes have shaped this vast, resource-rich land.",
    category: "History",
    image: "/media/history/balochistan-history.jpg",
    date: "7000 BCE – Present",
  },
  {
    slug: "sindh-ancient-crossroads",
    title: "Sindh — Ancient Crossroads of Civilizations",
    excerpt:
      "Sindh, birthplace of the Indus Valley Civilization and home to Mohenjo-daro, has served as a crossroads of civilizations for millennia. The Arab conquest of Sindh in 711 CE under Muhammad ibn Qasim introduced Islam to the subcontinent, permanently altering its cultural trajectory.",
    category: "History",
    image: "/media/history/sindh-ancient-crossroads.jpg",
    date: "3000 BCE – Present",
  },
  {
    slug: "the-great-game",
    title: "The Great Game — British-Russian Rivalry in Pakistan",
    excerpt:
      "The Great Game was the 19th-century strategic rivalry between the British Empire and the Russian Empire for supremacy in Central Asia. Pakistan's northwestern territories — including the Khyber Pass, FATA, and Balochistan — were the frontlines of this geopolitical contest.",
    category: "History",
    image: "/media/history/the-great-game.jpg",
    date: "1813–1907",
  },
  {
    slug: "azad-kashmir-history",
    title: "Azad Kashmir — History and the Kashmir Dispute",
    excerpt:
      "Azad Jammu and Kashmir (AJK) has been under Pakistani administration since the first Kashmir War of 1947–48. The region's status remains one of the most contentious disputes in South Asia, with both India and Pakistan claiming sovereignty over the Himalayan territory.",
    category: "History",
    image: "/media/history/azad-kashmir-history.jpg",
    date: "1947 – Present",
  },
  {
    slug: "soviet-afghan-war-pakistan",
    title: "Soviet-Afghan War and Pakistan (1979–1989)",
    excerpt:
      "Pakistan played a central role in the Soviet-Afghan War, serving as the primary conduit for US and Saudi aid to Afghan Mujahideen fighters. General Zia ul-Haq's alliance with Washington reshaped Pakistan's military, intelligence, and religious landscape — with consequences that echo to this day.",
    category: "History",
    image: "/media/history/soviet-afghan-war-pakistan.jpg",
    date: "1979–1989",
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// POLITICS ARTICLES
// ──────────────────────────────────────────────────────────────────────────────
const politicsArticles: Article[] = [
  {
    slug: "constitution-of-pakistan",
    title: "Constitution of Pakistan (1973)",
    excerpt:
      "The Constitution of Pakistan, adopted on 12 April 1973, is the supreme law. It establishes a parliamentary form of government and declares Islam the state religion. It has been amended over 25 times since adoption.",
    category: "Politics",
    image: "/media/politics/constitution-of-pakistan.jpg",
    date: "Adopted April 12, 1973",
  },
  {
    slug: "pakistani-general-elections",
    title: "General Elections of Pakistan",
    excerpt:
      "Pakistan has held 12 general elections since independence. Elections are conducted by the Election Commission of Pakistan and have seen alternation of power between major political parties.",
    category: "Politics",
    image: "/media/politics/pakistani-general-elections.jpg",
  },
  {
    slug: "pakistan-peoples-party",
    title: "Pakistan Peoples Party (PPP)",
    excerpt:
      "Founded by Zulfikar Ali Bhutto in 1967, the PPP is one of the largest left-leaning democratic parties in Pakistan. It has produced two prime ministers: Zulfikar Ali Bhutto and Benazir Bhutto.",
    category: "Politics",
    image: "/media/politics/pakistan-peoples-party.jpg",
  },
  {
    slug: "pakistani-military-coups",
    title: "Military Coups in Pakistan",
    excerpt:
      "Pakistan has experienced four successful military coups: Ayub Khan (1958), Yahya Khan (1969), Zia ul-Haq (1977), and Pervez Musharraf (1999). Military rule dominated much of Pakistan's political history.",
    category: "Politics",
    image: "/media/politics/pakistani-military-coups.jpg",
  },
  {
    slug: "pakistan-muslim-league",
    title: "Pakistan Muslim League",
    excerpt:
      "The PML traces its origins to the All-India Muslim League, which championed the creation of Pakistan. Today it exists in multiple factions, the most prominent being PML-N led by the Sharif family.",
    category: "Politics",
    image: "/media/politics/pakistan-muslim-league.jpg",
  },
  {
    slug: "pti-pakistan",
    title: "Pakistan Tehreek-e-Insaf (PTI)",
    excerpt:
      "Founded in 1996 by cricketer-turned-politician Imran Khan, PTI swept to power in the 2018 general elections. It promotes anti-corruption, justice, and welfare policies.",
    category: "Politics",
    image: "/media/politics/pti-pakistan.jpg",
  },
  {
    slug: "national-assembly-pakistan",
    title: "National Assembly of Pakistan",
    excerpt:
      "The National Assembly is the lower house of Pakistan's bicameral Parliament. It consists of 336 seats and is responsible for legislation, the national budget, and formation of the federal government.",
    category: "Politics",
    image: "/media/politics/national-assembly-pakistan.jpg",
  },
  {
    slug: "zia-ul-haq",
    title: "General Zia ul-Haq — Islamization of Pakistan",
    excerpt:
      "General Muhammad Zia ul-Haq ruled Pakistan from 1977 to 1988. His era saw the Islamization of Pakistani law, close ties with the US during the Soviet-Afghan War, and the controversial execution of Zulfikar Ali Bhutto.",
    category: "Politics",
    image: "/media/politics/zia-ul-haq.jpg",
    date: "1977–1988",
  },
  // ── NEW POLITICS ARTICLES ──
  {
    slug: "senate-of-pakistan",
    title: "Senate of Pakistan — The Upper House",
    excerpt:
      "The Senate is the upper house of Pakistan's bicameral Parliament. Consisting of 96 senators elected by provincial assemblies, Gilgit-Baltistan, and AJK, the Senate ensures provincial representation at the federal level and acts as a check on the National Assembly.",
    category: "Politics",
    image: "/media/politics/senate-of-pakistan.jpg",
  },
  {
    slug: "supreme-court-pakistan",
    title: "Supreme Court of Pakistan",
    excerpt:
      "The Supreme Court of Pakistan is the apex court of the judicial system. Established under the 1956 constitution, it has at various points been a battleground between civil and military authority. Landmark rulings on constitutional interpretation, fundamental rights, and disqualification of prime ministers have made it central to Pakistani politics.",
    category: "Politics",
    image: "/media/politics/supreme-court-pakistan.jpg",
  },
  {
    slug: "pakistan-china-relations",
    title: "Pakistan-China Relations — An All-Weather Partnership",
    excerpt:
      "Pakistan and China share what both governments call an 'all-weather strategic cooperative partnership.' From China's support in the 1965 war to the $62 billion CPEC investment, the relationship is one of the defining bilateral partnerships in Asia.",
    category: "Politics",
    image: "/media/politics/pakistan-china-relations.jpg",
  },
  {
    slug: "pakistan-us-relations",
    title: "Pakistan-United States Relations",
    excerpt:
      "Pakistan-US relations have been characterized by strategic cooperation and periodic tension since 1947. From the Cold War alliances of the 1950s and the Soviet-Afghan War to the post-9/11 War on Terror partnership, the relationship has profoundly shaped Pakistan's internal and external policies.",
    category: "Politics",
    image: "/media/politics/pakistan-us-relations.jpg",
  },
  {
    slug: "provincial-governments-pakistan",
    title: "Provincial Governments of Pakistan",
    excerpt:
      "Pakistan is a federal state with four provinces — Punjab, Sindh, Khyber Pakhtunkhwa, and Balochistan — plus the federal capital territory. Each province has its own elected assembly and chief minister, with significant devolved powers under the 18th Amendment of 2010.",
    category: "Politics",
    image: "/media/politics/provincial-governments-pakistan.jpg",
  },
  {
    slug: "lawyers-movement-2007",
    title: "The Lawyers Movement of 2007–2009",
    excerpt:
      "When General Musharraf suspended Chief Justice Iftikhar Chaudhry in March 2007, lawyers across Pakistan launched an unprecedented civil protest movement. The movement ultimately succeeded in restoring the judiciary and became a landmark chapter in Pakistani constitutional history.",
    category: "Politics",
    image: "/media/politics/lawyers-movement-2007.jpg",
    date: "2007–2009",
  },
  {
    slug: "anti-corruption-pakistan",
    title: "Anti-Corruption Efforts in Pakistan",
    excerpt:
      "Corruption has been a pervasive challenge in Pakistani governance. The National Accountability Bureau (NAB), established in 1999, was the primary anti-graft body. Successive governments have made anti-corruption a political rallying cry, with high-profile trials of former prime ministers including Nawaz Sharif and Imran Khan.",
    category: "Politics",
    image: "/media/politics/anti-corruption-pakistan.jpg",
  },
  {
    slug: "eighteen-amendment",
    title: "18th Amendment — Devolution of Power",
    excerpt:
      "The 18th Constitutional Amendment, passed in April 2010, was the most sweeping reform of Pakistan's constitution since 1973. It abolished the concurrent legislative list, devolving over 40 subjects to the provinces and removing the president's power to dissolve the National Assembly.",
    category: "Politics",
    image: "/media/politics/eighteen-amendment.jpg",
    date: "April 19, 2010",
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// EVENTS ARTICLES
// ──────────────────────────────────────────────────────────────────────────────
const eventsArticles: Article[] = [
  {
    slug: "pakistan-independence-day",
    title: "Pakistan Independence Day — 14 August 1947",
    excerpt:
      "Pakistan gained independence from British India on 14 August 1947. Muhammad Ali Jinnah became the first Governor-General. August 14 is celebrated annually as a national holiday with parades and ceremonies across the country.",
    category: "Events",
    image: "/media/events/pakistan-independence-day.jpg",
    date: "August 14, 1947",
  },
  {
    slug: "pakistan-india-war-1971",
    title: "Indo-Pakistani War of 1971 & Bangladesh",
    excerpt:
      "The 1971 war resulted in the creation of Bangladesh from East Pakistan. Pakistani forces surrendered to the Indian Army in Dhaka on 16 December. It remains one of the defining and most painful events of Pakistani history.",
    category: "Events",
    image: "/media/events/pakistan-india-war-1971.jpg",
    date: "December 1971",
  },
  {
    slug: "nuclear-tests-1998",
    title: "Pakistan's Nuclear Tests — Chagai 1998",
    excerpt:
      "On 28 May 1998, Pakistan conducted five successful nuclear tests at Chagai in Balochistan, becoming the seventh nuclear-weapon state in the world. The tests were a direct response to India's Pokhran-II tests and were celebrated nationwide.",
    category: "Events",
    image: "/media/events/nuclear-tests-1998.jpg",
    date: "May 28, 1998",
  },
  {
    slug: "lahore-resolution-1940",
    title: "The Lahore Resolution of 1940",
    excerpt:
      "Passed on 23 March 1940 at the All-India Muslim League session in Lahore, the Lahore Resolution formally demanded independent Muslim states in northwest and east India — the foundation of the Pakistan movement. It is commemorated each year as Pakistan Day.",
    category: "Events",
    image: "/media/events/lahore-resolution-1940.jpg",
    date: "March 23, 1940",
  },
  {
    slug: "earthquake-2005",
    title: "2005 Kashmir Earthquake",
    excerpt:
      "On 8 October 2005, a 7.6-magnitude earthquake struck Azad Kashmir and northern Pakistan, killing over 73,000 people and leaving 3.5 million homeless. It triggered one of the largest international relief and reconstruction efforts in Pakistani history.",
    category: "Events",
    image: "/media/events/earthquake-2005.jpg",
    date: "October 8, 2005",
  },
  // ── NEW EVENTS ARTICLES ──
  {
    slug: "pakistan-day-23-march",
    title: "Pakistan Day — 23 March National Celebrations",
    excerpt:
      "Pakistan Day, celebrated on 23 March each year, commemorates the passage of the Lahore Resolution in 1940. The highlight is a military parade in Islamabad showcasing Pakistan's armed forces, fighter jets, and missile systems. It is one of the most significant national observances.",
    category: "Events",
    image: "/media/events/pakistan-day-23-march.jpg",
    date: "March 23 (annual)",
  },
  {
    slug: "operation-zarb-e-azb-2014",
    title: "Operation Zarb-e-Azb — 2014 Anti-Terror Campaign",
    excerpt:
      "Launched in June 2014 in North Waziristan, Operation Zarb-e-Azb was Pakistan's largest military offensive against the Taliban and militant groups. The operation resulted in the displacement of hundreds of thousands of civilians and significantly reduced terrorist attacks across Pakistan.",
    category: "Events",
    image: "/media/events/operation-zarb-e-azb-2014.jpg",
    date: "June 15, 2014",
  },
  {
    slug: "floods-2010",
    title: "2010 Pakistan Floods — A National Catastrophe",
    excerpt:
      "The 2010 Pakistan floods were the deadliest in the country's history. Triggered by extraordinarily heavy monsoon rains, the floods affected 20 million people, inundated one-fifth of Pakistan's land area, killed nearly 2,000 people, and caused over $43 billion in damages.",
    category: "Events",
    image: "/media/events/floods-2010.jpg",
    date: "July–August 2010",
  },
  {
    slug: "aps-peshawar-attack-2014",
    title: "APS Peshawar Attack — 16 December 2014",
    excerpt:
      "The Army Public School massacre in Peshawar on 16 December 2014 was the deadliest terrorist attack in Pakistan's history. Taliban gunmen killed 149 people, including 132 schoolchildren. The tragedy united the nation and galvanized the state's resolve against terrorism through the National Action Plan.",
    category: "Events",
    image: "/media/events/aps-peshawar-attack-2014.jpg",
    date: "December 16, 2014",
  },
  {
    slug: "benazir-return-2007",
    title: "Benazir Bhutto's Return to Pakistan — 2007",
    excerpt:
      "After eight years in self-imposed exile, Benazir Bhutto returned to Karachi on 18 October 2007. Her homecoming procession was the target of a devastating suicide bomb attack that killed over 140 supporters. She was assassinated just months later at a rally in Rawalpindi on 27 December 2007.",
    category: "Events",
    image: "/media/events/benazir-return-2007.jpg",
    date: "October 18, 2007",
  },
  {
    slug: "quaid-first-speech",
    title: "Quaid-e-Azam's Inaugural Address to the Constituent Assembly",
    excerpt:
      "Muhammad Ali Jinnah's address to the Constituent Assembly on 11 August 1947, three days before independence, is one of the most celebrated speeches in Pakistani history. In it, he articulated a vision of a tolerant, secular Pakistan where citizens of all faiths would be equal before the law.",
    category: "Events",
    image: "/media/events/quaid-first-speech.jpg",
    date: "August 11, 1947",
  },
  {
    slug: "floods-2022",
    title: "2022 Pakistan Floods — Climate Catastrophe",
    excerpt:
      "The 2022 Pakistan floods were triggered by record-breaking monsoon rains and glacial lake outbursts, affecting over 33 million people and submerging one-third of Pakistan's total land area. Over 1,700 people died. The disaster, widely attributed to climate change, caused $30 billion in losses.",
    category: "Events",
    image: "/media/events/floods-2022.jpg",
    date: "June–October 2022",
  },
  {
    slug: "t20-world-cup-2009",
    title: "2009 ICC T20 World Cup Victory",
    excerpt:
      "Pakistan claimed the ICC World Twenty20 Championship in 2009, defeating Sri Lanka by 8 wickets in the final at Lord's Cricket Ground in London. Captained by Younis Khan, the victory came just months after the devastating Lahore attack on the Sri Lanka cricket team.",
    category: "Events",
    image: "/media/events/t20-world-cup-2009.jpg",
    date: "June 21, 2009",
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// CULTURE ARTICLES
// ──────────────────────────────────────────────────────────────────────────────
const cultureArticles: Article[] = [
  {
    slug: "qawwali-music",
    title: "Qawwali — Sufi Devotional Music of Pakistan",
    excerpt:
      "Qawwali is a form of Sufi Islamic devotional music popular in Pakistan. Nusrat Fateh Ali Khan brought it to international acclaim. It is performed at shrines across Punjab and Sindh and remains one of the most powerful musical traditions in South Asia.",
    category: "Culture",
    image: "/media/culture/qawwali-music.jpg",
  },
  {
    slug: "urdu-language",
    title: "Urdu — The National Language of Pakistan",
    excerpt:
      "Urdu is the national language of Pakistan and serves as a lingua franca across its provinces. It is a Hindustani language written in the Nastaliq script and draws vocabulary from Arabic, Persian, Turkish, and Sanskrit.",
    category: "Culture",
    image: "/media/culture/urdu-language.jpg",
  },
  {
    slug: "pakistan-festivals",
    title: "Festivals of Pakistan — Eid, Basant & More",
    excerpt:
      "Pakistan celebrates a vibrant variety of religious and cultural festivals including Eid ul-Fitr, Eid ul-Adha, Basant (kite festival), and Jashn-e-Baharan. Each region has its own unique traditions, from the lantern-lit streets of Lahore to the Sindhi Lok Mela.",
    category: "Culture",
    image: "/media/culture/pakistan-festivals.jpg",
  },
  {
    slug: "pakistan-cuisine",
    title: "Pakistani Cuisine — Biryani, Nihari & Beyond",
    excerpt:
      "Pakistani cuisine is diverse and rich in flavor, featuring dishes like biryani, nihari, chapli kebab, haleem, and karahi. It varies greatly by region — from the spicy curries of Lahore to the grilled meats of Peshawar's famous Namak Mandi.",
    category: "Culture",
    image: "/media/culture/pakistan-cuisine.jpg",
  },
  {
    slug: "truck-art-pakistan",
    title: "Pakistani Truck Art",
    excerpt:
      "Truck art is a vibrant folk art tradition in Pakistan where trucks and buses are elaborately decorated with intricate floral patterns, calligraphy, landscapes, and portraits. Recognized internationally as a unique Pakistani art form, it has inspired fashion designers and artists worldwide.",
    category: "Culture",
    image: "/media/culture/truck-art-pakistan.jpg",
  },
  // ── NEW CULTURE ARTICLES ──
  {
    slug: "shalwar-kameez",
    title: "Shalwar Kameez — The National Dress of Pakistan",
    excerpt:
      "The shalwar kameez is the national dress of Pakistan, worn by men and women of all ages and social backgrounds. Regional variations abound — from the elaborate embroidered phulkari of Punjab to the ajrak-printed dress of Sindh and the colorful gowns of Baloch women.",
    category: "Culture",
    image: "/media/culture/shalwar-kameez.jpg",
  },
  {
    slug: "pakistani-wedding-traditions",
    title: "Pakistani Wedding Traditions — Mehndi, Barat & Walima",
    excerpt:
      "Pakistani weddings are multi-day celebrations filled with color and ceremony. The mehndi night features henna application and music; the barat is the wedding procession; and the walima is the reception hosted by the groom's family. Traditions vary by region and ethnicity but share a spirit of communal celebration.",
    category: "Culture",
    image: "/media/culture/pakistani-wedding-traditions.jpg",
  },
  {
    slug: "sindhi-cultural-heritage",
    title: "Sindhi Cultural Heritage — Ajrak, Shah Abdul Latif & the Indus",
    excerpt:
      "Sindhi culture is one of the oldest continuous civilizations in the world. The ajrak — a block-printed shawl in rich blues and reds — is its most iconic textile. The poetry of Shah Abdul Latif Bhittai, the mystical architecture of Makli Necropolis, and the music of Sindhi Sufi shrines form the core of this ancient heritage.",
    category: "Culture",
    image: "/media/culture/sindhi-cultural-heritage.jpg",
  },
  {
    slug: "balochi-cultural-traditions",
    title:
      "Balochi Cultural Traditions — Music, Embroidery & the Code of Hospitality",
    excerpt:
      "Balochi culture is characterized by the ancient code of Balochness (Balochiyat), which prizes hospitality, honor, and solidarity. Baloch embroidery, worn on traditional dresses, is a meticulous art form. The Lewa and Zaheerok dance forms and the Saroz stringed instrument are unique cultural expressions of this vast desert culture.",
    category: "Culture",
    image: "/media/culture/balochi-cultural-traditions.jpg",
  },
  {
    slug: "pashto-culture-pakhtunwali",
    title: "Pashto Culture and Pakhtunwali — The Pashtun Code of Honor",
    excerpt:
      "Pakhtunwali is the ancient, unwritten ethical code governing Pashtun society in Khyber Pakhtunkhwa and FATA. Its core values include melmastia (hospitality), nanawatai (asylum), and badal (justice). Pashto literature, the Jirga council system, and the Attan circle dance are pillars of this living culture.",
    category: "Culture",
    image: "/media/culture/pashto-culture-pakhtunwali.jpg",
  },
  {
    slug: "punjabi-folk-culture",
    title: "Punjabi Folk Culture — Bhangra, Giddha & the Land of Five Rivers",
    excerpt:
      "Punjab's folk culture is the most widely known in Pakistan. The energetic Bhangra dance, the feminine Giddha, the romantic poetry of Waris Shah's Heer Ranjha, and the thunderous beats of the dhol drum define a culture of extraordinary vitality and warmth.",
    category: "Culture",
    image: "/media/culture/punjabi-folk-culture.jpg",
  },
  {
    slug: "calligraphy-pakistan",
    title: "Islamic Calligraphy in Pakistan",
    excerpt:
      "Calligraphy holds a sacred place in Pakistani culture as the art of writing the word of God. From the monumental inscriptions of the Badshahi Mosque to the exquisite illuminated Qurans of Lahore, Pakistani calligraphy represents a living tradition. Masters like Sadequain and Gul Jee elevated the form to international fine art.",
    category: "Culture",
    image: "/media/culture/calligraphy-pakistan.jpg",
  },
  {
    slug: "coke-studio-pakistan",
    title: "Coke Studio Pakistan — Musical Revolution",
    excerpt:
      "Launched in 2008, Coke Studio Pakistan revolutionized the country's music scene by blending folk, Sufi, rock, and classical traditions into contemporary studio recordings. Artists like Atif Aslam, Rahat Fateh Ali Khan, Noori, and Strings brought this unique sound to international audiences. The show has been credited with a folk music revival.",
    category: "Culture",
    image: "/media/culture/coke-studio-pakistan.jpg",
  },
  {
    slug: "pakistan-television-dramas",
    title: "Pakistan Television — Classic Dramas and a Cultural Institution",
    excerpt:
      "Pakistan Television Corporation (PTV), founded in 1964, produced some of the finest drama serials in South Asian television history. Productions like Dhoop Kinaray, Tanhaiyaan, Waris, and Ankahi shaped Pakistani society and made stars of actors like Marina Khan and Rahat Kazmi. The 21st-century revival of Pakistani dramas on private channels won audiences across the world.",
    category: "Culture",
    image: "/media/culture/pakistan-television-dramas.jpg",
  },
  {
    slug: "eid-celebrations-pakistan",
    title: "Eid Celebrations in Pakistan",
    excerpt:
      "Eid ul-Fitr and Eid ul-Adha are the two most important religious festivals in Pakistan. Streets are decorated with lights, families gather for special prayers and feasts, gifts are exchanged, and new clothes are worn. The sight of thousands praying together at open grounds like the Eidgah of Lahore is one of the most moving spectacles in Pakistani life.",
    category: "Culture",
    image: "/media/culture/eid-celebrations-pakistan.jpg",
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// GEOGRAPHY ARTICLES
// ──────────────────────────────────────────────────────────────────────────────
const geographyArticles: Article[] = [
  {
    slug: "islamabad",
    title: "Islamabad — Capital of Pakistan",
    excerpt:
      "Islamabad is the capital city of Pakistan, built in the 1960s to replace Karachi as the administrative capital. Known for its planned layout, the iconic Faisal Mosque, and the lush Margalla Hills, it consistently ranks as one of the most beautiful capitals in Asia.",
    category: "Geography",
    image: "/media/geography/islamabad.jpg",
  },
  {
    slug: "karachi",
    title: "Karachi — The City of Lights",
    excerpt:
      "Karachi is Pakistan's largest city and financial hub, with a population of over 14 million. It is the country's main seaport and commercial center, located on the Arabian Sea coast, and is home to the Pakistan Stock Exchange and a rich history of cosmopolitan culture.",
    category: "Geography",
    image: "/media/geography/karachi.jpg",
  },
  {
    slug: "k2-mountain",
    title: "K2 — The Savage Mountain",
    excerpt:
      "K2 is the second-highest mountain in the world at 8,611 metres, located on the Pakistan–China border in Gilgit-Baltistan. It is considered the most dangerous peak to climb, with a fatality rate nearly four times that of Everest.",
    category: "Geography",
    image: "/media/geography/k2-mountain.jpg",
  },
  {
    slug: "indus-river",
    title: "Indus River — Lifeline of Pakistan",
    excerpt:
      "The Indus River is the longest river in Pakistan, flowing 3,180 km from Tibet through Ladakh and the length of Pakistan to the Arabian Sea. It sustained the ancient Indus Valley Civilization and today supports the largest contiguous irrigation system in the world.",
    category: "Geography",
    image: "/media/geography/indus-river.jpg",
  },
  {
    slug: "lahore-city",
    title: "Lahore — Heart of Punjab",
    excerpt:
      "Lahore is the provincial capital of Punjab and Pakistan's cultural heartland. It is home to the Lahore Fort, Badshahi Mosque, and Shalimar Gardens — all UNESCO World Heritage Sites — as well as a vibrant food culture and a rich literary tradition.",
    category: "Geography",
    image: "/media/geography/lahore-city.jpg",
  },
  // ── NEW GEOGRAPHY ARTICLES ──
  {
    slug: "punjab-province",
    title: "Punjab — The Breadbasket of Pakistan",
    excerpt:
      "Punjab is Pakistan's most populous province, home to over 110 million people. Known as the 'Land of Five Rivers' (Panj-ab), it is the agricultural heartland of the country, producing wheat, rice, cotton, and sugarcane. Its cities of Lahore, Faisalabad, Rawalpindi, and Multan are major economic and cultural centres.",
    category: "Geography",
    image: "/media/geography/punjab-province.jpg",
  },
  {
    slug: "sindh-province",
    title: "Sindh — Cradle of Civilization",
    excerpt:
      "Sindh, home to Karachi and the ancient ruins of Mohenjo-daro, is one of Pakistan's oldest and most historically rich provinces. The province's economy revolves around agriculture along the Indus, port trade through Karachi, and a growing natural gas sector.",
    category: "Geography",
    image: "/media/geography/sindh-province.jpg",
  },
  {
    slug: "balochistan-province",
    title: "Balochistan — The Largest Province",
    excerpt:
      "Balochistan is Pakistan's largest province by area, covering 44% of the country's land mass but housing only 5% of its population. Rich in natural gas, coal, and copper reserves, it is geopolitically vital due to the Gwadar deep-sea port and its borders with Iran and Afghanistan.",
    category: "Geography",
    image: "/media/geography/balochistan-province.jpg",
  },
  {
    slug: "khyber-pakhtunkhwa",
    title: "Khyber Pakhtunkhwa — Gateway to Central Asia",
    excerpt:
      "Khyber Pakhtunkhwa (KPK), formerly the North-West Frontier Province, is the gateway to Afghanistan and Central Asia through the legendary Khyber Pass. Home to the ancient Gandhara civilization, it has some of Pakistan's most dramatic mountain scenery and the culturally distinctive Pashtun people.",
    category: "Geography",
    image: "/media/geography/khyber-pakhtunkhwa.jpg",
  },
  {
    slug: "gilgit-baltistan",
    title: "Gilgit-Baltistan — The Roof of the World",
    excerpt:
      "Gilgit-Baltistan is Pakistan's northernmost territory and among the most spectacular mountain landscapes on Earth. Home to K2, Nanga Parbat, Rakaposhi, and dozens of other giants, it contains more peaks above 7,000m than any other place on the planet. Hunza, Skardu, and Gilgit are its major towns.",
    category: "Geography",
    image: "/media/geography/gilgit-baltistan.jpg",
  },
  {
    slug: "hunza-valley",
    title: "Hunza Valley — Paradise in the Mountains",
    excerpt:
      "The Hunza Valley in Gilgit-Baltistan is one of the most breathtakingly beautiful places on Earth. Flanked by the Karakoram and Hindu Kush ranges, the valley is known for its ancient Baltit and Altit forts, apricot orchards, crystal-clear glacial rivers, and its people — renowned for their longevity and literacy.",
    category: "Geography",
    image: "/media/geography/hunza-valley.jpg",
  },
  {
    slug: "karakoram-highway",
    title: "Karakoram Highway — The Eighth Wonder of the World",
    excerpt:
      "The Karakoram Highway (KKH) is the highest paved international road in the world, stretching 1,300 km from Hasan Abdal in Pakistan to Kashgar in China across the Karakoram mountain range. Built jointly by Pakistan and China between 1959 and 1979, it is sometimes called the Eighth Wonder of the World.",
    category: "Geography",
    image: "/media/geography/karakoram-highway.jpg",
  },
  {
    slug: "cholistan-desert",
    title: "Cholistan Desert — The Rohi",
    excerpt:
      "The Cholistan Desert, also known as Rohi, is a vast desert in the southern part of Punjab province covering about 26,000 square kilometres. It is an extension of the Thar Desert and is home to nomadic tribes, ancient forts like Derawar, and is famous for the annual Cholistan Desert Jeep Rally.",
    category: "Geography",
    image: "/media/geography/cholistan-desert.jpg",
  },
  {
    slug: "peshawar-city",
    title: "Peshawar — City of Flowers",
    excerpt:
      "Peshawar is one of the oldest cities in Asia, with a history stretching back over 3,500 years. Known as the 'City of Flowers' and the 'Gateway to Central Asia,' it is the capital of Khyber Pakhtunkhwa. Its Qissa Khwani Bazaar (Storytellers' Bazaar) was once the great entrepot of Central Asian trade.",
    category: "Geography",
    image: "/media/geography/peshawar-city.jpg",
  },
  {
    slug: "quetta-city",
    title: "Quetta — Fruit Garden of Pakistan",
    excerpt:
      "Quetta, the capital of Balochistan, is known as the 'Fruit Garden of Pakistan' for its abundance of orchards producing apples, apricots, pomegranates, and grapes. Situated at an altitude of 1,680 metres, it has a cool climate rare in Pakistan. The city is also a major commercial hub near the Afghan border.",
    category: "Geography",
    image: "/media/geography/quetta-city.jpg",
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// ECONOMY ARTICLES
// ──────────────────────────────────────────────────────────────────────────────
const economyArticles: Article[] = [
  {
    slug: "pakistan-economy-overview",
    title: "Economy of Pakistan — Overview",
    excerpt:
      "Pakistan has a mixed economy with nominal GDP of around $340 billion. Agriculture accounts for ~19% of GDP, while textiles and services dominate exports. The country faces structural challenges including an energy crisis and fiscal deficits.",
    category: "Economy",
    image: "/media/economy/pakistan-economy-overview.jpg",
  },
  {
    slug: "cpec-china",
    title: "China-Pakistan Economic Corridor (CPEC)",
    excerpt:
      "CPEC is a $62 billion infrastructure project connecting China's Xinjiang province to Pakistan's Gwadar port through highways, railways, and energy projects. It is a flagship component of China's Belt and Road Initiative.",
    category: "Economy",
    image: "/media/economy/cpec-china.jpg",
  },
  {
    slug: "pakistan-textiles",
    title: "Pakistan Textile Industry",
    excerpt:
      "Pakistan is one of the world's leading textile exporters. The industry accounts for ~60% of total exports and employs millions. Key centers include Faisalabad, Lahore, and Karachi.",
    category: "Economy",
    image: "/media/economy/pakistan-textiles.jpg",
  },
  // ── NEW ECONOMY ARTICLES ──
  {
    slug: "gwadar-port",
    title: "Gwadar Port — Gateway to Central Asia",
    excerpt:
      "Gwadar is a deep-sea port city in Balochistan developed as the crown jewel of CPEC. Located on the Arabian Sea, it is positioned to become a major trade and energy transit hub linking landlocked Central Asian nations to global shipping routes. The port was built with Chinese investment and expertise.",
    category: "Economy",
    image: "/media/economy/gwadar-port.jpg",
  },
  {
    slug: "tarbela-dam",
    title: "Tarbela Dam — Engineering Marvel of Pakistan",
    excerpt:
      "The Tarbela Dam on the Indus River in Khyber Pakhtunkhwa is the largest earth-filled dam in the world and the largest dam in Pakistan by structural volume. Completed in 1976, it plays a critical role in flood control, irrigation, and power generation, producing over 4,888 MW of hydroelectric power.",
    category: "Economy",
    image: "/media/economy/tarbela-dam.jpg",
  },
  {
    slug: "pakistan-stock-exchange",
    title: "Pakistan Stock Exchange",
    excerpt:
      "The Pakistan Stock Exchange (PSX), headquartered in Karachi, is the primary stock market of Pakistan. Formed by the merger of the Karachi, Lahore, and Islamabad stock exchanges in 2016, the PSX has at times been one of the best-performing markets in Asia, listing over 500 companies.",
    category: "Economy",
    image: "/media/economy/pakistan-stock-exchange.jpg",
  },
  {
    slug: "agriculture-pakistan",
    title: "Agricultural Sector of Pakistan",
    excerpt:
      "Agriculture is the backbone of Pakistan's economy, employing about 38% of the labor force and contributing approximately 19% of GDP. Pakistan is a major producer of wheat, cotton, sugarcane, rice, and mangoes. The Indus Basin Irrigation System, the world's largest contiguous irrigation network, supports this vast agricultural output.",
    category: "Economy",
    image: "/media/economy/agriculture-pakistan.jpg",
  },
  {
    slug: "it-industry-pakistan",
    title: "IT Industry — Pakistan's Digital Frontier",
    excerpt:
      "Pakistan's IT and software export sector has seen explosive growth, earning over $2.6 billion in 2023. The country has a young, tech-savvy population and a growing freelancing ecosystem — Pakistan consistently ranks among the top freelancing nations in the world. Cities like Lahore, Karachi, and Islamabad have vibrant tech startup scenes.",
    category: "Economy",
    image: "/media/economy/it-industry-pakistan.jpg",
  },
  {
    slug: "pakistan-remittances",
    title: "Remittances — A Pillar of Pakistan's Economy",
    excerpt:
      "Overseas Pakistanis send home billions of dollars annually, making remittances one of the largest sources of foreign exchange for the country. In 2023, Pakistan received over $27 billion in remittances — largely from the Pakistani diaspora in Saudi Arabia, the UAE, the UK, and the United States.",
    category: "Economy",
    image: "/media/economy/pakistan-remittances.jpg",
  },
  {
    slug: "special-economic-zones-pakistan",
    title: "Special Economic Zones (SEZs) of Pakistan",
    excerpt:
      "Pakistan has established nine Special Economic Zones under CPEC to attract foreign and domestic investment. These SEZs offer tax holidays, relaxed regulatory environments, and world-class infrastructure to manufacturing and industrial enterprises — aiming to transform Pakistan into a regional industrial hub.",
    category: "Economy",
    image: "/media/economy/special-economic-zones-pakistan.jpg",
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// SPORTS ARTICLES
// ──────────────────────────────────────────────────────────────────────────────
const sportsArticles: Article[] = [
  {
    slug: "pakistan-cricket",
    title: "Pakistan Cricket — History and Achievements",
    excerpt:
      "Pakistan cricket has produced some of the world's finest players, including Imran Khan, Wasim Akram, Inzamam-ul-Haq, and Shahid Afridi. Pakistan won the 1992 Cricket World Cup, the 2009 T20 World Cup, and the 2017 ICC Champions Trophy.",
    category: "Sports",
    image: "/media/sports/pakistan-cricket.jpg",
  },
  {
    slug: "wasim-akram",
    title: "Wasim Akram — Sultan of Swing",
    excerpt:
      "Wasim Akram is widely regarded as the greatest left-arm fast bowler in cricket history. He took 414 Test wickets and 502 ODI wickets, and was a key member of Pakistan's 1992 World Cup winning team.",
    category: "Sports",
    image: "/media/sports/wasim-akram.jpg",
  },
  {
    slug: "pakistan-hockey",
    title: "Pakistan Field Hockey — A Golden Legacy",
    excerpt:
      "Pakistan has won the Olympic field hockey gold medal four times (1960, 1968, 1976, 1984) and the World Cup four times, making it the most successful team in the history of the sport.",
    category: "Sports",
    image: "/media/sports/pakistan-hockey.jpg",
  },
  {
    slug: "squash-pakistan",
    title: "Squash — Pakistan's Dominant Sport",
    excerpt:
      "Pakistan dominated world squash for decades. Jahangir Khan won an unprecedented 555 consecutive matches and 10 World Open titles. Jansher Khan won 8 World Open titles after him.",
    category: "Sports",
    image: "/media/sports/squash-pakistan.jpg",
  },
  {
    slug: "pakistan-world-cup-1992",
    title: "1992 Cricket World Cup — Cornered Tigers",
    excerpt:
      "Pakistan's victory at the 1992 Cricket World Cup in Australia is one of the greatest sporting achievements in the country's history. Captained by Imran Khan, Pakistan defeated England in the final in Melbourne.",
    category: "Sports",
    image: "/media/sports/pakistan-world-cup-1992.jpg",
    date: "March 25, 1992",
  },
  // ── NEW SPORTS ARTICLES ──
  {
    slug: "pakistan-india-cricket-rivalry",
    title: "Pakistan vs India — The Greatest Cricket Rivalry",
    excerpt:
      "The Pakistan–India cricket rivalry is one of the most intense sporting contests in the world. Matches between these two nuclear-armed nations attract over a billion viewers and are laden with geopolitical significance. Pakistan leads the all-time head-to-head record in World Cup encounters, while India leads in overall ODI wins.",
    category: "Sports",
    image: "/media/sports/pakistan-india-cricket-rivalry.jpg",
  },
  {
    slug: "t20-world-cup-win-2009",
    title: "2009 T20 World Cup — Pakistan Champions",
    excerpt:
      "Pakistan's triumph at the 2009 ICC World Twenty20 in England remains one of the most celebrated sporting moments in the country's history. The team, led by Younis Khan, beat Sri Lanka convincingly in the final at Lord's, reclaiming national pride just months after the Lahore attack on the Sri Lanka team bus.",
    category: "Sports",
    image: "/media/sports/t20-world-cup-win-2009.jpg",
    date: "June 21, 2009",
  },
  {
    slug: "javed-miandad-last-ball-six",
    title: "Javed Miandad's Last-Ball Six — 1986",
    excerpt:
      "On 18 April 1986, Javed Miandad hit Indian bowler Chetan Sharma for a last-ball six to win a tense Australasia Cup final in Sharjah. The shot remains the most celebrated and iconic moment in Pakistan cricket history, symbolizing the team's never-say-die spirit.",
    category: "Sports",
    image: "/media/sports/javed-miandad-last-ball-six.jpg",
    date: "April 18, 1986",
  },
  {
    slug: "pakistan-hockey-golden-era",
    title: "Pakistan Hockey — The Golden Era (1960–1984)",
    excerpt:
      "Pakistan's field hockey team dominated international hockey for three decades, winning four consecutive Olympic gold medals (Rome 1960, Mexico 1968, Munich 1972, and Montreal 1976) and four Hockey World Cup titles. The 1984 Los Angeles Olympics gold remains the last Olympic title for Pakistan hockey.",
    category: "Sports",
    image: "/media/sports/pakistan-hockey-golden-era.jpg",
    date: "1960–1984",
  },
  {
    slug: "jahangir-jansher-squash",
    title: "Jahangir and Jansher Khan — Squash Legends",
    excerpt:
      "Jahangir Khan and Jansher Khan are two of the greatest squash players in history. Jahangir's unbeaten run of 555 matches (1981–1986) is a world record in any professional sport. His successor Jansher won eight World Open titles. Together they gave Pakistan over two decades of squash dominance.",
    category: "Sports",
    image: "/media/sports/jahangir-jansher-squash.jpg",
  },
  {
    slug: "arshad-nadeem-paris-2024",
    title: "Arshad Nadeem — Paris 2024 Olympic Gold Medalist",
    excerpt:
      "Arshad Nadeem made history at the Paris 2024 Olympics by winning Pakistan's first individual Olympic gold medal. The javelin thrower set a new Olympic record with a stunning throw of 92.97 metres in the final, defeating world champion Neeraj Chopra of India. He became a national hero overnight.",
    category: "Sports",
    image: "/media/sports/arshad-nadeem-paris-2024.jpg",
    date: "August 8, 2024",
  },
  {
    slug: "shaheen-shah-afridi",
    title: "Shaheen Shah Afridi — Pakistan's New Pace Spearhead",
    excerpt:
      "Shaheen Shah Afridi burst onto the international scene as a teenager and quickly established himself as one of the most dangerous left-arm fast bowlers in world cricket. Famous for dismissing Rohit Sharma and KL Rahul for golden ducks in the 2021 T20 World Cup against India, he is Pakistan's most exciting cricketing prospect.",
    category: "Sports",
    image: "/media/sports/shaheen-shah-afridi.jpg",
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// ARTS ARTICLES
// ──────────────────────────────────────────────────────────────────────────────
const artsArticles: Article[] = [
  {
    slug: "nusrat-fateh-ali-khan",
    title: "Nusrat Fateh Ali Khan — Voice of Allah",
    excerpt:
      "Nusrat Fateh Ali Khan (1948–1997) was a Pakistani musician and the greatest exponent of qawwali. He brought Pakistani music to international platforms, collaborating with world-class artists like Peter Gabriel and Eddie Vedder, and introducing Sufi sounds to global audiences.",
    category: "Arts & Entertainment",
    image: "/media/arts/nusrat-fateh-ali-khan.jpg",
  },
  {
    slug: "lollywood",
    title: "Lollywood — Pakistani Film Industry",
    excerpt:
      "Lollywood refers to the Lahore-based Pakistani film industry. After decades of decline, it saw a renaissance in the 2010s with internationally acclaimed films like Bol, Khuda Kay Liye, Waar, and Punjab Nahi Jaungi.",
    category: "Arts & Entertainment",
    image: "/media/arts/lollywood.jpg",
  },
  {
    slug: "saadat-hasan-manto",
    title: "Saadat Hasan Manto — Master of Urdu Short Stories",
    excerpt:
      "Manto (1912–1955) is considered one of the greatest writers in Urdu literature. His unflinching portrayals of Partition violence and human psychology made him both celebrated and controversial, prosecuted six times for obscenity in both India and Pakistan.",
    category: "Arts & Entertainment",
    image: "/media/arts/saadat-hasan-manto.jpg",
  },
  {
    slug: "faiz-ahmed-faiz",
    title: "Faiz Ahmed Faiz — Poet of the Revolution",
    excerpt:
      "Faiz Ahmed Faiz (1911–1984) is one of Pakistan's most revered poets. A Marxist and humanist, his poetry blends classical Urdu ghazal tradition with political progressivism. He was nominated for the Nobel Prize in Literature and won the Lenin Peace Prize.",
    category: "Arts & Entertainment",
    image: "/media/arts/faiz-ahmed-faiz.jpg",
  },
  // ── NEW ARTS ARTICLES ──
  {
    slug: "ptv-golden-age-dramas",
    title: "PTV Golden Age — Classic Pakistani Dramas",
    excerpt:
      "The 1970s and 80s are considered the golden age of Pakistani television drama. PTV productions like Waris (1979), Ankahi (1982), Dhoop Kinaray (1987), and Tanhaiyaan (1985) are masterpieces of South Asian television. Writers like Haseena Moin and Ashfaq Ahmed created works that still resonate with audiences today.",
    category: "Arts & Entertainment",
    image: "/media/arts/ptv-golden-age-dramas.jpg",
  },
  {
    slug: "coke-studio-revolution",
    title: "Coke Studio — Pakistan's Musical Revolution",
    excerpt:
      "Since its 2008 launch, Coke Studio Pakistan has transformed the country's music landscape by fusing classical, folk, Sufi, and contemporary sounds. Songs like Afreen Afreen, Mann Mayal, and Pasoori became viral global hits. The platform revived interest in Pakistani folk traditions and elevated the status of regional languages.",
    category: "Arts & Entertainment",
    image: "/media/arts/coke-studio-revolution.jpg",
  },
  {
    slug: "abdur-rahman-chughtai",
    title: "Abdur Rahman Chughtai — Master Painter of Pakistan",
    excerpt:
      "Abdur Rahman Chughtai (1894–1975) is considered one of the greatest painters of the Indian subcontinent. His distinctive style blended Mughal miniature traditions with art nouveau influences. His work, particularly the Muraqqah-e-Chughtai, is treasured in museums worldwide and on Pakistani currency.",
    category: "Arts & Entertainment",
    image: "/media/arts/abdur-rahman-chughtai.jpg",
  },
  {
    slug: "pakistani-architecture",
    title: "Pakistani Architecture — From Mughal to Modern",
    excerpt:
      "Pakistani architecture spans five millennia, from the grid-planned cities of Mohenjo-daro to the soaring minarets of the Badshahi Mosque and the contemporary geometry of the Faisal Mosque. Post-independence Pakistan developed a distinctive modern architectural style blending Islamic motifs with international modernism, seen in Islamabad's planned cityscape.",
    category: "Arts & Entertainment",
    image: "/media/arts/pakistani-architecture.jpg",
  },
  {
    slug: "urdu-literature-poetry",
    title: "Urdu Literature and Poetry — A Living Tradition",
    excerpt:
      "Urdu literature is one of the richest literary traditions in the world. From the classical ghazals of Mir Taqi Mir and Ghalib to the revolutionary poetry of Faiz Ahmed Faiz and the feminist verses of Parveen Shakir, Urdu poetry has been the conscience of South Asian civilization. The mushaira — a gathering of poets — remains a vibrant social institution.",
    category: "Arts & Entertainment",
    image: "/media/arts/urdu-literature-poetry.jpg",
  },
  {
    slug: "pakistani-folk-music",
    title: "Pakistani Folk Music Traditions",
    excerpt:
      "Pakistan's diverse folk music traditions are as varied as its geography. From the Sindhi Lok music of Sindh's Sufi shrines, the Punjabi dhol-driven bhangra, the haunting Balochi suroz, and the Pashtun rabab melodies of Khyber Pakhtunkhwa — each tradition tells the story of its people and land.",
    category: "Arts & Entertainment",
    image: "/media/arts/pakistani-folk-music.jpg",
  },
  {
    slug: "radio-pakistan",
    title: "Radio Pakistan — Voice of the Nation",
    excerpt:
      "Radio Pakistan, established in 1947, was the first broadcaster of the new nation. Its first program was aired on the night of Pakistan's independence. For decades it was the primary source of news, music, and cultural programming for Pakistanis across the country, and its national anthem broadcast at dawn remains an enduring tradition.",
    category: "Arts & Entertainment",
    image: "/media/arts/radio-pakistan.jpg",
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// PERSONALITIES ARTICLES
// ──────────────────────────────────────────────────────────────────────────────
const personalitiesArticles: Article[] = [
  {
    slug: "muhammad-ali-jinnah",
    title: "Muhammad Ali Jinnah — Quaid-e-Azam",
    excerpt:
      "Muhammad Ali Jinnah (1876–1948) was Pakistan's founding father and first Governor-General. A brilliant lawyer and statesman, he led the All-India Muslim League to successfully negotiate the creation of Pakistan.",
    category: "Personalities",
    image: "/media/personalities/muhammad-ali-jinnah.jpg",
  },
  {
    slug: "allama-iqbal",
    title: "Allama Iqbal — Spiritual Founder of Pakistan",
    excerpt:
      "Sir Muhammad Iqbal (1877–1938) was a philosopher, poet, and politician. His vision of a separate Muslim homeland in South Asia inspired the Pakistan movement. He is celebrated as the national poet of Pakistan.",
    category: "Personalities",
    image: "/media/personalities/allama-iqbal.jpg",
  },
  {
    slug: "benazir-bhutto",
    title: "Benazir Bhutto — First Female PM",
    excerpt:
      "Benazir Bhutto (1953–2007) served as Prime Minister twice (1988–90 and 1993–96). She was the first woman to head a democratically elected government in a Muslim-majority state. She was assassinated in 2007.",
    category: "Personalities",
    image: "/media/personalities/benazir-bhutto.jpg",
  },
  {
    slug: "malala-yousafzai",
    title: "Malala Yousafzai — Nobel Peace Laureate",
    excerpt:
      "Malala Yousafzai (born 1997) is a Pakistani activist for girls' education and the youngest Nobel Prize laureate. Surviving a Taliban assassination attempt, she became a global symbol of courage and advocacy.",
    category: "Personalities",
    image: "/media/personalities/malala-yousafzai.jpg",
  },
  {
    slug: "imran-khan",
    title: "Imran Khan — From Cricket to Politics",
    excerpt:
      "Imran Khan led Pakistan to victory in the 1992 Cricket World Cup before founding the Pakistan Tehreek-e-Insaf (PTI). He served as the 22nd Prime Minister of Pakistan from 2018 to 2022.",
    category: "Personalities",
    image: "/media/personalities/imran-khan.jpg",
  },
  {
    slug: "abdul-sattar-edhi",
    title: "Abdul Sattar Edhi — The Angel of Mercy",
    excerpt:
      "Abdul Sattar Edhi was a humanitarian and philanthropist who founded the Edhi Foundation, which runs the world's largest volunteer ambulance network. He is known for his ascetic lifestyle and lifelong service to the poor.",
    category: "Personalities",
    image: "/media/personalities/abdul-sattar-edhi.jpg",
  },
  {
    slug: "zulfikar-ali-bhutto",
    title: "Zulfikar Ali Bhutto — Founder of PPP",
    excerpt:
      "Zulfikar Ali Bhutto served as the Prime Minister and President of Pakistan. He founded the Pakistan Peoples Party (PPP) and played a crucial role in modernizing Pakistan's constitution and foreign policy.",
    category: "Personalities",
    image: "/media/personalities/zulfikar-ali-bhutto.jpg",
  },
  {
    slug: "liaquat-ali-khan",
    title: "Liaquat Ali Khan — First Prime Minister",
    excerpt:
      "Liaquat Ali Khan was a founding father of modern Pakistan and served as its first Prime Minister. A close associate of Muhammad Ali Jinnah, he helped establish the legal and political framework of the new state.",
    category: "Personalities",
    image: "/media/personalities/liaquat-ali-khan.jpg",
  },
  {
    slug: "fatima-jinnah",
    title: "Fatima Jinnah — Madar-e-Millat",
    excerpt:
      "Fatima Jinnah (1893–1967) was a dental surgeon, biographer, and stateswoman. She was the sister of Quaid-e-Azam and played a pivotal role in the Pakistan Movement and later led the democratic opposition against military rule.",
    category: "Personalities",
    image: "/media/personalities/fatima-jinnah.jpg",
  },
  {
    slug: "abdus-salam",
    title: "Dr. Abdus Salam — Nobel Laureate in Physics",
    excerpt:
      "Abdus Salam (1926–1996) was a theoretical physicist who became the first Pakistani to receive a Nobel Prize. His work on the electroweak unification theory is a cornerstone of modern particle physics.",
    category: "Personalities",
    image: "/media/personalities/abdus-salam.jpg",
  },
  {
    slug: "ruth-pfau",
    title: "Dr. Ruth Pfau — The Mother Teresa of Pakistan",
    excerpt:
      "Dr. Ruth Pfau was a German-Pakistani physician and nun who dedicated over 50 years of her life to fighting leprosy in Pakistan. She is credited with almost entirely eradicating the disease in the country.",
    category: "Personalities",
    image: "/media/personalities/ruth-pfau.jpg",
  },
  {
    slug: "arfa-karim",
    title: "Arfa Karim — Youngest Microsoft Certified Professional",
    excerpt:
      "Arfa Karim Randhawa (1995–2012) was a Pakistani student and computer prodigy who in 2004 became the youngest Microsoft Certified Professional (MCP). She remains an inspiration for youth in technology.",
    category: "Personalities",
    image: "/media/personalities/arfa-karim.jpg",
  },
  {
    slug: "abdul-qadeer-khan",
    title: "Dr. Abdul Qadeer Khan — Nuclear Scientist",
    excerpt:
      "Dr. A.Q. Khan is known as the father of Pakistan's atomic bomb. He founded the Khan Research Laboratories (KRL) and was central to Pakistan's efforts to achieve nuclear deterrent capability.",
    category: "Personalities",
    image: "/media/personalities/abdul-qadeer-khan.jpg",
  },
  {
    slug: "jahangir-khan",
    title: "Jahangir Khan — Squash Legend",
    excerpt:
      "Widely considered the greatest squash player of all time, Jahangir Khan won the British Open 10 times and remained unbeaten in 555 consecutive matches, a world record for any professional athlete.",
    category: "Personalities",
    image: "/media/personalities/jahangir-khan.jpg",
  },
  {
    slug: "asma-jahangir",
    title: "Asma Jahangir — Human Rights Icon",
    excerpt:
      "Asma Jahangir was a leading human rights lawyer and social activist. She was the first female president of the Supreme Court Bar Association and a fearless critic of military interventions.",
    category: "Personalities",
    image: "/media/personalities/asma-jahangir.jpg",
  },
  {
    slug: "noor-jehan",
    title: "Madam Noor Jehan — Melody Queen",
    excerpt:
      "Noor Jehan was an iconic singer and actress. Her career spanned seven decades, and she was awarded the title of Malika-e-Tarannum for her contributions to music and cinema.",
    category: "Personalities",
    image: "/media/personalities/noor-jehan.jpg",
  },
  {
    slug: "adeebul-hasan-rizvi",
    title: "Dr. Adeebul Hasan Rizvi — Healthcare Philanthropist",
    excerpt:
      "Dr. Rizvi founded the Sindh Institute of Urology and Transplantation (SIUT), an institution that provides free, state-of-the-art medical treatment to millions regardless of their background.",
    category: "Personalities",
    image: "/media/personalities/adeebul-hasan-rizvi.jpg",
  },
  {
    slug: "parveen-shakir",
    title: "Parveen Shakir — Celebrated Poet",
    excerpt:
      'Parveen Shakir was a civil servant and Urdu poet who introduced a unique feminine perspective to Urdu literature. Her collections like "Khushbu" remain immensely popular.',
    category: "Personalities",
    image: "/media/personalities/parveen-shakir.jpg",
  },
  {
    slug: "pervez-musharraf",
    title: "General Pervez Musharraf — Military Leader",
    excerpt:
      "General Musharraf served as the 10th President of Pakistan after taking power in 1999. His presidency was marked by liberal reforms and Pakistan's alliance with the US in the War on Terror.",
    category: "Personalities",
    image: "/media/personalities/pervez-musharraf.jpg",
  },
  {
    slug: "nawaz-sharif",
    title: "Nawaz Sharif — Three-Time Prime Minister",
    excerpt:
      "Mian Muhammad Nawaz Sharif has served as Prime Minister of Pakistan three times (1990–93, 1997–99, 2013–17). He led the country through major infrastructure developments and authorized the 1998 nuclear tests.",
    category: "Personalities",
    image: "/media/personalities/nawaz-sharif.jpg",
  },
  {
    slug: "mahbub-ul-haq",
    title: "Dr. Mahbub ul Haq — Influential Economist",
    excerpt:
      "Mahbub ul Haq was a visionary economist who served as the Finance Minister and founded the Human Development Report, introducing the Human Development Index (HDI) to the world.",
    category: "Personalities",
    image: "/media/personalities/mahbub-ul-haq.jpg",
  },
  {
    slug: "sadequain",
    title: "Sadequain — Master Artist",
    excerpt:
      "Syed Sadequain Ahmed Naqvi was a world-renowned painter and calligrapher. He was known for his monumental murals and for reviving the art of calligraphy in Pakistan.",
    category: "Personalities",
    image: "/media/personalities/sadequain.jpg",
  },
  {
    slug: "muniba-mazari",
    title: "Muniba Mazari — Iron Lady of Pakistan",
    excerpt:
      'Known as the "Iron Lady of Pakistan," Muniba Mazari is a wheelchair-bound artist and activist who serves as the National Ambassador for UN Women Pakistan.',
    category: "Personalities",
    image: "/media/personalities/muniba-mazari.jpg",
  },
  {
    slug: "abida-parveen",
    title: "Abida Parveen — Sufi Music Legend",
    excerpt:
      "Abida Parveen is a legendary Sufi singer. Her soulful renditions of Sufi poetry have made her a global icon of spiritual music and peace.",
    category: "Personalities",
    image: "/media/personalities/abida-parveen.jpg",
  },
  {
    slug: "sharmeen-obaid-chinoy",
    title: "Sharmeen Obaid-Chinoy — Oscar-winning Filmmaker",
    excerpt:
      "Sharmeen is a journalist and filmmaker known for her documentaries highlighting social issues. She is the first Pakistani to win two Academy Awards.",
    category: "Personalities",
    image: "/media/personalities/sharmeen-obaid-chinoy.jpg",
  },
  {
    slug: "hakim-mohammed-said",
    title: "Hakim Mohammed Said — Scholar and Philanthropist",
    excerpt:
      "The founder of Hamdard Foundation, Hakim Said was a scholar, physician, and philanthropist who also served as Governor of Sindh. He was a champion of children's education.",
    category: "Personalities",
    image: "/media/personalities/hakim-mohammed-said.jpg",
  },
  {
    slug: "ashfaq-ahmed",
    title: "Ashfaq Ahmed — Intellectual and Writer",
    excerpt:
      'Ashfaq Ahmed was a renowned Urdu writer, playwright, and broadcaster. His radio program "Zaviya" provided spiritual and moral guidance to a generation.',
    category: "Personalities",
    image: "/media/personalities/ashfaq-ahmed.jpg",
  },
  {
    slug: "bano-qudsia",
    title: "Bano Qudsia — Literary Giant",
    excerpt:
      'Bano Qudsia was a celebrated novelist and playwright. Her novel "Raja Gidh" is considered one of the masterpieces of Urdu literature.',
    category: "Personalities",
    image: "/media/personalities/bano-qudsia.jpg",
  },
  {
    slug: "shoaib-akhtar",
    title: "Shoaib Akhtar — The Rawalpindi Express",
    excerpt:
      "Shoaib Akhtar is a former cricketer who holds the record for the fastest delivery in cricket history (161.3 km/h). He is one of the most fearsome fast bowlers the game has seen.",
    category: "Personalities",
    image: "/media/personalities/shoaib-akhtar.jpg",
  },
  {
    slug: "shahid-afridi",
    title: "Shahid Afridi — Boom Boom",
    excerpt:
      "Shahid Afridi is a legendary all-rounder known for his aggressive batting and leg-spin. He held the record for the fastest ODI century for nearly 18 years.",
    category: "Personalities",
    image: "/media/personalities/shahid-afridi.jpg",
  },
  {
    slug: "moin-khan",
    title: "Moin Khan — Wicket-keeping Legend",
    excerpt:
      "Moin Khan was a vital member of the 1992 World Cup winning team. He was known for his sharp wicket-keeping and combative batting in pressure situations.",
    category: "Personalities",
    image: "/media/personalities/moin-khan.jpg",
  },
  {
    slug: "master-ayub",
    title: "Master Ayub — The Park Teacher",
    excerpt:
      "Master Ayub is a fire-fighter by profession who has spent over 30 years teaching underprivileged children for free in a public park in Islamabad.",
    category: "Personalities",
    image: "/media/personalities/master-ayub.jpg",
  },
  {
    slug: "ishrat-hussain",
    title: "Dr. Ishrat Hussain — Economist and Reformer",
    excerpt:
      "Dr. Ishrat Hussain is a leading economist who served as the Governor of the State Bank of Pakistan and led major institutional reforms in the country.",
    category: "Personalities",
    image: "/media/personalities/ishrat-hussain.jpg",
  },
  {
    slug: "bilawal-bhutto-zardari",
    title: "Bilawal Bhutto Zardari — PPP Chairman",
    excerpt:
      "The son of Benazir Bhutto, Bilawal leads the Pakistan Peoples Party. He has served as Pakistan's youngest Foreign Minister.",
    category: "Personalities",
    image: "/media/personalities/bilawal-bhutto-zardari.jpg",
  },
  {
    slug: "aitzaz-ahsan",
    title: "Aitzaz Ahsan — Jurist and Politician",
    excerpt:
      "Aitzaz Ahsan is a prominent lawyer and politician. He was a leading figure in the Lawyers' Movement for the restoration of the judiciary in 2007.",
    category: "Personalities",
    image: "/media/personalities/aitzaz-ahsan.jpg",
  },
  {
    slug: "hina-rabbani-khar",
    title: "Hina Rabbani Khar — Diplomat",
    excerpt:
      "Hina Rabbani Khar was the first female and youngest Foreign Minister of Pakistan. She is known for her contributions to Pakistan's foreign policy and diplomacy.",
    category: "Personalities",
    image: "/media/personalities/hina-rabbani-khar.jpg",
  },
  {
    slug: "sultan-rahi",
    title: "Sultan Rahi — Legend of Punjabi Cinema",
    excerpt:
      "Sultan Rahi was a prolific actor who appeared in over 800 films. He remains the biggest star of Punjabi cinema in Pakistan, famous for his iconic roles in action films like Maula Jatt.",
    category: "Personalities",
    image: "/media/personalities/sultan-rahi.jpg",
  },
  {
    slug: "waheed-murad",
    title: "Waheed Murad — Chocolate Hero",
    excerpt:
      "Waheed Murad was a legendary actor, producer, and scriptwriter. Known for his charming personality and romantic roles, he remains one of the most influential actors in Pakistani cinema.",
    category: "Personalities",
    image: "/media/personalities/waheed-murad.jpg",
  },
  {
    slug: "mehdi-hassan",
    title: "Mehdi Hassan — Shahenshah-e-Ghazal",
    excerpt:
      "Mehdi Hassan was a world-renowned ghazal singer and playback singer. His baritone voice and command over classical music made him a unique figure in the history of music.",
    category: "Personalities",
    image: "/media/personalities/mehdi-hassan.jpg",
  },
  {
    slug: "ghulam-ali",
    title: "Ghulam Ali — Master of Ghazal",
    excerpt:
      "Ghulam Ali is a famous ghazal singer belonging to the Patiala Gharana. He is known for blending Hindustani classical music with ghazals, making them accessible to a wider audience.",
    category: "Personalities",
    image: "/media/personalities/ghulam-ali.jpg",
  },
  {
    slug: "reshma",
    title: "Reshma — Nightingale of the Desert",
    excerpt:
      'Reshma was a renowned folk singer from Punjab. Her powerful and earthy voice brought soul to songs like "Lambi Judai" and earned her fans across the subcontinent.',
    category: "Personalities",
    image: "/media/personalities/reshma.jpg",
  },
  {
    slug: "farida-khanum",
    title: "Farida Khanum — Queen of Ghazal",
    excerpt:
      "Farida Khanum is a legendary ghazal singer. Her mastery over classical music and her emotive singing style have made her one of the most respected musicians in Pakistan.",
    category: "Personalities",
    image: "/media/personalities/farida-khanum.jpg",
  },
  {
    slug: "iqbal-bano",
    title: "Iqbal Bano — Voice of Resistance",
    excerpt:
      'Iqbal Bano was a highly acclaimed ghazal singer. She is famously remembered for her rendition of Faiz Ahmed Faiz\'s poetry, particularly "Hum Dekhenge," during military rule.',
    category: "Personalities",
    image: "/media/personalities/iqbal-bano.jpg",
  },
  {
    slug: "moin-akhter",
    title: "Moin Akhter — Versatile Legend",
    excerpt:
      "Moin Akhter was a master of many trades: actor, comedian, impersonator, and host. His career spanned over 45 years, and he remains an unmatched figure in South Asian entertainment.",
    category: "Personalities",
    image: "/media/personalities/moin-akhter.jpg",
  },
  {
    slug: "anwar-maqsood",
    title: "Anwar Maqsood — Playwright and Humorist",
    excerpt:
      "Anwar Maqsood is a distinguished scriptwriter, television host, satirist, and painter. His work is known for its sharp wit and social commentary.",
    category: "Personalities",
    image: "/media/personalities/anwar-maqsood.jpg",
  },
  {
    slug: "mushtaq-ahmed-yousufi",
    title: "Mushtaq Ahmed Yousufi — Master of Wit",
    excerpt:
      "Yousufi was an outstanding Urdu humorist and satirist. His unique style and play with words made him one of the most celebrated Urdu writers of his time.",
    category: "Personalities",
    image: "/media/personalities/mushtaq-ahmed-yousufi.jpg",
  },
  {
    slug: "misbah-ul-haq",
    title: "Misbah-ul-Haq — Captain Cool",
    excerpt:
      "Misbah-ul-Haq is the most successful Test captain in Pakistan's history. He led the team to the No. 1 ranking in Test cricket and was known for his calm and resilient batting.",
    category: "Personalities",
    image: "/media/personalities/misbah-ul-haq.jpg",
  },
  {
    slug: "younis-khan",
    title: "Younis Khan — Legend of the Game",
    excerpt:
      "Younis Khan is the only Pakistani batsman to score 10,000 runs in Test cricket. He was a key figure in Pakistan's victory in the 2009 T20 World Cup.",
    category: "Personalities",
    image: "/media/personalities/younis-khan.jpg",
  },
  {
    slug: "babar-azam",
    title: "Babar Azam — Modern Day Great",
    excerpt:
      "Babar Azam is one of the top batsmen in the world across all formats. He currently leads the Pakistan national team and has broken numerous records at a young age.",
    category: "Personalities",
    image: "/media/personalities/babar-azam.jpg",
  },
  {
    slug: "mohammad-razzaq",
    title: "Mohammad Razzaq — All-rounder",
    excerpt:
      "Abdul Razzaq was a powerful all-rounder known for his hard-hitting batting and effective medium-pace bowling. He played a crucial role in many of Pakistan's victories.",
    category: "Personalities",
    image: "/media/personalities/mohammad-razzaq.jpg",
  },
  {
    slug: "syed-ahmad-khan",
    title: "Sir Syed Ahmad Khan — Educational Reformer",
    excerpt:
      "The founder of Aligarh Muslim University, Sir Syed was a philosopher and educational activist who pioneered the Aligarh Movement to modernize Muslim education in the subcontinent.",
    category: "Personalities",
    image: "/media/personalities/syed-ahmad-khan.jpg",
  },
  {
    slug: "hafeez-jalandhari",
    title: "Hafeez Jalandhari — National Anthem Writer",
    excerpt:
      'Abul Asar Hafeez Jalandhari was a Pakistani writer and poet who wrote the lyrics for the National Anthem of Pakistan, "Qaumi Taranah." He also wrote the "Shahnam-e-Islam."',
    category: "Personalities",
    image: "/media/personalities/hafeez-jalandhari.jpg",
  },
  {
    slug: "shah-rukh-khan",
    title: "Shah Rukh Khan — Born in Peshawar",
    excerpt:
      "Though primarily known as the 'King of Bollywood' in India, Shah Rukh Khan has deep roots in Pakistan, with his father Taj Mohammed Khan being a Peshawar-born activist.",
    category: "Personalities",
    image: "/media/personalities/shah-rukh-khan.jpg",
  },
  // ── NEW PERSONALITIES ──
  {
    slug: "arshad-nadeem",
    title: "Arshad Nadeem — Olympic Gold Medalist",
    excerpt:
      "Arshad Nadeem made history at the 2024 Paris Olympics by winning Pakistan's first-ever individual Olympic gold medal in javelin throw, setting an Olympic record with a throw of 92.97 metres and defeating world champion Neeraj Chopra.",
    category: "Personalities",
    image: "/media/personalities/arshad-nadeem.jpg",
  },
  {
    slug: "shoaib-malik",
    title: "Shoaib Malik — Veteran All-rounder",
    excerpt:
      "Shoaib Malik is one of Pakistan's most experienced cricketers, having represented the national team across three decades. He is the only Pakistani cricketer to have scored international runs in four different decades.",
    category: "Personalities",
    image: "/media/personalities/shoaib-malik.jpg",
  },
  {
    slug: "jansher-khan",
    title: "Jansher Khan — Eight-Time World Squash Champion",
    excerpt:
      "Jansher Khan is a Pakistani squash legend who won the World Open eight times and the British Open six times. He succeeded Jahangir Khan as world number one and maintained Pakistan's dominance of global squash throughout the 1990s.",
    category: "Personalities",
    image: "/media/personalities/jansher-khan.jpg",
  },
  {
    slug: "jawad-ahmed",
    title: "Jawad Ahmed — Pop Icon and Social Activist",
    excerpt:
      "Jawad Ahmed is a celebrated Pakistani pop singer known for patriotic songs like 'Ye Watan Tumhara Hai.' He has been a consistent voice in Pakistani music and later became active in politics as a member of PTI.",
    category: "Personalities",
    image: "/media/personalities/jawad-ahmed.jpg",
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// ALL ARTICLES COMBINED
// ──────────────────────────────────────────────────────────────────────────────
const allArticles: Article[] = [
  ...historyArticles,
  ...politicsArticles,
  ...eventsArticles,
  ...cultureArticles,
  ...geographyArticles,
  ...economyArticles,
  ...sportsArticles,
  ...artsArticles,
  ...personalitiesArticles,
];

export function getFeaturedArticles(): Article[] {
  return [
    historyArticles[0], // History of Pakistan
    historyArticles[2], // Partition
    personalitiesArticles[0], // Jinnah
    eventsArticles[1], // 1971 War
    personalitiesArticles[1], // Iqbal
    politicsArticles[0], // Constitution
  ];
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  const categoryMap: Record<string, string> = {
    history: "History",
    politics: "Politics",
    personalities: "Personalities",
    events: "Events",
    culture: "Culture",
    geography: "Geography",
    economy: "Economy",
    sports: "Sports",
    arts: "Arts & Entertainment",
  };

  const targetCategory = categoryMap[categorySlug];
  if (!targetCategory) return [];

  return allArticles.filter((article) => article.category === targetCategory);
}

export function getArticleBySlug(slug: string): Article | null {
  return allArticles.find((a) => a.slug === slug) || null;
}

export function searchArticles(query: string): Article[] {
  const lowerQuery = query.toLowerCase();
  return allArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.category.toLowerCase().includes(lowerQuery),
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// TIMELINE EVENTS — 40+ entries from ancient history through 2024
// ──────────────────────────────────────────────────────────────────────────────
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  link?: string;
}

export function getTimelineEvents(): TimelineEvent[] {
  return [
    {
      year: "7000 BC",
      title: "Mehrgarh Settlement",
      description:
        "One of the earliest known farming settlements in the world established in Balochistan",
      link: "/article/ancient-pakistan",
    },
    {
      year: "2500 BC",
      title: "Indus Valley Civilization",
      description:
        "One of the world's first urban civilizations flourishes at Mohenjo-daro and Harappa",
      link: "/article/ancient-pakistan",
    },
    {
      year: "1500 BC",
      title: "Vedic Period Begins",
      description:
        "Indo-Aryan migrations transform the culture of the Indus plains",
      link: "/article/ancient-pakistan",
    },
    {
      year: "516 BC",
      title: "Persian Conquest",
      description: "Achaemenid Empire under Darius I conquers the Indus Valley",
      link: "/article/ancient-pakistan",
    },
    {
      year: "326 BC",
      title: "Alexander's Invasion",
      description:
        "Alexander the Great crosses the Indus and defeats King Porus at the Battle of the Hydaspes",
      link: "/article/taxila-gandhara",
    },
    {
      year: "305 BC",
      title: "Maurya Empire",
      description:
        "Chandragupta Maurya takes control of the northwest including Taxila",
      link: "/article/taxila-gandhara",
    },
    {
      year: "100 CE",
      title: "Gandhara Buddhist Art",
      description:
        "The Gandhara school of Buddhist art flourishes, blending Greek and Indian styles",
      link: "/article/taxila-gandhara",
    },
    {
      year: "711 CE",
      title: "Arab Conquest of Sindh",
      description:
        "Muhammad ibn Qasim conquers Sindh, introducing Islam to the region",
      link: "/article/history-of-pakistan",
    },
    {
      year: "1000 CE",
      title: "Mahmud of Ghazni",
      description:
        "Sultan Mahmud of Ghazni raids the subcontinent 17 times, bringing Persian-Islamic culture",
      link: "/article/history-of-pakistan",
    },
    {
      year: "1206",
      title: "Delhi Sultanate Founded",
      description:
        "Qutb ud-Din Aibak establishes the Delhi Sultanate, beginning Muslim rule over the subcontinent",
      link: "/article/history-of-pakistan",
    },
    {
      year: "1526",
      title: "Mughal Empire Founded",
      description:
        "Babur defeats Ibrahim Lodi at the First Battle of Panipat, founding the Mughal Empire",
      link: "/article/mughal-empire",
    },
    {
      year: "1556",
      title: "Akbar's Reign Begins",
      description:
        "Mughal Emperor Akbar begins his reign, ushering in the empire's golden age of tolerance and culture",
      link: "/article/mughal-empire",
    },
    {
      year: "1648",
      title: "Badshahi Mosque Era",
      description:
        "Shah Jahan and Aurangzeb build iconic Mughal monuments in Lahore including the Badshahi Mosque",
      link: "/article/mughal-empire",
    },
    {
      year: "1757",
      title: "Battle of Plassey",
      description:
        "British East India Company gains foothold in India; decline of Mughal power accelerates",
      link: "/article/british-raj",
    },
    {
      year: "1799",
      title: "Sikh Empire in Punjab",
      description:
        "Maharaja Ranjit Singh establishes the Sikh Empire with Lahore as its capital",
      link: "/article/sikh-empire-punjab",
    },
    {
      year: "1843",
      title: "British Annexation of Sindh",
      description:
        "General Charles Napier conquers Sindh for the British Empire",
      link: "/article/british-raj",
    },
    {
      year: "1857",
      title: "War of Independence",
      description:
        "The 1857 revolt against British rule marks the end of the Mughal Empire and start of British Raj",
      link: "/article/british-raj",
    },
    {
      year: "1906",
      title: "Muslim League Founded",
      description:
        "All-India Muslim League established in Dhaka to protect Muslim political interests",
      link: "/article/creation-of-pakistan",
    },
    {
      year: "1930",
      title: "Iqbal's Allahabad Address",
      description:
        "Allama Iqbal envisions a separate Muslim state in northwestern India",
      link: "/article/allama-iqbal",
    },
    {
      year: "1940",
      title: "Lahore Resolution",
      description:
        "Muslim League formally demands independent Muslim states — foundation of Pakistan movement",
      link: "/article/lahore-resolution-1940",
    },
    {
      year: "1947",
      title: "Independence of Pakistan",
      description:
        "Pakistan becomes an independent nation on 14 August; Jinnah becomes Governor-General",
      link: "/article/pakistan-independence-day",
    },
    {
      year: "1948",
      title: "First Kashmir War",
      description:
        "War with India over the princely state of Jammu & Kashmir; Jinnah dies in September",
      link: "/article/history-of-pakistan",
    },
    {
      year: "1951",
      title: "Liaquat Ali Khan Assassinated",
      description:
        "First Prime Minister of Pakistan shot dead at a political rally in Rawalpindi",
      link: "/timeline",
    },
    {
      year: "1956",
      title: "First Constitution",
      description:
        "Pakistan adopts its first constitution and becomes an Islamic Republic",
      link: "/article/constitution-of-pakistan",
    },
    {
      year: "1958",
      title: "First Military Coup",
      description:
        "General Ayub Khan seizes power, beginning decade-long military rule",
      link: "/article/pakistani-military-coups",
    },
    {
      year: "1965",
      title: "Second Indo-Pakistan War",
      description:
        "Inconclusive war over Kashmir ends with UN ceasefire and Tashkent Declaration",
      link: "/article/indo-pak-war-1965",
    },
    {
      year: "1970",
      title: "First General Elections",
      description:
        "First ever general elections held; Awami League wins majority in East Pakistan",
      link: "/article/pakistani-general-elections",
    },
    {
      year: "1971",
      title: "Bangladesh Independence",
      description:
        "East Pakistan becomes Bangladesh after war with India; Pakistan surrenders in Dhaka",
      link: "/article/pakistan-india-war-1971",
    },
    {
      year: "1973",
      title: "New Constitution Adopted",
      description:
        "Zulfikar Ali Bhutto presides over adoption of Pakistan's current constitution",
      link: "/article/constitution-of-pakistan",
    },
    {
      year: "1977",
      title: "Zia ul-Haq Coup",
      description:
        "Military coup ousts Bhutto; General Zia begins Islamization of law",
      link: "/article/zia-ul-haq",
    },
    {
      year: "1979",
      title: "Zulfikar Bhutto Executed",
      description:
        "Former PM hanged after controversial trial; Soviet invasion of Afghanistan begins",
      link: "/article/zulfikar-ali-bhutto",
    },
    {
      year: "1988",
      title: "Benazir Bhutto Elected",
      description:
        "Benazir Bhutto becomes world's first female PM of a Muslim-majority country; Zia dies in plane crash",
      link: "/article/benazir-bhutto",
    },
    {
      year: "1992",
      title: "Pakistan Wins Cricket World Cup",
      description:
        "Imran Khan leads Pakistan to historic World Cup victory in Australia",
      link: "/article/pakistan-world-cup-1992",
    },
    {
      year: "1998",
      title: "Nuclear Tests at Chagai",
      description:
        "Pakistan conducts nuclear tests, becoming 7th nuclear-weapon state",
      link: "/article/nuclear-tests-1998",
    },
    {
      year: "1999",
      title: "Kargil War & Musharraf Coup",
      description:
        "Armed conflict with India in Kargil; General Musharraf seizes power in October",
      link: "/article/kargil-war-1999",
    },
    {
      year: "2001",
      title: "War on Terror Begins",
      description:
        "Pakistan joins US-led coalition after 9/11 attacks; major geopolitical realignment",
      link: "/article/history-of-pakistan",
    },
    {
      year: "2005",
      title: "Kashmir Earthquake",
      description:
        "Devastating 7.6-magnitude earthquake kills over 73,000 people in northern Pakistan",
      link: "/article/earthquake-2005",
    },
    {
      year: "2007",
      title: "Benazir Bhutto Assassinated",
      description:
        "Former PM assassinated at a political rally in Rawalpindi on 27 December",
      link: "/article/benazir-bhutto",
    },
    {
      year: "2008",
      title: "Democratic Transition",
      description:
        "PPP returns to power under Asif Ali Zardari; Musharraf resigns",
      link: "/article/pakistani-general-elections",
    },
    {
      year: "2009",
      title: "T20 World Cup Victory",
      description:
        "Pakistan wins ICC T20 World Cup in England under Younis Khan's captaincy",
      link: "/article/pakistan-world-cup-1992",
    },
    {
      year: "2010",
      title: "Catastrophic Floods",
      description:
        "Worst floods in history affect 20 million people and submerge one-fifth of Pakistan",
      link: "/article/floods-2010",
    },
    {
      year: "2011",
      title: "Operation Neptune Spear",
      description:
        "US Navy SEALs kill Osama bin Laden in Abbottabad, causing diplomatic crisis",
      link: "/article/history-of-pakistan",
    },
    {
      year: "2013",
      title: "First Democratic Transfer",
      description:
        "First-ever democratic transfer of power; Nawaz Sharif elected for third term",
      link: "/article/nawaz-sharif",
    },
    {
      year: "2014",
      title: "Operation Zarb-e-Azb",
      description:
        "Major military offensive against Taliban in North Waziristan; APS Peshawar massacre kills 149",
      link: "/article/operation-zarb-e-azb-2014",
    },
    {
      year: "2018",
      title: "PTI Government",
      description:
        "Imran Khan and PTI win general elections; 22nd Prime Minister sworn in",
      link: "/article/pti-pakistan",
    },
    {
      year: "2022",
      title: "PDM Coalition & Mega Floods",
      description:
        "Imran Khan ousted via no-confidence vote; devastating floods affect 33 million",
      link: "/article/pakistani-general-elections",
    },
    {
      year: "2023",
      title: "Economic Crisis",
      description:
        "Pakistan faces IMF bailout and political uncertainty; Imran Khan arrested",
      link: "/article/pakistan-economy-overview",
    },
    {
      year: "2024",
      title: "General Elections & Olympic Gold",
      description:
        "General elections held in February; Arshad Nadeem wins first individual Olympic gold at Paris Games",
      link: "/article/arshad-nadeem",
    },
  ];
}

export function getRelatedArticles(slug: string, count: number = 4): Article[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return allArticles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, count);
}

// ──────────────────────────────────────────────────────────────────────────────
// PERSONALITY CATEGORIES — grouping personalities by field
// ──────────────────────────────────────────────────────────────────────────────
export function getPersonalityCategories(): PersonalityCategory[] {
  return [
    { slug: "political", name: "Political Leaders", icon: "🏛️" },
    { slug: "sports", name: "Sports", icon: "🏆" },
    { slug: "arts", name: "Arts & Culture", icon: "🎨" },
    { slug: "science", name: "Science & Tech", icon: "🔬" },
    { slug: "philanthropy", name: "Humanitarian", icon: "❤️" },
  ];
}

export function getFamousPersonalitiesByCategory(): Record<string, Person[]> {
  const categories: Record<string, string[]> = {
    political: [
      "muhammad-ali-jinnah",
      "allama-iqbal",
      "benazir-bhutto",
      "imran-khan",
      "zulfikar-ali-bhutto",
      "liaquat-ali-khan",
      "fatima-jinnah",
      "nawaz-sharif",
      "pervez-musharraf",
    ],
    sports: [
      "imran-khan",
      "jahangir-khan",
      "wasim-akram",
    ],
    arts: [
      "noor-jehan",
      "mehdi-hassan",
      "parveen-shakir",
      "faiz-ahmed-faiz",
      "sharmeen-obaid-chinoy",
    ],
    science: [
      "abdus-salam",
      "arfa-karim",
      "abdul-qadeer-khan",
    ],
    philanthropy: [
      "abdul-sattar-edhi",
      "malala-yousafzai",
      "ruth-pfau",
      "asma-jahangir",
      "adeebul-hasan-rizvi",
    ],
  };

  const personalities = getFamousPersonalities();
  const result: Record<string, Person[]> = {};

  for (const [catSlug, slugs] of Object.entries(categories)) {
    result[catSlug] = personalities.filter(p => slugs.includes(p.slug));
  }

  return result;
}

// ──────────────────────────────────────────────────────────────────────────────
// FAMOUS PERSONALITIES — 16 people with local media images
// ──────────────────────────────────────────────────────────────────────────────
const personalityCategoryMap: Record<string, string> = {
  "muhammad-ali-jinnah": "political",
  "allama-iqbal": "political",
  "benazir-bhutto": "political",
  "imran-khan": "sports",
  "zulfikar-ali-bhutto": "political",
  "liaquat-ali-khan": "political",
  "fatima-jinnah": "political",
  "nawaz-sharif": "political",
  "pervez-musharraf": "political",
  "abdul-sattar-edhi": "philanthropy",
  "malala-yousafzai": "philanthropy",
  "ruth-pfau": "philanthropy",
  "abdus-salam": "science",
  "arfa-karim": "science",
  "abdul-qadeer-khan": "science",
  "jahangir-khan": "sports",
  "wasim-akram": "sports",
  "asma-jahangir": "philanthropy",
  "adeebul-hasan-rizvi": "philanthropy",
  "noor-jehan": "arts",
  "mehdi-hassan": "arts",
  "parveen-shakir": "arts",
  "faiz-ahmed-faiz": "arts",
  "sharmeen-obaid-chinoy": "arts",
};

export function getFamousPersonalities() {
  const customEmojis: Record<string, string> = {
    "muhammad-ali-jinnah": "👔",
    "allama-iqbal": "📝",
    "benazir-bhutto": "🌹",
    "imran-khan": "🏑",
    "abdul-sattar-edhi": "❤️",
    "malala-yousafzai": "🌟",
    "zulfikar-ali-bhutto": "✊",
    "liaquat-ali-khan": "🎩",
    "abdus-salam": "⚛️",
    "fatima-jinnah": "🕊️",
    "nawaz-sharif": "🏙️",
    "jahangir-khan": "🏸",
    "sharmeen-obaid-chinoy": "🎦",
    "mehdi-hassan": "🎤",
    "parveen-shakir": "✒️",
    "wasim-akram": "🏑",
    "nusrat-fateh-ali-khan": "🎵",
    "faiz-ahmed-faiz": "📜",
    "ghulam-ali": "🎶",
    "noor-jehan": "🎙️",
  };

  return personalitiesArticles.map(p => {
    const parts = p.title.split(' — ');
    const name = parts[0] ? parts[0].trim() : p.title;
    const role = parts[1] ? parts[1].trim() : "Personality";
    
    return {
      name,
      role,
      slug: p.slug,
      emoji: customEmojis[p.slug] || "👤",
      image: p.image || `/media/personalities/${p.slug}.jpg`,
      category: personalityCategoryMap[p.slug] || "political",
    };
  });
}

// ──────────────────────────────────────────────────────────────────────────────
// DID YOU KNOW — 12 fascinating facts about Pakistan
// ──────────────────────────────────────────────────────────────────────────────
export function getDidYouKnowFacts() {
  return [
    "Pakistan is home to five of the world's 14 mountains over 8,000 metres, including K2 — the second highest peak on Earth.",
    "The Indus Valley Civilization (c. 2500 BCE), centred in what is now Pakistan, is one of humanity's earliest and largest urban cultures.",
    "Pakistan's Jahangir Khan won 555 consecutive squash matches between 1981 and 1986 — a world record in any professional sport.",
    "Pakistan was the first Muslim-majority country to elect a female head of government (Benazir Bhutto, 1988).",
    "The mango is Pakistan's national fruit, and Pakistan is one of the world's top five mango producers.",
    "Pakistan's cricket team won the 1992 World Cup, the 2009 T20 World Cup, and the 2017 ICC Champions Trophy.",
    "The Karakoram Highway, connecting Pakistan and China across the Himalayas, is the highest paved international road in the world at 4,693 metres above sea level.",
    "Pakistan has the largest deep irrigation system in the world, fed by the Indus River and its five major tributaries.",
    "Pakistan's truck art tradition is so distinctive that it has inspired international art exhibitions and a Google Doodle.",
    "Arshad Nadeem became the first Pakistani to win an individual Olympic gold medal at the 2024 Paris Olympics, setting a new Olympic record in javelin.",
    "The city of Taxila, near Islamabad, was one of the most important cities of the ancient world and home to one of the earliest universities — Takshashila.",
    "Pakistan has the sixth-largest standing army in the world and became the seventh country to test nuclear weapons in 1998.",
  ];
}
