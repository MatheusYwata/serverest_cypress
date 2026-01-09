describe('Login - ServeRest', () => {
  let email;
  let senha = 'teste123';

  before(() => {
    email = `usuario_${Date.now()}@teste.com`;
    cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/usuarios`,
      body: {
        nome: 'Usuário Cypress',
        email: email,
        password: senha,
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it('deve fazer login com sucesso (usuário criado via API)', () => {
    cy.visit('/');

    cy.get('#email').type(email);
    cy.get('#password').type(senha);
    cy.get('button[type="submit"]').click();

    cy.contains('Logout').should('be.visible');
  });

  it('não deve permitir login com senha inválida', () => {
    cy.visit('/');

    cy.get('#email').type(email);
    cy.get('#password').type('senhaIncorreta123');
    cy.get('button[type="submit"]').click();

    cy.contains('Email e/ou senha inválidos').should('be.visible');

    cy.url().should('include', '/login');
  });

  it('deve exibir mensagem de erro ao tentar logar sem preencher campos obrigatórios', () => {
    cy.visit('/');

    cy.get('button[type="submit"]').click();

    cy.contains('Email é obrigatório').should('be.visible');
    cy.contains('Password é obrigatório').should('be.visible');
  });
});

