'use strict'

let reg = /^(\w)\1{2}$/
console.log(reg.test('aaa'))
console.log(reg.test('aba'))
