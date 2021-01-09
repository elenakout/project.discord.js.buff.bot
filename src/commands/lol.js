const giveMeAJoke = require('discord-jokes');

module.exports = async (msg) => {
  giveMeAJoke.getRandomDadJoke(function (joke) {
    msg.channel.send(joke);
  });
};