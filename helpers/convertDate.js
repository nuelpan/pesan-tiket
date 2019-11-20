function converToDate(timestamp) {
  let time = new Date(timestamp)
  let year = time.getFullYear()
  let month = time.getMonth()
  let day = time.getDay()
  let today = `${day}/${month}/${year}`
  return today
}
module.exports = converToDate