var streams = require('./streams')

function skipTest(req) {
  var result = /post/i.test(req.method) && /^\/log\//.test(req.url)
  return result;
}

module.exports = function(logdir) {
  var ebl = require('express-bunyan-logger')({
    logtype: 'request',
    streams: streams(logdir)
  })

 return function(req, res, next) {
    if(skipTest(req)) return next();
    ebl.apply(this, arguments)
  }
}
