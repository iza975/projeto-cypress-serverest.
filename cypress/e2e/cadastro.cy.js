describe('Funcionalidade: Cadastro de Usuario', () => { 

    //Primeiro teste:Sucesso
    it('Cadastrar usuario com sucesso', () => {
    // 1. Primeiro você CRIA a variável com o e-mail aleatório:
    const emailAleatorio = 'sonia' + Math.floor(Math.random() * 10000) + '@teste.com'

   cy.visit('https://front.serverest.dev/cadastrarusuarios')

    cy.get('[data-testid="nome"]').type('Sonia Teste')
    
    // 2. Agora o Cypress vai entender o que é "emailAleatorio" aqui:
    cy.get('[data-testid="email"]').type(emailAleatorio) 
    
    cy.get('[data-testid="password"]').type('123456')
    cy.get('[data-testid="cadastrar"]').click()
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
        
