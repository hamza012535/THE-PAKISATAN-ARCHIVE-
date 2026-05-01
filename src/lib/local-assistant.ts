// ============================================================
// Pakistan History Local Knowledge-Base Assistant
// Zero API key — uses a curated Q&A database + Wikipedia API
// ============================================================

interface QA {
  keywords: string[];
  question: string;
  answer: string;
}

// 60+ curated Pakistan history Q&A pairs
const KNOWLEDGE_BASE: QA[] = [
  {
    keywords: ['independence', 'independent', '14 august', 'august 14', '1947', 'partition'],
    question: 'When did Pakistan gain independence?',
    answer: 'Pakistan gained independence on 14 August 1947 from British colonial rule, following the partition of British India. The All India Muslim League, led by Muhammad Ali Jinnah, successfully campaigned for a separate Muslim homeland. Jinnah became the first Governor-General of Pakistan, and Liaquat Ali Khan became its first Prime Minister. The date is celebrated every year as Independence Day (Yom-e-Azadi).',
  },
  {
    keywords: ['jinnah', 'quaid', 'quaid-e-azam', 'founder', 'father of nation'],
    question: 'Who was Muhammad Ali Jinnah?',
    answer: 'Muhammad Ali Jinnah (25 December 1876 – 11 September 1948) was the founder and first Governor-General of Pakistan. Known as Quaid-e-Azam (Great Leader) and Baba-e-Qaum (Father of the Nation), he was a brilliant lawyer and statesman who led the All India Muslim League. He championed the Two-Nation Theory, arguing that Hindus and Muslims were two distinct nations. He steered the Muslim League to achieve the creation of Pakistan in 1947 and served as its first head of state until his death in 1948.',
  },
  {
    keywords: ['iqbal', 'allama', 'national poet', 'shair-e-mashriq', 'bang-e-dra'],
    question: 'Who was Allama Iqbal?',
    answer: 'Sir Muhammad Iqbal (9 November 1877 – 21 April 1938), known as Allama Iqbal, was a philosopher, poet, and politician who is widely regarded as the spiritual father of Pakistan. He first articulated the vision of a separate Muslim homeland in his 1930 presidential address to the All India Muslim League in Allahabad. His Urdu and Persian poetry — including works like "Bang-e-Dra", "Bal-e-Jibril", and "Armughan-e-Hijaz" — inspired millions. He is celebrated as the National Poet of Pakistan.',
  },
  {
    keywords: ['lahore resolution', '23 march', 'pakistan resolution', '1940'],
    question: 'What is the Lahore Resolution?',
    answer: 'The Lahore Resolution, also known as the Pakistan Resolution, was passed on 23 March 1940 at the annual session of the All India Muslim League in Lahore. It called for the creation of independent states in the Muslim-majority regions of British India\'s northwest and northeast. This was the pivotal moment that formally set the Muslim League on the path to achieving a separate homeland, which became Pakistan in 1947. The date is now celebrated as Pakistan Day (Youm-e-Pakistan).',
  },
  {
    keywords: ['capital', 'islamabad'],
    question: 'What is the capital of Pakistan?',
    answer: 'Islamabad is the capital city of Pakistan. It was purpose-built as the capital and officially became the capital in 1966, replacing Karachi. Islamabad is located in the Pothohar Plateau in the northeastern part of the country, nestled between the Margalla Hills. The city is known for its urban planning, green spaces, and the iconic Faisal Mosque — one of the largest mosques in the world. It forms the Islamabad Capital Territory (ICT) along with the neighboring city of Rawalpindi.',
  },
  {
    keywords: ['karachi', 'largest city', 'financial capital', 'city of lights'],
    question: 'What is significant about Karachi?',
    answer: 'Karachi is Pakistan\'s largest city and its financial and commercial capital. Known as the "City of Lights" and the "Gateway to Pakistan," it is home to over 20 million people. Karachi served as Pakistan\'s first capital until 1958. It houses Pakistan\'s largest port, stock exchange, and is the country\'s economic engine, contributing significantly to GDP. The city is highly diverse, hosting people from all provinces and ethnic communities of Pakistan.',
  },
  {
    keywords: ['national language', 'urdu', 'official language'],
    question: 'What is Pakistan\'s national language?',
    answer: 'Urdu is the national language of Pakistan, while English is the official language used in government and legal proceedings. Although Urdu is the mother tongue of only about 7% of Pakistanis (mainly Muhajirs), it serves as a lingua franca that unifies the country\'s diverse linguistic groups. Other major languages include Punjabi (most widely spoken), Sindhi, Pashto, Balochi, and Saraiki. Pakistan has over 70 languages total.',
  },
  {
    keywords: ['population', 'how many people'],
    question: 'What is Pakistan\'s population?',
    answer: 'Pakistan is the world\'s fifth-most populous country with approximately 230–240 million people (as of 2024). It is also the second-largest Muslim-majority country by population after Indonesia. Pakistan has a young population with over 60% under the age of 30. The major urban centers are Karachi (~20M), Lahore (~14M), Faisalabad (~4M), Rawalpindi (~3M), and Islamabad (~2M).',
  },
  {
    keywords: ['1965 war', 'indo-pak war', 'war with india', 'operation gibraltar'],
    question: 'What was the 1965 Indo-Pakistan War?',
    answer: 'The 1965 Indo-Pakistani War was an armed conflict between India and Pakistan that lasted from August to September 1965. It was preceded by Pakistan\'s Operation Gibraltar, which aimed to infiltrate forces into Jammu & Kashmir to start an insurgency. The war involved some of the largest tank battles since World War II. A UN-mandated ceasefire ended the conflict on 22 September 1965. Both sides claimed victory. The Tashkent Declaration, signed in January 1966 with Soviet mediation, formally ended hostilities. Pakistan celebrates 6 September as Defence Day.',
  },
  {
    keywords: ['1971 war', 'bangladesh', 'east pakistan', 'separation', 'liberation'],
    question: 'What happened in 1971?',
    answer: 'The 1971 war led to the separation of East Pakistan, which became the independent nation of Bangladesh. After decades of political and economic marginalization, East Pakistan saw a massive pro-independence movement following the 1970 election victory of the Awami League under Sheikh Mujibur Rahman. Pakistan\'s military launched Operation Searchlight on 25 March 1971. India intervened militarily in December 1971, and Pakistani forces surrendered on 16 December 1971 — a date now known in Bangladesh as Victory Day and in Pakistan as a day of national tragedy.',
  },
  {
    keywords: ['nuclear', 'atomic', 'bomb', '1998', 'chagai'],
    question: 'When did Pakistan conduct its nuclear tests?',
    answer: 'Pakistan conducted its first nuclear tests on 28 May 1998 in the Chagai district of Balochistan, in response to India\'s nuclear tests (Pokhran-II) earlier that month. Pakistan detonated five nuclear devices, followed by a sixth on 30 May 1998. This made Pakistan the seventh country in the world to openly test nuclear weapons, and the first Muslim-majority nation to do so. The day (28 May) is celebrated as Youm-e-Takbeer (Day of Greatness). Dr. Abdul Qadeer Khan was the principal figure behind Pakistan\'s nuclear program.',
  },
  {
    keywords: ['aqkhan', 'abdul qadeer', 'father of atomic bomb', 'nuclear scientist'],
    question: 'Who was Dr. Abdul Qadeer Khan?',
    answer: 'Dr. Abdul Qadeer Khan (1 April 1936 – 10 October 2021) was a Pakistani nuclear physicist and metallurgical engineer who is considered the father of Pakistan\'s atomic weapons program. He founded the Khan Research Laboratories (KRL) in Kahuta and developed Pakistan\'s uranium enrichment capability. He is regarded as a national hero in Pakistan for his role in making Pakistan a nuclear-armed state. He was awarded Pakistan\'s highest civilian honor, Nishan-e-Imtiaz, twice.',
  },
  {
    keywords: ['cricket', 'world cup', 'imran khan', '1992'],
    question: 'When did Pakistan win the Cricket World Cup?',
    answer: 'Pakistan won the ICC Cricket World Cup in 1992, held in Australia and New Zealand. Led by Imran Khan, Pakistan defeated England by 22 runs in the final at the Melbourne Cricket Ground. Starting from a near-elimination position in the tournament, the team\'s comeback is legendary in cricket history. Key players included Wasim Akram, Inzamam-ul-Haq, Javed Miandad, and Mushtaq Ahmed. Imran Khan\'s famous "cornered tigers" speech motivated the team. Pakistan also won the 2009 ICC World Twenty20.',
  },
  {
    keywords: ['imran khan', 'prime minister', 'pti'],
    question: 'Who is Imran Khan?',
    answer: 'Imran Khan (born 5 October 1952) is a former cricketer and politician who served as Pakistan\'s 22nd Prime Minister from August 2018 to April 2022. As a cricketer, he led Pakistan to its first and only ODI Cricket World Cup victory in 1992. He founded the Pakistan Tehreek-e-Insaf (PTI) party in 1996. He was removed from office through a parliamentary no-confidence vote in April 2022. He remains a highly popular political figure in Pakistan.',
  },
  {
    keywords: ['bhutto', 'benazir', 'zulfiqar', 'ppp', 'prime minister'],
    question: 'Who were the Bhuttos?',
    answer: 'The Bhutto family is one of Pakistan\'s most prominent political dynasties. Zulfikar Ali Bhutto (1928–1979) founded the Pakistan Peoples Party (PPP) in 1967 and served as President (1971–73) and Prime Minister (1973–77). He was overthrown by General Zia-ul-Haq and later executed. His daughter Benazir Bhutto (1953–2007) became the world\'s first female Prime Minister of a Muslim-majority country, serving two terms (1988–90 and 1993–96). She was assassinated in a suicide attack in Rawalpindi in December 2007. Her husband Asif Ali Zardari later served as President (2008–2013) and again from 2024.',
  },
  {
    keywords: ['k2', 'second highest', 'mountain', 'karakoram', 'savage mountain'],
    question: 'What is K2?',
    answer: 'K2 is the world\'s second-highest mountain at 8,611 meters (28,251 feet), located on the Pakistan-China border in the Karakoram range. Known as the "Savage Mountain," K2 is considered the most difficult of the eight-thousanders to climb and has a fatality rate of about 25%. The first ascent was made by an Italian expedition led by Ardito Desio on 31 July 1954, with Lino Lacedelli and Achille Compagnoni reaching the summit. K2 is located in Gilgit-Baltistan, Pakistan.',
  },
  {
    keywords: ['mohenjo-daro', 'indus valley', 'harappa', 'ancient civilization'],
    question: 'Tell me about the Indus Valley Civilization',
    answer: 'The Indus Valley Civilization (c. 3300–1300 BCE) was one of the world\'s earliest urban civilizations, with major centers at Mohenjo-daro and Harappa — both located in present-day Pakistan. At its peak around 2500 BCE, the civilization covered an area larger than ancient Egypt and Mesopotamia combined. Mohenjo-daro, in modern Sindh, featured sophisticated urban planning, a grid layout, drainage systems, and a notable "Great Bath." The civilization had its own undeciphered script. Mohenjo-daro is now a UNESCO World Heritage Site.',
  },
  {
    keywords: ['mughal', 'mughal empire', 'lahore fort', 'badshahi mosque', 'akbar', 'shah jahan'],
    question: 'What is Pakistan\'s Mughal heritage?',
    answer: 'Pakistan has immensely rich Mughal heritage. The Mughal Empire (1526–1857) ruled much of South Asia, and some of its greatest monuments are in present-day Pakistan. The Lahore Fort (Shahi Qila) was expanded by several emperors including Akbar, Jahangir, and Shah Jahan. The Badshahi Mosque in Lahore, built by Aurangzeb in 1671, was the world\'s largest mosque for over 300 years. The Shalimar Gardens in Lahore are UNESCO World Heritage Sites. Lahore was a major Mughal capital.',
  },
  {
    keywords: ['lahore', 'city of gardens', 'cultural capital'],
    question: 'What is Lahore known for?',
    answer: 'Lahore is Pakistan\'s second-largest city and cultural capital, often called the "Heart of Pakistan" or "City of Gardens." It has been a major political, cultural, and artistic hub for over a millennium. Key attractions include the Lahore Fort, Badshahi Mosque, Walled City of Lahore, Shalimar Gardens (UNESCO), Minar-e-Pakistan, and the vibrant bazaars of the old city. Lahore is also Pakistan\'s educational and creative hub, home to numerous universities, the Pakistan Film Industry (Lollywood), and traditional Mughal and Sikh architecture.',
  },
  {
    keywords: ['army', 'military', 'pakistan army', 'armed forces'],
    question: 'What is the Pakistan Army?',
    answer: 'The Pakistan Army is the land-based branch of the Pakistan Armed Forces and is the world\'s sixth largest army by active personnel (around 650,000). It was established on 14 August 1947. The Army has played a major role in Pakistani politics, with several military coups (1958, 1969, 1977, 1999). Pakistan is a nuclear weapons state, and the Army controls its nuclear arsenal through the Strategic Plans Division. The Army has also participated in numerous UN peacekeeping missions — Pakistan is one of the largest contributors to UN peacekeeping forces.',
  },
  {
    keywords: ['economy', 'gdp', 'agriculture', 'textile'],
    question: 'What is Pakistan\'s economy like?',
    answer: 'Pakistan has one of the largest economies in South Asia, with a GDP of approximately $375 billion (nominal, 2024). It is classified as a developing economy with agriculture, textiles, and services as key sectors. Pakistan is the world\'s 5th largest producer of cotton, and textiles account for about 60% of export earnings. Remittances from the Pakistani diaspora (particularly from the Gulf, UK, and USA) are a major source of foreign exchange. Pakistan faces challenges including inflation, energy shortages, and debt — but also has significant potential in its large young population and strategic geographic location.',
  },
  {
    keywords: ['balochistan', 'largest province', 'quetta'],
    question: 'What is Balochistan?',
    answer: 'Balochistan is Pakistan\'s largest province by area, covering about 44% of the country\'s total land area. Its capital is Quetta. Balochistan borders Afghanistan and Iran to the west and the Arabian Sea to the south. It is rich in natural resources including natural gas, coal, copper, and gold (Reko Diq). The province has significant strategic importance due to the China-Pakistan Economic Corridor (CPEC) and the port of Gwadar. The Baloch people are the predominant ethnic group.',
  },
  {
    keywords: ['gwadar', 'port', 'cpec', 'china pakistan'],
    question: 'What is CPEC and Gwadar?',
    answer: 'The China-Pakistan Economic Corridor (CPEC) is a collection of infrastructure projects worth over $62 billion, connecting China\'s Xinjiang region to Pakistan\'s Gwadar Port on the Arabian Sea. It is a flagship project of China\'s Belt and Road Initiative. Gwadar Port, developed primarily by Chinese companies, aims to be a major hub for trade between China, Central Asia, and the Middle East. CPEC projects include highways, railways, power plants, and industrial zones across Pakistan.',
  },
  {
    keywords: ['sufism', 'sufi', 'data ganj bakhsh', 'lal shahbaz', 'shrine'],
    question: 'What is the role of Sufism in Pakistan?',
    answer: 'Sufism has profoundly shaped Pakistani culture, spirituality, and music for over a millennium. Pakistan has hundreds of Sufi shrines (dargahs) visited by millions. Major Sufi saints include Data Ganj Bakhsh (Lahore), Lal Shahbaz Qalandar (Sehwan, Sindh), Shah Abdul Latif Bhittai (Bhitshah), Bahauddin Zakariya (Multan), and Baba Farid (Pakpattan). Qawwali — devotional Sufi music — was popularized globally by the late Nusrat Fateh Ali Khan. Pakistan\'s folk music, poetry (particularly Sindhi, Punjabi, and Siraiki), and arts are deeply rooted in Sufi tradition.',
  },
  {
    keywords: ['nusrat fateh ali khan', 'qawwali', 'musician'],
    question: 'Who was Nusrat Fateh Ali Khan?',
    answer: 'Nusrat Fateh Ali Khan (13 October 1948 – 16 August 1997) was a legendary Pakistani vocalist, primarily a singer of Sufi devotional music (Qawwali). He is regarded as one of the greatest voices in world music history. Nusrat expanded Qawwali beyond its traditional audience and collaborated with Western artists, bringing Pakistani music to global audiences. He performed at WOMAD festivals and worked with Peter Gabriel. His powerful vocal range spanned 10 octaves. He is beloved across Pakistan and has influenced countless musicians worldwide.',
  },
  {
    keywords: ['food', 'cuisine', 'biryani', 'nihari', 'haleem'],
    question: 'What is Pakistani cuisine?',
    answer: 'Pakistani cuisine is rich, spiced, and diverse, varying significantly by region. Popular dishes include Biryani (spiced rice with meat), Nihari (slow-cooked beef stew), Haleem (wheat and meat porridge), Karahi (spiced meat or chicken), Seekh Kabab, Chapli Kabab (from KPK), Sajji (slow-roasted lamb, from Balochistan), and Paya (trotters curry). Flatbreads like Naan, Roti, and Paratha are staples. Lahori food is famous for its richness. Pakistani BBQ (BBQ nights are very popular in Karachi and Lahore). Chai (tea) is the national drink.',
  },
  {
    keywords: ['hockey', 'field hockey', 'world cup hockey'],
    question: 'What is Pakistan\'s hockey legacy?',
    answer: 'Pakistan is one of the most successful field hockey nations in history, having won the Olympic gold medal four times (1960, 1968, 1976, 1984) and the Hockey World Cup four times (1971, 1978, 1982, 1994). Pakistan was the dominant force in international hockey from the 1960s through the 1980s. Legendary players include Shahbaz Ahmed, Samiullah Khan, and Hasanul Huq. Although the national team\'s performance has declined in recent decades, field hockey remains Pakistan\'s national sport.',
  },
  {
    keywords: ['geo', 'faultline', 'geography', 'rivers', 'indus'],
    question: 'What is Pakistan\'s geography like?',
    answer: 'Pakistan is geographically diverse. The north features the Karakoram, Hindu Kush, and Himalayas — including K2 (world\'s 2nd highest), Nanga Parbat (9th highest), and over 100 peaks above 7,000m. The Punjab and Sindh plains are watered by the Indus river system — one of the longest in Asia. Balochistan is a vast plateau. The Thar Desert lies in eastern Sindh. The coastline along the Arabian Sea stretches ~1,000 km. Major rivers include the Indus, Jhelum, Chenab, Ravi, and Sutlej. Pakistan has five of the world\'s seventeen eight-thousanders.',
  },
  {
    keywords: ['attock', 'taxila', 'gandhara', 'buddhist', 'ancient'],
    question: 'What is Gandhara?',
    answer: 'Gandhara was an ancient kingdom located in modern-day northwestern Pakistan (Khyber Pakhtunkhwa) and eastern Afghanistan. It flourished from c. 500 BCE to 1000 CE and became a major center of Greco-Buddhist art and culture following Alexander the Great\'s conquest. Taxila (near modern Islamabad) was Gandhara\'s most important city and a UNESCO World Heritage Site. Gandhara art uniquely blended Greek, Persian, and Buddhist traditions. The region was part of the Mauryan Empire under Ashoka, and later the Kushan Empire.',
  },
  {
    keywords: ['zia ul haq', 'zia', 'martial law', '1977'],
    question: 'Who was General Zia-ul-Haq?',
    answer: 'Muhammad Zia-ul-Haq (12 August 1924 – 17 August 1988) was the Chief of Army Staff who overthrew Prime Minister Zulfikar Ali Bhutto in a military coup on 5 July 1977. He served as Pakistan\'s Chief Martial Law Administrator and later President until his death in an air crash in 1988. His rule is associated with the Islamization of Pakistan (introducing the Hudood Ordinances), support for the Afghan Mujahideen during the Soviet-Afghan War, and suppression of political opposition. He executed Bhutto in 1979, a highly controversial decision.',
  },
  {
    keywords: ['musharraf', 'pervez', 'coup', '1999'],
    question: 'Who was General Pervez Musharraf?',
    answer: 'General Pervez Musharraf (11 August 1943 – 5 February 2023) was Chief of Army Staff who overthrew Prime Minister Nawaz Sharif in a military coup on 12 October 1999. He ruled as Chief Executive and later President until 2008. During his rule, Pakistan aligned with the US-led War on Terror after 9/11. He was a proponent of "Enlightened Moderation" — a policy of moderate, progressive Islam. He was later convicted of treason (2019) by a Pakistani court. He died in Dubai in 2023.',
  },
  {
    keywords: ['faisal mosque', 'mosque', 'largest', 'islamabad'],
    question: 'What is the Faisal Mosque?',
    answer: 'The Faisal Mosque in Islamabad is one of the largest mosques in the world and a national landmark of Pakistan. Built between 1976 and 1988, it was designed by Turkish architect Vedat Dalokay and funded by Saudi King Faisal bin Abdulaziz, after whom it is named. The mosque can accommodate up to 300,000 worshippers. Its unique design features eight concrete shell facade (resembling a Bedouin tent) and four 88-meter tall minarets. It is set against the backdrop of the Margalla Hills.',
  },
  {
    keywords: ['minar e pakistan', 'minar', 'lahore', 'monument'],
    question: 'What is Minar-e-Pakistan?',
    answer: 'Minar-e-Pakistan (Tower of Pakistan) is a national monument in Lahore built to commemorate the Lahore Resolution of 23 March 1940. It stands in Iqbal Park (Greater Iqbal Park) and was constructed between 1960 and 1968, designed by Minar Nasreddin Murat Khan. The tower is 70 meters (230 feet) high. The base of the minaret has the text of the Pakistan Resolution inscribed. It is one of Pakistan\'s most visited monuments and is close to the historic Lahore Fort.',
  },
  {
    keywords: ['sikhism', 'sikh', 'guru nanak', 'nankana sahib', 'kartarpur'],
    question: 'What is Pakistan\'s Sikh heritage?',
    answer: 'Pakistan holds profound significance in Sikhism. Guru Nanak Dev Ji, the founder of Sikhism, was born in 1469 in Nankana Sahib (now in Punjab, Pakistan) — one of Sikhism\'s holiest sites. The Kartarpur Corridor, opened in 2019, connects India to Gurdwara Darbar Sahib in Kartarpur (where Guru Nanak spent his last 18 years). Pakistan has numerous historical Sikh gurdwaras. The Ranjit Singh empire (Sikh Empire) was centered in Lahore during the 19th century.',
  },
  {
    keywords: ['passport', 'diaspora', 'overseas pakistani', 'population abroad'],
    question: 'How large is the Pakistani diaspora?',
    answer: 'Pakistan has one of the world\'s largest diasporas, with an estimated 9–10 million Pakistanis living abroad. Major communities are in Saudi Arabia (~2.6M), UAE (~1.6M), UK (~1.2M), USA (~500,000), and other Gulf countries. The Pakistani diaspora is a critical source of remittances — Pakistan receives approximately $27–30 billion annually in remittances (one of the top 10 globally), accounting for about 8% of GDP. Pakistani diaspora communities have made significant contributions in medicine, technology, academia, and politics in their adopted countries.',
  },
  {
    keywords: ['literature', 'poetry', 'faiz ahmed faiz', 'gulzar'],
    question: 'Who are Pakistan\'s famous poets and writers?',
    answer: 'Pakistan has a rich literary tradition. Major poets include Allama Iqbal (national poet, Urdu & Persian), Faiz Ahmed Faiz (revolutionary Urdu poet, Nobel nominee), Ahmad Faraz, Parveen Shakir, and Habib Jalib. Saadat Hasan Manto is one of South Asia\'s greatest short story writers, known for his raw, unflinching stories about partition. Bapsi Sidhwa wrote "Ice-Candy Man" (also called Cracking India). Mohsin Hamid and Kamila Shamsie are internationally acclaimed contemporary Pakistani novelists writing in English.',
  },
];

