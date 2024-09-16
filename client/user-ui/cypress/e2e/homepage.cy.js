// cypress/e2e/homepage.cy.js
describe("Next.js Home Page", () => {
  it("should load the home page", () => {
    cy.visit("/");
    cy.contains("Welcome to Next.js");
  });
});
