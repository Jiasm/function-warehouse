'use strict'

const getKeysByValue = require('../get-keys-by-value.js')

let result = getKeysByValue({
  a: 1,
  b: 1,
  c: 2,
  d: '1'
}, 1)

console.log(result)
