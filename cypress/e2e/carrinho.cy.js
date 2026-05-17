Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('Funcionalidade: Carrinho de Compras', () => { 

    beforeEach(() => {
        const emailDinamico = 'cliente_' + Math.floor(Math.random() * 100000) + '@qa.com'
        cy.visit('https://front.serverest.dev/cadastrarusuarios')
        cy.get('[data-testid="nome"]').type('Sonia Cliente')
        cy.get('[data-testid="email"]').type(emailDinamico)
        cy.get('[data-testid="password"]').type('teste')
        cy.get('[data-testid="cadastrar"]').click()
        cy.url({ timeout: 10000 }).should('include', '/home')
    })

    // TESTE 1: Cenário Específico (Garante a integridade do produto principal e do preço)
    it('Cenário Específico: Deve buscar o Logitech MX Vertical e validar o valor de R$ 470,00', () => {
        cy.get('input[type="search"]').type('Logitech MX Vertical')
        cy.get('.card-title', { timeout: 10000 }).should('contain', 'Logitech MX Vertical')
        
        cy.contains('.card', 'Logitech MX Vertical')
          .contains('Adicionar a lista')
          .click()

        cy.url().should('include', '/minhaListaDeProdutos')
        cy.contains('470').should('be.visible')
    })

    // TESTE 2: Cenário Genérico (Lógica pura! Não quebra se mudarem os preços ou nomes do site)
    it('Cenário Genérico: Deve adicionar o primeiro produto da tela e validar no carrinho', () => {
        // 1. O robô olha para o primeiro card de produto que aparecer na home
        cy.get('.card').first().then(($card) => {
            // 2. Ele lê e guarda o nome do produto dinamicamente
            const nomeProduto = $card.find('.card-title').text().trim()

            // 3. Clica no botão de adicionar desse mesmo card
            cy.wrap($card).contains('Adicionar a lista').click()

            // 4. Valida se foi para a URL da lista
            cy.url().should('include', '/minhaListaDeProdutos')

            // 5. Garante que o nome guardado lá no início está aparecendo no carrinho
            cy.contains(nomeProduto).should('be.visible')
        })
    })

  // TESTE 3: Limpar Carrinho / Lista (Novo!)
    it('Deve permitir esvaziar a lista de compras com sucesso', () => {
        // 1. Adiciona o primeiro produto só para ter algo na lista
        cy.get('.card').first().contains('Adicionar a lista').click()
        cy.url().should('include', '/minhaListaDeProdutos')

        // 2. Clica no botão de esvaziar a lista
        cy.contains('Limpar Lista').click()

        // 3. Valida se o texto de feedback de lista vazia apareceu na tela
        // (No ServeRest costuma aparecer um alerta ou texto dizendo que não há itens)
        cy.contains('Seu carrinho está vazio').should('be.visible') 
    })

})    