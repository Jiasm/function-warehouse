'use strict'

const isObject = require('../is-object.js')

console.log(isObject({}))
console.log(isObject(new Object()))
console.log(isObject(null))
console.log(isObject(true))
console.log(isObject([]))
