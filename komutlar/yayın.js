const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send('@everyone **YAYINDAYIZ BEYLER**!!!                                                                                                                                                                                                                                                                                                                                                         https://dlive.tv/KoDy');

};

exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['yayın'],
        permLevel: 2,
        kategori: "moderasyon"
}

exports.help = {
  name: 'yayın', 
  description: 'yayın',
  usage: 'yayın'
};
