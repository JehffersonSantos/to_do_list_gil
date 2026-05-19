function calculo ({minhaOperacao, primeiroNumero, segundoNumero}) {
    switch(minhaOperacao) {
        case "soma":
            return primeiroNumero + segundoNumero
        case "multiplicacao":
            return primeiroNumero * segundoNumero
        case "divisao":
            return primeiroNumero / segundoNumero
        case "subtracao":
            return primeiroNumero - segundoNumero
    };
};

function executar ({minhaOperacao, primeiroNumero, segundoNumero}) {
    console.log(calculo({minhaOperacao, primeiroNumero, segundoNumero}))
}

executar({minhaOperacao:"subtracao", primeiroNumero:5, segundoNumero:10})



const formula1 = {
    minhaOperacao:"subtração",
    primeiroNumero:5,
    segundoNumero:10
}



function calculo ({formula1}) {
    switch(formula1.minhaOperacao) {
        case "soma":
            return formula1.primeiroNumero + formula1.segundoNumero
        case "multiplicacao":
            return formula1.primeiroNumero * formula1.segundoNumero
        case "divisao":
            return formula1.primeiroNumero / formula1.segundoNumero
        case "subtracao":
            return formula1.primeiroNumero - formula1.segundoNumero
    };
};

function executar (formula1) {
    console.log(calculo({formula1}))
}

executar(formula1)







const formula = {
    operacao:'dividi',
    numero:[
        {
            numero1:10,
            numero2:20
        },
        {
            numero3:30,
            numero4:40
        }
    ]
}

console.log(typeof(formula))

function operacao (formula) {
    console.log(formula.numero[1])
    switch (formula.operacao) {
        case 'somar':
            console.log(formula.numero[0].numero1 + formula.numero[0].numero2);
            break
        case 'subtrair':
            console.log(formula.numero[0].numero1 - formula.numero[0].numero2);
            break
        case 'multiplicar':
            console.log(formula.numero[0].numero1 * formula.numero[0].numero2);
            break
        case 'dividir':
            console.log(formula.numero[0].numero1 / formula.numero[0].numero2)
            break
        default: 
            console.log("coloque uma operação valida")
    }
}

function executar (formula) {
    operacao(formula)
}

executar(formula)










const numero = {
    primeiroNumero:50,
    segundoNumero:20
}

function calculadora ({minhaFuncao}, {primeiroNumero, segundoNumero}) {
    console.log(numero.primeiroNumero)
    switch (minhaFuncao) {
        case 'soma':
            return primeiroNumero + segundoNumero
        case 'subtracao':
            return primeiroNumero - segundoNumero
        case 'multiplicacao':
            return primeiroNumero * segundoNumero
        case 'divisao':
            return primeiroNumero / segundoNumero
        default:
    }
}

function executar ({minhaFuncao}, {primeiroNumero, segundoNumero}) {
    console.log(calculadora({minhaFuncao}, {primeiroNumero, segundoNumero}))
}

executar({minhaFuncao:'divisao'}, numero.primeiroNumero, numero.segundoNumero, )



console.log(numero.primeiroNumero)

const numeros = [
    1,
    2,
    3,
    4,
    5,

]

console.log(numeros)



function somar (numeros) {
    console.log(sum.apply(...numeros))
}

somar(numeros)
































function calculo ({minhaFuncao}, {primeiroNumero, segundoNumero}) {

    switch (minhaFuncao) {
        case'soma':
            const respostaSoma = primeiroNumero + segundoNumero;
            return respostaSoma;

        case'subtrair':
            const respostaSubtrair = primeiroNumero - segundoNumero;
            return respostaSubtrair;

        case 'multiplicar':
            const respostaMultiplicar = primeiroNumero * segundoNumero
            return respostaMultiplicar;

        case 'divisao':
            const respostaDivisao = primeiroNumero / segundoNumero
            return respostaDivisao;
    }

}


function executar ({minhaFuncao}, {primeiroNumero, segundoNumero}) {
    console.log(calculo({minhaFuncao},{primeiroNumero, segundoNumero}))
}


executar({minhaFuncao:'soma'}, {primeiroNumero:5, segundoNumero:10})

// const numeros = {
    
// }

// console.log(numeros)







































function soma ({primeiroNumero, segundoNumero}) {
    const calculo = primeiroNumero + segundoNumero
    return calculo
}

function substrair({primeiroNumero, segundoNumero}) {
    const calculo = primeiroNumero - segundoNumero
    return calculo
}

function operacao ({minhaOperacao}, {primeiroNumero, segundoNumero}) {
    switch (minhaOperacao) {
        case'divisao':
            const calculoDivisao = primeiroNumero / segundoNumero
            return calculoDivisao
            
        case'multiplcacao':
            const calculoMultiplicao = primeiroNumero * segundoNumero
            return calculoMultiplicao
    }
}

function executar ({minhaOperacao}, {primeiroNumero, segundoNumero}) {
    if (minhaOperacao === 'soma') {
        console.log(soma({primeiroNumero, segundoNumero}))
    };

    if(minhaOperacao === 'subtrair') {
        console.log(substrair({primeiroNumero, segundoNumero}))
    };

    console.log(operacao({minhaOperacao}, {primeiroNumero, segundoNumero}))

}

executar({minhaOperacao:'multiplcacao'}, {primeiroNumero:53, segundoNumero:27})



const objeto = {
    nome:'jefferson',
    idade:31
}













































































function somar ({primeiroNumero, segundoNumero}) {
    console.log("Somei")
    const soma = primeiroNumero + segundoNumero
    return soma
}

function subtrair ({primeiroNumero, segundoNumero}) {
    const subtracao = primeiroNumero - segundoNumero
    return subtracao
}

function multiplicar ({primeiroNumero, segundoNumero}) {
    const multiplicacao = primeiroNumero * segundoNumero
    return multiplicacao
}

function divisao ({primeiroNumero, segundoNumero}) {
    const divisao = primeiroNumero / segundoNumero
    return divisao
}


function executar ({minhaFuncao}, {primeiroNumero, segundoNumero}) {
    console.log(primeiroNumero, segundoNumero)
    if(minhaFuncao === 'somar') {
        const calculo = somar({
            primeiroNumero, segundoNumero
        });
        console.log(calculo)
    }

    if (minhaFuncao === 'subtrair') {
        const calculo = subtrair({
            primeiroNumero, segundoNumero
        })
        console.log(calculo)
    }

    if(minhaFuncao === 'multiplicao') {
        const calculo = multiplicar({
            primeiroNumero, segundoNumero
        })
        console.log(calculo)
    }


    if(minhaFuncao === 'divisao') {
        const calculo = divisao({
            primeiroNumero,
            segundoNumero
        });
        console.log(calculo)
    }


};

executar({minhaFuncao:'divisao'}, {primeiroNumero:10, segundoNumero:2})


function contar (a, b) {
    const contado = a + b
    return contado
}

console.log(contar(5, 10))


const nome = 'jefferson'
const pessoa = {
    nome:'Jefferson',
    idade:31
}


console.log(pessoa.nome, pessoa.idade)


console.log(nome.valueOf())








































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
