var bunyan = require('bunyan')

module.exports = function(req) {
  var reqInfo = _.extend(bunyan.stdSerializers.req(req), {
    ip: req.ip,
    ips: req.ips,
    juid: req.cookies.juid,
    sessionId: req.session ? req.session.id : null,
    userAgent: req.useragent,
    user: req.user && req.user.isAuthenticated ?
      _.pick(req.user, 'displayName', '_id') : {}
  })
  delete reqInfo.headers.authorization;
  return reqInfo;
}