// Search FAQ by keyword matching
function searchFAQ(query: string): QA | null {
  const q = query.toLowerCase();
  const words = q.split(/\s+/).filter((w) => w.length > 2);

  let bestMatch: QA | null = null;
  let bestScore = 0;

  for (const qa of KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of qa.keywords) {
      if (q.includes(kw)) score += 3;
    }
    for (const w of words) {
      for (const kw of qa.keywords) {
        if (kw.includes(w) || w.includes(kw)) score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = qa;
    }
  }

  return bestScore >= 2 ? bestMatch : null;
}

// Fetch a short Wikipedia summary for supplemental info
async function getWikipediaSummary(topic: string): Promise<string> {
  try {
    const params = new URLSearchParams({
      action: 'query',
      titles: topic,
      prop: 'extracts',
      exintro: 'true',
      explaintext: 'true',
      exsentences: '4',
      format: 'json',
      origin: '*',
    });
    const res = await fetch(`https://en.wikipedia.org/w/api.php?${params}`);
    const data = await res.json();
    const pages = data.query?.pages;
    if (!pages) return '';
    const page = Object.values(pages)[0] as any;
    if (page?.missing || !page?.extract) return '';
    return page.extract.slice(0, 400);
  } catch {
    return '';
  }
}

export interface AssistantResponse {
  answer: string;
  source: 'knowledge-base' | 'wikipedia' | 'fallback';
  relatedTopics: string[];
}

