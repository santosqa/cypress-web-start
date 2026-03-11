
<p align="center">
  <a href="https://santosqa.github.io/" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)"  srcset="./assets/cypress-logo-dark.png">
      <source media="(prefers-color-scheme: light)" srcset="./assets/cypress-logo-light.png">
      <img alt="Cypress Logo" src="./assets/cypress-logo-dark.png">
    </picture>
  </a>
</p>

---


[![Link Bio](https://img.shields.io/badge/Link%20Bio-59d959?style=for-the-badge&logo=about.me&logoColor=white)](https://santosqa.github.io) [![About](https://img.shields.io/badge/About.me-993399?style=for-the-badge&logo=about.me&logoColor=white)](https://about.me/santosqa) [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/santosqa) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/santosqa) [![Instagram](https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/santosqa_/) [![Santos QA](https://img.shields.io/badge/WWW-SantosQA.com-BD93F9?style=for-the-badge&logo=world&logoColor=white)](https://santosqa.com/) [![Apartamento Vista Mar](https://img.shields.io/badge/WWW-ApartamentoVistaMar.com-FFB86C?style=for-the-badge&logo=sun&logoColor=white)](https://www.apartamentovistamar.com/)


---


# 💻  Cypress WEB Start


O Cypress é uma ferramenta moderna de automação para testes de aplicações web. Diferente de outras ferramentas de testes tradicionais, o Cypress é executado no mesmo ciclo de execução da aplicação, o que permite que você escreva, execute e depure seus testes diretamente no navegador. Ele é ideal para testes de integração, funcionalidade e interface de usuário, oferecendo uma experiência rápida e interativa.

Com Cypress, é possível realizar testes end-to-end de forma eficiente e simples, validando o comportamento da aplicação de ponta a ponta, com foco na interação com os elementos presentes na maioria das páginas web. Além disso, a ferramenta fornece uma série de recursos como captura de telas, gravação de vídeos, depuração em tempo real e relatórios de testes, tornando o processo de automação e validação mais acessível.

## Benefícios do Cypress:
  **Desempenho Rápido:** Execução instantânea de testes, sem a necessidade de esperar por longos tempos de execução.
  **Depuração Simples:** Ferramentas de depuração e exibição de comandos diretamente no navegador.
  **Testes em Tempo Real:** Visualização do comportamento da aplicação enquanto os testes estão sendo executados.
  **Facilidade de Uso:** Sintaxe simples e APIs intuitivas para escrever testes, ideal para iniciantes e especialistas.
  **Documentação Extensa:** A documentação oficial oferece exemplos e guias para facilitar o aprendizado.

<div style="background-color: #ffd9c9; padding: 10px; border-radius: 5px;" role="alert" aria-live="assertive">
  <strong>⚠️ Atenção!</strong><br>
  <p>As URLs e credenciais usadas neste projeto são de propriedade exclusiva do @papitodev e dos alunos da formação Cypress Skills. <em>Não utilize-as sem autorização.</em></p>
</div></br>

[![Cursos SantosQA](https://img.shields.io/badge/cypress-santosqa-4A7BFF?style=for-the-badge&logo=cypress&logoColor=white)](https://www.santosqa.com/top/) [![Repositorio PapitoDev](https://img.shields.io/badge/GitHub-papitoDEV-DC143C?style=for-the-badge&logo=github&logoColor=white)](https://github.com/papitodev/) [![Cypress Skills](https://img.shields.io/badge/cypress_Skills-Fernando_papito-32CD32?style=for-the-badge&logo=cypress&logoColor=white)](https://cyskills.com.br/)


<div style="background-color: #DDA0DD; padding: 10px; border-radius: 5px;" role="note" aria-live="polite">
  <p>💡 Este repositório é o seu ponto de partida para automatizar testes em páginas web com Cypress. Crie scripts poderosos, escaláveis e prontos para dominar qualquer aplicação! 🚀💻</p>
  <p>⚡ Comece sua jornada de automação e leve seus testes para o próximo nível. O futuro dos testes está em suas mãos. Vamos juntos nesse desafio! 💪</p>
</div>



----------------------
## Clonar o projeto

   ` git clone https://github.com/santosqa/cypress-web-start.git `
   ` npm install `
   ` yarn add cypress@13.15.0 -D `

----------------------

## Comandos de execução
  - Abrir interface gráfica Cypress: ``` yarn cypress open ```
  - Executar todos testes via terminal: ``` yarn cypress run ```

----------------------
## Links Úteis
  
  - yarn: https://yarnpkg.com/
  - package cypress yarn: https://yarnpkg.com/package?q=cypress&name=cypress
  - github cypress: https://github.com/cypress-io/cypress



----------------------

## instalação completa:

  - Node.js
  - $ pm install --global yarn -2
  - verifique que o yarn está instalado: $  yarn --version
  - no mac execute o comando para garantir que esteva atualizado o arquivo: $ source ~/.zshrc

  - Iniciar o projeto: $ yarn init -2
  - Instalar cypress: $ yarn add cypress@13.15.0 -D
  ( o argumento -D, indica que o pacote será adicionado como uma dependência de desenvolvimento no projeto.Em resumo, adiciona o Cypress como uma dependência que será usada apenas no ambiente de desenvolvimento, sem ser incluída no ambiente de produção.) 
   - abrir o cypress: $ yarn cypress open
  
---

## DOC Cypress 
  - Viewport: https://docs.cypress.io/api/commands/viewport
  - Hooks BeforeEach: https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks


----



## Dicas

<div style="background-color: #E6E6FA; padding: 10px; border-radius: 5px;" role="alert" aria-live="assertive">
  <strong>🔥 1.  Uso de XPATH!</strong>
  <p>A * Embora o Cypress não tenha suporte nativo para uso de XPath, é possível alcançar o mesmo objetivo de maneira organizada e nativa sem precisar importar plugins como "cypress-xpath".  </br>   
  * Este exemplo demonstra como validar a mensagem de alerta para o campo obrigatório "Nome Completo".

  * XPath equivalente: 
  "//label[text()='Nome Completo']/.//div[contains(@class, 'alert-msg')]"
    
  * Implementação nativa com Cypress sem o uso do XPATH:  

        cy.contains('label', 'Nome Completo') // Localiza o rótulo com o texto "Nome Completo"
            .parent()                           // Navega para o elemento pai do rótulo
            .find('.alert-msg')                 // Busca o elemento com a classe 'alert-msg'
            .should('be.visible')               // Garante que o alerta está visível
            .and('have.text', 'O campo nome é obrigatório.'); // Valida o texto do alerta. Use .have.text quando o objetivo é verificar o texto exato e completo de um elemento.
  
  </em></p>
</div></br>
   
    
    
#

---


---
## 🌎 Sobre o autor
🐞 Caçador de bugs, guardião da qualidade e parceiro do time: antecipo problemas e reforço a qualidade reduzindo dor de cabeça em produção.

Projeto mantido por **Ricardo Santos** — QA Engineer

Focado em:
* Qualidade de software
* Automação de testes
* Testes Web, API e Mobile
* Observabilidade
* Engenharia de qualidade

🌐 [santosqa.github.io](https://santosqa.github.io)👋🏼


---


[![Santos Links](https://img.shields.io/badge/GitHub-Santos%20Links-%23FFD700?style=for-the-badge&logo=github&logoColor=white)](https://santosqa.github.io) [![GitHub](https://img.shields.io/badge/GitHub-About.me-%2350fa7b?style=for-the-badge&logo=github&logoColor=white)](https://github.com/santosqa) [![LinkedIn](https://img.shields.io/badge/LinkedIn>-SantosQA-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/santosqa) [![Instagram](https://img.shields.io/badge/>-instagram-%23ff5555.svg?&style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/santosqa_/) [![Santos QA](https://img.shields.io/badge/www-santosqa.com-%23bd93f9.svg?&style=for-the-badge&logo=firefox-browser&logoColor=white)](https://www.santosqa.com) [![Apartamento Vista Mar](https://img.shields.io/badge/www-ApartamentoVistaMar.com-%238be9fd.svg?&style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.apartamentovistamar.com/) [![Receitas Nerds](https://img.shields.io/badge/GitHub-Receitas%20Nerds-%23ffb86c?style=for-the-badge&logo=github&logoColor=white)](https://santosqa.github.io/receitas/) [![Santos Locais Turisticos](https://img.shields.io/badge/GitHub-Santos%20Locais%20Turísticos-%23ff79c6?style=for-the-badge&logo=github&logoColor=white)](https://santosqa.github.io/santos-locais-turisticos/)

##
