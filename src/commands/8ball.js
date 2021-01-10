const eightBall = [
  'As If, Ask Me If I Care.',
  'Dumb Question Ask Another.',
  'Forget About It, Get A Clue.',
  'In Your Dreams.',
  'Not.',
  'Not A Chance.',
  'Obviously',
  'Oh Please.',
  'Sure.',
  'That"s Ridiculous',
  'Well Maybe',
  'What Do You Think?',
  'Whatever',
  'Who Cares?',
  'Yeah And I"m The Pope',
  'Yeah Right',
  'You Wish',
  'You ve Got To Be Kidding...'
];

module.exports = async (msg, args) => {
  if (!args.length) return;
  const i = Math.floor(Math.random() * eightBall.length);
  const reply = eightBall[i];
  await msg.channel.send(`${msg.author} ${reply}`);
};