describe('Projeto de QA - Sonia Wicki', () => {

    it('Deve exibir erro ao logar com credenciais inválidas', () => {
        // Visita o site
        cy.visit('https://front.serverest.dev/login')

        // Interação com os campos (Aqui o robô digita sozinho!)
        cy.get('[data-testid="email"]').type('usuario_teste@prova.com')
        cy.get('[data-testid="senha"]').type('123456')
        cy.get('[data-testid="entrar"]').click()

        // Validação (Onde garantimos que o erro apareceu)
        cy.get('.alert')
          .should('be.visible')
          .and('contain', 'Email e/ou senha inválidos')
    })
})