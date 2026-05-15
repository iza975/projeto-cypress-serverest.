describe('Funcionalidade: Login', () => { 

    // Variável para o e-mail do primeiro teste
    let emailDinamico;

    beforeEach(() => {
        // Gera um e-mail novo a cada execução
        emailDinamico = 'sonia_login' + Math.floor(Math.random() * 10000) + '@qa.com'
    })
    
    it('logar com sucesso', () => {
        cy.visit('https://front.serverest.dev/cadastrarusuarios')
        cy.get('[data-testid="nome"]').type('Sonia QA')
        cy.get('[data-testid="email"]').type(emailDinamico)
        cy.get('[data-testid="password"]').type('teste', { force: true })
        cy.get('[data-testid="cadastrar"]').click()

        cy.get('.alert').should('be.visible')
        cy.get('.alert').should('contain', 'Cadastro realizado com sucesso')
    })

    it('Deve exibir erro ao logar com credenciais inválidas', () => {
        cy.visit('https://front.serverest.dev/login')

        // CORREÇÃO AQUI: Geramos um e-mail aleatório inválido para garantir que ele NÃO existe no banco
        const emailInexistente = 'invalido_' + Math.floor(Math.random() * 999999) + '@naoexiste.com'

        cy.get('[data-testid="email"]').type(emailInexistente)
        cy.get('[data-testid="senha"]').type('123456', { force: true })
        cy.get('[data-testid="entrar"]').click()

        // Agora o alerta vai aparecer com certeza, porque o usuário não existe!
        cy.get('.alert')
          .should('be.visible')
          .and('contain', 'Email e/ou senha inválidos')
    })

    it('Deve exibir mensagem de erro ao tentar logar com campos vazios', () => {
        cy.visit('https://front.serverest.dev/login')
        cy.get('[data-testid="entrar"]').click()

        cy.get('.alert')
          .should('be.visible')
          .and('contain', 'Email é obrigatório')

        cy.get('.alert')
          .should('be.visible')
          .and('contain', 'Password é obrigatório')
    })

})