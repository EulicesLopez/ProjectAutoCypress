describe("Demoblaze Test", () => {
  
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com/index.html");
  });

  it("Login Demoblaze", () => {
    cy.wait(300)
    cy.get("#login2").click();
    cy.get("#loginusername").type("euliceslp");
    cy.get("#loginpassword").type("12345678");
    cy.screenshot();
    cy.get(
      "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    cy.wait(4000)
    cy.get("#nameofuser").should("have.text", "Welcome euliceslp");
    cy.screenshot();

  });

});
