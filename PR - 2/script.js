// universal variables 
let n = prompt("Enter number");
let i = 1;


// 1.Write javascript program to print 1 to n number print using while loop .
// while (i <= n) {
//     console.log(i);
//     i++;
// }

// 2.Write javascript program to print 1 to n number and find even number using while loop .
// while (i < n) {
//     if (i % 2 == 0) {
//         console.log(i)
//     };
//     i++;
// }

// 3.Write javascript program to print 1 to n and number find odd number using do while loop .
// do {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++;
// } while (i <= n);


// 4.Write javascript program to print 1 to n number print using for loop .
// for (let i = 0; i <= n; i++) {
//     console.log(i);
// }

// 5.Write javascript program to print 1 to n number and find even number using for loop .
// for (let i = 0; i <= n; i++) {
//     if (i % 2 == 0) console.log(i);
// }

// 6.Write javascript program to print 1 to n number  and all number sum using do while loop .
// let sum = 0;
// do {
//     console.log(i);
//     sum = sum + i;
//     i++;
// } while (i <= n);

// console.log(`Sum of ${n} is ${sum}`);


// 7.Write javascript program to print multiplication table of any number using while loop.
// do {
//     console.log(`${n} * ${i} = ${n * i}`);
//     i++;
// } while (i <= 10);

// 13.Write javascript program to print fibonacci of a number using while loop.
// let a = 0;
// let b = 1;
// while (i <= n) {
//     console.log(`${a}`);
//     let next = a + b;
//     a = b;
//     b = next;
//     i++;
// }

// 10.Write javascript program to calculate factorial of a number using while loop.
let fact = 1;
for (let i = n; i >= 1; i--) {
    fact = fact * i;
}

console.log(`Factorial of ${n} is ${fact}`);