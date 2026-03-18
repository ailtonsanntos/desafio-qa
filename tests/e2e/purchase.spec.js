const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test('Login com sucesso', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.acessarPagina();
  await loginPage.logar('standard_user', 'secret_sauce');
  
// Validando que o título da seção está visível e correto
const headerTitle = page.locator('[data-test="title"]'); 
await expect(headerTitle).toHaveText('Products');
});