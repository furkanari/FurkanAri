const Discord = require('discord.js');


exports.run = function(client, message, args) {
  const sayi = args.slice(0).join(' ')

  if(sayi.length < 1) {
    return message.reply("Silmem için miktar belirt.")
  } else {
     message.channel.bulkDelete(sayi);
    message.channel.send("**" + sayi + "** mesaj sildim").then(msg => {
      msg.delete(5000)
  });

}

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktar kadar mesaj siler.',
  usage: 'temizle'
};