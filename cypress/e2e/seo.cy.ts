/// <reference types="cypress" />

describe("SEO Meta Tags", () => {
  const pagesWithSEO = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/products", name: "Products" },
    { path: "/contact", name: "Contact" },
    { path: "/services", name: "Services" },
    { path: "/blogs", name: "Blogs" },
    { path: "/careers", name: "Careers" },
  ];

  pagesWithSEO.forEach(({ path, name }) => {
    describe(`${name} Page SEO`, () => {
      beforeEach(() => {
        cy.visit(path, { failOnStatusCode: false });
      });

      it("should have a title tag", () => {
        cy.title().should("not.be.empty");
      });

      it("should have a meta description", () => {
        cy.get('meta[name="description"]').should("have.attr", "content").and("not.be.empty");
      });

      it("should have Open Graph tags", () => {
        cy.get('meta[property="og:title"]').should("exist");
      });
    });
  });
});

describe("Product Page SEO", () => {
  const products = [
    "jaw-crusher",
    "cone-crusher",
    "roll-crusher",
    "vibrating-screen",
    "vibro-feeder",
    "single-shaft-feeders",
  ];

  products.forEach((slug) => {
    it(`${slug} should have meta title and description`, () => {
      cy.visit(`/products/${slug}`, { failOnStatusCode: false });
      cy.title().should("not.be.empty");
      cy.get('meta[name="description"]').should("have.attr", "content").and("not.be.empty");
    });
  });
});

