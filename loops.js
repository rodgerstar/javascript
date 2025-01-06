// const groceries = ['banana', 'apple', 'lemon', 'avocado', 'kales',
//     'banana', 'apple', 'lemon', 'avocado', 'kales',
//     'banana', 'apple', 'lemon', 'avocado', 'kales']
// // console.log(groceries[0])
// // console.log(groceries[1])
// // console.log(groceries[2])
// // console.log(groceries[3])
// // console.log(groceries[4])
//
// for (const grocery of groceries) {
//     console.log(grocery)
// }
// let result = []
//
// const numbers = [2, 45, 67, 9, 7, 5, 87, 74, 65, 9, 54, 3, 51]
// for ( const number of numbers) {
//     result.push(number * 2)
// }
// console.log(result)
// const double = (numbers) => {
//     let result = []
//     for (const number of numbers) {
//         result.push(number * 2)
//     }
//     return result
// }
//  // console.log(double([1, 2, 4, 56, 70, 101]))
// const prompt = require('prompt-sync')();
//
// const howManyLetters = () => {
//
//
//     let result = 0;
//
//     // Use a for-in loop to iterate over the indexes
//     for (const index in phrase) {
//         console.log(Number(index) + 1);
//         result = Number(index) + 1
//     }
//
//     return { result };
// };
//
// // const phrase = prompt('write your phrase ');
// //
// // console.log(howManyLetters(phrase));
//
// const  sumArray = (numbers) =>{
//     let result = 0;
//     // for loop
//     for (const number of numbers) {
//         console.log(number)
//         result = result + number
//     }
//     return {result}
// }
//
// // const nums = [1, 2, 3, 4, 6, 7]
// // console.log(sumArray(nums))
//
// const max = (numbers) => {
//     let result = numbers[0]
// // loop
//     for (const number of numbers) {
//         if (number > result) {
//             result = number
//         }
//     }
//
//     return {result}
// }
 // console.log(max([2,5,6,9,3,11]))

const lFrequency = (phrase) => {
    console.log(phrase)
    // make frequency object
    let frequency = {}
    for (const letter of phrase) {
        //check if letter exist in frequency
        if (letter in frequency) {
            //if exist then increment value by one
            frequency[letter] += 1 // can also use ++
            // otherwise set value to one.
        }else {
            frequency[letter] = 1
        }
    }
    return frequency;
};
console.log(lFrequency('i want to style this in my css'));