var bunyan = require('bunyan')

module.exports = function(name) {
  return bunyan.createLogger({
    name: name,
    logtype: 'app'
  })
}
