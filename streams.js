module.exports = function(logdir) {
 return [
    {
      level: 'info',
      type: 'rotating-file',
      path: logdir + '/nodejson.log',
      period: '1d',
      count: 30
    },
    {
      level: 'debug',
      stream: process.stdout
    }
  ]
}
