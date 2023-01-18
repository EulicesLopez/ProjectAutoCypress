describe("Herokuapp Test", () => {

  beforeEach(() => {
    cy.visit("http://the-internet.herokuapp.com/login");
  });

  it("Login Exitoso", () => {
    cy.loginh("tomsmith", "SuperSecretPassword!");
    cy.get(".subheader").should(
      "have.text",
      "Welcome to the Secure Area. When you are done click logout below."
    );
    cy.screenshot("ResultadoLogin");
  });

  it("Login Fallido", () => {
    cy.loginh("tomsmi", "SuperSecretPassword!");
    cy.get("#flash").should("be.visible");
    cy.contains("Your username is invalid!").should("be.visible");
    cy.screenshot("ResultadoLogin");
  });

 
});
