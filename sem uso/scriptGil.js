const listaTarefas = [
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

const listaTarefasFazer = document.querySelector('[tasks-pending]');
const listasTarefasFeitas = document.querySelector('[tasks-closed]');

listaTarefas.forEach(tarefa => {
    const paragrafo = createElement({tag: 'label', listaDeProprietades:[{name: 'for', value: tarefa.descricao}]})

    paragrafo.innerHTML = tarefa.descricao;

    paragrafo.addEventListener('click', () => {
        const indice = listaTarefas.findIndex(tarefaTemporaria => tarefaTemporaria.descricao === tarefa.descricao)
        listaTarefas[indice] = {...tarefa, status: listaTarefas[indice].status === 'feita' ? 'fazer': 'feita'}

        mostrarTarefas(paragrafo, tarefa)
    })

    mostrarTarefas(paragrafo, tarefa)
})

function createElement({ tag = 'div', listaDeProprietades = [{name: '', value: ''}]}){
    const elementTemp = document.createElement(tag)
    listaDeProprietades?.forEach(propriedade => {
        elementTemp.setAttribute(propriedade.name, propriedade.value)
    })
    return elementTemp
}



function mostrarNaTela(paragrafo, tarefa) {
    const inputTarefaEscolhida = createElement({
        tag: 'input',
        listaDeProprietades:
        [{name:'type', value:'checkbox'}, {name:'id', value:tarefa.descricao}]
    });

    const tarefaContainer = createElement({tag: "div", listaDeProprietades:[]});
    tarefaContainer.append(inputTarefaEscolhida);
    tarefaContainer.append(paragrafo)

    if(tarefa.status === 'feita') {
        listasTarefasFeitas.append(tarefaContainer)
    }

    if(tarefa.status === 'fazer' ) listaTarefasFazer.append(tarefaContainer)

        console.log('listaTarefas', listaTarefas)

}