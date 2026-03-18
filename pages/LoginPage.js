const { expect } = require('@playwright/test');

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    
    // Seletores para os campos de login, usando os data-test attributes fornecidos pelo site
    this.user_input = page.locator('[data-test="username"]');
    this.password_input = page.locator('[data-test="password"]');
    this.login_button = page.locator('[data-test="login-button"]');
    this.error_message_container = page.locator('[data-test="error"]');
  }

  async acessarPagina() {
    //URL do SauceDemo
    await this.page.goto('https://www.saucedemo.com/');
  }

  async logar(usuario, senha) {
    // Preenchendo os campos de login usando os nomes definidos no constructor
    await this.user_input.fill(usuario);
    await this.password_input.fill(senha);
    await this.login_button.click();
  }
}

module.exports = { LoginPage };