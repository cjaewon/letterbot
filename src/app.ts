import * as core from '@actions/core';
import parser from './parser';
import discord from './lib/discord';
// import slack from './lib/slack';

(async () => {
  const WEBHOOKS = 'https://discordapp.com/api/webhooks/689420473448398934/5NK8F9vx1lae2kNkIxAag8ZHjBCtc_BCs2g1x1zthfBkKKxDGM4lpPyrfQphe9A7auQR,https://discordapp.com/api/webhooks/689479424944635912/8w3uqVmanZoslndC5KfGcEZH16LOzZg1oKpWOKSzz-7XIzpxQp6hp6JmfM58nmus-FTA'; // core.getInput('WEBHOOKS') ;
  const webhookList = WEBHOOKS.split(',');

  const parsed = await parser();

  webhookList.map(async url => {
    if (url.includes('discordapp.com')) { // discord webhook
      console.log(parsed);
      await discord({
        ...parsed,
        url
      });
    } else if (url.includes('hooks.slack.com')) { //slack webhook

    }
  });
})();