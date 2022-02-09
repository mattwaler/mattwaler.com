const format = require('date-fns/format')

module.exports = function (value) {
  return format(value, 'MMMM d, yyyy')
}
