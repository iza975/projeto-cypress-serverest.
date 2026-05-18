describe('Funcionalidade: Painel Administrativo', () => {

    // Criação do admin antes de rodar os cenários
    beforeEach(() => {
        const emailAdmin = 'admin_' + Math.floor(Math.random() * 100000) + '@qa.com'

        cy.visit('https://front.serverest.dev/cadastrarusuarios')
        cy.get('[data-testid="nome"]').type('Sonia Administradora')
        cy.get('[data-testid="email"]').type(emailAdmin)
        cy.get('[data-testid="password"]').type('teste123')
        cy.get('[data-testid="checkbox"]').check() 
        cy.get('[data-testid="cadastrar"]').click()

       cy.contains('Cadastrar Produtos', { timeout: 10000 }).should('be.visible')
    });

    it('Cenário 1: Deve conseguir acessar a tela e cadastrar um produto novo', () => {
        const nomeProdutoDinamico = 'Teclado Mecânico ' + Math.floor(Math.random() * 100000)

        cy.contains('Cadastrar Produtos').click()
        cy.get('[data-testid="nome"]').type(nomeProdutoDinamico) 
        cy.get('[data-testid="preco"]').type('250')
        cy.get('[data-testid="descricao"]').type('Teclado excelente para automação')
        cy.get('[data-testid="quantity"]').type('50')
        cy.get('[data-testid="cadastarProdutos"]').click()

        cy.url().should('include', '/admin/listarprodutos', { timeout: 10000 }) 
        cy.contains(nomeProdutoDinamico).should('be.visible')
    }); 

    xit('Cenário 2: Não deve permitir cadastrar produto com campos vazios (Teste Negativo)', () => {
        cy.contains('Cadastrar Produtos').click()
        cy.get('[data-testid="cadastarProdutos"]').click() 

        cy.contains('Nome é obrigatório').should('be.visible')
        cy.contains('Preco é obrigatório').should('be.visible') 
        cy.contains('Descricao é obrigatório').should('be.visible')
        cy.contains('Quantidada é obrigatório').should('be.visible')
    });

    it('Cenário 3: Deve cadastrar um produto e conseguir visualizar ele na lista de produtos', () => {
        const nomeProdutoLista = 'Mouse Gamer ' + Math.floor(Math.random() * 100000)

        cy.contains('Cadastrar Produtos').click()
        cy.get('[data-testid="nome"]').type(nomeProdutoLista) 
        cy.get('[data-testid="preco"]').type('120')
        cy.get('[data-testid="descricao"]').type('Mouse ergonomico para testes')
        cy.get('[data-testid="quantity"]').type('20')
        cy.get('[data-testid="cadastarProdutos"]').click()

        cy.url().should('include', '/admin/listarprodutos', { timeout: 10000 })
        cy.contains(nomeProdutoLista).should('be.visible')
    });

    it('Cenário 4: Deve conseguir visualizar a lista de produtos cadastrados', () => {
        cy.contains('Listar Produtos').click()
        cy.url().should('include', '/admin/listarprodutos')
        cy.get('.table').should('be.visible') 
    });
});