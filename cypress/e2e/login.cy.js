describe('Funcionalidade: Login', () => { 
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