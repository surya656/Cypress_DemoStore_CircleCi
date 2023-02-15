class tshirtpage{

    click_on_tshirt(){
        cy.get('li:nth-child(3) a[title="T-shirts"]').click()
    }

    
}
export default tshirtpage;