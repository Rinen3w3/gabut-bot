const { MessageEmbed } = require('discord.js')
const { identity } = require('../identity')

exports.helpFun = new MessageEmbed ()
  .setColor('#48B5DF')
  .setTitle('Fun Commands Info')
  .setDescription('Prefix is `g!`.')
  .addFields(
    {
      name: 'gabut',
      value: '`gabut` - ik that feel bro.'
    },
    {
      name: 'troll',
      value: '`troll` - we do a large amount of trolling.'
    },
    {
      name: 'quote',
      value: '`quote [type]` - Get a random quote from quotable. Add `sw` for Star Wars quotes.'
    },
    {
      name: 'jbb',
      value: '`jbb` - :laughter:'
    },
    {
      name: 'who',
      value: '`who [user]` - Show the users callMe nickname.'
    },
    {
      name: 'callme',
      value: '`callMe [nickname]` - Creates a nickname when pinged with `who`.'
    },
    {
      name: 'forgetme',
      value: '`forgetMe` - Removes the current callMe nickname.'
    }
  )