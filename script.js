// console.log('hello world')
// console.log('rodgers')
//
// // const -> the value cannot be changed
// // let -> the value can be changed (recommended beginner level)
// // var -> the value can be changed
//
// // variables
// name = "rodgers"
// // console.log(name)


// operators
// food = 200
// tipPercentage = 0.2
// tipAmount = food * tipPercentage
// //
// // console.log(tipAmount)
// // Import the prompt-sync module
// // const prompt = require('prompt-sync')();
// // // user input
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

// const prompt = require('prompt-sync')();
//
// let weather = prompt('How is the weather')
//
// if (weather === 'rainy'){
//     console.log('Grab your umbrella')
// }else {
//     console.log('Wear your sunglasses')
// }

// functions
// function say MyName has 0 arguments
// function sayMyName(){
//     console.log('rodgers')
// }

// sayMyName()
// functions
// function say MyName2 has 1 argument called 'name'
// logs 'name' to console
// function sayMyName2(name){
//     console.log('name')
// }
//
// // sayMyName2(rodgers)
//
// function greeting(name) {
//     // greet = 'hi ' + name + ', Nice to meet you';
//     //template literals
//     greet = `hi ${name}, Nice to meet you!`
//     console.log(greet);
// }

// greeting('nuri uuy')


// function sum(a, b) {
//     //return
//     return a + b
// }
//
// console.log(sum(2, 4))

// const prompt = require('prompt-sync')();
// // user input
// function calculateFoodTotal(food, tip){
//     tipPercentage = tip / 100
//     tipAmount = food * tipPercentage
//     tipAmount = Math.floor(tipAmount)
//     total = sum(food, tipAmount)
//     return total
// }
//
// console.log(calculateFoodTotal(169,23))

//arrow functions =>
// arrow function with explicit return
// const sumArrow = (a, b) =>{
//     return a + b
// }
//
// // arrow function with implicit return
// // NOTE: for implicit return, remove curly braces{}
// const sumArrow2 = (a, b) => a + b
//
// console.log(sumArrow2(10, 50))
