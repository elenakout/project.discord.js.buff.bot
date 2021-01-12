const eightBall = require('./8ball');
const commandsList = require('./commandsList');
const lol = require('./lol');
const sendGif = require('./sendGif');
const gifGiphy = require('./gifGiphy');

// const guildID = process.env.GUILD_ID;
// const channelID = process.env.CHANNEL_ID;

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
  const args = msg.content.split(' ');

  if (args.length == 0 || args[0].charAt(0) !== '!') return;
  const command = args.shift().substr(1);
  if (Object.keys(commands).includes(command)) {
    commands[command](msg, args);
  }
};