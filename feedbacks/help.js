const { MessageEmbed } = require('discord.js')
const { identity } = require('../identity')
  
exports.help = new MessageEmbed()
	.setColor('#48B5DF')
	.setTitle('List of commands')
  .setDescription('Prefix is `g!`. For extra help, type `help [category]`.')
	.setThumbnail(identity.thumbnail)
	.addFields(
    {
      name: 'Fun Commands',
      value: '`gabut`, `troll`, `quote`, `jbb`, `who`, `callme`, `forgetme`'
    },
    {
      name: 'Math Commands',
      value: '`eval`, `simplify`, `solve`, `latex`'
    },
    {
      name: 'Utility Commands',
      value: '`info`, `help`'
    },
	)
	.setFooter('More commands in the future!', 'https://cdn.discordapp.com/attachments/850362827255709746/890431887959547964/PG_logo.png')