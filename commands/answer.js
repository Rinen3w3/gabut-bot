const fetch = require('node-fetch')
const math = require('../utils/math')
const { identity } = require('../identity')

const commands = {
  // basic commands
  'gabut': (msg, words) => {
    msg.reply("i know that feel bro")
  },
  'troll': (msg, words) => {
    const { troll } = require ('../feedbacks/troll')
    msg.channel.send(troll)
  },
  'jbb': (msg, words) => {
    const { jokes } = require('../feedbacks/jokes')
    msg.channel.send(jokes())
  },

  // utility
  'help': (msg, words) => {
    if(words[1] == 'math') {
      // help math
      const { helpMath } = require ('../feedbacks/helpmath')
      msg.channel.send(helpMath)
      return
    }

    const { help } = require('../feedbacks/help')
    msg.channel.send(help)
  },
  'help': (msg, words) => {
    if(words[1] == 'fun') {
      // help fun
      const { helpFun } = require ('../feedbacks/helpfun')
      msg.channel.send(helpFun)
      return
    }
    
    if(words[1] == 'math') {
      // help math
      const { helpMath } = require ('../feedbacks/helpmath')
      msg.channel.send(helpMath)
      return
    }

    if(words[1] == 'utility') {
      // help utility
      const { helpUtility } = require ('../feedbacks/helputility')
      msg.channel.send(helpUtility)
      return
    }

    const { help } = require('../feedbacks/help')
    msg.channel.send(help)
  },
  'info': (msg, words) => {
    const { info } = require ('../feedbacks/info')
    msg.channel.send(info)
  },

  // Simple utilities
  'quote': async (msg, words) => {
    if(words[1] == 'sw') {
      msg.channel.send(require('starwars')())
      return
    }

    let response = await fetch('https://api.quotable.io/random?maxLength=100')
    let {content, author} = await response.json()
    
    msg.channel.send(`${content} - **${author}**`)
  },

  // Maths
  'eval': (msg, words) => {
    let result = math.eval(words.slice(1).join(' '))

    if(!result) return msg.reply('?')
    msg.reply(`the answer is **${result}**`)
  },
  'simplify': (msg, words) => {
    let result = math.simplify(words.slice(1).join(' '))

    if(!result) return msg.reply('?')
    msg.reply(result)
  },
  'solve': (msg, words) => {
    let result = math.solve(words.slice(1).join(' '))

    if(!result) return msg.reply('?')
    msg.reply(result)
  },
  'latex': (msg, words) => {
    if(!words[1]) return msg.reply('?')

    const equation = words.slice(1).join(' ')
    msg.channel.send(math.latex(equation))
  },
}

exports.answer = async (msg) => {
  // function to reply messages
  const words = parseMessage(msg)

  if(!words[0].startsWith(
    identity.prefix
  )) return

  const action = commands[words[0].replace(identity.prefix, '')]
  if(action) {
    await action(msg, words)
  } else {
    // default action
    msg.reply("shut up!")
  }
}


// helper functions
function parseMessage(msg) {
  return msg.content.toLowerCase().split(' ')
}

function getId(_id) {
  return _id.replace(/<@!?(.*)>/, '$1')
}