// console.log('hello world')
// console.log('rodgers')
//

// const -> the value cannot be changed
// let -> the value can be changed (recommended beginner level)
// var -> the value can be changed

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
// const prompt = require('prompt-sync')();
// // user input
// food = Number(prompt('How much was the  food?'))
// tipPercentage = Number(prompt('tip %?') / 100)
// tipAmount = food * tipPercentage
// tipAmount = Math.floor(tipAmount)
//
// total = food + tipAmount
//
// console.log('tip Amount:', tipAmount)
// console.log('total:', total)

// data types (
// strings 'jane', 'hello'
//  numbers 1,2,3,4,5,67
//  arrays []
//  objects {}
//  boolean  true / false )
//
// number = Math.random() * 3
// number = Math.floor(number)
// console.log(number)

// baby weather app
// conditionals

const prompt = require('prompt-sync')();

let weather = prompt('How is the weather')

if (weather === 'rainy'){
    console.log('Grab your umbrella')
}else {
    console.log('Wear your sunglasses')
}
