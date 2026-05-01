const fs = require('fs');
const path = require('path');
const https = require('https');

const mediaRoot = path.join(process.cwd(), 'public', 'media');
const manifest = [
  { folder: 'history', name: 'history-of-pakistan.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Flag_of_Pakistan.svg/1200px-Flag_of_Pakistan.svg.png' },
  { folder: 'history', name: 'ancient-pakistan.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mohenjo-daro_Priesterkönig.jpeg/800px-Mohenjo-daro_Priesterkönig.jpeg' },
  { folder: 'history', name: 'partition-of-india.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Partition_India.jpg/1200px-Partition_India.jpg' },
  { folder: 'history', name: 'mughal-empire.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Taj_Mah%C3%A1l_Agra_India_2012.jpg/1200px-Taj_Mah%C3%A1l_Agra_India_2012.jpg' },
  { folder: 'events', name: 'pakistan-india-war-1971.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/India-Pakistan_War_1971.jpg/1200px-India-Pakistan_War_1971.jpg' },
  { folder: 'personalities', name: 'muhammad-ali-jinnah.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Muhammad_Ali_Jinnah.jpg/800px-Muhammad_Ali_Jinnah.jpg' },
  { folder: 'personalities', name: 'allama-iqbal.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Muhammad_Iqbal.jpg/800px-Muhammad_Iqbal.jpg' },
  { folder: 'personalities', name: 'benazir-bhutto.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Benazir_Bhutto_2004.jpg/800px-Benazir_Bhutto_2004.jpg' },
  { folder: 'personalities', name: 'malala-yousafzai.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Malala_Yousafzai_2015.jpg/800px-Malala_Yousafzai_2015.jpg' },
  { folder: 'personalities', name: 'imran-khan.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Imran_Khan_at_the_World_Economic_Forum_2020.jpg/800px-Imran_Khan_at_the_World_Economic_Forum_2020.jpg' },
  { folder: 'personalities', name: 'abdul-sattar-edhi.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Abdul_Sattar_Edhi.jpg/800px-Abdul_Sattar_Edhi.jpg' },
  { folder: 'personalities', name: 'zulfikar-ali-bhutto.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Zulfikar_Ali_Bhutto_%28cropped%29.jpg/800px-Zulfikar_Ali_Bhutto_%28cropped%29.jpg' },
  { folder: 'personalities', name: 'liaquat-ali-khan.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Liaquat_Ali_Khan_at_MIT.jpg/800px-Liaquat_Ali_Khan_at_MIT.jpg' },
  { folder: 'personalities', name: 'fatima-jinnah.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Fatima_Jinnah.jpg/800px-Fatima_Jinnah.jpg' },
  { folder: 'personalities', name: 'abdus-salam.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Abdus_Salam.jpg/800px-Abdus_Salam.jpg' },
  { folder: 'personalities', name: 'ruth-pfau.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Ruth_Pfau_in_Karachi.jpg/800px-Ruth_Pfau_in_Karachi.jpg' },
  { folder: 'personalities', name: 'arfa-karim.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Arfa_Karim_Randhawa.jpg/800px-Arfa_Karim_Randhawa.jpg' },
  { folder: 'personalities', name: 'abdul-qadeer-khan.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Abdul_Qadeer_Khan.jpg/800px-Abdul_Qadeer_Khan.jpg' },
  { folder: 'personalities', name: 'jahangir-khan.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Jahangir_Khan_Squash.jpg/800px-Jahangir_Khan_Squash.jpg' },
  { folder: 'personalities', name: 'asma-jahangir.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Asma_Jahangir_at_the_Global_Media_Forum_2011.jpg/800px-Asma_Jahangir_at_the_Global_Media_Forum_2011.jpg' },
  { folder: 'personalities', name: 'noor-jehan.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Noor_Jehan_1950s.jpg/800px-Noor_Jehan_1950s.jpg' },
  { folder: 'personalities', name: 'adeebul-hasan-rizvi.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Adeebul_Hasan_Rizvi.jpg/800px-Adeebul_Hasan_Rizvi.jpg' },
  { folder: 'personalities', name: 'parveen-shakir.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Parveen_Shakir.jpg/800px-Parveen_Shakir.jpg' },
  { folder: 'personalities', name: 'pervez-musharraf.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Pervez_Musharraf_2004.jpg/800px-Pervez_Musharraf_2004.jpg' },
  { folder: 'personalities', name: 'nawaz-sharif.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Nawaz_Sharif_at_World_Economic_Forum_2011.jpg/800px-Nawaz_Sharif_at_World_Economic_Forum_2011.jpg' },
  { folder: 'personalities', name: 'mahbub-ul-haq.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mahbub_ul_Haq.jpg/800px-Mahbub_ul_Haq.jpg' },
  { folder: 'personalities', name: 'muniba-mazari.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Muniba_Mazari_TEDx.jpg/800px-Muniba_Mazari_TEDx.jpg' },
  { folder: 'personalities', name: 'abida-parveen.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Abida_Parveen.jpg/800px-Abida_Parveen.jpg' },
  { folder: 'personalities', name: 'sharmeen-obaid-chinoy.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Sharmeen_Obaid-Chinoy_at_WEF_2012.jpg/800px-Sharmeen_Obaid-Chinoy_at_WEF_2012.jpg' },
  { folder: 'personalities', name: 'hakim-mohammed-said.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Hakim_Mohammed_Said.jpg/800px-Hakim_Mohammed_Said.jpg' },
  { folder: 'personalities', name: 'shoaib-akhtar.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Shoaib_Akhtar_bowling.jpg/800px-Shoaib_Akhtar_bowling.jpg' },
  { folder: 'personalities', name: 'shahid-afridi.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Shahid_Afridi_2011.jpg/800px-Shahid_Afridi_2011.jpg' },
  { folder: 'personalities', name: 'babar-azam.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Babar_Azam_2022.jpg/800px-Babar_Azam_2022.jpg' },
  { folder: 'personalities', name: 'faiz-ahmed-faiz.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Faiz_Ahmed_Faiz.jpg/800px-Faiz_Ahmed_Faiz.jpg' },
  { folder: 'personalities', name: 'saadat-hasan-manto.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Saadat_Hasan_Manto.jpg/800px-Saadat_Hasan_Manto.jpg' },
  { folder: 'personalities', name: 'nusrat-fateh-ali-khan.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Nusrat_Fateh_Ali_Khan_at_WOMAD.jpg/800px-Nusrat_Fateh_Ali_Khan_at_WOMAD.jpg' },
  { folder: 'personalities', name: 'sir-syed-ahmad-khan.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sir_Syed_Ahmed_Khan.jpg/800px-Sir_Syed_Ahmed_Khan.jpg' },
  { folder: 'personalities', name: 'wasim-akram.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Wasim_Akram.jpg/800px-Wasim_Akram.jpg' },
];

async function download(url, filePath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  if (!fs.existsSync(mediaRoot)) fs.mkdirSync(mediaRoot, { recursive: true });
  
  const folders = [...new Set(manifest.map(m => m.folder))];
  folders.forEach(f => {
    const dir = path.join(mediaRoot, f);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  });

  for (const item of manifest) {
    const dest = path.join(mediaRoot, item.folder, item.name);
    try {
      await download(item.url, dest);
    } catch (err) {
      console.error(err.message);
    }
  }
}

main();