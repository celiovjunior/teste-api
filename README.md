<h1>(Resolução) Teste - API de Orçamento</h1>

> Status: finalizado ✔

## Sobre: 
Utilizando os dados disponíveis em dois mockends (um com uma lista de usuários e outro com lista de produtos), foi desenvolvido uma API onde é possível: <br>
- listar os dados dos usuários ("users");
- listar os dados dos produtos ("products");
- calcular o orçamento ("budget") que cada usuário irá pagar em cima do(s) preço(s) do(s) produtos(s) selecionado(s);

## Ferramentas Utilizadas:
- [Node](https://nodejs.org)
- [Express](https://expressjs.com)
- [Typescript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Jest](https://jestjs.io/docs/getting-started)

## Como Baixar o Projeto:
Antes de baixar o projeto, certifique-se de que você tenha o Node, o npm (gerenciamento de pacotes do Node) e o Git instalandos e devidamente configurados no seu computador.<br>
Abaixo estão alguns links de apoio:

- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- [GIT](https://git-scm.com/downloads)

<p>É recomendado que os comandos abaixo sejam feitos em um terminal bash</p>

```bash
# 1: clone o repositório
git clone git@github.com:celiovjunior/teste-api.git

# 2: acesse a pasta do projeto
cd teste-api

# 3: faça o download das bibliotecas/frameworks pendentes e aguarde
npm install

# 4: execute o projeto
npm run dev

# Uma mensagem dizendo 'Server is running' deverá aparecer
```

---

## Detalhes do Projeto

### Formato:

<p>Os dados do projeto foram trabalhados no formato JSON <br> Segue os exemplos abaixo:</p>

<b>USER</b>
```json
[
  {
  "id": 1,
  "name": "cvRhuZicvV",
  "tax": 79
  },
  {
  "id": 2,
  "name": "P5hBDBonm3",
  "tax": 121
  },
  {
  "id": 3,
  "name": "buTTe8n3gT",
  "tax": 82
  },
  {...}
]
```

<b>PRODUCT</b>
```json
[
  {
  "id": 1,
  "name": "explicabo alias hic reprehenderit deleniti quos id reprehenderit consequuntur ipsam iure voluptatem ea culpa excepturi ducimus repudiandae ab",
  "price": 6945
  },
  {
  "id": 2,
  "name": "nostrum veritatis reprehenderit repellendus vel numquam soluta ex inventore ex",
  "price": 2435
  },
  {
  "id": 3,
  "name": "praesentium explicabo reprehenderit laudantium a pariatur ab sit pariatur quos",
  "price": 4985
  },
  {...}
]
```

---

### Rotas
<p>Para testar as requisições do projeto, é recomendável utilizar algum software de teste de API, como Postman ou Insomnia</p>
Abaixo, alguns links de apoio:

- [Postman](https://www.postman.com/downloads/)
- [Insomnia](https://insomnia.rest/download)

<p>Na tabela seguir, estão algumas orientações de quais rotas são possíveis testas, o tipo de requisição e qual a ação esperada:</p>

<p>A URL base parão é: <code>http://localhost:3333</code></p>

<table>
    <tr>
        <td>Ação</td>
        <td>Método HTTP</td>
        <td>Rota</td>
    </tr>
    <tr>
        <td>Listar todos os usuários</td>
        <td><code>GET</code></td>
        <td><code>"/users"</code></td>
    </tr>
    <tr>
        <td>Listar todos os produtos</td>
        <td><code>GET</code></td>
        <td><code>"/products"</code></td>
    </tr>
    <tr>
        <td>Fazer o calculo de orçamento</td>
        <td><code>GET</code></td>
        <td><code>"/budget/:userId/:productIds"</code></td>
    </tr>
</table>

> OBS: Na rota de cálculo de orçamento, é possível passar mais de um id em <code>:productIds</code>, separando cada id por vírgula (,)

---

## Testes Unitários

<p>Para a realização dos testes, foi utilizada framework Jest. <br>Você pode acessar mais detalhes sobre essa ferramenta através do link abaixo:</p>

- [Jest](https://jestjs.io/pt-BR/docs/getting-started)

<p>Neste projeto, o Jest foi utilizado para testar se os middlewares se comportam da forma esperada, tendo em vista o status da resposta da requisição (<code>statusCode</code>), o tamanho da lista retornada (<code>length</code>) e o calculo do orçamento (<code>budget</code>) de acordo com os parâmetros passados na rota .</p>

O arquivo de teste está no seguinte diretório:<br>

```
src
└─── middleware
       budgetMiddlewareTest.spec.ts
```

Para rodar os testes, basta rodar o comando abaixo no terminal com o diretório da pasta raiz do projeto:<br>
```node
npm run test
```
---

## Final
<p>Em caso de algum dúvidas, erros ou mal funcionamento do código, você pode entrar em contato comigo através do e-mail:<br> 📩 cl.juniorr@gmail.com