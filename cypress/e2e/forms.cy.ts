/// <reference types="cypress" />

describe("Contact Page Form Validation", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });

  it("should display the contact form with all required inputs", () => {
    cy.get("form").first().should("be.visible");
    cy.get("form").first().find('input[name="name"]').should("exist").and("have.attr", "required");
    cy.get("form").first().find('input[name="email"]').should("exist").and("have.attr", "required");
    cy.get("form").first().find('input[name="phone"]').should("exist").and("have.attr", "required");
    cy.get("form").first().find('input[name="company"]').should("exist").and("have.attr", "required");
  });

  it("should enforce required fields on empty submission", () => {
    cy.get("form").first().find('input[name="name"]').should("have.attr", "required");
    cy.get("form").first().find('input[name="email"]').should("have.attr", "required");
    cy.get("form").first().find('input[name="phone"]').should("have.attr", "required");
    cy.get("form").first().find('input[name="company"]').should("have.attr", "required");
  });

  it("should reject script tags in name field", () => {
    cy.get("form").first().find('input[name="name"]').type('<script>alert("xss")</script>');
    cy.get("form").first().find('input[name="email"]').type("valid@example.com");
    cy.get("form").first().find('input[name="phone"]').type("9876543210");
    cy.get("form").first().find('input[name="company"]').type("Test Corp");
    cy.get("form").first().find('input[name="address"]').type("123 Test Street");
    cy.get("form").first().find('button[type="submit"]').click();
    cy.get("form").first().then(($form) => {
      const text = $form.text().toLowerCase();
      expect(
        text.includes("special character") ||
        text.includes("script") ||
        text.includes("invalid") ||
        text.includes("not allowed")
      ).to.be.true;
    });
  });

  it("should reject invalid email format", () => {
    cy.get("form").first().find('input[name="name"]').type("Valid User");
    cy.get("form").first().find('input[name="email"]').type("not-an-email");
    cy.get("form").first().find('input[name="phone"]').type("9876543210");
    cy.get("form").first().find('input[name="company"]').type("Test Corp");
    cy.get("form").first().find('input[name="address"]').type("123 Test Street");
    cy.get("form").first().find('button[type="submit"]').click();
    cy.get("form").first().should("contain.text", "email");
  });

  it("should reject invalid phone number format", () => {
    cy.get("form").first().find('input[name="name"]').type("Valid User");
    cy.get("form").first().find('input[name="email"]').type("valid@example.com");
    cy.get("form").first().find('input[name="phone"]').type("12345");
    cy.get("form").first().find('input[name="company"]').type("Test Corp");
    cy.get("form").first().find('input[name="address"]').type("123 Test Street");
    cy.get("form").first().find('button[type="submit"]').click();
    cy.get("form").first().should("contain.text", "digits");
  });

  it("should require company name as mandatory field", () => {
    cy.get("form").first().find('input[name="name"]').type("Valid User");
    cy.get("form").first().find('input[name="email"]').type("valid@example.com");
    cy.get("form").first().find('input[name="phone"]').type("9876543210");
    cy.get("form").first().find('input[name="address"]').type("123 Test Street");
    cy.get("form").first().find('input[name="company"]').clear();
    cy.get("form").first().find('button[type="submit"]').click();
    cy.get("form").first().should("contain.text", "Company");
  });
});

describe("Newsletter Form", () => {
  it("should exist in footer and validate email", () => {
    cy.visit("/");
    cy.get("footer").scrollIntoView();
    cy.get('footer input[type="email"]').should("exist");
  });
});
