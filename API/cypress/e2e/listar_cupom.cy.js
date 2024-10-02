/// <reference types="cypress"/>

describe('Listar cupom API', () => {
  it('Listar cupom API', () => {
   
    cy.request({
      method:'GET',
      url:'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
      headers: {authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'}
    }).should((response) => {
      expect(response.status).equal(200)
    })
  })
})