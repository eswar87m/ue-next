import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    setupNodeEvents(on, config) {},
    specPattern: "src/components/**/*.spec.tsx",
    excludeSpecPattern: [
      "**/node_modules/**",
      "**/.next/**",
      "**/.husky/**",
      "**/.git/**",
      "**/cypress/fixtures/**",
      "**/cypress/support/**",
    ],
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});