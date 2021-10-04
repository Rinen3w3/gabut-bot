const fs = require('fs')
const path = require('path')

exports.identity = {
  name: 'Gabut Bot',
  status: 'idle',
  prefix: 'g!',
  thumbnail: 'https://cdn.discordapp.com/attachments/850362827255709746/890431887959547964/PG_logo.png',
  package: JSON.parse(
    fs.readFileSync(path.join(__dirname, 'package.json'))
  ),
  client: null,
}