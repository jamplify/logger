module.exports = function(name, logDir) {
  return {
    bunyanLogger: require('./server')(name, logDir),
    clientLogger: require('./client_logger')(name),
    middleware: require('./middleware'),
    controller: require('./controller')
  }
}

