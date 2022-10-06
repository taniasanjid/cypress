// Login.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress" />

import PageObject from "./PageObjects/DashboardPage"

const dashboard =new PageObject(); 

  describe("Cypress UI testing", ()=> {
  
  
    beforeEach(() => {

      cy.fixture('credentials').then(function (testdata) {
        this.testdata = testdata
        cy.visit(this.testdata.url);
    })
    });



    it("Verify customer can view Dashboard successfully", function () {
        dashboard.textCheck();
    });

 
  
  it("Verify customer can add items to cart", function () {
    dashboard.selectItem();
    dashboard.itemViewPage();
    dashboard.addCart();
    dashboard.cartselect();
    dashboard.viewCart();
    dashboard.checkout();
    });




 

})  
  

