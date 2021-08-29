require('dotenv').config()

const Discord = require('discord.js')
const { identity } = require('./identity')
const { stayOnline } = require('./server')

const client = new Discord.Client()

client.on('ready', () => {
  identity.client = client
	console.log(`Logged in as ${client.user.tag}!`)
  client.user.setStatus(identity.status)
  
  stayOnline()
})

client.on('message', msg => {
	require('./commands/answer').answer(msg)
})

client.login(process.env.TOKEN) 