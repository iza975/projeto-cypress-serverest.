const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Deixe este espaço em branco, sem o uncaught:exception aqui!
    },
  },
});