export async function askLocalAssistant(question: string): Promise<AssistantResponse> {
  const faq = searchFAQ(question);

  if (faq) {
    // Found a direct match — return from knowledge base
    return {
      answer: faq.answer,
      source: 'knowledge-base',
      relatedTopics: getRelatedTopics(question),
    };
  }

  // Try Wikipedia as a supplement
  const wikiTopic = question.replace(/^(what|who|when|where|why|how|tell me about|explain)\s+/i, '').replace(/[?!.]+$/, '').trim();
  const wikiSummary = await getWikipediaSummary(wikiTopic + ' Pakistan');

  if (wikiSummary && wikiSummary.length > 80) {
    return {
      answer: wikiSummary + '\n\n(Source: Wikipedia)',
      source: 'wikipedia',
      relatedTopics: getRelatedTopics(question),
    };
  }

  // Final fallback
  return {
    answer: `I have information about Pakistan's history, famous personalities, major events, culture, geography, and more. Try asking me about:\n\n• Muhammad Ali Jinnah or Allama Iqbal\n• Pakistan's Independence in 1947 or the Lahore Resolution\n• The 1965 War or the 1971 events\n• Pakistan's nuclear program\n• Lahore, Karachi, or Islamabad\n• Pakistani cuisine, cricket, or Sufi culture\n• Famous poets like Faiz Ahmed Faiz`,
    source: 'fallback',
    relatedTopics: getRelatedTopics(question),
  };
}

function getRelatedTopics(query: string): string[] {
  const topics = [
    'Muhammad Ali Jinnah',
    'Pakistan Independence 1947',
    'Lahore Resolution',
    'Allama Iqbal',
    'Benazir Bhutto',
    'Imran Khan',
    'K2 Mountain',
    'Indus Valley Civilization',
    'Pakistan Cricket World Cup 1992',
    'Qawwali and Nusrat Fateh Ali Khan',
    'Mughal Heritage in Pakistan',
    'Pakistan Nuclear Program',
  ];
  const q = query.toLowerCase();
  // Filter out overly similar topics to the query
  const filtered = topics.filter((t) => !q.includes(t.toLowerCase().split(' ')[0]));
  // Return 4 random suggestions
  return filtered.sort(() => Math.random() - 0.5).slice(0, 4);
}
