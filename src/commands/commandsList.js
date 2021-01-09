const commands = [
  '!8ball',
  '!ping',
  '!commands'
];

module.exports = async (msg) => {
  await msg.channel.send(commands);
};