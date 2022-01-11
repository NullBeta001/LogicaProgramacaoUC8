//Enquanto (While)

let contador = 1
while (contador < 20) {
    console.log("Eu sou capaz!")
    contador = contador + 1
}
//Este comando repete a instrução enquanto a condição for verdadeira.
//Quando a condição passa a ser falsa, os comandos do while não são executados.

//Faça enquanto (Do While)

let contador1 = 1
do {
    console.log("Vou conseguir")
    contador1 = contador1 + 1
}
while (contador1 < 10)

//Assim como o while, este comando repete a instrução enquanto a condição for verdadeira.
//Porém a condição é verificada após a instrução do while.
//Portanto, se o contador1 for alterado dentro da instrução, isso afetará a verificação da condição.

//Para (For)

for (contador=0; contador<10; contador++){
    console.log("Concluído com sucesso!")
}