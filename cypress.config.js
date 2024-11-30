const { defineConfig } = require("cypress");
const env = require('./env'); // Ajuste conforme a estrutura do projeto

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementação de eventos Node
    },
    baseUrl: env.baseUrl, // Usa o baseUrl do env.js
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});


