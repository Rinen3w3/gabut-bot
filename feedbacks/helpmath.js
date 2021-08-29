const { MessageEmbed } = require('discord.js')
const { identity } = require('../identity')

exports.helpMath = new MessageEmbed ()
  .setColor('#48B5DF')
  .setTitle('Math Command Info')
  .addFields(
    { name: 'g!eval', value: '`g!eval [equation]` - Works on ....'}, 
    { name: 'g!simplify', value: '`g!simplify [equation]` - Simplifies the equation. Works on ....'}, 
    { name: 'g!solve', value: '`g!solve [equation]` - Solves even the hardest equation. Works on linear equation.'}
  )