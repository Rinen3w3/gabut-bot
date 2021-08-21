require('dotenv').config();

const Discord = require('discord.js');
const { stayOnline } = require('./server');

const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	require('./commands/answer').answer(msg);
});

stayOnline();
client.login(process.env.TOKEN);
