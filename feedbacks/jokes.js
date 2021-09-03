const { MessageEmbed } = require('discord.js')

exports.jokes = () => {
  let id = ~~(Math.random() * 154)
  if(id === 20) id = 21
  
  return new MessageEmbed()
    .setColor('#48B5DF')
    .setImage(`https://jokesbapak2.herokuapp.com/v1/id/${id}`)
}