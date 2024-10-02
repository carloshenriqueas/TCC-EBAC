/// <reference types="cypress"/>
import{faker} from '@faker-js/faker'

describe('Listar cupom API', () => {
    it('Listar cupom API', () => {
     
      cy.request({
        method:'POST',
        url:'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
        headers: {authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'},
        body: {
            "code": faker.string.alphanumeric(),
            "amount": faker.string.numeric(),
            "discount_type": "fixed_product",
            "description": "Cupom de desconto de teste"
        }

      }).should((response) => {
        expect(response.status).equal(201)
      })
    })
  })