/// <reference types="cypress" />

import "./commands";

// Ignore React hydration mismatch errors in dev mode that Next.js dev server replays
Cypress.on("uncaught:exception", (err) => {
  if (
    err.message.includes("Hydration failed") ||
    err.message.includes("server rendered HTML") ||
    err.message.includes("Minified React error") ||
    err.message.includes("ResizeObserver loop")
  ) {
    return false;
  }
  return true;
});
