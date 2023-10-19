# cucumber-cypress-js
This repository is aimed for framework of Cucumber with Cypress along with reporting by Allure. In this case, automated tests that cover scenario taken from a demo shopping cart application, where user can comple shopping cart journey.

## Prerequisites
* Node.js: tested and recommended version is v18.18.2, can be Install from http://nodejs.org/
* IDE (Integrated Development Environment): Any JavaScipt/TypeScript IDE like VS Code, Eclipse etc.

### Getting Started
1. Clone the repository
2. Go to project's root folder
3. Excute the following to intall all node modules
```bash
npm install
```

### Running Tests
1. To run tests headlessly execute the following command. Once execution will be completed, it will start the Allure report by itself and be made accessible in the browser. 
```bash
npm run cy:silent-prod-sauce
```
2. To run tests against a real browser using Cypress runner, execute the following command. Once Cypress's runners get started, choose the already configured "E2E Testing", afterward any browser of choice i.e. chrome etc. and click in "Start E2E Testing in Chrome".
```bash
npm run cy:editor-prod
```
<img width="812" alt="cypress test execution" src="https://github.com/abidali7/cucumber-cypress-js/assets/17843941/7c0038e3-6f21-4fea-a8fd-dd366c36aff2">

### Reporting
Allure report framework has been used for reporting purposes. In case of headless test execution, the report will be generated by itself and can be seen at localhost in the browser.
<img width="812" alt="allure report" src="https://github.com/abidali7/cucumber-cypress-js/assets/17843941/1998f079-5f37-44cf-9583-53420b498ec2">
