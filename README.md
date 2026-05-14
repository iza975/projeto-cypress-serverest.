# 🚀 Automação de Testes E2E - ServeRest

Este projeto faz parte do meu portfólio de **Analista de Qualidade (QA)**, focado na automação de fluxos críticos utilizando **Cypress** e **JavaScript**.

## 🎯 Objetivo
Validar as funcionalidades de login, cadastro e navegação do ambiente **ServeRest**, garantindo que o sistema se comporte corretamente tanto em fluxos de sucesso quanto em cenários de erro.

## 🛠️ Tecnologias e Ferramentas
* **Framework:** [Cypress](https://www.cypress.io/)
* **Linguagem:** JavaScript
* **IDE:** VS Code
* **Ambiente de Teste:** [ServeRest Front](https://front.serverest.dev/login)

## 🧪 Roadmap de Testes (Cobertura)
- [x] **Login:** Sucesso e validação de credenciais inválidas.
- [x] **Cadastro de Usuário:** Criação de conta com dados válidos.
- [x] **Cadastro (Análise Crítica):** Teste de comportamento com senha curta.
- [ ] **Produtos:** Listagem e busca (Em breve 🚀)
- [ ] **Carrinho:** Fluxo de compra (Em breve 🚀)

## 📂 Estrutura do Projeto
* `cypress/e2e/`: Scripts de teste agrupados por funcionalidade (`login.cy.js`, `cadastro.cy.js`).
* Raiz do projeto: Contém as evidências de execução e documentação.

## 🚀 Como Executar o Projeto
1. Clone este repositório para sua máquina.
2. No terminal do VS Code, instale as dependências:
   ```bash
   npm install

   ```
3. Para abrir o painel do Cypress e rodar os testes:
   ```bash
   npx cypress open
   ```

## 📸 Evidências de Testes 

### 🔐 Login
* **Cenários de Sucesso e Erro:**
![Sucesso Login](assets/sucesso_login.png)
![Erro Login](assets/erro_login.png)

### 👤 Cadastro de Usuário
* **Fluxo Completo e Logs:**
![Sucesso Cadastro](assets/sucesso_cadastro.png)
![Logs Cadastro](assets/logs_cadastro.png)

* **Cenário Crítico (Senha de 2 caracteres):**
![Cadastro Senha Curta](assets/cadastro_com_2_caracteres.png)

🔍 Mindset de QA: Análise Crítica e Melhorias

Durante o desenvolvimento da automação, foram aplicadas estratégias para garantir a robustez dos testes e a qualidade do produto:

Massa de Dados Dinâmica: Utilizei a lógica de e-mails aleatórios com Math.random() para garantir que cada teste de cadastro seja único, evitando falsos negativos por "usuário já existente".

Melhoria de Segurança: Identifiquei que o sistema permite cadastros com senhas de apenas 2 caracteres.

Sugestão: Implementar validação de minLength (mínimo de 8 caracteres) para aumentar a segurança da aplicação.
