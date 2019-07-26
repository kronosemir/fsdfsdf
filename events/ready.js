const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var izliyor = [
        "k!yardım - Otorol🔥",
        "k!yardım - Küfür Engel✨",
        "k!yardım - Reklam Engel⭐️",
        "k!yardım - k!hoşgeldin-ayarla 💥",
        "k!yardım - k!slowmode 🌹",
        "k!yardım - Beni Sunucuna Ekle⚡️",
        "k!yardım - k!sayaç Yeni 👑",
        
  
    ];
 

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("onlıne");
  client.user.setActivity(`YAPIM AŞAMASINDA!!🔥 + BENİ SUNUCUNA EKLE🔥`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};

