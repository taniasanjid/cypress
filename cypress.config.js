const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "My Test Suite",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  //"retries": { "openMode": 0, "runMode": 2 },
  video: false,
  trashAssetsBeforeRuns :true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 15000,
    slowTestThreshold: 5000,
    specPattern: "cypress/e2e/**/*.spec.js",
    experimentalSessionAndOrigin : true
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
