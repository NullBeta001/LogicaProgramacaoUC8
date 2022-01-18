//Para o cadastro será necessário inserir uma data.
//Por padrão o sistema irá pegar a data atual (dia em que se está realizando o cadastro.)
//Caso essa data seja posterior ao dia o envento, o cadastro se encerra.

//Data do evento = Quinta-feira, 03 de Fevereiro de 2022.
//

let = dataAtual = new Date();
function formatData(dataAtual){
    let newDate = new Date(dataAtual);
    return `${newDate.getDate()}/${newDate.getMonth()+01}/${newDate.getFullYear()}`
}
console.log("Data atual", formatData(dataAtual))

let = dataDoEvento = new Date("2022-02-03")
if (dataAtual > dataDoEvento) {
    console.log("Data de cadastro inválda!")
}else{
    console.log("Data válida")
}

let = dataNascimento = new Date("2005-12-22")
let = dataAtual = new Date();
function formatData(dataNascimento){
    let newDate = new Date(dataNascimento);
    return `${newDate.getDate()+1}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
}
console.log("Data de Nascimento", formatData(dataNascimento))
if (dataAtual - dataNascimento >= 18){
    console.log("Idade permitida!")
}else{
    console.log("Idade mínima 18 anos, cadastro cancelado!")
}