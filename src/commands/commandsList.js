const commands = [
  '**8 Ball** - Get a prediction for a yes or no question.',
  'Usage: !8ball [question]',
  '',
  '!ping',
  '!commands'
];

module.exports = async (msg) => {
  await msg.channel.send(commands);
};