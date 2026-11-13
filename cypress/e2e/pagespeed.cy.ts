/// <reference types="cypress" />

describe("Page Speed & Performance - Desktop", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  const testPages = [
    { name: "Home", url: "/" },
    { name: "Products Listing", url: "/products" },
    { name: "Jaw Crusher", url: "/products/jaw-crusher" },
    { name: "Cone Crusher", url: "/products/cone-crusher" },
    { name: "3D Experience", url: "/3d-experience" },
    { name: "Contact", url: "/contact" },
  ];

  testPages.forEach(({ name, url }) => {
    it(`should load ${name} (${url}) on Desktop within performance threshold`, () => {
      const start = Date.now();
      cy.visit(url, { failOnStatusCode: false });
      cy.get("body").should("be.visible");
      cy.window().then((win) => {
        const duration = Date.now() - start;
        cy.log(`Desktop Load Time for ${name}: ${duration}ms`);
        // Ensure load time is healthy
        expect(duration).to.be.lessThan(10000);
      });
    });
  });
});

describe("Page Speed & Performance - Mobile", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
  });

  const testPages = [
    { name: "Home", url: "/" },
    { name: "Products Listing", url: "/products" },
    { name: "Roll Crusher", url: "/products/roll-crusher" },
    { name: "3D Experience", url: "/3d-experience" },
    { name: "Contact", url: "/contact" },
  ];

  testPages.forEach(({ name, url }) => {
    it(`should load ${name} (${url}) on Mobile within performance threshold`, () => {
      const start = Date.now();
      cy.visit(url, { failOnStatusCode: false });
      cy.get("body").should("be.visible");
      cy.window().then((win) => {
        const duration = Date.now() - start;
        cy.log(`Mobile Load Time for ${name}: ${duration}ms`);
        // Ensure load time is healthy
        expect(duration).to.be.lessThan(10000);
      });
    });
  });
});

