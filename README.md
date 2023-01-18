# ProjectAutoCypress

**Pasos para ejecutar el proyecto**

1. Instalar las dependencias Cypress
	`npm install cypress --save-dev`

2. Instalar las dependencias para reporte
	`npm i --save-dev cypress-mochawesome-reporter`

3. Ejecutar el proyecto (2 opciones)
	`npx cypress run --browser chrome --spec cypress/e2e/Test/*.cy.js`
	`npx cypress open`