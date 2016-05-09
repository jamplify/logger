var _ = require("lodash")

module.exports = function(log) {
  return {
    category: log.category,
    action: log.action,
    label: log.label,
    data: log.data,
    url: log.url,
    juid: log.juid,
    sessionId: log.sessionId,
    user: log.user ? _.pick(log.user, 'displayName', '_id') : {}
  }
}

