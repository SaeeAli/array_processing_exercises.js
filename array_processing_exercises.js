// Exercise 1

// function filterRange(arr, a, b) {
//   return arr.filter(item => (a <= item && item <= b));
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered );

// alert( arr );

// Exercise 2

// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 } 
// let mary = { name: "Mary", age: 28 }

// let users = [ john, pete, mary ]

// let names = users.map(item => item.name);

// alert( names ) // John, Pete, Mary

// Exercise 3

// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 }
// let mary = { name: "Mary", age: 29 }

// let arr = [ john, pete, mary ]

// alert( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28