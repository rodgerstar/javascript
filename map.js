[1, 2, 3, 4, 5, 6].map(number => console.log(number))

// double array
// maps loop and return an array
let result = [1, 2, 3, 4, 5, 6].map(number => number * 2)
console.log(result)

const doubleMap = (numbers) => {
    return numbers.map(number => number * 2)
}

console.log(doubleMap([5, 6, 8, 9, 7]))