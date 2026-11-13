/// <reference types="cypress" />

// Custom commands can be added here
Cypress.Commands.add("assertNoConsoleErrors", () => {
  cy.window().then((win) => {
    // This is a placeholder - console errors are tracked via spies set in beforeEach
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      assertNoConsoleErrors(): Chainable<void>;
    }
  }
}

export {};

