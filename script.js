// console.log('hello world')
// console.log('rodgers')
//
// // variables
// name = "rodgers"
// console.log(name)

// operators
// food = 200
// tipPercentage = 0.2
// tipAmount = food * tipPercentage
//
// console.log(tipAmount)
// Import the prompt-sync module
const prompt = require('prompt-sync')();
// user input
food = Number(prompt('How much was the  food?'))
tipPercentage = Number(prompt('tip %?') / 100)
tipAmount = food * tipPercentage

total = food + tipAmount

console.log('tip Amount:', tipAmount)
console.log('total:', total)

// data types (strings , numbers)