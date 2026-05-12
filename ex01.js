const readline = require("readline-sync")

let número = readline.questionInt('Informe o numero: ')

if (número > 0){
    console.log('')
    console.log(`${número} e maior que zero`)
    console.log('')
    console.log('Seu numero e positivo')
} else if (número < 0){
    console.log(`${número} e menor que zero`)
    console.log('')
    console.log('Seu número e negativo')
} else {
    console.log('')
    console.log('Seu número e zero')
}

