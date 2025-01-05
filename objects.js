// Objects {}
// const person = {
//     name: 'rodgers',
//     shirt: 'white'
// }
// // dot . notation
// console.log(person.name)
// console.log(person.shirt)
// // bracket notation []
// console.log(person['name'])
//
// // assign object
// person.phone = '0758023590'
// console.log(person.phone)
// console.log(person)

// es6 arrow function (2 arguments )
// object
// template literals
// methods Math.Floor
const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: 10000000,
        liabilities: 500067.87,
        netWorth: function () {
            return this.assets - this.liabilities
        }
    }
    const intro = `Hi, my name is ${person.name} and color of my shirt is ${person.shirt} and my net worth is
     Ksh ${person.netWorth()}`

    return intro
}

console.log(introducer('rodgers', 'white'))