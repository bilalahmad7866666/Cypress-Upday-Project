const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
  defaultCommandTimeout: 120000, // Set a default timeout for Cypress commands (e.g., 120 seconds)
  pageLoadTimeout: 120000, // Set a timeout for page load events (e.g., 120 seconds)
});
