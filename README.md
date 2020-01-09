## Índice

* [1. Burguer Queen](#1-Burguer-Queen)
* [2. Resumo do Projeto](#2-Resumo-do-Projeto)
* [3. Como Usar](#3-Como-Usar)
* [4. Processo de design e Tecnologias](#4-processo-de-design-e-Tecnologias)
* [5. Contribuição](#5-Contribuição)

# 1. Burger Queen

Interface para realizar pedidos através de um tablet, e enviá-los para a cozinha instantaneamente para que sejam preparados de forma ordenada e eficiente.


## 2. Resumo do Projeto

A interface deve mostrar os dois menus (café da manhã e restante do dia), cada um com todos os seus produtos. O usuário deve poder escolher que produtos adicionar e a interface deve mostrar o resumo do pedido com o custo total.

A cozinha deverá receber o pedido a ser preparado e envia-lo de volta ao atendente quando o prato estiver pronto, também deverá ter um histórico dos pedidos finalizados.

O Atendente deverá receber de forma instantânea o prato finalizado para a entrega ao cliente, também deverá ter um histórico dos pedidos entregues.

## 3. Como Usar

Realize seu cadastro na aba de Registro, é importante escolher corretamente seu departamento para acessar as páginas.
Com o cadastro realizado você será direcionado para a tela de Atendimento ou Cozinha, conforme a escolha do departamento quando no registro.

Para usuários do Atendimento, será possível escolher os menus para realizar os pedidos, marcando o nome do cliente e mesa. Será mostrado em tempo real o resumo do pedido, podendo aumentar a quantidade ou diminuir, assim como excluir algum item antes do fechamento. Também terá acesso a aba da lista de pedidos prontos para servir, e marcar como entregue.

## 4. Processo de design e Tecnologias

O Processo das escolhas do design seguiu a pesquisa qualitativa por meio de percepções de outras ferramentas já existentes no mercado, assim como todo o processo de escolha de cores.
Foi utilizado para o design a ferramenta Quant-UX, a princípio o desenho foi conforme o link, [Protótipo - Burguer Queen](https://www.quant-ux.com/#/test.html?h=a2aa10aIYB2bBdqnPlGYoMgqh4neuJVjUUt9abPuNfD44vZwBwAxI2Ov9Viy).
Mas após a realização do teste de usabilidade, o design do aplicativo web foi teve sucintas modificações conforme o feedback dos usuários.

## Tecnologias
* HTML5
* JavasScript (ES6)
* Aphrodite (CSS)
* React Hooks
* @fortawesome/react-fontawesome
* growl-alert

## 5. Contribuição

Todas as contribuições são bem vindas.

Fork o repositório no GitHub
Clone o projeto em sua própria máquina
Instale as ferramentas necessárias para o desenvolvimento: `` `npm install```
Commit em sua própria branch
Faça o Push do seu trabalho de volta para o fork
Envie uma solicitação pull request com observações completas documentando suas alterações