describe('Todo list', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('Displays TODO list', ()=>{
        cy.get('.todo-card').should('have.length', 200)
    })
});