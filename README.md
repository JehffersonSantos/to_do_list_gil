<img width="798" height="458" alt="image" src="https://github.com/user-attachments/assets/6059bc13-65fb-47ae-9885-bdeffec8c011" />  # Criação de uma To do List

   Projeto pessoal de uma To Do List, para que eu possa criar tarefas, colocar como feitas ou em fazer e posso alterar o status delas dinamicamente.

  ## Tecnologias usadas

  - JavaScript
  - HTML/CSS

  ## Como acessar
  
Tem o repositorio no GitHub atraves do link [Projeto To do List](https://github.com/JehffersonSantos/to_do_list_gil.git).


  ## Como utilizar

É bem simples: no topo da tela tem a opção de adicionar tarefa, onde você pode colocar o que pretende anotar como tarefa, como no exemplo abaixo.

![Colocando tarefa](https://github.com/user-attachments/assets/3d97e66a-4fab-470f-838d-7c6adb58dd7a)

Após adicionar a tarefa, ela será incluída como tarefa a fazer, como no exemplo abaixo.

![Tarefa incluída](https://github.com/user-attachments/assets/4f138a84-93b6-418e-97f3-5e573573675d)

Ao finalizarmos a tarefa, é só clicar nela que ela vai para a seção de tarefas completadas.

![Alterando status da tarefa](https://github.com/user-attachments/assets/486f3262-b1c0-40bb-beb4-ce9d210749bf)


 ## Como foi criado

 ### HTML

No HTML foi feito dois blocos diferentes onde um tem as tarefas a fazer e outro com as tarefas feitas 
![Como o HTML foi criado](https://github.com/user-attachments/assets/0d42eddf-eee9-4636-84f2-e5fcfa9b7aff)
onde eu fiz pequenos exemplos de como ficaria o codigo após a tarefa ser incluida como concluida ou a fazer.


### JS

No JavaScript primeiro eu comecei selecionando os elementosdo DOM e criando um pequeno banco de dados como consta na imagem abaixo 
![imagem](https://github.com/user-attachments/assets/a8701448-2a4c-41b3-92e9-cf177d00d6ca)

Resolvi colocar a lista de tarefas em uma unica lista de objetos, porque a unica informação que iria alterar dinamicamente era o status, de "feito" para "fazer" e vice-versa.

Inicialmente criei a função "criarTarefa" onde a mesma irá ser responsavel por criar a "div" onde vai a informações da tarefa e o status da tarefa ou seja vai criar o "input" e a "label", vai ser responsavel por preencher com as informações da tarefa e incluir a classe, após preencher os dados vai colocar a função de "click" na tarefa para ser feito a troca de status de "feito" para "fazer", e uma validação para quando for criar a tarefa assim criando uma unica tarefa, e por ultimo retornando todas as informações criada e controladas

A proxima função é a "exibirTarefa", onde a função dela é fazer aparecer na tela do usuario as tarefas criadas, ela vai receber as informações das tarefas e crialas de acordo com o status da tarefa 
![funcao exibirTarefa](https://github.com/user-attachments/assets/84ef8b6d-6366-45b6-a804-dafa77c79e49)

Temos a função incluirTarefa, basicamente ela serve para incluir a tarefa e faz a validação se tarefa esta vazia ou não ![incluirTarefa](https://github.com/user-attachments/assets/3e5354b7-820f-4a82-bebb-dd5b34f14995).

E por ultimo temos a função incluirTarefa onde foi colocando como um submit para ter a praticidade e agir como um botão, ela inicialmente vem pré moldada para sempre ter o status:'fazer' e o valor que foi digitado pelo usuario, vai utilizar a função incluirTarefa para colocar na lista de tarefa e vai utilizar a função criarTarefa para mostrar a nova tarefa para o usuario e por fim limpar o campo que foi digitado.

![botão](https://github.com/user-attachments/assets/64a0180c-0a73-4839-b9db-da3c73f0f974)
























































