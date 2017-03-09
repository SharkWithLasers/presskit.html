'use strict'

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

const config = {
  watch: false
}

config.setLaunchOptions = function ({
  watch = false
} = {}) {
  config.watch = watch
}

// -------------------------------------------------------------
// Exports.
// -------------------------------------------------------------

module.exports = config