describe("e2e test", () => {
  it("visits home", () => {
    cy.visit("http://localhost:3000");
  });

  it("renders header", () => {
    cy.contains("Exchange Rabbit");
  });

  it("contains API information", () => {
    cy.contains("binance");
  });

  it("has sub-pages", () => {
    cy.contains("binance").click();
  });

  it("has allows user to return home", () => {
    cy.contains("<<").click();
  });

  it("contains 10 directories", () => {
    cy.contains("Bitfinex").click();
  });

  it("redirects user to external site on click", () => {
    cy.contains("Visit").click();
  });
});
