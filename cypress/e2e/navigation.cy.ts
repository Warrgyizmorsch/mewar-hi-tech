/// <reference types="cypress" />

describe("Static Page Navigation", () => {
  const staticPages = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/products", title: "Products" },
    { path: "/products/crushers", title: "Crushers" },
    { path: "/products/feeders", title: "Feeders" },
    { path: "/products/impactors", title: "Impactors" },
    { path: "/products/screens", title: "Screens" },
    { path: "/services", title: "Services" },
    { path: "/contact", title: "Contact" },
    { path: "/blogs", title: "Blogs" },
    { path: "/careers", title: "Careers" },
    { path: "/faq", title: "FAQ" },
    { path: "/gallery", title: "Gallery" },
    { path: "/events", title: "Events" },
    { path: "/investors", title: "Investors" },
    { path: "/industries", title: "Industries" },
    { path: "/projects", title: "Projects" },
    { path: "/case-studies", title: "Case Studies" },
    { path: "/3d-experience", title: "3D Experience" },
    { path: "/privacy-policy", title: "Privacy Policy" },
    { path: "/terms-of-use", title: "Terms of Use" },
    { path: "/cookie-policy", title: "Cookie Policy" },
  ];

  staticPages.forEach(({ path, title }) => {
    it(`should load ${title} page (${path}) without errors`, () => {
      cy.visit(path, { failOnStatusCode: false });
      cy.get("body").should("be.visible");
      // Check page doesn't show a crash/error
      cy.get("body").should("not.contain.text", "Application error");
      cy.get("body").should("not.contain.text", "Internal Server Error");
    });
  });
});

describe("Header Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the header with logo", () => {
    cy.get("header").should("be.visible");
    cy.get('header a[href="/"]').should("exist");
  });

  it("should have working navigation links", () => {
    cy.get("header nav").should("be.visible");
    cy.get("header nav a").should("have.length.greaterThan", 3);
  });
});

describe("Footer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display footer with key sections", () => {
    cy.get("footer").should("be.visible");
    cy.get("footer").should("contain.text", "Mewar");
  });

  it("should have social media links", () => {
    cy.get("footer a").should("have.length.greaterThan", 3);
  });

  it("should have footer navigation links", () => {
    cy.get('footer a[href="/about"]').should("exist");
    cy.get('footer a[href="/contact"]').should("exist");
    cy.get('footer a[href="/privacy-policy"]').should("exist");
  });
});

