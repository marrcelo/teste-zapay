# teste-zapay

[![Netlify Status](https://api.netlify.com/api/v1/badges/8ee7bbef-67fd-47a8-8dd0-5d1c3b6b8eeb/deploy-status)](https://app.netlify.com/sites/teste-zapay/deploys)

### O projeto funcional pode ser visto acessando [https://teste-zapay.netlify.com/](https://teste-zapay.netlify.com/)

Requisitos para utilizar localmente:

`git`
`pip`
`npm`

Para usar esse projeto clone o repositório:

`git clone git@github.com:marrcelo/teste-zapay.git`

entre na pasta `teste-zapay` usando:

`cd teste-zapay`

Instale as dependências do backend com:

`pip install -r requirements.txt`

Suba o servidor com:

`python manage.py runserver`

Em outro terminal entre na pasta `teste-zapay/frontend` e instale as dependências do projeto com:

`npm install`

Execute o frontend utilizando:

`npm run start`

Acesse o site através do link [http://localhost:3000](http://localhost:3000)

## Explicação do projeto

Como todas as informações a serem usadas são consumidas de um serviço externo, resolvi implementar uma `API Gateway` no backend, sendo assim o `Django` é utilizado apenas com o intuito de receber as chamadas do frontend, redireciona-las para o serviço requerido e retornar as informações para o frontend.
O backend possui 4 rotas, sendo elas:

- `service/past` -- retorna um array com os lançamentos passados.
- `service/upcoming` -- retorna um array com os lançamentos futuros.
- `service/latest` -- retorna o ultimo lançamento feito.
- `service/next` -- retorna o proximo lançamento a ser feito.

No frontend, utilizando `React` foi feita uma pagina que mostra o ultimo e o próximo lançamento utilizando _cards_ em posição de destaque e para exibir os lançamentos passados e futuros foi feito um _carousel_ para cada em que cada item do _carousel_ é um _card_ semelhante ao usado para exibir o próximo e o ultimo lançado. Além disso foi implementado um botão "Mais informações" que abre um _modal_ contendo informações extras sobre a missão e alguns links relevantes.
