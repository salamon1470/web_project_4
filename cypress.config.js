const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://35.205.56.34/',
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false
  },
});
