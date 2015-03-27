var bunyan = require('bunyan'),
    reqSerializer = require('./request_serializer'),
    eventSerializer = require('./event_serializer'),
    streams = require('./streams')

module.exports = function(name, logdir) {
  return {
    test: bunyan.createLogger({
      name: 'test',
      streams: []
    }),
    std: bunyan.createLogger({
      name: name,
      logtype: 'app',
      streams: streams(logdir),
      serializers: {
        req: reqSerializer,
        err: bunyan.stdSerializers.err,
        event: eventSerializer
      }
    })
  }
}
