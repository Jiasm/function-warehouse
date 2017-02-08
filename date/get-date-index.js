'use strict'

module.exports = date => {
  let year = date.getFullYear()

  let standard = new Date(`${year}/1/1`)

  let second = date - standard

  let count = (second / 1e3 / 60 / 60 / 24 | 0) + 1

  return count
}
