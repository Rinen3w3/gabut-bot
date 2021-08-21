const Database = require("@replit/database")

const db = new Database()

async function set(key, value) {
  return await db.set(key, value)
}
async function get(key) {
  return await db.get(key)
}
async function remove(key) {
  if(!await get(key)) return
  return await db.delete(key)
}
async function list(prefix) {
  return await db.list(prefix)
}

module.exports = {
  set, get, remove, list
}