describe('Login', () => {

  beforeEach(() => {
    cy.goHome();
  })

  it('Deve deve logar com sucesso', () => {
    cy.sucessLogin();
    cy.wellcome();
  })

  it('Deve não deve logar com email correto e senha errada', () => {
    cy.failKey();
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!');
  })

  it('Deve não deve logar com  emails correto e senha menor que 6 caracteres ', () => {
    cy.failKeyMin();
    cy.noticeHave('A senha precisa ter pelo menos 6 caracteres. Vamos tentar de novo!');
  })

  it('Deve não deve logar com e-mail errado e senha correta', () => {
    cy.failEmail();
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!');
  })

  it('Deve não deve logar com e-mail inválido', () => {
    cy.login('www.santos.com', 'santosqa');
    cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!');
  })

  it('Não deve logar com e-mail vazio', () => {
    cy.login('', 'santosqa');
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.');
  })

  it('Não deve logar com senha vazio', () => {
    cy.login('login@santosqa.com.br', '');
    cy.noticeHave('Por favor, digite sua senha para continuar.');
  })

  it('Não deve logar com e-mail e senha vazios', () => {
    cy.login('', '');
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.');
  })
})
