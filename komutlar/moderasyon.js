const Discord = require('discord.js');


var prefix = [prefix];

exports.run = async (client, message, params, args) => {

    const yardım = new Discord.RichEmbed()
  .setColor("RANDOM")      
      .setAuthor(`KoDy`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=602776162858434593&scope=bot&permissions=2146958847) | [Dlive](https://dlive.tv/KoDy/) | [Discord](https://discord.gg/QSm3843)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`KoDy - moderasyon`, `:white_small_square: | **k!otorolayarla @rol #kanal**: Otorol Rol'ü Belirler!\n:white_small_square: `)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['anakomut', 'anakomutlar', 'anacommand',],
    permLevel: 0
  };
  
  exports.help = {
    name: 'moderasyon',
    description: 'moderasyon',
    usage: 'moderasyon'
  };