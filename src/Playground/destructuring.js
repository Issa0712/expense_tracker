// object desrructuring

// const person = {
//     name:'Issa',
//     age: 30,
//     location:{
//         city: 'birmingham',
//         temp: 10
//     }
// }

// const { name = 'Unnanonympus', age } = person;
// const { city, temp:temperature } = person.location

// console.log(`${name} is ${age} years old`)

// if(city && temperature) {
//     console.log(`Its ${temperature} degrees in ${city}`)
// }

// const Book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holliday',
//     publisher: {
//         name: 'Penguine'
//     }
// }

// const {name: publisherName = 'self-published'} = Book.publisher 

// console.log(publisherName)

//ARRAY DESTRUCTURING

const address = ['3 Aston Court', 'west brom', 'Birmingham', 'B71 3JP']
const [, area, city] = address

console.log(`${area} is where i live its in ${city}`)

const item = ['coffee', '2.00', '2.50', '2.75']
const [drink, ,price] = item

console.log(`a medium ${drink} costs ${price}`)