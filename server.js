const express = require('express')

const server = express()

server.all('/', (req, res) => {
  res.send('Bot is running!')
})

function stayOnline() {
  server.listen(process.env.PORT || 3000, () => {
    console.log('Bot is online!')
  })
}

exports.stayOnline = stayOnline