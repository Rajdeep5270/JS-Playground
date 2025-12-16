// Q.1 Write a Program to print 1 to 10 using a do-while loop.
console.log("Q.1 Write a Program to print 1 to 10 using a do-while loop.");

let i = 1;
do {
    console.log(i);
    i++;
} while (i < 11);

console.log("\n\n\n");

// Q.2 Write a Program to print 10 to 1 using a for loop.
console.log("Q.2 Write a Program to print 10 to 1 using a for loop.");;

let j = 10;
while (j > 0) {
    console.log(j);
    j--;
}
console.log("\n\n\n");

// Q.3 Write a Program to print even numbers from 1 to N using a do-while loop.
// console.log("Q.3 Write a Program to print even numbers from 1 to N using a do-while loop.");
// let n = +prompt("Enter any number");
// let k = 1;

// do {
//     if (k % 2 == 0)
//         console.log(k);
//     k++;
// } while (k <= n);

console.log("\n\n\n");


// Q.4 Write a Program to print the Fibonacci series up to N numbers using a for loop.
// console.log("Q.4 Write a Program to print the Fibonacci series up to N numbers using a for loop.");
// let num = +prompt("Enter any number");

// let a = 0, b = 1, c;
// for (let i = 0; i < num; i++) {
//     console.log(a);
//     c = a + b;
//     a = b;
//     b = c;
// }

// Q.5 Write a Program to print the sum of all numbers from 1 to N using for loop.
// console.log("Q.5 Write a Program to print the sum of all numbers from 1 to N using for loop.");

// let n = +prompt("Enter any number");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(`The sum of ${n} = ${sum}`);

// Q.6 Write a Program to print the factorial of number N using for loop.
// console.log("Q.6 Write a Program to print the factorial of number N using for loop.");

// let n = +prompt("Enter number to get factorial");

// let fact = 1;
// for (let i = n; i > 0; i--) {
//     fact *= i;
// }

// console.log(`Factorial of ${n} = ${fact}`);

// Q.7 Write a Program to print the multiplication table of the number N using any type of loop. 
console.log("Q.7 Write a Program to print the multiplication table of the number N using any type of loop.");

let n = +prompt("Enter number to get multiplication table of");

for (let i = 1; i < 11; i++) {
    console.log(`${n} * ${i} = ${n * i} `);
};