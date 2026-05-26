# Criação de uma To do List

   Projeto pessoal de uma To Do List, para que eu possa criar tarefas, colocar como feitas ou em fazer e posso alterar o status delas dinamicamente.

  ## Tecnologias usadas

  - JavaScript
  - HTML/CSS

  ## Como acessar
  
Tem o repositorio no GitHub atraves do link [Projeto To do List](https://github.com/JehffersonSantos/to_do_list_gil.git).


  ## Como utilizar

É bem simples: no topo da tela tem a opção de adicionar tarefa, onde você pode colocar o que pretende anotar como tarefa, como no exemplo abaixo.

![Colocando tarefa](https://github.com/user-attachments/assets/4167d024-535a-4765-a5c1-fe92443dc3b9)

Após adicionar a tarefa, ela será incluída como tarefa a fazer, como no exemplo abaixo.

![Tarefa incluída](https://github.com/user-attachments/assets/bec7f8a9-436d-420e-887c-9799bfc60c05)

Ao finalizarmos a tarefa, é só clicar nela que ela vai para a seção de tarefas completadas.

![Alterando status da tarefa](https://github.com/user-attachments/assets/67c2ffe3-9f95-4bb5-aeab-71cf575e3556)


 ## Como foi criado

 ### HTML

No HTML foi feito dois blocos diferentes onde um tem as tarefas a fazer e outro com as tarefas feitas 
![Como o HTML foi criado](https://github.com/user-attachments/assets/8b0f67d8-f2c4-4f0f-af1f-22425ebc8fc6)
onde eu fiz pequenos exemplos de como ficaria o codigo após a tarefa ser incluida como concluida ou a fazer.


### JS

No JavaScript primeiro eu comecei selecionando os elementosdo DOM e criando um pequeno banco de dados como consta na imagem abaixo 
![imagem](https://github.com/user-attachments/assets/3245e036-11e5-48ba-a289-31703ca1985a)

Resolvi colocar a lista de tarefas em uma unica lista de objetos, porque a unica informação que iria alterar dinamicamente era o status, de "feito" para "fazer" e vice-versa.

Inicialmente criei a função "criarTarefa" onde a mesma irá ser responsavel por criar a "div" onde vai a informações da tarefa e o status da tarefa ou seja vai criar o "input" e a "label", vai ser responsavel por preencher com as informações da tarefa e incluir a classe, após preencher os dados vai colocar a função de "click" na tarefa para ser feito a troca de status de "feito" para "fazer", e uma validação para quando for criar a tarefa assim criando uma unica tarefa, e por ultimo retornando todas as informações criada e controladas

A proxima função é a "exibirTarefa", onde a função dela é fazer aparecer na tela do usuario as tarefas criadas, ela vai receber as informações das tarefas e crialas de acordo com o status da tarefa 
![funcao exibirTarefa](https://github.com/user-attachments/assets/915eeb92-3bbe-483d-84e9-565e4395fefe)

Temos a função incluirTarefa, basicamente ela serve para incluir a tarefa e faz a validação se tarefa esta vazia ou não ![incluirTarefa](https://github.com/user-attachments/assets/5cbe7aa5-729e-4c46-b638-29fd678bf558).

E por ultimo temos a função incluirTarefa onde foi colocando como um submit para ter a praticidade e agir como um botão, ela inicialmente vem pré moldada para sempre ter o status:'fazer' e o valor que foi digitado pelo usuario, vai utilizar a função incluirTarefa para colocar na lista de tarefa e vai utilizar a função criarTarefa para mostrar a nova tarefa para o usuario e por fim limpar o campo que foi digitado.

![botão](https://github.com/user-attachments/assets/e92059b2-7804-4b49-84f0-3b11cd8b5ce8)
























































