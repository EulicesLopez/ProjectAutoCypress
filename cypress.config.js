const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3dmr45",
  e2e: {
    setupNodeEvents(on, config) {
      //cy.viewport('iphone-6')
      //cy.viewport(550, 750)
    },
  },
});
