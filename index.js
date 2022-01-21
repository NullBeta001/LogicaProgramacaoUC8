//Para o cadastro será necessário inserir uma data.
//Por padrão o sistema irá pegar a data atual (dia em que se está realizando o cadastro.)
//Caso essa data seja posterior ao dia o envento, o cadastro se encerra.

//Data do evento = Quinta-feira, 03 de Fevereiro de 2022.
//

const entrada = require('prompt-sync')()
let teclado

let listaDeParticipantes = ["Helena", "Fábio", "Pedro", "Paulo", "Fernando", "Vinícius", "Wilson"];
let participantes = listaDeParticipantes.length;
let listaPart = listaDeParticipantes.length

let dataAtual = new Date();

let idadeAproximada = 18

let quantidadeParticipantes = participantes

function formatData(dataAtual){
    let newDate = new Date(dataAtual);
    return `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
}

console.log("Data atual", formatData(dataAtual))

let = dataDoEvento = new Date("2022-02-03")
if (dataAtual < dataDoEvento) {
    console.log("Data de cadastro válda!")
  
    teclado = entrada("Insira a sua idade: ");

    console.log(`teclado = ${teclado}`)

    if (teclado >= 18) {
            console.log("Idade permitida!")
            console.log("Lista de Participantes:")
            for (let indice = 0; indice < listaPart; indice++) {
                const listaTotal = listaDeParticipantes[indice];
                console.log(listaTotal)
            }
                console.log("Quantidade total de participantes", participantes);
             if (quantidadeParticipantes < 100) {
            console.log("Seu cadastro foi concluido com sucesso!")

        }else{
            console.log("Quantidade máxima de participantes atingida, cadastro cancelado!")
        }
    }else{
        console.log("Idade minima de 18 anos, cadastro cancelado!")
    }
}else{
    console.log("Data de cadastro inválida, cadastro cancelado!")
}

//Também foi feito um código sem o input, para que se for preciso.
//Código sem input = Noinput.js