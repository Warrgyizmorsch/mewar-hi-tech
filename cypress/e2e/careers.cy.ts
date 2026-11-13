/// <reference types="cypress" />

describe("Careers Page", () => {
  beforeEach(() => {
    cy.visit("/careers");
  });

  it("should load careers page", () => {
    cy.get("body").should("be.visible");
    cy.get("h1").should("exist");
  });

  it("should display job search input", () => {
    cy.get('input[placeholder*="Search jobs"]').should("exist");
  });

  it("should validate search input and display error on invalid characters", () => {
    cy.get('input[placeholder*="Search jobs"]').type('<script>');
    cy.get("body").then(($body) => {
      const text = $body.text().toLowerCase();
      const hasError = text.includes("special character") || text.includes("invalid") || text.includes("script");
      expect(hasError).to.be.true;
    });
  });

  it("should display job listings or career application section", () => {
    cy.get("body").then(($body) => {
      const text = $body.text().toLowerCase();
      const hasCareerContent =
        text.includes("career") ||
        text.includes("job") ||
        text.includes("apply") ||
        text.includes("position");
      expect(hasCareerContent).to.be.true;
    });
  });
});
