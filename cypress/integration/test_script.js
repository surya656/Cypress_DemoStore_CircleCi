///<reference types="Cypress"/>

import tshirtpage from "./pages/tshirtpage"

describe('DemoStore',function(){

    const tshirtPage = new tshirtpage()

    beforeEach( () => {
        cy.visit(Cypress.env('url'))

    })

    it('T-shirt - t-shirt page test case', () => {

        tshirtPage.click_on_tshirt()

    })


})
