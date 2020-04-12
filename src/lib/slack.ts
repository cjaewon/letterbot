import axios from 'axios';

interface slackArgs {
  weather: {
    weather: string;
    temp: string;
  };
  news: string;
  date: string;

  url: string;
}

export default async({ weather, news, date, url }: slackArgs) => {
  const today = new Date().toLocaleDateString().replace(/\. /g, '-').replace('.', '');

  let message: any = {
    attachments: [],
  };

  message.attachments.push({
    color: '#928BFF',
    pretext: `📨 ${today} 편지가 왔어요!`,

    fields: [
      {
        title: '📅 날짜 / 한국',
        value: `${today} ${date ? '(' + date + ')' : ''}`,
        short: true,
      },
      {
        title: '🏞️ 날씨 / 부산',
        value: weather.weather,
        short: true,
      },
      {
        title: '🌡 온도 / 부산',
        value: weather.temp,
        short: true,
      },
    ],

    footer: '제작: 재웜',
    footer_icon: 'https://images-ext-2.discordapp.net/external/GyQicPLz_zQO15bOMtiGTtC4Kud7JjQbs1Ecuz7RrtU/https/cdn.discordapp.com/embed/avatars/1.png',
  });

  message.attachments.push({
    // text: '<http://www.foo.com|This message *is* a link>',
    fields: [
      {
        type: 'mrkdwn',
        title: '📰 뉴스 / 구글',
        value: news,
      }
    ],
  });

  await axios.post(url, message);
};