const readline = require("readline-sync")

let nota = readline.questionFloat('Nota do aluno: ')

if (nota > 6.9){
    console.log('')
    console.log('O aluno foi aprovado')
} else if (nota <= 5){
    console.log('')
    console.log('O aluno esta reprovado')
} else {
    console.log('')
    console.log('O aluno esta de recuperação')
}

