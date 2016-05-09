var request = require('superagent')
var category = ""
var handler = function(event) {
  var label = event.label || $(this).attr('data-label'),
    data = event.data || $(this).attr('data-data')

  request.post('/log/' + event.type)
    .send({
      category: category,
      label: label,
      data: data
    })
    .end()
}

var Logger = module.exports = function(cat) {
  category = cat
  $(document).off(".loggable")

  $(document).on("click.loggable", ".loggable:not([data-action])", handler)

  $(document).on("click.loggable", ".loggable[data-action='click']", handler)

  $(document).on("mouseenter.loggable",
      ".loggable[data-action='hover']", handler)

  $(document).on("change.loggable", ".loggable[data-action='change']", handler)
}

Logger.log = function(type, label, data) {
  handler({type: type, label: label, data: data})
}

