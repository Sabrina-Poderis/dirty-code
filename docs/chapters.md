---
sidebar_position: 2
slug: chapters
title: Capítulos
---

# Capítulos

Seguem abaixo as príncipais regras para você conseguir realizar um código tão perfeitamente macarronico, que você será o **único** a entender como funciona.

> E provavelmente nem você vai entender o que você fez meses depois de entregar a feature!

## 📖 Capítulo 1 – Clean Code é Coisa De Otário

> Desenvolvedor raiz não formata, não comenta, não testa. Só entrega (e tem burnout).

- Código legível só serve pra enfeitar. O importante é o prazo (que você nunca vai cumprir).
- O cliente não pediu legibilidade, só pediu pra ontem.

## 📖 Capítulo 2 – Variáveis Genéricas e Significados Ocultos

> Vamos explorar a arte de dar nomes confusos, intenção misteriosa e anos de estudos arqueologia para entender.

- Variáveis como `data`, `aux` e `coiso` são versáteis. Não se limite com nomes descritivos!
- Funções chamadas `handleButton()` passam aquela vibe de software místico, qual ação? de quão botão? o que ele faz? **DESCUBRA**.

## 📖 Capítulo 3: Funções Que Mal Funcionam

> Vamos nos aprofundar na criação de funções gigantescas, que fazem tudo e mais um pouco, e ainda retornam `null` por segurança.

- Uma função só é boa se tiver pelo menos 500 linhas.
- Faça funções que carregam dados, processam requisições, salvam no banco, atualizam a interface e passam café.

## 📖 Capítulo 4: 100 Comentários

> Nada melhor do que um comentário dizendo o óbvio.

- Escreva comentários explicando o que o código faz, linha por linha.
- Exemplo e comentário essencial
    ```c
    // soma 1 no contador
    contador++;
    ```
- Se o código não fizer sentido, **dobre** a quantidade de comentários.

## 📖 Capítulo 5: Formatação Escoliosa

> Crie a indentação do seu código das piores formas possíveis e arrume briga com seus colegas pra ver quem vai ter a pior ideia de configuração de ´lint´

- Misture tabs e espaços, sem dó nem piedade.
- Cada função merece uma indentação diferente — afinal, diversidade é importante.
- Esqueça quebra de linha: monolito até na horizontal.

## 📖 Capítulo 6: Objetos Com Síndrome de Deus

> Objetos que fazem tudo, sabem de tudo e controlam tudo.

- Crie um objeto para autenticação, banco de dados, API, UI e regra de negócio.
- Pra que modularizar se você pode criar um ser onipotente?

## 📖 Capítulo 7: Erros genéricos e destratados

> Trate seus erros apenas quando o sistema cair. Afinal é uma ótima experiência de coworking ficar preso por 4 horas numa warrom as 18:47 de uma quinta-feira por conta de um problema que poderia ter sido percebido antes.

- Use o `catch ()` só pra ignorar o erro.
- `console.log("Erro")` resolve 95% das situações.
- Suas mensagens de erro devem ser tão genéricas quanto as de um horóscopo.

## 📖 Capítulo 8: Teste É Coisa De Covarde

> Se tá buildando, tá testado.

- Testes automatizados são perda de tempo: confie na sua sorte.
- O usuário final é o melhor tester.
- "Na minha máquina funciona" é a maior certificação de qualidade que existe.

## 📖 Capítulo 9: Código Morto é Patrimônio Histórico

> Mantenha blocos de código inutilizados a 7 anos comentados, e tenha sua vida completamente transtornada quando você tiver que fazer qualquer coisa que envolve a manutenção desta budega.

- Se um pedaço de código não for usado, apenas comente.
- O código comentado é um legado para futuras gerações.
    > Assim como o extrato de compra de mercado que você jura que vai registrar pra anotar os seus custos. Todo mundo sabe que você não vai, joga essa sacola cheia de notinhas fora logo