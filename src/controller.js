module.exports = function(app, log) {
  if(log)
    var elog = log.child({ logtype: 'event' })

  app.post('/log/:action', function(req, res) {
    res.send(200)
    elog.info({
      event: _.extend(req.body, {
        action: req.params.action,
        juid: req.cookies.juid,
        url: req.get('Referrer'),
        sessionId: req.session.id,
        user: req.user.isAuthenticated ? req.user : {}
      })
    })
  })
}


