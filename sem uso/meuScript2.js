const tarefas_fazer = document.querySelector(".tarefas_fazer");
const tarefas_concluidas = document.querySelector(".tarefas_concluidas");
const criar_tarefa = document.querySelector(".criar_tarefa")

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
    const tarefas_criadas = criarTarefa({tag: 'label', listaDeProprietades:[{name: 'for', value: tarefa.descricao}]})
    console.log(tarefas_criadas)
    tarefas_criadas.innerHTML = tarefa.descricao;

    tarefas_criadas.addEventListener('click', () => {
        const indice = tarefas.findIndex(tarefaTemporaria => tarefaTemporaria.descricao === tarefa.descricao);

        tarefas[indice] = {...tarefa, status: tarefas[indice].status === 'feita' ? 'fazer': 'feita'}
        console.log(tarefa)
        const listaDeTarefasTemporarias = tarefas_fazer.querySelectorAll('div');
        console.log(tarefas[indice]);
        console.log(listaDeTarefasTemporarias);
        console.log(listaDeTarefasTemporarias[0]);
        console.log(tarefas[indice].descricao);
        listaDeTarefasTemporarias.forEach(div => {
            if(div.children[0].getAttribute('id') === tarefas[indice].descricao) {
                
                div.remove();
            };
        });
        console.log(tarefas_criadas);
        mostrarNaTela(tarefas_criadas, tarefas[indice]);
    })
    mostrarNaTela(tarefas_criadas, tarefa);
});




function criarTarefa({tag = 'div', listaDeProprietades = [{name: '', value: ''}]}) {
    const elementTemp = document.createElement(tag)
    listaDeProprietades?.forEach(propriedade => {
        elementTemp.setAttribute(propriedade.name, propriedade.value)
    })

    return elementTemp
}


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
    };
};


function adicionarTarefa(e) {
    console.log(e);
    const novaTarefa = {
        status:'fazer',
        descricao: e.target.value
    }

    tarefas.push(novaTarefa)

    const tarefa_criada = criarTarefa({ tag: 'label', listaDePropriedades: [{ name: 'for', value: novaTarefa.descricao}] });

    tarefa_criada.innerHTML = novaTarefa.descricao

    tarefa_criada.addEventListener('click', () => {
        const indice = tarefas.findIndex(tarefaTemporaria => tarefaTemporaria.descricao === novaTarefa.descricao);
        tarefas[indice] = {...novaTarefa, status: tarefas[indice].status === 'feita' ? 'fazer': 'feita'}
        const listaDeTarefasTemporarias = tarefas_fazer.querySelectorAll('div')
        listaDeTarefasTemporarias.forEach(div => {
            if(div.children[0].getAttribute('class') === tarefas[indice].descricao) div.remove();
        });

        mostrarNaTela(tarefa_criada, tarefas[index]);
    })
    mostrarNaTela(tarefa_criada, novaTarefa);
};


