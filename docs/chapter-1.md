---
sidebar_position: 3
id: capitulo-1
slug: chapter-1
title: "📖 Capítulo 1 – Clean Code é Coisa De Otário"
sidebar_label: "Capítulo 1"
---

> Desenvolvedor raiz não formata, não comenta, não testa. Só entrega (e tem burnout).

---

## 💬 Frases Provocativas

- "Comentário? Só se for comentário no LinkedIn."
- "Se funciona, pra que refatorar?"
- "Quem precisa de testes quando temos fé?"
- "O código não é bagunçado, é **criativo**."

---

## 💻 Exemplo de Código Macarrônico

```js
// função mágica que resolve tudo
function a(x,y){
var z=0;for(i=0;i<y.length;i++){if(y[i]==x){z++;}}
if(z>0){return true;}else{return false;}}
````

Esse código poderia ser um simples `y.includes(x)`, mas **isso é coisa de júnior**.

---

## 🧹 Por que isso é um problema?

Escrever código sem padrões pode até parecer mais rápido, mas:

* Dificulta manutenção (inclusive a sua, meses depois).
* Aumenta risco de bugs silenciosos.
* Prejudica o time inteiro e aumenta o custo do projeto.
* Faz você perder tempo explicando o inexplicável.

---

## ✅ O Valor do Código Limpo

* Código limpo é mais fácil de **ler, testar e manter**.
* Comentários devem ser usados para explicar o **porquê**, não o óbvio.
* Formatação consistente não é frescura: é comunicação.
* Escrever testes não é "perda de tempo", é um **investimento**.

---

## 📚 Referências

* Capítulo 15 de *Clean Code* – *Case Study*.
* [Docusaurus Code Style](https://docusaurus.io/pt-BR/docs/styling-layout)
