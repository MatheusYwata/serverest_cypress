# Automação de Testes com Cypress — ServeRest

Este projeto contém a automação de testes E2E (Frontend) e testes de API da aplicação ServeRest, utilizando Cypress com JavaScript.

---

## Tecnologias utilizadas 

- Node.js  (v18.17.1)
- npm (v11.6.2)
- Cypress (v13.12.0)
- JavaScript ES6  

---

## Estrutura do projeto

    cypress/
     └── e2e/
          ├── frontend/
          │    ├── smoke_serverest.cy.js
          │    └── login.cy.js
          └── api/
               └── serverest_api.cy.js

---

## Ambientes utilizados

Frontend: https://front.serverest.dev  
API: https://serverest.dev  

A aplicação frontend consome dados da API acima.

---

## Configuração do Cypress

O arquivo `cypress.config.js` está configurado com:

    env: {
      apiUrl: "https://serverest.dev"
    },
    e2e: {
      baseUrl: "https://front.serverest.dev"
    }

Dessa forma:

- `cy.visit('/')` acessa o frontend  
- `cy.request()` utilizando `apiUrl` acessa a API  

---

## Como executar o projeto

### 1. Clonar o repositório

    git clone 
    cd 

### 2. Instalar dependências

    npm install

### 3. Executar o Cypress em modo interativo

    npx cypress open

Selecione **E2E Testing**, escolha o navegador e execute os testes desejados.

### 4. Executar em modo headless (CI)

    npx cypress run

---

## Testes implementados

### Smoke Test
Um teste de smoke foi incluído para validar a disponibilidade básica do frontend antes da execução dos cenários E2E. O objetivo é garantir que a aplicação esteja acessível e carregando corretamente, evitando a execução desnecessária dos demais testes caso o ambiente esteja indisponível.


### Frontend — Login  
Arquivo: `cypress/e2e/frontend/login.cy.js`

Antes da execução dos testes, um usuário é criado automaticamente via API (`before()`), garantindo independência e repetibilidade dos testes.

Cenários cobertos:

1. Login com sucesso  
2. Login com senha inválida  
3. Validação de campos obrigatórios  

---

### API — ServeRest  
Arquivo: `cypress/e2e/api/serverest_api.cy.js`

Endpoints testados:

1. POST `/usuarios` — criação de usuário  
2. POST `/login` — autenticação de usuário  
3. GET `/produtos` — listagem de produtos  

São validados status code, estrutura do JSON e campos relevantes de resposta.

---

## Boas práticas aplicadas

- Utilização de dados dinâmicos para evitar duplicidade  
- Testes independentes e reproduzíveis  
- Separação entre testes de frontend e API  
- Uso de `baseUrl` e variáveis de ambiente  
- Assertivas claras e objetivas  
- Código organizado e de fácil leitura  

---

## Massa de dados

Os testes não dependem de usuário pré-existente.  
O usuário necessário para login é criado automaticamente via API antes da execução do teste.

---


## Autor

Automação desenvolvida por Matheus Ywata para fins de avaliação técnica, aplicando **boas práticas de QA e E2E Testing com Cypress**.

---
