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

  /*it("Demoblaze", () => {
    cy.visit("https://www.demoblaze.com/index.html");
    cy.get("#login2").click();
    cy.get("#loginusername").type("euliceslp");
    cy.get("#loginpassword").type("12345678");
    cy.get(
      "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
  });*/
});
