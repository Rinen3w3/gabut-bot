const fetch = require('node-fetch')
const db = require('../utils/DB.js')
const math = require('../utils/math.js')
const help = require('../feedbacks/help.js').help
const troll = require ('../feedbacks/troll.js').troll

async function answer(msg) {
  // function to reply messages

  const words = parseMessage(msg)
  const authorName = `${msg.author.username}#${msg.author.discriminator}`

  // Basic Commands
  if(words[0] === "g!test" || words [1] == "G!TEST") {
    msg.reply("shut up")
    return
  }
  if(words[0] === "g!gabut" || words [1] == "G!GABUT") {
    msg.reply("i know that feel bro")
    return
  }
  if(words[0] === "g!help" || words [1] == "G!HELP") {
    msg.channel.send(help)
    return
  }
  if(words[0] === "g!troll" || words [1] == "G!TROLL") {
    msg.channel.send(troll)
    return
  }

  // Name and Identity
  if(words[0] === 'g!who') {
    if( words[1] && await db.get(getId(words[1])) )
      return msg.reply(`he is ${await db.get(getId(words[1]))}`)

    if( words[1] && !db.get(getId(words[1])) )
      return  msg.reply('he is......')

    if( await db.get(msg.author.id) )
      return msg.reply(`you are ${await db.get(msg.author.id)}`)

    msg.reply(`you are ${authorName}`)
    return
  }
  if(words[0] == 'g!forgetMe') {
    msg.reply('Who are you!!')
    await db.remove(msg.author.id)
    return
  }
  if(words[0] == 'g!callMe') {
    if(!words[1]) return msg.reply('What?')
    await db.set(msg.author.id, words.slice(1).join(' '))
    msg.reply(`Ok!, ${await db.get(msg.author.id)}`)
    return
  }
  
  // Simple Utility
  if(words[0] == 'g!quote') {
    let response = await fetch('https://api.quotable.io/random?maxLength=100')
    let {content, author} = await response.json()
    
    msg.channel.send(`${content} - **${author}**`)
    return
  }

  // Math
  if(words[0] == 'g!eval' && words[1]) {
    let result = math.eval(words.slice(1).join(' '))

    if(!result) return msg.reply('?')
    msg.reply(`the answer is **${result}**`)
    return
  }
  if(words[0] == 'g!simplify' && words[1]) {
    let result = math.simplify(words.slice(1).join(' '))

    if(!result) return msg.reply('?')
    msg.reply(result)
    return
  }
  if(words[0] == 'g!solve' && words[1]) {
    let result = math.solve(words.slice(1).join(' '))

    if(!result) return msg.reply('?')
    msg.reply(result)
    return
  }
}

function parseMessage(msg) {
  return msg.content.split(' ')
}

function getId(_id) {
  return _id
    .replace(/<@!(.*)>/, '$1')
}

exports.answer = answer