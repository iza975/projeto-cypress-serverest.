describe('Funcionalidade: Cadastro de Usuario', () => { 

    //Primeiro teste:Sucesso
    it('Cadastrar usuario  com sucesso', () => {
        cy.visit('https://front.serverest.dev/cadastrarusuarios')
// Gere um email aleatório para não dar erro de "usuário já cadastrado"
        const email = `sonia_sucesso${Math.floor(Math.random() * 1000)}@mail.com`
        
        cy.get('[data-testid="nome"]').type('Sonia Teste')
        cy.get('[data-testid="email"]').type(emailAleatorio)
        cy.get('[data-testid="password"]').type('123456')
        cy.get('[data-testid="cadastrar"]').click()

        // validação (o "Alert")
        cy.get('.alert').should('contain','Cadastro realizado com sucesso')
    })
    // Segundo teste: (Permite Cadastro com senha de dois digitos)
    it('Deve permitir o cadastro com senha de apenas 2 caracteres (Cenario Critico)',() => {
        cy.visit('https://front.serverest.dev/cadastrarusuarios')
        const emailValido = `teste${Math.floor(Math.random() * 1000)}@mail.com`
        
        cy.get('[data-testid="nome"]').type('Sonia qa')
        cy.get('[data-testid="email"]').type(emailValido)
        // Testando a senha com apenas duas letras
        cy.get('[data-testid="password"]').type('yo')// senha curta
        cy.get('[data-testid="cadastrar"]').click()

        //Validação: O Sistema deve exibir a mensagem de sucesso
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
    })
})
        
