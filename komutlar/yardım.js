const Discord = require('discord.js')

var prefix = [prefix];

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)     
      .setColor("RANDOM")
      .setAuthor(`KoDy`, client.user.avatarURL)
  .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=602776162858434593&scope=bot&permissions=2146958847) | [Dlive](https://dlive.tv/KoDy/) | [Discord](https://discord.gg/QSm3843)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`KoDy - Yardım`, `:white_small_square: | **k!moderasyon**: Sunucunuz için Ayar Komutlarını Gösterir.!\n:white_small_square: | **/eğlence**: Eğlenmek için bulunan komutlar!\n:white_small_square: | **/yetkili**: Sunucuyu yönetmek için gerekli olan komutlar!\n:white_small_square: | **/kullanıcı**: Kullanıcılar için komutlar.\n:white_small_square: | **/müzik**: Müzik ruhun gıdasıdır.`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);
      


};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };