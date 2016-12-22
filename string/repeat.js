'use strict'

module.exports = (str, len) => {
  if (!len) return ''
  if (len === 1) return `${str}`
  if (len === 2) return `${str}${str}`

  // if fill methods not realize
  // you can use
  // new Array(len).join(str)
  return new Array(len).fill(str)
}
