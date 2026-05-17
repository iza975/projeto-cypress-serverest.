describe('Funcionalidade: Produtos (Listagem e Busca)', () => {
    let emailDinamico;

    beforeEach(() => {
        // Seu e-mail dinâmico original
        emailDinamico = 'sonia-prod' + Math.floor(Math.random() * 10000) +  '@qa.com'
      
        // Seu fluxo de cadastro original que deu Passed!
        cy.visit('https://front.serverest.dev/cadastrarusuarios')
        cy.get('[data-testid="nome"]').type('Sonia Qa Produtos')
        cy.get('[data-testid="email"]').type(emailDinamico)
        cy.get('[data-testid="password"]').type('teste', {force: true})
        cy.get('[data-testid="cadastrar"]').click()

        // Validação original (Se o servidor do ServeRest estiver online, ele passa por aqui)
      cy.url({ timeout: 10000 }).should('include', '/home')
    })

    it('Deve listar os produtos cadastrados com sucesso', () => {
        // O teste que você viu ficar verde!
        cy.get('.card').should('be.visible')
        cy.get('.card-title').should('have.length.at.least', 1) 
    })

    it('Deve buscar um produto especifico por nome', () => {
        // Mantivemos o input original com o nome do produto que está na tela!
        cy.get('input[type="search"]').type('Logitech MX Vertical')
        cy.get('.card-title').should('contain', 'Logitech MX Vertical')
    })
})