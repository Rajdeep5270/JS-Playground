let a = [1, 2, 3, 4, 5, "Hello", "JS"];

// console.log(a);
// pushes a data from back side 
a.push(12);
// removes a data from front sidew 
a.pop();
// removes a data from front side 
a.shift();
// adds a data from front side 
a.unshift(10);

// slice method cuts a piece of array and returns a new array without changing original array 
let newA = a.slice(1, 4);
// splice method cuts a piece of array and return a new array and also modifies new array 
let newArray = a.splice(1, 4);

// for loop
// for (let i = 0; i <= a.length; i++) {
//     console.log(a[i]);
// }

a.forEach((ele, i, array) => {
    console.log(`${i} => ${ele} => ${array}`);
})

newA.forEach((ele, i) => {
    console.log(`${i} => ${ele}`);
})

newArray.forEach((ele, i) => {
    console.log(`${i} => ${ele}`);
})