const { MessageEmbed } = require('discord.js');

exports.testembed = new MessageEmbed ()
 .setColor('#ffffff')
 .setTitle('setTitle')
 .setURL('https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor')
 .setAuthor('draken97, https://cdn.discordapp.com/avatars/735308590071676988/b6fb786f4ba70e9bfe4673ecd0805a7e.png?size=4096, https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor')
 .setDescription('setDescription')
 .setThumbnail('https://cdn.discordapp.com/attachments/897819953116368929/918100848280731648/unknown.png')
 .addFields(
   { name: 'Regular field title', value: 'Some value here' },
	 { name: '\u200B', value: '\u200B' },
	 { name: 'Inline field title', value: 'Some value here', inline: true },
	 { name: 'Inline field title', value: 'Some value here', inline: true },
	)
  .setFooter('setFooter')