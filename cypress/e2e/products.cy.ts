/// <reference types="cypress" />

const productSlugs = [
  "jaw-crusher",
  "double-toggle-oil-jaw-crusher",
  "single-toggle-grease-jaw-crusher",
  "double-toggle-grease-jaw-crusher",
  "cone-crusher",
  "roll-crusher",
  "horizontal-shaft-impactor",
  "vertical-shaft-impactor",
  "sand-making-machine",
  "vibrating-screen",
  "sand-washer",
  "belt-conveyor",
  "vibro-feeder",
  "single-shaft-feeders",
];

describe("Product Listing Page", () => {
  beforeEach(() => {
    cy.visit("/products");
  });

  it("should display the products page heading", () => {
    cy.get("h1, h2").should("exist");
    cy.get("body").should("be.visible");
  });

  it("should display product cards", () => {
    cy.get('a[href*="/products/"]').should("have.length.greaterThan", 5);
  });

  it("should not display eyebrow text on product cards", () => {
    // Eyebrows were removed per requirement
    cy.get("[data-eyebrow], .eyebrow, .product-eyebrow").should("not.exist");
  });
});

describe("Individual Product Pages", () => {
  productSlugs.forEach((slug) => {
    describe(`Product: ${slug}`, () => {
      beforeEach(() => {
        cy.visit(`/products/${slug}`, { failOnStatusCode: false });
      });

      it("should load without errors", () => {
        cy.get("body").should("be.visible");
        cy.get("h1").should("be.visible").and("not.contain.text", "Page Not Found");
        cy.get("body").should("not.contain.text", "Application error");
      });

      it("should display product title with dual-color styling", () => {
        // Title should have both dark and yellow parts
        cy.get("h1").should("be.visible");
        cy.get("h1 span").should("have.length.at.least", 2);
      });

      it("should display product description/intro text", () => {
        cy.get("body").then(($body) => {
          const bodyText = $body.text();
          expect(bodyText.length).to.be.greaterThan(200);
        });
      });

      it("should display product features or specifications section", () => {
        cy.get("body").then(($body) => {
          const text = $body.text().toLowerCase();
          const hasDetails =
            text.includes("feature") ||
            text.includes("highlight") ||
            text.includes("specification") ||
            text.includes("spec");
          expect(hasDetails).to.be.true;
        });
      });

      it("should have an enquiry button or form", () => {
        cy.get("button, a").then(($elements) => {
          const hasEnquiry = Array.from($elements).some(
            (el) =>
              el.textContent?.toLowerCase().includes("enquir") ||
              el.textContent?.toLowerCase().includes("brochure") ||
              el.textContent?.toLowerCase().includes("contact") ||
              el.textContent?.toLowerCase().includes("quote")
          );
          expect(hasEnquiry).to.be.true;
        });
      });
    });
  });
});

describe("Product Category Pages", () => {
  const categories = ["crushers", "feeders", "impactors", "screens"];

  categories.forEach((category) => {
    it(`should load ${category} category page`, () => {
      cy.visit(`/products/${category}`, { failOnStatusCode: false });
      cy.get("body").should("be.visible");
      cy.get("body").should("not.contain.text", "Application error");
    });
  });
});
