describe('Add TODO', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('Adds TODO', ()=>{
        cy.clearLocalStorage().should((ls) => {
            expect(ls.getItem('todo-list')).to.be.null
          })
        const title = 'Go to the gym'
        cy.get('[data-id="add-todo-form"]').within(()=>{

            cy.get('[name="title"]').type(title)
            cy.get('[type="submit"]').click().should(()=>{
                expect(localStorage.getItem('todo-list')).not.to.be.null
            })
        })
    })
});