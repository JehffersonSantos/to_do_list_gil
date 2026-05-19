const tarefas_fazer = document.querySelector(".tarefas_fazer");
const tarefas_concluidas = document.querySelector(".tarefas_concluidas");


const tarefas = [
    {
        status:"fazer",
        descricao:"Go Shopping",
    },
    {
        status:"fazer",
        descricao:"Short Exercive",
    },
    {
        status:"fazer",
        descricao:"Meditation",
    },
    {
        status:"feita",
        descricao:"Reading"
    }
];

tarefas.forEach(tarefa => {
    const tarefa_criada = criarTarefa({tag: 'label', listaDeProprietades:[{name: 'for', value: tarefa.descricao}]})

    tarefa_criada.innerHTML = tarefa.descricao;

    tarefa_criada.addEventListener('click', () => {
        const indice = tarefas.findIndex(tarefaTemporaria => tarefaTemporaria.descricao === tarefa.descricao);
        tarefas[indice] = {...tarefa, status: listaTarefas[indice].status === 'feita' ? 'fazer': 'feita'}

        mostrarNaTela(tarefa_criada, tarefa)
        console.log(tarefas)
    })
    mostrarNaTela(tarefa_criada, tarefa)
});




function criarTarefa({tag = 'div', listaDeProprietades = [{name: '', value: ''}]}) {
    const elementTemp = document.createElement(tag)
    listaDeProprietades?.forEach(propriedade => {
        elementTemp.setAttribute(propriedade.name, propriedade.value)
    })

    return elementTemp
};


function mostrarNaTela (tarefa_criada, tarefa) {
    const inputTarefaEscolhida = criarTarefa({
        tag:'input',
        listaDeProprietades:
        [{name:'type', value:'checkbox'}, {name:'id', value:tarefa.descricao}, {name:'class', value:"fazer_bolinha"}]
    })

    const tarefaContainer = criarTarefa({tag:'div', listaDeProprietades:[]})
    tarefaContainer.append(inputTarefaEscolhida);
    tarefaContainer.append(tarefa_criada);

    if(tarefa.status === 'feita') {
        tarefaContainer.classList.add("tarefa_concluida")
        tarefas_concluidas.append(tarefaContainer)

    }
    if(tarefa.status === 'fazer') {
        tarefaContainer.classList.add("tarefa_criada")
        tarefas_fazer.append(tarefaContainer)
    }
};



