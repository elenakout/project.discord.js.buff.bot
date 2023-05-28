const eightBall = require('./8ball');
const commandsList = require('./commandsList');
const lol = require('./lol');
const sendGif = require('./sendGif');
const gifGiphy = require('./gifGiphy');

const guildIDoxi = process.env.GUILD_ID_OXI;
const channelIDF = process.env.CHANNEL_ID_F;
const guildIDFR = process.env.GUILD_ID_FR;

const commands = {
  '8ball': eightBall,
  'commands': commandsList,
  lol,
  'gif': sendGif,
  'giphy': gifGiphy
};

module.exports = async (msg) => {
  // if (msg.guild.id === guildID && msg.channel.id === channelID) {
  //   const args = msg.content.split(' ');
  //   if (args.length == 0 || args[0].charAt(0) !== '!') return;
  //   const command = args.shift().substr(1);
  //   if (Object.keys(commands).includes(command)) {
  //     commands[command](msg, args);
  //   }
  // }

  if (msg.guild.id === guildIDoxi || msg.channel.id === channelIDF || msg.guild.id === guildIDFR) {
    const args = msg.content.split(' ');
    if (args.length == 0 || args[0].charAt(0) !== '!') return;
    const command = args.shift().substr(1);
    if (Object.keys(commands).includes(command)) {
      commands[command](msg, args);
    }
  }

};
