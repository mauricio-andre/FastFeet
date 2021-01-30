<h1 align="center">
    <img alt="GoStack" alt="FastFeet" src=".github/fast-feet-logo.png" />
</h1>

<h2 align="center">
  Um sistema completo para o controle de entregas
</h2>

<p align="center">
  <a href="#sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#lista-de-correspondências">Lista de correspondências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#execução">Execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

---

## Sobre o projeto
Este projeto foi proposto durante o Bootcamp GoStack 10 da rocketseat, esse é parte de um grupo de projetos desenvolvidos durante o mesmo, para consultar os demais projetos provenientes deste curso acesso o repositório [GoStack](https://github.com/mauricio-andre/goStack10).

Para fins de compreensão do resultado deste projeto, os documentos que descrevem os recursos necessários para o projeto foram mantidos do mesmo modo como apresentados aos participantes do GoStack, estes podem ser consultados na sessão [Lista de correspondências](#lista-de-correspondências) deste documento.

Este projeto apresenta uma interface web desenvolvida com React, uma interface mobile desenvolvida com React Native, e um backend programado com Node Js. O backend executa uma API REST que forneçe os dados para as interfaces do sistema, o sistema web é destinado aos administradores, e o sistema mobile aos entregadores.

Os administradores do sistema podem cadastrar novos entregadores, novos destinatários, produtos a serem entregues, consultar problemas com a entrega relatados pelos entregados e, a partir destas, cancelar uma encomenda.

Os entregadores utilizam e sistema mobile, por meio deste podem consultar suas entregas, descrever eventuais problemas durante a entrega do produto, e confirmar seu recebimento incluíndo uma foto da assinatura do recebedor. Sempre que uma nova encomenda é cadastrada ou cancelada, o entregador vinculado a mesma é notificado por e-mail.

A parte mobile deste projeto está sob refatoração no momento, e não está disponível neste repositório, assim que a mesma for concluída, será aqui incluso.

## Lista de correspondências
* [Desafio 2: FastFeet, o início](./_instruction/Desafio02.md)
* [Desafio 3: FastFeet, continuando a aplicação](./_instruction/Desafio03.md)
* [Desafio 9: FastFeet, front-end web](./_instruction/Desafio09.md)
* [Desafio 10: FastFeet, mobile](./_instruction/Desafio10.md)

## Execução
A execução deste projeto parte do principio que seu ambiente tenha o NodeJs e o Yarn instalados.

Dado ao fato deste projeto preservar os dados nele inseridos, será necessário a instalação e configuração dos seguintes bancos de dados:
- postgres
- redis

Você pode instalar estes bancos diretamente em seu ambiente ou usar um container para isso, este projeto acompanha um arquivo [docker-compose.yml](./docker-compose.yml) que pode ser usado para subir facilmente os bancos de dados necessários, para executa-lo é necessário ter em seu ambiente o docker e o docker compose instalados, tendo-os devidamente configurados em seu ambiente acesse o diretório deste projeto pelo terminal e execute o comando `docker-compose up`

Antes de executar a aplicação web ou mobile é necessário primeiro executar o backend, para isso siga os passos abaixo:
- Acesse o diretório do projeto pelo terminal e execute o comando `yarn`
- Acesse o diretório [packages/backend](./packages/backend) e faça uma cópia do arquivo .env.exemple
- Renomeie a cópia do arquivo para .env e altere as variáveis de ambiente de acordo com as suas parametrizações
- Execute o comando `yarn sequelize db:migrate` para criar as tabelas do banco de dados
- Execute o comando `yarn sequelize db:seed:all` para executar a carga inicial do banco de dados
- Execute o comando `yarn dev` para executar a API
- Execute o comando `yarn queue` para executar o sistema de envio de email

Para iniciar o ambiente web acesse o diretório [packages/web](./packages/web) e execute o comando `yarn start`

## Licença
Esse projeto está sob licença MIT, veja o arquivo de [LICENSE](./LICENSE) para mais detalhes
