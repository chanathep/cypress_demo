const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Add custom event listeners if needed
    },
    baseUrl: 'https://www.google.com', // Replace with your base URL
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}', // Adjust the pattern if needed
    excludeSpecPattern: [], // Exclude specific specs if necessary
    chromeWebSecurity: false, // Allow cross-origin requests during testing
    // video: true, // Enable video recording (optional)
    // videoUploadOnFailures: true, // Upload videos only on failures (optional)
    // screenshotOnRunFailure: true, // Take screenshots on failures (optional)
    trashAssetsBeforeRuns: false, // Keep previous test assets (optional)
    screenshotOnEveryTest: false, // Take screenshots for every test (optional)
    viewportWidth: 1366, // Set width (optional)
    viewportHeight: 768, // Set height (optional)
  },
});
