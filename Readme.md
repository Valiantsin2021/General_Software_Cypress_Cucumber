# JS automation tests using Cypress with Cucumber preprocessor <a href="https://www.cypress.io/" target="blank"><img align="center" src="https://www.cypress.io/images/layouts/navbar-brand.svg" alt="WebdriverIO" height="40" width="40" /></a>

## Author

- [@Valiantsin2021](https://www.github.com/Valiantsin2021) [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## This repository purpose is automation of functional test of [Google.es](https://www.google.es/)

## Test report page can be found on ./allure-report folder (open with Live server plaguin in VSCode)

## Before the test run make sure to update local browsers versions to latest and have NodeJS, npm and Java (for allure report) installed

## The test suite purpose is to perform the following assertions:

The basic steps flow to test the steps:

1. Visit https://www.google.es
2. Accept cookies modal and assert the page url and title
3. Perform search with the parametrized search string
4. Assert the number of the returned search results is not less than parametrized low search results number
5. Assert the number of the returned search results is more than parametrized low search results number
6. Report results

## Test suite

## Job done:

1.  Cucumber preprocessor
2.  Allure reporter with report stored in ./allure-result folder
3.  Screenshots with timestamp on failure (./cypress/screenshots folder)
4.  Test suite integration to GitHub Actions with automated tests run on push and report publishing to gh-pages
5.  Precommit hook for code linting and formatting
6.  Video of test run if failure (./cypress/videos folder)

## Setup:

1. Clone this repository or unzip downloaded file
2. Install dependencies with "npm install"
3. To run tests - open terminal and navigate to the path of the cloned project and:

   - choose browser and suite manually - please add ENV and run with "npx cross-env ENV=(chrome | edge | firefox) npm run test"
   - to clean reports directory: npm run pretest
   - to open report run : allure open
   - to run headless with Electron: npm run test
   - to run headed with browser to choose: npm run cy:open
   - report is created in folder allure-report (index.html should be opened via live server plugin in VSCode)

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://valiantsin2021.github.io/Portfolio/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/valiantsin-lutchanka/)
