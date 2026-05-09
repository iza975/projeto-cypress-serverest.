describe('login com sucesso', () => { 
    it('logar com sucesso', () => {
        // 1. Visita o site
        cy.visit('https://front.serverest.dev/login')

        // 2. Digita as credenciais válidas
        cy.get('[data-testid="email"]').type('beltrano@qa.com.br')
        cy.get('[data-testid="senha"]').type('teste')
        
        // 3. Clica no botão entrar
        cy.get('[data-testid="entrar"]').click()

        // 4. Validação: Verifica se o título "Bem Vindo" aparece na tela
        cy.get('h1').should('be.visible')
        cy.get('h1').should('contain', 'Bem Vindo')
    })
})