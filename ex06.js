const readline = require("readline-sync")

let número = readline.questionInt('Qual e o numero que você quer saber a tabuada do 1 até o 10: ')

for(let i = 1; i <= 10; i++){
    console.log(número * i)
}