const { MessageEmbed } = require('discord.js');

exports.testembed = new MessageEmbed ()
 .setColor('#ffffff')
 .setTitle('setTitle')
 .setURL('https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor')
 .setAuthor('draken97')
 .setDescription('setDescription')
 .setThumbnail('https://cdn.discordapp.com/attachments/897819953116368929/918100848280731648/unknown.png')
 .addFields(
   { name: 'Regular field title', value: 'Some value here' },
	 { name: '\u200B', value: '\u200B' },
	 { name: 'Inline field title', value: 'Some value here', inline: true },
	 { name: 'Inline field title', value: 'Some value here', inline: true },
	)
  .setFooter('setFooter')