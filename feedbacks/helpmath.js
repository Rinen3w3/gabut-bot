const { MessageEmbed } = require('discord.js')
const { identity } = require('../identity')

exports.helpMath = new MessageEmbed ()
  .setColor('#48B5DF')
  .setTitle('Math Commands Info')
  .setDescription('Prefix is `g!`.')
  .addFields(
    { 
      name: 'eval', 
      value: "`eval [equation]` - Works on most simple equations. You can also check this [link](https://mathjs.org/docs/reference/functions.html) for extra help. Also don't write `math.` in an equation."
    },
    { 
      name: 'simplify', 
      value: '`simplify [equation]` - Simplifies the equation. Works on simple and algebra equations.'
    }, 
    { 
      name: 'solve', 
      value: '`solve [equation]` - Solves even the hardest equation. Works on linear equation.'
    },
    { 
      name: 'latex', 
      value: '`latex [equation]` - Better looking for an equation. You can also check this [link](https://wch.github.io/latexsheet/latexsheet-a4.pdf) for extra help.'
    },
  )