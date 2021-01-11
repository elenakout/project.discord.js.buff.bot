const fetch = require('node-fetch');

async function getGif(keyword) {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=${keyword}&limit=50&offset=0&rating=g&lang=en`;

    const result = await fetch(url);

    const json = await result.json();
    const i = Math.floor(Math.random() * json.data.length);

    console.log('keyword: ', keyword);
    return json.data[i].images.original.url;


  } catch (error) {
    console.log(error);
  }

}

module.exports = async (msg, args) => {
  let keyword = 'counter strike';

  if (args.length >= 1) keyword = args.slice(0, args.length).join(' ');
  const gif = await getGif(keyword);

  msg.channel.send(gif);
};