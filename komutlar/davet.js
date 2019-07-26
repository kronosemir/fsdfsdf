const Discord = require('discord.js');

var prefix = [prefix];

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Davet Menüsü",
              icon_url: "https://cdn.discordapp.com/avatars/602776162858434593/d02d4c3b25edf9e22917fb73b0544401.png?size=2048"
            },
			    "thumbnail": {
				 "url": "https://cdn.discordapp.com/avatars/602776162858434593/d02d4c3b25edf9e22917fb73b0544401.png?size=2048"
			},
            title: "",
            description: "[Davet Linkim](https://discordapp.com/oauth2/authorize?client_id=602776162858434593&scope=bot&permissions=2146958847) \n[Destek Sunucusu](https://discord.gg/QSm3843)",
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "© KoDy © "
            }
          }
        });  
	    message.react("📝")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d', 'link', 'linkler'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Gösterir',
  usage: 'davet'
};
