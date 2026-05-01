import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getRelatedArticles,
  getFamousPersonalities,
  getArticlesByCategory,
} from "@/lib/content";
import { getArticleSummary } from "@/lib/wikipedia";

// Render on-demand so Wikipedia is fetched per-request, not 63× at build.
export const dynamic = "force-dynamic";

interface PersonPageProps {
  params: { slug: string };
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPREHENSIVE PEOPLE DATABASE
// ─────────────────────────────────────────────────────────────────────────────
const peopleData: Record<
  string,
  {
    name: string;
    role: string;
    birthDate?: string;
    deathDate?: string;
    nationality: string;
    province?: string;
    bio: string;
    image?: string;
    achievements: string[];
    relatedTopics?: string[];
    wikiTitle?: string;
  }
> = {
  "muhammad-ali-jinnah": {
    name: "Muhammad Ali Jinnah",
    role: "Founder of Pakistan · First Governor-General",
    birthDate: "December 25, 1876",
    deathDate: "September 11, 1948",
    nationality: "Pakistani",
    province: "Sindh",
    image: "/media/personalities/muhammad-ali-jinnah.jpg",
    bio: "Muhammad Ali Jinnah, known as Quaid-e-Azam (Great Leader), was a lawyer, politician, and the founder of Pakistan. He served as the first Governor-General from independence until his death. A brilliant orator and negotiator, Jinnah led the All-India Muslim League in the campaign for a separate Muslim state and presided over the historic partition of British India. He envisioned Pakistan as a democratic, plural state with equal rights for all citizens regardless of religion.",
    achievements: [
      "Led the All-India Muslim League as President (1913–1948)",
      "Negotiated the Lahore Resolution of 1940",
      "Secured Pakistan's independence on 14 August 1947",
      "First Governor-General of Pakistan",
      'Known as "Quaid-e-Azam" — Great Leader',
      "Declared Father of the Nation (Baba-e-Qaum)",
    ],
    relatedTopics: [
      "partition-of-india",
      "lahore-resolution-1940",
      "allama-iqbal",
    ],
    wikiTitle: "Muhammad Ali Jinnah",
  },
  "allama-iqbal": {
    name: "Allama Iqbal",
    role: "Poet, Philosopher & Visionary",
    birthDate: "November 9, 1877",
    deathDate: "April 21, 1938",
    nationality: "Pakistani",
    province: "Punjab",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Muhammad_Iqbal.jpg/800px-Muhammad_Iqbal.jpg",
    bio: 'Sir Muhammad Iqbal, widely known as Allama Iqbal or "Shair-e-Mashriq" (Poet of the East), was a philosopher, poet, and politician. He is regarded as the spiritual father of Pakistan. His 1930 Allahabad Address first articulated the concept of a separate Muslim state in northwestern India. His poetry in Urdu and Persian — including masterworks like Shikwa, Jawab-e-Shikwa, and Bang-e-Dra — continues to inspire millions.',
    achievements: [
      "Delivered the landmark Allahabad Address (1930) envisioning Pakistan",
      "Author of iconic poems: Shikwa, Jawab-e-Shikwa, Lab pe aati hai dua",
      "Knighted by King George V in 1922",
      'Published philosophical works including "The Reconstruction of Religious Thought in Islam"',
      "National Poet of Pakistan",
    ],
    relatedTopics: ["history-of-pakistan", "lahore-resolution-1940"],
    wikiTitle: "Muhammad Iqbal",
  },
  "benazir-bhutto": {
    name: "Benazir Bhutto",
    role: "Prime Minister of Pakistan (1988–90, 1993–96)",
    birthDate: "June 21, 1953",
    deathDate: "December 27, 2007",
    nationality: "Pakistani",
    province: "Sindh",
    bio: "Benazir Bhutto was a Pakistani stateswoman who served as Prime Minister of Pakistan twice — from 1988 to 1990 and 1993 to 1996 — making her the first woman to head a democratically elected government in a Muslim-majority state. Daughter of Pakistan's first elected PM Zulfikar Ali Bhutto, she led the Pakistan Peoples Party and championed democracy against military interference. She was assassinated in Rawalpindi on December 27, 2007, shortly after returning from exile.",
    achievements: [
      "First female Prime Minister in Pakistani and Muslim world history (1988)",
      "Chairperson of Pakistan Peoples Party",
      "Educated at Harvard Radcliffe and Oxford (PPP President)",
      "Received the Bruno Kreisky Award for Human Rights (1988)",
      "Named one of the world's most powerful women multiple times",
    ],
    relatedTopics: ["pakistan-peoples-party", "pakistani-general-elections"],
    wikiTitle: "Benazir Bhutto",
  },
  "imran-khan": {
    name: "Imran Khan",
    role: "Cricketer & 22nd Prime Minister of Pakistan",
    birthDate: "October 5, 1952",
    nationality: "Pakistani",
    province: "Khyber Pakhtunkhwa",
    bio: "Imran Khan is a Pakistani former cricketer and politician who served as the 22nd Prime Minister of Pakistan from August 2018 to April 2022. On the cricket field, he captained Pakistan to its only Cricket World Cup title in 1992 and was one of the finest all-rounders of his generation. In politics, he founded Pakistan Tehreek-e-Insaf (PTI) in 1996 and became known for his anti-corruption stance.",
    achievements: [
      "Captained Pakistan to 1992 Cricket World Cup victory",
      "Scored 3,807 Test runs and took 362 Test wickets",
      "Founded Pakistan Tehreek-e-Insaf (PTI) in 1996",
      "Founded Shaukat Khanum Memorial Cancer Hospital & Research Centre (1994)",
      "Served as Prime Minister of Pakistan (2018–2022)",
      "Namal University founder (2008)",
    ],
    relatedTopics: ["pakistan-world-cup-1992", "pti-pakistan"],
    wikiTitle: "Imran Khan",
  },
  "pervez-musharraf": {
    name: "General Pervez Musharraf",
    role: "President of Pakistan (2001–2008)",
    birthDate: "August 11, 1943",
    deathDate: "February 5, 2023",
    nationality: "Pakistani",
    province: "Punjab",
    bio: "Pervez Musharraf was a Pakistani military officer who served as the 10th President of Pakistan from 2001 to 2008. He came to power through a military coup in October 1999, overthrowing Prime Minister Nawaz Sharif. His tenure saw Pakistan align with the US in the War on Terror post-9/11, rapid economic growth, and controversial crackdowns on political and judicial independence.",
    achievements: [
      "Led Pakistan's response to 9/11 as a key US ally",
      "Oversaw strong GDP growth (averaging ~7%) in the early 2000s",
      "Implemented the Local Government Ordinance devolution plan",
      "Presided over increased media freedom and private TV channels",
      "Signed ceasefire agreement in Waziristan tribal regions (2006)",
    ],
    relatedTopics: ["pakistani-military-coups", "kargil-war-1999"],
    wikiTitle: "Pervez Musharraf",
  },
  // ── New expanded entries ────────────────────────────────────────────────────
  "fatima-jinnah": {
    name: "Fatima Jinnah",
    role: "Stateswoman · Madar-e-Millat",
    birthDate: "July 31, 1893",
    deathDate: "July 9, 1967",
    nationality: "Pakistani",
    province: "Sindh",
    image: "/media/personalities/fatima-jinnah.jpg",
    bio: "Fatima Jinnah, known as Madar-e-Millat (Mother of the Nation), was a Pakistani dental surgeon, biographer, and stateswoman. She was the younger sister of Muhammad Ali Jinnah and one of the founding members of Pakistan. She played a crucial role in the Pakistan Movement and later led democratic opposition against military rule by Ayub Khan in the 1965 presidential election.",
    achievements: [
      "Key figure in the Pakistan Independence Movement",
      "Founded the All Pakistan Women's Association (APWA)",
      "Ran for President against Ayub Khan (1964)",
      'Authored biography of Jinnah: "My Brother"',
      'Declared "Madar-e-Millat" — Mother of the Nation',
    ],
    wikiTitle: "Fatima Jinnah",
  },
  "abdus-salam": {
    name: "Dr. Abdus Salam",
    role: "Nobel Laureate in Physics",
    birthDate: "January 29, 1926",
    deathDate: "November 21, 1996",
    nationality: "Pakistani",
    province: "Punjab",
    image: "/media/personalities/abdus-salam.jpg",
    bio: "Abdus Salam was a Pakistani theoretical physicist who shared the 1979 Nobel Prize in Physics with Sheldon Glashow and Steven Weinberg for their work in electroweak unification theory. Born in Sahiwal, Punjab, he was the first Pakistani and first Muslim to win a Nobel Prize in science. He founded the International Centre for Theoretical Physics (ICTP) in Trieste, Italy.",
    achievements: [
      "Nobel Prize in Physics 1979 (electroweak theory)",
      "Founded ICTP in Trieste (1964)",
      "First Pakistani Nobel laureate",
      "Pakistan's first Chief Scientific Adviser (1961–74)",
      "Fellow of the Royal Society, London",
    ],
    wikiTitle: "Abdus Salam",
  },
  "nusrat-fateh-ali-khan-bio": {
    name: "Nusrat Fateh Ali Khan",
    role: "Qawwali Legend · Voice of the Divine",
    birthDate: "October 13, 1948",
    deathDate: "August 16, 1997",
    nationality: "Pakistani",
    province: "Punjab",
    image: "/media/personalities/nusrat-fateh-ali-khan.jpg",
    bio: 'Ustad Nusrat Fateh Ali Khan was a Pakistani vocalist, primarily a singer of Sufi devotional music known as Qawwali. Widely considered the greatest Qawwali singer in history, he popularized the art form internationally through collaborations with world musicians. His voice — with a vocal range spanning 10 octaves — was a phenomenon. He worked with Peter Gabriel, Eddie Vedder, and performed at WOMAD festivals worldwide. Rolling Stone called him "the greatest voice ever recorded."',
    achievements: [
      "Introduced Qawwali to Western audiences",
      'Collaborated with Peter Gabriel on "Last Temptation of Christ" soundtrack',
      "Featured in Merchant Ivory films",
      "UNESCO Artist for Peace nominee",
      "Pakistani Pride of Performance Award",
      "Over 125 albums released",
    ],
    wikiTitle: "Nusrat Fateh Ali Khan",
  },
  "wasim-akram-bio": {
    name: "Wasim Akram",
    role: "Cricket Legend · Sultan of Swing",
    birthDate: "June 3, 1966",
    nationality: "Pakistani",
    province: "Punjab",
    image: "/media/personalities/wasim-akram.jpg",
    bio: "Wasim Akram is widely regarded as the greatest left-arm fast bowler in the history of cricket. Born in Lahore, he made his Test debut at the age of 18. Known for his mastery of swing bowling — both conventional and reverse swing — he was virtually unplayable in his prime. He took 414 Test wickets and 502 ODI wickets, becoming the first bowler to take 500 ODI wickets. A key member of the 1992 World Cup winning team.",
    achievements: [
      "414 Test wickets, 502 ODI wickets",
      "First bowler to take 500 ODI wickets",
      "1992 Cricket World Cup winner and Man of the Match in Final",
      "Wisden Cricketer of the Year 1993",
      "Pakistan's Pride of Performance Award",
    ],
    wikiTitle: "Wasim Akram",
  },
  "jahangir-khan": {
    name: "Jahangir Khan",
    role: "Squash World Champion",
    birthDate: "December 10, 1963",
    nationality: "Pakistani",
    province: "Khyber Pakhtunkhwa",
    image: "/media/personalities/jahangir-khan.jpg",
    bio: "Jahangir Khan is considered the greatest squash player of all time. He remained unbeaten for 555 consecutive matches between 1981 and 1986 — the longest winning streak by any player in any major sport. He won the World Open squash championship 6 times and the British Open 10 consecutive times. Born into a squash family in Peshawar, he dominated the sport for over a decade.",
    achievements: [
      "555 consecutive match wins — world record in any sport",
      "World Open champion 6 times",
      "British Open champion 10 times",
      "Unbeaten from 1981 to 1986",
      "International Olympic Committee Award",
    ],
    wikiTitle: "Jahangir Khan (squash player)",
  },
  "faiz-ahmed-faiz-bio": {
    name: "Faiz Ahmed Faiz",
    role: "Revolutionary Poet · Nobel Nominee",
    birthDate: "February 13, 1911",
    deathDate: "November 20, 1984",
    nationality: "Pakistani",
    province: "Punjab",
    image: "/media/personalities/faiz-ahmed-faiz.jpg",
    bio: 'Faiz Ahmed Faiz was one of the most celebrated Urdu poets of the 20th century. A progressive intellectual and humanist, he blended the classical Urdu ghazal tradition with revolutionary politics and profound human emotion. His poems like "Hum Dekhenge," "Mujhse Pehli Si Mohabbat," and "Subh-e-Azadi" remain anthems of resistance. He was imprisoned multiple times for political activity and lived in exile. He received the Lenin Peace Prize in 1962.',
    achievements: [
      "Lenin Peace Prize 1962",
      "Nishan-e-Imtiaz — Pakistan's highest civil honor",
      "Nominated for Nobel Prize in Literature",
      "Editor of Pakistan Times",
      "One of the best-selling Urdu poets of all time",
    ],
    wikiTitle: "Faiz Ahmed Faiz",
  },
  "nawaz-sharif": {
    name: "Nawaz Sharif",
    role: "Three-time Prime Minister of Pakistan",
    birthDate: "December 25, 1949",
    nationality: "Pakistani",
    province: "Punjab",
    image: "/media/personalities/nawaz-sharif.jpg",
    bio: "Mian Muhammad Nawaz Sharif is one of the most significant figures in Pakistan's political history, having served as Prime Minister three times (1990-93, 1997-99, 2013-17). Leader of Pakistan Muslim League-N, he is associated with major infrastructure development including the Motorway network and the Lahore Metro. During his 1998 tenure, Pakistan conducted nuclear tests.",
    achievements: [
      "Three-time Prime Minister of Pakistan",
      "Authorized Pakistan's nuclear tests in 1998",
      "Built Pakistan's Motorway network",
      "Led Pakistan Muslim League-N as President",
      "Elected for 4th time as PM in 2024",
    ],
    wikiTitle: "Nawaz Sharif",
  },
  "shahid-afridi": {
    name: "Shahid Afridi",
    role: "Cricketer · Boom Boom Afridi",
    birthDate: "March 1, 1980",
    nationality: "Pakistani",
    province: "Khyber Pakhtunkhwa",
    image: "/media/personalities/shahid-afridi.jpg",
    bio: 'Shahid Khan Afridi is one of the most explosive cricketers Pakistan has ever produced. Known as "Boom Boom" for his aggressive batting, he set a world record for the fastest ODI century in 1996 (later broken). A dangerous leg-spin bowler, he took 395 ODI wickets and scored 8,064 ODI runs. He captained Pakistan to the 2009 ICC World T20 title.',
    achievements: [
      "Former world record: fastest ODI century (37 balls, 1996)",
      "395 ODI wickets, 8,064 ODI runs",
      "ICC World T20 2009 champion",
      "Appeared in 398 ODIs — most in history at time of retirement",
      "Shahid Afridi Foundation — serves millions in KPK",
    ],
    wikiTitle: "Shahid Afridi",
  },
  "babar-azam": {
    name: "Babar Azam",
    role: "Pakistan Cricket Captain",
    birthDate: "October 15, 1994",
    nationality: "Pakistani",
    province: "Punjab",
    image: "/media/personalities/babar-azam.jpg",
    bio: "Babar Azam is Pakistan's premier batsman and one of the finest batsmen in the world today. He reached the number one ranking in both ODI and T20I cricket simultaneously. Known for his elegant strokeplay and consistency across all formats, he has scored thousands of international runs and served as Pakistan's captain across all formats.",
    achievements: [
      "Ranked No. 1 ODI & T20I batsman simultaneously",
      "Fastest Pakistani to 1000, 2000, 3000, 4000 ODI runs",
      "Multiple ICC Cricketer of the Year nominations",
      "Pakistan Cricket Board Player of the Year",
      "Set numerous Pakistan batting records",
    ],
    wikiTitle: "Babar Azam",
  },
  "shoaib-akhtar": {
    name: "Shoaib Akhtar",
    role: "Rawalpindi Express · Fastest Bowler in History",
    birthDate: "August 13, 1975",
    nationality: "Pakistani",
    province: "Punjab",
    image: "/media/personalities/shoaib-akhtar.jpg",
    bio: 'Shoaib Akhtar, nicknamed the "Rawalpindi Express," is the fastest bowler in the history of cricket. In February 2003, he became the first bowler to be recorded bowling at over 100 miles per hour (161.3 km/h). He played 46 Tests and 163 ODIs for Pakistan, taking 178 and 247 wickets respectively.',
    achievements: [
      "Fastest delivery in cricket history: 161.3 km/h (100.2 mph)",
      "178 Test wickets and 247 ODI wickets",
      "Player of the Series in multiple series",
      "ICC World Cup appearances (1999, 2003, 2007)",
      "Pride of Performance Award, Pakistan",
    ],
    wikiTitle: "Shoaib Akhtar",
  },
  "malala-yousafzai": {
    name: "Malala Yousafzai",
    role: "Nobel Peace Laureate",
    birthDate: "July 12, 1997",
    nationality: "Pakistani",
    province: "Khyber Pakhtunkhwa",
    image: "/media/personalities/malala-yousafzai.jpg",
    bio: "Malala Yousafzai is a Pakistani activist for female education and the youngest Nobel Prize laureate. Born in Mingora, Swat, she spoke out publicly against Taliban restrictions on girls' education from a young age. On October 9, 2012, she was shot in the head by a Taliban gunman while riding a school bus. She survived and became a global symbol of courage. In 2014 received the Nobel Peace Prize, shared with Kailash Satyarthi.",
    achievements: [
      "Nobel Peace Prize 2014 (youngest ever recipient)",
      "Malala Fund — providing education to girls worldwide",
      "Time Magazine Person of the Year 2013",
      "Oxford University graduate",
      "UN Messenger of Peace",
    ],
    wikiTitle: "Malala Yousafzai",
  },
  "zulfikar-ali-bhutto": {
    name: "Zulfikar Ali Bhutto",
    role: "President & Prime Minister · PPP Founder",
    birthDate: "January 5, 1928",
    deathDate: "April 4, 1979",
    nationality: "Pakistani",
    province: "Sindh",
    image: "/media/personalities/zulfikar-ali-bhutto.jpg",
    bio: "Zulfikar Ali Bhutto was one of the most influential and controversial leaders in Pakistan's history. A charismatic politician and lawyer trained at UC Berkeley and Oxford, he served as Foreign Minister under Ayub Khan before founding the Pakistan Peoples Party (PPP) in 1967. He led Pakistan as President after the 1971 war and introduced the 1973 constitution. He was overthrown by General Zia in 1977 and controversially hanged in 1979.",
    achievements: [
      "Founded Pakistan Peoples Party (PPP) in 1967",
      "President of Pakistan (1971–73)",
      "Prime Minister of Pakistan (1973–77)",
      "Introduced the 1973 Constitution of Pakistan",
      "Architect of Pakistan's nuclear program",
      "Simla Agreement (1972) with India",
    ],
    wikiTitle: "Zulfikar Ali Bhutto",
  },
  "liaquat-ali-khan": {
    name: "Liaquat Ali Khan",
    role: "First Prime Minister of Pakistan",
    birthDate: "October 1, 1895",
    deathDate: "October 16, 1951",
    nationality: "Pakistani",
    province: "Punjab",
    image: "/media/personalities/liaquat-ali-khan.jpg",
    bio: "Liaquat Ali Khan was a founding father of Pakistan and its first Prime Minister. A trusted lieutenant of Muhammad Ali Jinnah, he was instrumental in negotiating Pakistan's independence. He served as PM from 1947 until his assassination in Rawalpindi in 1951. Known as \"Quaid-e-Millat\" (Leader of the Nation), he played a crucial role in shaping Pakistan's early foreign policy.",
    achievements: [
      "First Prime Minister of Pakistan (1947–51)",
      "Quaid-e-Millat — Leader of the Nation",
      "Drafted the Objectives Resolution (1949)",
      "Led Pakistan's early foreign policy",
      "First PM to visit the United States on a state visit",
    ],
    wikiTitle: "Liaquat Ali Khan",
  },
  "abdul-sattar-edhi": {
    name: "Abdul Sattar Edhi",
    role: "Angel of Mercy · Pakistan's Greatest Humanitarian",
    birthDate: "February 28, 1928",
    deathDate: "July 8, 2016",
    nationality: "Pakistani",
    province: "Sindh",
    image: "/media/personalities/abdul-sattar-edhi.jpg",
    bio: "Abdul Sattar Edhi was the greatest humanitarian in Pakistan's history and one of the world's most remarkable philanthropists. Born in Bantva, India, he moved to Karachi after Partition with nothing. He started a small dispensary in 1951 with a 5,000 rupee grant, which grew into the Edhi Foundation — operating the world's largest volunteer ambulance service with over 1,500 ambulances.",
    achievements: [
      "Founded Edhi Foundation (1951)",
      "World's largest volunteer ambulance network (1,500+ vehicles)",
      "Operated orphanages, hospitals, shelters across Pakistan",
      "Guinness World Record for largest ambulance network",
      "Nishan-e-Imtiaz and Ramon Magsaysay Award",
    ],
    wikiTitle: "Abdul Sattar Edhi",
  },
  // ── Legacy slugs that also appear in old peopleData ────────────────────────
  "wasim-akram": {
    name: "Wasim Akram",
    role: "Cricketer · Sultan of Swing",
    birthDate: "June 3, 1966",
    nationality: "Pakistani",
    province: "Punjab",
    bio: "Wasim Akram is widely regarded as the greatest left-arm fast bowler in cricket history. Known for his deadly swing bowling and reverse swing mastery, he took 414 Test wickets and 502 ODI wickets. He was a key player in Pakistan's 1992 World Cup victory.",
    achievements: [
      "414 Test wickets — still a record for a Pakistani bowler",
      "502 ODI wickets — second most in ODI history at retirement",
      "Key player in 1992 Cricket World Cup victory",
      "Named as one of Wisden's Five Cricketers of the Century",
      "ICC Cricket Hall of Fame inductee",
    ],
    wikiTitle: "Wasim Akram",
  },
  "nusrat-fateh-ali-khan": {
    name: "Nusrat Fateh Ali Khan",
    role: "Qawwal · Voice of Allah",
    birthDate: "October 13, 1948",
    deathDate: "August 16, 1997",
    nationality: "Pakistani",
    province: "Punjab",
    bio: "Nusrat Fateh Ali Khan was the greatest exponent of qawwali — Sufi devotional music — and one of the most influential musicians of the 20th century. With a career spanning 125 albums, he brought the sounds of South Asian Sufi tradition to global audiences, collaborating with artists like Peter Gabriel and Eddie Vedder.",
    achievements: [
      "Recorded over 125 albums of qawwali and traditional music",
      "Collaborated with Peter Gabriel (WOMAD) and Eddie Vedder",
      "Awarded the Pride of Performance Award by the Government of Pakistan",
      "UNESCO Music Prize laureate (1995)",
      "Introduced qawwali to Western audiences",
    ],
    wikiTitle: "Nusrat Fateh Ali Khan",
  },
  "faiz-ahmed-faiz": {
    name: "Faiz Ahmed Faiz",
    role: "Poet · Progressive Writer",
    birthDate: "February 13, 1911",
    deathDate: "November 20, 1984",
    nationality: "Pakistani",
    province: "Punjab",
    bio: "Faiz Ahmed Faiz is one of the most celebrated Urdu poets of the 20th century. A committed Marxist and humanist, his poetry blends classical ghazal forms with political progressivism. He was imprisoned twice for his political views and went into exile. He was awarded the Lenin Peace Prize in 1962.",
    achievements: [
      "Lenin Peace Prize laureate (1962)",
      "Multiple Nobel Prize in Literature nominations",
      "Editor of The Pakistan Times and Imroze newspapers",
      "One of the 20 greatest Urdu poets of all time",
      "Author of iconic collections: Naqsh-e-Faryadi, Dast-e-Saba, Zindan Nama",
    ],
    wikiTitle: "Faiz Ahmed Faiz",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// generateStaticParams — covers both peopleData keys AND getFamousPersonalities
// ─────────────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const peopleDataSlugs = Object.keys(peopleData).map((slug) => ({ slug }));
  const personalitySlugs = getFamousPersonalities().map((p) => ({
    slug: p.slug,
  }));
  const personalityArticleSlugs = getArticlesByCategory("personalities").map(
    (a) => ({ slug: a.slug }),
  );

  // Deduplicate
  const seen = new Set<string>();
  const all = [
    ...peopleDataSlugs,
    ...personalitySlugs,
    ...personalityArticleSlugs,
  ].filter(({ slug }) => {
    if (seen.has(slug)) return false;
    seen.add(slug);
    return true;
  });

  return all;
}

export async function generateMetadata({ params }: PersonPageProps) {
  const person = peopleData[params.slug];
  const article = !person ? getArticleBySlug(params.slug) : null;
  const name = person?.name ?? article?.title ?? "Person";
  return {
    title: `${name} - Pakistan Archive`,
    description:
      person?.bio?.slice(0, 155) ||
      article?.excerpt?.slice(0, 155) ||
      "Personality profile on Pakistan Archive",
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Helper — split Wikipedia extract into paragraphs
// ─────────────────────────────────────────────────────────────────────────────
function splitIntoParagraphs(extract: string): string[] {
  return extract
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
    .slice(0, 12); // cap at 12 paragraphs for readability
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default async function PersonPage({ params }: PersonPageProps) {
  const { slug } = params;

  // ── 1. Try local peopleData first ──────────────────────────────────────────
  const localPerson = peopleData[slug];

  // ── 2. Try personalitiesArticles as fallback ───────────────────────────────
  const article = !localPerson ? getArticleBySlug(slug) : null;

  // ── 3. Also check getFamousPersonalities for image / role ──────────────────
  const famousEntry = getFamousPersonalities().find((p) => p.slug === slug);

  // ── 4. Determine the name to search Wikipedia with ────────────────────────
  const personName =
    localPerson?.wikiTitle ||
    localPerson?.name ||
    article?.title ||
    famousEntry?.name ||
    null;

  if (!localPerson && !article && !famousEntry) {
    notFound();
  }

  // ── 5. Fetch Wikipedia biography ──────────────────────────────────────────
  const wikiData = personName ? await getArticleSummary(personName) : null;

  // ── 6. Build the unified display profile ──────────────────────────────────
  const name =
    localPerson?.name || article?.title || famousEntry?.name || "Unknown";
  const role =
    localPerson?.role || famousEntry?.role || article?.category || "";
  const birthDate = localPerson?.birthDate;
  const deathDate = localPerson?.deathDate;
  const nationality = localPerson?.nationality || "Pakistani";
  const province = localPerson?.province;
  const achievements = localPerson?.achievements || [];

  // Image priority: localPerson image (could be local path or Wikimedia URL) →
  //   famousEntry image → article image → Wikipedia thumbnail
  const profileImage =
    localPerson?.image ||
    famousEntry?.image ||
    article?.image ||
    wikiData?.thumbnail?.source ||
    null;

  // Biography: use our rich local bio if available, else Wikipedia extract
  const localBio = localPerson?.bio || article?.excerpt || null;

  // Wikipedia paragraphs
  const wikiParagraphs = wikiData?.extract
    ? splitIntoParagraphs(wikiData.extract)
    : [];

  // Related articles in same category
  const relatedArticles = article
    ? getRelatedArticles(slug, 6)
    : getArticlesByCategory("personalities").slice(0, 6);

  // Other notable people for the "see also" section
  const otherPeople = getFamousPersonalities()
    .filter((p) => p.slug !== slug)
    .slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* ── Breadcrumb ──────────────────────────────────────────────────────── */}
      <nav className="text-sm text-news-gray mb-6 flex items-center flex-wrap gap-1">
        <Link href="/" className="hover:text-news-accent transition">
          Home
        </Link>
        <span className="mx-1 text-news-border">›</span>
        <Link
          href="/category/personalities"
          className="hover:text-news-accent transition"
        >
          Personalities
        </Link>
        <span className="mx-1 text-news-border">›</span>
        <span className="text-news-dark font-medium">{name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* ── Main Content ─────────────────────────────────────────────────── */}
        <div className="lg:col-span-3 min-w-0">
          {/* Profile Header */}
          <header className="border-b-2 border-news-dark pb-5 mb-6">
            <span className="category-tag">Personalities</span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-news-dark mt-3 leading-tight">
              {name}
            </h1>
            <p className="text-lg text-news-gray mt-1 italic">{role}</p>
            {(birthDate || deathDate) && (
              <p className="text-sm text-news-gray mt-2">
                {birthDate && <span>b. {birthDate}</span>}
                {birthDate && deathDate && <span className="mx-2">—</span>}
                {deathDate && <span>d. {deathDate}</span>}
              </p>
            )}
          </header>

          {/* Article body */}
          <div className="article-content bg-white border border-news-border p-6 md:p-8">
            {/* Floating profile image */}
            {profileImage && (
              <div className="lg:float-right lg:ml-8 mb-6 w-full lg:w-64 shrink-0">
                <figure className="border border-news-border bg-white shadow-sm">
                  <img
                    src={profileImage}
                    alt={name}
                    className="w-full object-cover block no-drag"
                    style={{ maxHeight: "380px", objectPosition: "top" }}
                  />
                  <figcaption className="text-xs text-news-gray px-3 py-2 border-t border-news-border bg-gray-50 italic text-center">
                    {name}
                  </figcaption>
                </figure>
              </div>
            )}

            {/* ── Biography section ──────────────────────────────────────── */}
            <h2 id="biography">Biography</h2>

            {/* Local bio as pull-quote lead */}
            {localBio && (
              <p className="text-base md:text-lg font-serif leading-relaxed mb-6 text-news-dark border-l-4 border-news-accent pl-5 bg-amber-50 py-4 pr-4 rounded-r">
                {localBio}
              </p>
            )}

            {/* Wikipedia extended paragraphs */}
            {wikiParagraphs.length > 0 && (
              <div className="space-y-1 clear-both">
                {wikiParagraphs
                  // Skip the very first paragraph if it's just a repeat of localBio
                  .filter((_, i) => !(localBio && i === 0))
                  .map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
              </div>
            )}

            {/* No bio fallback */}
            {!localBio && wikiParagraphs.length === 0 && (
              <p className="text-news-gray italic">
                Biography for this personality is being compiled. Check
                Wikipedia for more information.
              </p>
            )}

            {/* ── Personal Information table ─────────────────────────────── */}
            <h2 id="personal-info" className="clear-both">
              Personal Information
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm min-w-[300px]">
                <tbody>
                  {birthDate && (
                    <tr className="border-b border-news-border">
                      <td className="py-2.5 px-3 font-semibold w-1/3 text-news-gray bg-gray-50">
                        Born
                      </td>
                      <td className="py-2.5 px-3">{birthDate}</td>
                    </tr>
                  )}
                  {deathDate && (
                    <tr className="border-b border-news-border">
                      <td className="py-2.5 px-3 font-semibold text-news-gray bg-gray-50">
                        Died
                      </td>
                      <td className="py-2.5 px-3">{deathDate}</td>
                    </tr>
                  )}
                  <tr className="border-b border-news-border">
                    <td className="py-2.5 px-3 font-semibold text-news-gray bg-gray-50">
                      Nationality
                    </td>
                    <td className="py-2.5 px-3">{nationality}</td>
                  </tr>
                  {province && (
                    <tr className="border-b border-news-border">
                      <td className="py-2.5 px-3 font-semibold text-news-gray bg-gray-50">
                        Province
                      </td>
                      <td className="py-2.5 px-3">{province}</td>
                    </tr>
                  )}
                  <tr className="border-b border-news-border">
                    <td className="py-2.5 px-3 font-semibold text-news-gray bg-gray-50">
                      Known for
                    </td>
                    <td className="py-2.5 px-3">{role}</td>
                  </tr>
                  {wikiData?.fullurl && (
                    <tr>
                      <td className="py-2.5 px-3 font-semibold text-news-gray bg-gray-50">
                        Wikipedia
                      </td>
                      <td className="py-2.5 px-3">
                        <a
                          href={wikiData.fullurl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-news-accent hover:underline text-xs"
                        >
                          View article →
                        </a>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* ── Key Achievements ───────────────────────────────────────── */}
            {achievements.length > 0 && (
              <>
                <h2 id="achievements">Key Achievements</h2>
                <ul className="space-y-2 mb-6">
                  {achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-news-paper border border-news-border"
                    >
                      <span className="text-news-accent font-bold text-sm shrink-0 mt-0.5">
                        ✦
                      </span>
                      <span className="text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* ── Wikipedia Read More link ───────────────────────────────── */}
            {wikiData?.fullurl && (
              <div className="mt-6 pt-5 border-t border-news-border flex items-center justify-between flex-wrap gap-3">
                <p className="text-xs text-news-gray">
                  Extended biography via Wikipedia (CC BY-SA 4.0)
                </p>
                <a
                  href={wikiData.fullurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-news-dark text-white text-sm px-5 py-2.5 hover:bg-news-accent transition font-semibold"
                >
                  📖 Read more on Wikipedia →
                </a>
              </div>
            )}

            {/* ── Related Articles ───────────────────────────────────────── */}
            {relatedArticles.length > 0 && (
              <div className="mt-10 pt-6 border-t border-news-border">
                <h3 className="font-serif font-bold text-xl mb-4 text-news-dark">
                  Related Articles
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/article/${rel.slug}`}
                      className="group flex items-start gap-3 p-4 border border-news-border bg-news-paper hover:bg-white hover:border-news-accent transition"
                    >
                      {rel.image && (
                        <img
                          src={rel.image}
                          alt={rel.title}
                          className="w-14 h-14 object-cover flex-shrink-0 border border-news-border"
                        />
                      )}
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-news-dark group-hover:text-news-accent transition leading-snug line-clamp-2">
                          {rel.title}
                        </p>
                        <p className="text-xs text-news-gray mt-1 line-clamp-2">
                          {rel.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* ── Other Notable Pakistanis ───────────────────────────────── */}
            <div className="mt-10 pt-6 border-t border-news-border">
              <h3 className="font-serif font-bold text-xl mb-4 text-news-dark">
                Other Notable Pakistanis
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {otherPeople.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/person/${p.slug}`}
                    className="group flex items-center gap-3 p-3 border border-news-border bg-news-paper hover:bg-white hover:border-news-accent transition"
                  >
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-11 h-11 object-cover flex-shrink-0 rounded-full border-2 border-news-border group-hover:border-news-accent transition"
                        style={{ objectPosition: "top" }}
                      />
                    ) : (
                      <div className="w-11 h-11 bg-amber-50 border border-news-border rounded-full flex items-center justify-center text-xl flex-shrink-0">
                        {p.emoji}
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-news-dark group-hover:text-news-accent transition truncate">
                        {p.name}
                      </div>
                      <div className="text-xs text-news-gray truncate">
                        {p.role}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Sidebar ──────────────────────────────────────────────────────── */}
        <aside className="lg:col-span-1 min-w-0 space-y-5">
          {/* Infobox */}
          <div className="infobox">
            <div className="infobox-title">{name}</div>
            {profileImage && (
              <div className="infobox-image">
                <img
                  src={profileImage}
                  alt={name}
                  className="max-w-full block no-drag"
                  style={{ objectPosition: "top" }}
                />
              </div>
            )}
            {birthDate && (
              <div className="infobox-row">
                <span className="infobox-label">Born</span>
                <span className="infobox-value text-xs">{birthDate}</span>
              </div>
            )}
            {deathDate && (
              <div className="infobox-row">
                <span className="infobox-label">Died</span>
                <span className="infobox-value text-xs">{deathDate}</span>
              </div>
            )}
            <div className="infobox-row">
              <span className="infobox-label">Nation</span>
              <span className="infobox-value text-xs">{nationality}</span>
            </div>
            {province && (
              <div className="infobox-row">
                <span className="infobox-label">Province</span>
                <span className="infobox-value text-xs">{province}</span>
              </div>
            )}
            <div className="infobox-row">
              <span className="infobox-label">Category</span>
              <span className="infobox-value text-xs">Personalities</span>
            </div>
            {wikiData?.fullurl && (
              <div className="px-3 py-3">
                <a
                  href={wikiData.fullurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-xs bg-news-dark text-white px-3 py-2 hover:bg-news-accent transition font-semibold"
                >
                  Wikipedia →
                </a>
              </div>
            )}
          </div>

          {/* Table of Contents */}
          <div className="toc">
            <h3 className="toc-title font-serif font-bold text-sm uppercase tracking-wider">
              Contents
            </h3>
            <ol className="text-sm space-y-1 list-none pl-0 mt-2">
              <li className="flex gap-2">
                <span className="text-news-gray text-xs mt-0.5">1</span>
                <a
                  href="#biography"
                  className="text-news-accent hover:underline"
                >
                  Biography
                </a>
              </li>
              <li className="flex gap-2">
                <span className="text-news-gray text-xs mt-0.5">2</span>
                <a
                  href="#personal-info"
                  className="text-news-accent hover:underline"
                >
                  Personal Information
                </a>
              </li>
              {achievements.length > 0 && (
                <li className="flex gap-2">
                  <span className="text-news-gray text-xs mt-0.5">3</span>
                  <a
                    href="#achievements"
                    className="text-news-accent hover:underline"
                  >
                    Key Achievements
                  </a>
                </li>
              )}
            </ol>
          </div>

          {/* Browse Personalities */}
          <div className="bg-white border border-news-border p-4">
            <h3 className="font-serif font-bold text-sm mb-3 text-news-dark uppercase tracking-wider">
              Browse
            </h3>
            <Link
              href="/category/personalities"
              className="block text-center bg-news-accent text-white text-sm px-4 py-2.5 hover:bg-red-800 transition font-semibold mb-2"
            >
              All Personalities →
            </Link>
            <Link
              href="/"
              className="block text-center bg-news-dark text-white text-sm px-4 py-2.5 hover:bg-news-accent transition font-semibold"
            >
              Home →
            </Link>
          </div>

          {/* Quick facts from Wikipedia */}
          {wikiData && (
            <div className="bg-white border border-news-border p-4">
              <h3 className="font-serif font-bold text-sm mb-2 text-news-dark uppercase tracking-wider">
                Source
              </h3>
              <p className="text-xs text-news-gray">
                Biography extended with data from{" "}
                <a
                  href={wikiData.fullurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-news-accent hover:underline"
                >
                  Wikipedia
                </a>{" "}
                under CC BY-SA 4.0.
              </p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
