const { MessageEmbed } = require('discord.js');
  
  const help = new MessageEmbed()
	.setColor('#48B5DF')
	.setTitle('List of commands')
	.setThumbnail('https://cdn.mee6.xyz/guild-images/831008344696422441/f66b66bb5ac0a68c5f307a12f10c250cea0b85ed7dbf263f3a5549a9bd3bd34d.jpeg')
	.addFields(
    { name: 'g!gabut', value: '`g!gabut` - ik that feel bro.'},
    { name: 'g!troll', value: '`g!troll` - we do a large amount of trolling' },
    { name: 'g!who', value: '`g!who [user]` - Show the users callMe nickname.'},
    { name: 'g!callMe', value: '`g!callMe [nickname]` - Creates a temporary nickname when pinged.'},
    { name: 'g!forgetMe', value: '`g!forgetMe` - Removes the current callMe nickname.'},
    { name: 'g!quote', value: '`g!quote` - Get a random quote from quotable.'},
    { name: 'g!eval', value: '`g!eval [equation]` - A calculator basically, but a super one.'},
    { name: 'g!simplify', value: '`g!simplify [equation]` - Simplifies the equation, and also better g!eval.'},
    { name: 'g!solve', value: '`g!solve [equation]` - Solves even the hardest equation, basically better g!simplify.'}
    
	)
	.setFooter('More commands in the future!')

exports.help = help