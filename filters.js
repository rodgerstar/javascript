// filters
// filter return an array with mapping conditions
// give numbers greater than > 3
const  filter = (numbers, greaterThan) => {
    let result = []
    for (const number of numbers) {
        if (number > greaterThan) {
            result.push(number)
        }
    }
    return result
}
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(nums.filter(num => num >= 5 || num < 3))

const actors = [
    {name: 'rodger', netWorth: 20000000},
    {name: 'mercy', netWorth: 10000000},
    {name: 'ozil', netWorth: 9000000},
]
// console.log(actors.filter(actor => actor.netWorth > 5000))

// reduce

// const nums = [1, 2, 3, 4]
// const results =nums.reduce(function (previousValue, next) {
//     return previousValue + next
// })
// console.log(results)

// can also be simplified further
function multiply(a, b) {
    return a * b
}
const nums = [1, 2, 3, 4]
const reults = nums.reduce(multiply) // also be written as nums.reduce((a, b) => a * b) - multiply

console.log(reults)


