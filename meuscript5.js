const tarefas_fazer = document.querySelector(".tarefas_fazer");
const tarefas_feitas = document.querySelector(".tarefas_feitas")
const tarefas_concluidas = document.querySelector(".tarefas_concluidas");
const input_mobile = document.querySelector(".criar_tarefa_botão");
const botao_mobile = document.querySelector(".incluir");
const tarefa_Desktop = document.querySelector(".criar_tarefa");
const botao_Desktop = document.querySelector(".botao_seta_desktop");
const incluir_desktop = document.querySelector(".incluir_desktop");


const minhasTarefas = [
    {
        descricaoTarefa:"ir a escola",
        status:"feita",
    },
    {
        descricaoTarefa:"ir ao shoping",
        status:"feita",
    },
    {
        descricaoTarefa:"estudar",
        status:"fazer",
    },
    {
        descricaoTarefa:"dormir",
        status:"feita",        
    }
];

// function alterarStatusTarefa (tarefa) {
    
//     const tarefaClicada = tarefas.status === 'feita' ? 'feita': 'fazer'
//     console.log("clicou em uma tarefa");



//     console.log("Tarefa Clicada", tarefas);



// };

function localizarTarefa(tarefa) {
    const tarefas_fazer = document.querySelectorAll(".tarefa_criada");
    const tarefas_feitas = document.querySelectorAll(".tarefa_concluida");

    const index = minhasTarefas.findIndex(tarefaIndex => tarefaIndex.descricaoTarefa === tarefa.descricaoTarefa);
    return {index, tarefas_fazer, tarefas_feitas};
}

function criarTarefa (tarefa, classDivTarefa, classCheckBox, estouCriandoNovaTarefa = false) {
    const divTarefa = document.createElement("div");

    const checkbox = document.createElement("input");
    const label = document.createElement("label");

    label.classList.add("nome_tarefa");

    divTarefa.classList.add("tarefa");
    divTarefa.classList.add(classDivTarefa);
    
    
    label.innerHTML = tarefa.descricaoTarefa;
    checkbox.classList.add(classCheckBox);
    checkbox.type = "checkbox"

    divTarefa.append(checkbox);
    divTarefa.append(label);



    



    divTarefa.addEventListener("click", () => {
        const {index, tarefas_fazer, tarefas_feitas} = localizarTarefa(tarefa)

        tarefas_fazer.forEach(tarefa => {
        tarefa.remove();
    })
        tarefas_feitas.forEach(tarefa => {
        tarefa.remove();
    });

        if(classDivTarefa === "tarefa_criada") {


            minhasTarefas[index].status = "feita";
            
        } else {

            minhasTarefas[index].status = "fazer";
        }
        exibirTarefa();
    })

    const {index, tarefas_fazer, tarefas_feitas} = localizarTarefa(tarefa)
    
    if(estouCriandoNovaTarefa === true) {
        tarefas_fazer.forEach(tarefa => {
        tarefa.remove();
    })

        tarefas_feitas.forEach(tarefa => {
        tarefa.remove();
    })
        exibirTarefa();
        
    }
    return divTarefa
}

function exibirTarefa () {   
    minhasTarefas.forEach(tarefa => {
        if(tarefa.status === "fazer") {

        const divTarefa = criarTarefa(tarefa, "tarefa_criada", "tarefa_bolinha_fazer");
        tarefas_fazer.append(divTarefa);

        } else {

        const divTarefa = criarTarefa(tarefa, "tarefa_concluida", "tarefa_bolinha_feita");
        tarefas_concluidas.append(divTarefa);
        
    }

});



};


function incluirTarefa (tarefa) {

    if (tarefa.descricaoTarefa.length === 0 || tarefa.descricaoTarefa === ' ') {
        return 
    }
    minhasTarefas.push(tarefa);
}

incluir_desktop.addEventListener("submit", (event) => {
    event.preventDefault();


    const tarefa_Criada_Valor = tarefa_Desktop.value
    const tarefa_Criada = {
        descricaoTarefa:tarefa_Criada_Valor,
        status:'fazer'
    };

    
    incluirTarefa(tarefa_Criada);


    criarTarefa(tarefa_Criada, "tarefa_criada", "tarefa_bolinha_fazer", true);

    console.log(minhasTarefas)

    tarefa_Desktop.value = "";

});










botao_mobile.addEventListener("click", () => {
    input_mobile.classList.toggle("desativado")
    criarTarefa(tarefas_fazer, "tare_")
});


exibirTarefa();


































