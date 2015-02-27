module.exports = {
  bunyanLoggers: require('./server'),
  clientLogger: require('./client'),
  middleware: function(log) {
    return function(req, res, next) {
      if (/^\/log/.test(req.url)) return next()

      log.info({req: req})
      next()
    }
  }
}
