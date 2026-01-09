describe('ServeRest - Testes de API', () => {
  const apiUrl = Cypress.env('apiUrl');

  it('deve cadastrar um novo usuário com sucesso — POST /usuarios', () => {
    const email = `api_user_${Date.now()}@teste.com`;

    cy.request({
      method: 'POST',
      url: `${apiUrl}/usuarios`,
      body: {
        nome: 'Usuário API Cypress',
        email: email,
        password: 'teste123',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
      expect(response.body).to.have.property('_id').and.to.be.a('string');
    });
  });

  it('deve realizar login com sucesso — POST /login', () => {
    const email = `login_user_${Date.now()}@teste.com`;

    cy.request({
      method: 'POST',
      url: `${apiUrl}/usuarios`,
      body: {
        nome: 'Login User Cypress',
        email: email,
        password: 'senha123',
        administrador: 'true'
      }
    });

    cy.request({
      method: 'POST',
      url: `${apiUrl}/login`,
      body: {
        email: email,
        password: 'senha123'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'Login realizado com sucesso');
      expect(response.body).to.have.property('authorization');
    });
  });

  it('deve listar os produtos cadastrados — GET /produtos', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}/produtos`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('quantidade');
      expect(response.body).to.have.property('produtos');
      expect(response.body.produtos).to.be.an('array');
    });
  });
});
