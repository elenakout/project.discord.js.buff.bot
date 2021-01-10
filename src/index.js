const Discord = require('discord.js');
require('dotenv').config();

const commandHandler = require('./commands');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Buff-bot ready');
});


client.on('message', (message) => {
  if (message.content.includes('!ping')) {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('⬆ Uptime')
      .addField('Days', `${days}`)
      .addField('Hours', `${hours}`)
      .addField('Minutes', `${minutes}`)
      .addField('Seconds', `${seconds}`);
    message.channel.send(embed);
  }
  commandHandler(message);
});

client.login(process.env.BOT_TOKEN);
