const express = require('express')

const { identity } = require('./identity')
const server = express()

server.all('/', (req, res) => {
  res.send(
    `Bot Is Running!, Logged In As "${identity.client.user.tag}"`
  )
})

exports.stayOnline = () => {
  server.listen(process.env.PORT || 3000, () => {
    console.log('Bot is online!')
  })
}