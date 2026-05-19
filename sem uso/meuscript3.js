const tarefasParaFazer = document.querySelector(".tarefas_fazer");
const tarefasFeitas = document.querySelector(".tarefas_feitas");

const listaTarefas = [
    {
        status:"fazer",
        descricao:"Tomar Banho"
    },
    {
        status:"fazer",
        descricao:"Estudar"
    },
    {
        status:"fazer",
        descricao:"Ir trabalhar"
    },
    {
        status:"feito",
        decricao:"Tirar o lixo"
    },
    
];



listaTarefas.forEach( (tarefa) => {

})


function criarTarefa ({tag = 'div', listaPropriedades = [{nome: '', valor: ''}]}) {
    const tarefaTemporaria = document.createElement(tag);

    listaPropriedades?.forEach(propriedades => {
        tarefaTemporaria.setAttribute(propriedades.nome, propriedades.valor);
    });
    return tarefaTemporaria;


};


criarTarefa({tag:'section', listaPropriedades:[{nome:'Jefferson', valor:'15'}]});









function mostrarTarefa (tarefaCriada, tarefa) {
    const tarefaEscolhida = criarTarefa({tag:'input', listaDeProprietades:[{nome:'for', valor:'teste'}]});

    
}














































function somar ({primeiroNumero, segundoNumero}) {
// Só posso alterar aqui dentro
    console.log("somei");
    console.log(primeiroNumero, segundoNumero);
    const soma = primeiroNumero + segundoNumero;

    return soma;
};

function dividir ({primeiroNumero, segundoNumero}) {
// Só posso alterar aqui dentro
    console.log("Dividi")

    const divisao = primeiroNumero/segundoNumero
    return divisao
};

function multiplicacao ({primeiroNumero, segundoNumero}) {
// Só posso alterar aqui dentro
    const multiplicar = primeiroNumero * segundoNumero
    return multiplicar

};

function substrair ({primeiroNumero, segundoNumero}) {
// Só posso alterar aqui dentro
    const subtracao = primeiroNumero - segundoNumero
    return subtracao
};


function executar ({myFunction, numeros = {numeros:[0], numeros:[1]}}) {
// Só posso alterar aqui dentro
    if(myFunction === 'somar') {
        const calculo = somar(
        {
            primeiroNumero:numeros[0],
            segundoNumero:numeros[1]
        }
    );
        console.log(calculo);
    };

    if(myFunction === 'dividir') {
        const divisao = dividir(
            {
                primeiroNumero:numeros[0],             
                segundoNumero:numeros[1]
            }
        )
        console.log(divisao)
    }

    if(myFunction === 'multiplicao') {
        const multiplicar = multiplicacao(
            {
            primeiroNumero:numeros[0],
            segundoNumero:numeros[1]
            }
        )
        console.log(multiplicar);
    };

    if(myFunction === 'subtrair') {
        const subtracao = substrair({
            primeiroNumero:numeros[0],
            segundoNumero:numeros[1]
        })
        console.log(subtracao)
    }
};

executar({myFunction:'subtrair', numeros:[20,4]});








function somar ({primeiroNumero, segundoNumero}) {
// Só posso alterar aqui dentro
    console.log("somei");


}

function dividir ({primeiroNumero, segundoNumero}) {
// Só posso alterar aqui dentro

}

function multiplicacao ({primeiroNumero, segundoNumero}) {
// Só posso alterar aqui dentro

}

function substrair ({primeiroNumero, segundoNumero}) {
// Só posso alterar aqui dentro

}


function executar ({myFunction, numeros = []}) {
// Só posso alterar aqui dentro
    if(myFunction === 'somar') {
        somar({})
    };
};

executar({myFunction:'somar'});










function mostrarTarefa (paragrafo, tarefa) {

    const tarefaEscolhida = criarTarefa({tag:'input', listaPropriedades:[{nome:'Jucimara', valor:'20'}]});

    // olhar o navegador qual tag eu vou adicionar o elemento
    // R: O elemento é .tarefas_fazer
    // selecionar esse elemento com JS
    // R: const elementoSelecionado = document.querySelector(".tarefas_fazer")
    // Adicionar o novo ao elemento selecionado
    // R: elementoSelecionado.append(tarefaEscolhida)

    const elementoSelecionado = document.querySelector(".tarefas_fazer")
    console.log(tarefaEscolhida)
    console.log(elementoSelecionado)
    elementoSelecionado.append(tarefaEscolhida)

}

    const elementoSelecionado = document.querySelector("section")

    console.log(elementoSelecionado)
    console.log(tarefasFeitas)

mostrarTarefa()


































































function addTaskHandle(e) {
    
}