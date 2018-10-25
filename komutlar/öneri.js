const Discord = require('discord.js');





exports.run = function(client, message, args) {



    var öneri = args.slice(0).join(' ');

    var guildID = "502132773394317342";

    var channelID = "503091298048147458";

    

    if (!öneri){

        return message.reply("Bir mesaj belirtin! Doğru kullanım: **prefix öneri <mesaj>**");

    } else {

        

        var embed = new Discord.RichEmbed()

            .setTimestamp()

            .addField("Eylem:", "Öneri")

            .addField("Kullanıcı:", message.author.tag)

            .addField("ID", message.author.id)

            .addField("Öneri", öneri)

        

        client.guilds.get(guildID).channels.get(channelID).send(embed);

        message.channel.send("Öneriniz alınmıştır! Teşekkür ederiz.");

    };





};



exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["öner"],

  permLevel: 0

};



exports.help = {

  name: 'öneri',

  description: "Bot hakkındaki önerilerinizi bot sahibine ulaştırır.",

  usage: 'öneri <mesaj>'

};