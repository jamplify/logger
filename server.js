var Logger = require('bunyan'),
    _ = require("lodash"),
    reqSerializer = require('./request_serializer')

module.exports = function(logdir) {
  return {
    request: new Logger({
      name: 'request',
      streams: [
        {
          path: logdir + 'nodejson.log',
          level: 'trace'
        }
      ],
      serializers: {
        req: reqSerializer.req,
        err: Logger.stdSerializers.err
      }
    }),

    email: new Logger({
      name: 'email',
      streams: [
        {
          path: logdir + 'nodejson.log',
          level: 'trace'
        },
      ],
      serializers: {
        err: Logger.stdSerializers.err
      }
    }),


    event: new Logger({
      name: 'event',
      streams: [
        {
          path: logdir + 'nodejson.log',
          level: 'trace'
        }
      ],
      serializers: {
        event: function(log) {
          return {
            category: log.category,
            action: log.action,
            label: log.label,
            url: log.url,
            juid: log.juid,
            sessionId: log.sessionId,

            user: log.user ?
              _.pick(log.user, 'displayName', '_id') : {},

            promotion: log.promotion ?
              _.pick(log.promotion, '_promoter',
                '_release', 'created_on', 'url') : {}
          }
        }
      }
    })
  }
}