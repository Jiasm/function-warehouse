'use strict'

module.exports = (obj, value) => Object.keys(obj).filter(key => obj[key] === value)
