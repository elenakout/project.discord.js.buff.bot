const commands = [
  '',
  '**8 Ball** - Get a prediction for a yes or no question.',
  'Usage: !8ball [question]',
  '',
  '**Ping** - Get a pong answer',
  'Usage: !ping',
  '',
  '**LOL** - Get a random Joke',
  'Usage: !lol',
  '',
  '**Gif** - Get a gif from TENOR',
  'Usage: !gif [keyword] - default: counter strike',
  '',
  '**Giphy** - Get a gif from GIPHY',
  'Usage: !giphy [keyword] - default: counter strike',
  '',
  '**Commands** - Get a list with the bot commands',
  'Usage: !commands'
];

module.exports = async (msg) => {
  await msg.channel.send(commands);
};
