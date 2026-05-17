const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('uncaught:exception', (err, runnable) => {
        return false;
      });
    },
  },
});