module.exports = function(logdir) {
 return [
    {
      level: 'info',
      path: logdir + '/nodejson.log'
    },
    {
      level: 'debug',
      stream: process.stdout
    }
  ]
}
