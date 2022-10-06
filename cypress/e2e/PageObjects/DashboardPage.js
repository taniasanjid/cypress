class PageObject {


textCheck() {
    cy.get('h1 > a').should('have.text','Your Store')
    return this
  }

  selectItem() {
    cy.get(':nth-child(1) > .product-thumb > .image > a > .img-responsive').click();

    return this
  }

  itemViewPage()
  {
    cy.get('.col-sm-8 > .nav').should('be.visible');

    return this
  }

  addCart()
  {
    cy.get('#button-cart').click();

    return this
  }

  cartselect()
  {
    cy.get('#cart > .btn').click();

    return this
  }
viewCart()
{
  
  cy.get('[href="http://opencart.abstracta.us:80/index.php?route=checkout/cart"] > strong').click();

}
checkout()
{
  cy.get('.pull-right > .btn').click();
}



}

export default PageObject