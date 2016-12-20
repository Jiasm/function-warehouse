'use strict'

module.exports = obj => obj !== null && typeof obj === 'object' && !Array.isArray(obj)
