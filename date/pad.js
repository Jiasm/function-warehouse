'use strict'

/**
 * pad zero to string
 * 1  => 01
 * 0  => 00
 * 12 => 12
 * @param  {String} str text
 * @return {String}
 */
module.exports = str => ('00' + str).slice(-2)
