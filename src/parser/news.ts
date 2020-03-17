import axios from 'axios';
import cheerio from 'cheerio';

export const parse = async() => {
  const response = await axios.get('https://news.google.com/rss?hl=ko&gl=KR&ceid=KR:ko'); // parsing new at google news

  const html: string = response.data;
  const $ = cheerio.load(html, { xmlMode: true });

  const titles: string[] = $('item > title').map((i, element) => $(element).text()).get();
  const links: string[] = $('item > link').map((i, element) => $(element).text()).get();

  console.log(titles);

  let content = '';

  for (let i = 0; i < 3; i++){
    content += `[${titles[i]}](${links[i]})\n`;
  }


  return content;
}