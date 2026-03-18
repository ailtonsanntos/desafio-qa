# 🚀 Automação de Testes E2E com Playwright

Este projeto faz parte do meu plano de desenvolvimento pessoal para **aprimorar conhecimentos em automação de testes**. Aqui, aplico os conceitos técnicos e estratégicos aprendidos na minha **Pós-Graduação em Engenharia de Qualidade e Teste de Software (PUC Minas)**.

## 📋 Sobre o Projeto
O objetivo deste repositório é demonstrar a implementação de um framework de automação robusto, focando na garantia de qualidade e testes de regressão de fluxos críticos de negócio. 

* **Abordagem**: Testes de Caixa-Preta focados na experiência do usuário final e rigor técnico.
* **Metodologia**: Uso de **BDD (Behavior Driven Development)** com escrita de cenários em **Gherkin** para garantir a rastreabilidade dos requisitos.

## 🛠️ Tecnologias Utilizadas
* **Playwright**: Framework principal para automação E2E.
* **JavaScript / Node.js**: Linguagem e ambiente de execução.
* **Page Objects Model (POM)**: Padrão de projeto para garantir a manutenção e reuso do código.
* **Allure Report**: Integração para geração de relatórios de testes detalhados.

## 🚀 Status do Projeto e Roadmap

### ✅ Concluído (Fase 1: Setup e Autenticação)
- [x] Configuração inicial do ambiente Playwright com JavaScript.
- [x] Implementação do Padrão **Page Object Model (POM)** para a página de Login.
- [x] Criação de scripts de teste para validação de login com sucesso no SauceDemo.
- [x] Documentação inicial do projeto e versionamento via Git/GitHub.

### ⏳ Em Andamento (Fase 2: Fluxo Principal E2E)
- [ ] Mapeamento da `ProductPage` e `CartPage`.
- [ ] Implementação do teste de adição de produtos ao carrinho.
- [ ] Validação da transição para a página de Checkout.

### 🎯 Próximos Passos (Fase 3: Refinamento e API)
- [ ] Finalização do fluxo de compra (Checkout: Overview e Finish).
- [ ] Implementação de **Testes de API** para validação de status code e contrato.
- [ ] Configuração de **Allure Report** para visualização profissional dos resultados.
- [ ] Configuração de **CI/CD** com GitHub Actions via GitHub Pages.

## 🏗️ Estrutura do Repositório
```text
├── tests/              # Scripts de teste (.spec.js)
├── features/           # Especificações executáveis (Gherkin)
├── pages/              # Implementação do padrão Page Objects (POM)
├── playwright.config.js # Configurações globais do framework
└── package.json        # Gerenciamento de dependências e scripts