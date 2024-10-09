const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true, // enable cypress to turn on video while generating html report by mochawesome

  reporter: "cypress-mochawesome-reporter",
  e2e: {
    baseUrl:
      "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  env: {
    URL: "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  },
});
