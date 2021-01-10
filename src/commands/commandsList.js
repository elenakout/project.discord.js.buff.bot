const commands = [
  '**8 Ball** - Get a prediction for a yes or no question.',
  'Usage: !8ball [question]',
  '',
  '**Ping** - Get a pong answer',
  'Usage: !ping',
  '**LOL** - Get a random Joke',
  'Usage: !lol',
  '**Gif** - Get a gif from TENOR',
  'Usage: !gif [keyword]',
  '**Commands** - Get a list with the bot commants',
  'Usage: !commands'
];

module.exports = async (msg) => {
  await msg.channel.send(commands);
};