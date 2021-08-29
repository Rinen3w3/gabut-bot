const { MessageEmbed } = require('discord.js')
const { identity } = require('../identity')
  
exports.help = new MessageEmbed()
	.setColor('#48B5DF')
	.setTitle('List of commands')
	.setThumbnail(identity.thumbnail)
	.addFields(
    {
      name: 'g!gabut',
      value: '`g!gabut` - ik that feel bro.'
    },
    {
      name: 'g!troll',
      value: '`g!troll` - we do a large amount of trolling'
    },
    {
      name: 'g!info',
      value: '`g!info` - Get an info about the bot.'
    },
    {
      name: 'g!who',
      value: '`g!who [user]` - Show the users callMe nickname.'
    },
    {
      name: 'g!callMe',
      value: '`g!callMe [nickname]` - Creates a temporary nickname when pinged.'
    },
    {
      name: 'g!forgetMe',
      value: '`g!forgetMe` - Removes the current callMe nickname.'
    },
    {
      name: 'g!quote',
      value: '`g!quote` - Get a random quote from quotable.'
    },
    {
      name: 'g!eval',
      value: '`g!eval [equation]` - Works on +, -, *, /, max(),  min(), median(), mean(), abs(), fix(), round(), mad(), mode(), prod(), quantileSeq(), std(), sum(), variance().'
    },
    {
      name: 'g!simplify',
      value: '`g!simplify [equation]` - Simplifies the equation, works on +, -, *, /, x + x.'
    },
    {
      name: 'g!solve',
      value: '`g!solve [equation]` - Solves even the hardest equation, works on linear equation.'
    }
	)
	.setFooter('More commands in the future!')