/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */




/*
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  
  require('cypress-mochawesome-reporter/plugin')(on);
  on("before:browser:launch", (browser, launchOptions) => {
    console.log(launchOptions.args);
    if (browser.name === "chrome") {
      launchOptions.args.push("--incognito");
    }
    return launchOptions;
   });
}
*/


module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  on("before:browser:launch", (browser, launchOptions) => {
    console.log(launchOptions.args);
    if (browser.name === "chrome") {
      launchOptions.args.push("--incognito");
    }
    return launchOptions;
   });
}
