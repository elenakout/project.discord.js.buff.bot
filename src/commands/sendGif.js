const fetch = require('node-fetch');

async function getGif(keyword) {
  const url = `https://api.tenor.com/v1/search?q=${keyword}&key=${process.env.TENOR_KEY}`;

  const result = await fetch(url);

  const json = await result.json();
  const i = Math.floor(Math.random * json.results.length);
  return json.results[i].url;
}


module.exports = async (msg, args) => {
  let keyword = 'counter strike';
  if (args.length > 1) keyword = args.slice(1, args.length).join(' ');
  const gif = await getGif(keyword);
  msg.channel.send(gif);
};