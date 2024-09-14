const {Cypress} = require('../utils/cypress.js')

Cypress.visit('www.techglobal-training.com')
Cypress.login('TechGlobal, Test1234')
Cypress.validateLoginMessage('You are logged in')


 


