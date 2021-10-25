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
      value: '`gabut`, `troll`, `quote`, `jbb`'
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