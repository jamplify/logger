var Loggers = require('./server')

function skipTest(req) {
  var result = /post/i.test(req.method) && /^\/log\//.test(req.url)
  return result;
}

module.exports = function(logdir) {
  var log = Loggers('request', logdir).std

  return function(req, res, next) {
    if(skipTest(req)) return next();
    log.info({req: req})
  }
}
