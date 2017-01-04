'use strict'

module.exports = list => list.reduce((old = {}, item) => {
  Object.keys(item).forEach(key => {
    old[key] = (old[key] | 0) + (item[key] | 0)
  })
  return old
})
