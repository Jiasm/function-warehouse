'use strict'

/**
 * 千分位转换
 * @param  {Number} number
 * @return {Number}
 */
module.exports = number => {
  let [interger, ...decimal] = String(number).split('.')

  interger = interger.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  let result = [].concat(interger, decimal)

  return result.join('.')
}
