import * as core from '@actions/core';
import parser from './parser';
import discord from './lib/discord';
// import slack from './lib/slack';

(async () => {
  const WEBHOOKS = core.getInput('WEBHOOKS');
  if (WEBHOOKS == null) throw new Error('웹훅을 찾을 수 없어요.');
  const webhookList = WEBHOOKS.split(',');

  const parsed = await parser();

  webhookList.map(async url => {
    if (url.includes('discordapp.com')) { // discord webhook
      await discord({
        ...parsed,
        url
      });
    } else if (url.includes('hooks.slack.com')) { //slack webhook

    }
  });
})().catch(e => {
  console.error(e);
  core.setFailed(e);
});