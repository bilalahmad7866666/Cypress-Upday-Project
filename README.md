# Cypress-Upday-Project

This project contains end-to-end tests for the [Upday website](https://www.upday.com) using Cypress.

## Test Cases
1. **Edition Navigation**
   - *Objective*: Ensure that navigation functionality through different editions work correctly.
   - *Steps*:
     1. Navigate to www.upday.com
     2. Click on change edition button on top-right
     3. Click on any edition
   - *Assertions*:
     - Verify that the edition is switched correctly.
     - Verify that the URL is changed according to the edition selected.

2. **Articles verification of different editions**
   - *Objective*: Validate articles content of different editions.
   - *Steps*:
     1. Navigate to www.upday.com
     2. Click on change edition button on top-right
     3. Click on any edition and click on first three articles
   - *Assertions*:
     - Verify that the content of the new page is visible accordingly.
     - Verify that the headline of the article is present.
     - Verify that the hero image text is present.
     - Verify that the URL link is changed accordingly.

3. **Tabs verification of different editions**
   - *Objective*: Validate different categories of different editions.
   - *Steps*:
     1. Navigate to www.upday.com and select any edition
     2. Click on different categories in the selected edition.
   - *Assertions*:
     - Verify that the category is present and visible.
     - Verify that the body of the category is visible.   

4. **Main page verification of different editions**
   - *Objective*: Ensure that the content on main page is visible
   - *Steps*:
     1. Navigate to www.upday.com and select any edition
   - *Assertions*:
     - Verify that the content (Header, Footer, Main body, etc) is visible.  
     

## Project Structure

- `cypress/`: Contains all Cypress tests, fixtures, and configuration.
- `cypress/e2e/`: Contains end-to-end test cases inside Upday-project.
- `cypress/POM/`: Contains Page Object Models used in tests.
- `cypress.config.js`: Cypress configuration file.

## Installation

Follow these steps to set up the project on your local machine:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)
- [Git](https://git-scm.com/)
- 
### Steps
- Clone this repository.
- Run `npm install` to install dependencies.
- Execute `npx cypress open` to run the tests.
