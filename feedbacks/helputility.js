const { MessageEmbed } = require('discord.js')
const { identity } = require('../identity')

exports.helpUtility = new MessageEmbed ()
  .setColor('#48B5DF')
  .setTitle('Utility Commands Info')
  .setDescription('Prefix is `g!`.')
  .addFields(
    { 
      name: 'info', 
      value: '`info` - Get an info about the bot.'
    },
    { 
      name: 'help', 
      value: '`help` - Show list of commands.'
    }
  )