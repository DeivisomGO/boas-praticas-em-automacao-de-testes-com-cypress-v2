const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {},
  video: false,
  env: {
    hideXhr: true
  }
})
