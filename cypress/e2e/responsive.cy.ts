/// <reference types="cypress" />

describe("Mobile Responsive - Home Page", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("/");
  });

  it("should render home page on mobile", () => {
    cy.get("body").should("be.visible");
    cy.get("header").should("be.visible");
  });

  it("should have a mobile menu toggle", () => {
    cy.get('button[aria-label*="menu" i], button[aria-label*="nav" i], [data-mobile-menu], header button')
      .should("exist");
  });

  it("should display footer on mobile", () => {
    cy.get("footer").scrollIntoView().should("be.visible");
  });
});

describe("Mobile Responsive - Products Page", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("/products");
  });

  it("should render products on mobile", () => {
    cy.get("body").should("be.visible");
    cy.get('a[href*="/products/"]').should("have.length.greaterThan", 3);
  });
});

describe("Mobile Responsive - Contact Page", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("/contact");
  });

  it("should render contact form on mobile", () => {
    cy.get("body").should("be.visible");
    cy.get("form").should("be.visible");
  });
});

describe("Tablet Responsive", () => {
  beforeEach(() => {
    cy.viewport("ipad-2");
  });

  it("should render home page on tablet", () => {
    cy.visit("/");
    cy.get("body").should("be.visible");
    cy.get("header").should("be.visible");
  });

  it("should render products page on tablet", () => {
    cy.visit("/products");
    cy.get("body").should("be.visible");
  });

  it("should render contact page on tablet", () => {
    cy.visit("/contact");
    cy.get("form").should("be.visible");
  });
});

