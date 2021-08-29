const fs = require('fs')
const path = require('path')

const db = require('../names.json')

exports.set = (key, value) => {
  db[key] = value
  fs.writeFileSync(
    path.join(__dirname, '../names.json'),
    JSON.stringify(db)
  )
  return db[key]
}
exports.get = (key) => {
  return db[key]
}
exports.remove = (key) => {
  if(!db[key]) return
  delete db[key]
  fs.writeFileSync(
    path.join(__dirname, '../names.json'),
    JSON.stringify(db)
  )
  return true
}