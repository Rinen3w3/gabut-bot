const fs = require('fs')
const path = require('path')

exports.identity = {
  name: 'Gabut Bot',
  status: 'idle',
  prefix: 'g!',
  thumbnail: 'https://cdn.mee6.xyz/guild-images/831008344696422441/f66b66bb5ac0a68c5f307a12f10c250cea0b85ed7dbf263f3a5549a9bd3bd34d.jpeg',
  package: JSON.parse(
    fs.readFileSync(path.join(__dirname, 'package.json'))
  ),
  client: null,
}