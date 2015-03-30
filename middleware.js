var streams = require('./streams'),
    bunyan = require('bunyan'),
    reqSerializer = require('./request_serializer')

function skipTest(req) {
  var result = /post/i.test(req.method) && /^\/log\//.test(req.url)
  return result;
}

module.exports = function(logdir) {
  var ebl = require('express-bunyan-logger')({
    logtype: 'request',
    streams: streams(logdir),
    serializers: {
      req: reqSerializer,
      err: bunyan.stdSerializers.err,
    }
  })

 return function(req, res, next) {
    if(skipTest(req)) return next();
    ebl.apply(this, arguments)
  }
}
