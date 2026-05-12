const readline = require("readline-sync")

let compra = readline.questionInt('Quanto custa a sua compra: ')

let total

if (compra > 500){
    console.log('')
    console.log(`Sua compra deu: ${compra}`)
    console.log('')
    console.log('Seu desconto e de 20%')
    console.log('')
    total = compra - (compra * 0.2)
    console.log(`O valor final foi: ${total} `)
} else if (compra > 200){
    console.log('')
    console.log(`Sua compra deu: ${compra}`)
    console.log('')
    console.log('Seu desconto e 10%')
    console.log('')
    total = compra - (compra * 0.1)
    console.log(`O valor final foi: ${total}`)
} else {
    console.log('')
    console.log('sua compra não teve desconto')
    console.log('')
    console.log(`Sua compra deu: ${compra}`)
}

