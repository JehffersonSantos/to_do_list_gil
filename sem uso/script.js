const botao = document.querySelector(".incluir");
const incluirTarefaMobile = document.querySelector(".criar_tarefa_botão");
const incluirTarefaDesktop = document.querySelector(".criar_tarefa")
const todas_tarefas = document.querySelector(".tarefas_fazer");


const tarefasCriadas = [
    "Go Shopping",
    "Short exercise",
    "Meditation",
    
]

const tarefasConcluidas = [
    "Reading"
]

let texto_digitado_mobile = incluirTarefaMobile.value

function incluirTarefa(array, texto) {
    
    if(texto != "") {
        array.push(texto)
        return array
    }
    console.log("coloque um texto")


}

botao.addEventListener('click', () => {

    let texto_digitado_mobile = incluirTarefaMobile.value





    // if(texto_digitado_mobile === "") {
    //     console.log("Por favor coloque um texto")
    // } else {

    //     tarefasCriadas.push(texto_digitado_mobile)
    // }
    // console.log(reescrito);
    // console.log(texto_digitado_mobile)

    incluirTarefa(tarefasCriadas, texto_digitado_mobile)
    texto_digitado_mobile = ""
    console.log(texto_digitado_mobile)
    console.log(tarefasCriadas)


    incluirTarefaMobile.classList.toggle("desativado" )

}

)


console.log(tarefasCriadas)

function mostrarTarefas () {

    for ( let i = 0; i < tarefasCriadas.length; i++) {
            todas_tarefas.innerHTML += 
            `
                <div class="tarefa_criada">
                    <input type="checkbox" class="fazer_bolinha">
                        <label class="nome_tarefa">${tarefasCriadas[i]}</label>
                </div>
            `
        console.log(tarefasCriadas)
    }
    
}

mostrarTarefas()







