//Para o cadastro será necessário inserir uma data.
//Por padrão o sistema irá pegar a data atual (dia em que se está realizando o cadastro.)
//Caso essa data seja posterior ao dia o envento, o cadastro se encerra.

//Data do evento = Quinta-feira, 03 de Fevereiro de 2022.
//

let listaDeParticipantes = ["Helena", "Fábio", "Pedro", "Paulo", "Fernando", "Vinícius", "Wilson", "Nelson", "Carlos"];
let participantes = listaDeParticipantes.length;
let listaPart = listaDeParticipantes.length

let quantidaDeParticipantes = listaDeParticipantes.length

let idadeParticipante = 17

let = dataAtual = new Date();
function formatData(dataAtual){
    let newDate = new Date(dataAtual);
    return `${newDate.getDate()}/${newDate.getMonth()+01}/${newDate.getFullYear()}`
}
console.log("Data atual", formatData(dataAtual))

let = dataDoEvento = new Date("2022-02-03")
if (dataAtual < dataDoEvento) {
    console.log("Data de cadastro válida!")
    if (idadeParticipante >= 18){
        console.log("Idade permitida!")
        console.log("Lista de Participantes:")
        for (let indice = 0; indice < listaPart; indice++) {
            const listaTotal = listaDeParticipantes[indice];
            console.log(listaTotal)
        }
            console.log("Quantidade total de participantes", participantes);
            if (quantidaDeParticipantes < 100) {
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

//Fim do código de cadastro de participantes do envento.
//Sem input.