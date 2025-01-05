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
const double = (numbers) => {
    let result = []
    for (const number of numbers) {
        result.push(number * 2)
    }
    return result
}
 console.log(double([1, 2, 4, 56, 70, 101]))

