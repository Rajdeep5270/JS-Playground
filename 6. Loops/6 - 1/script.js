// Q.1 Write a Program to print 1 to 10 using a while loop.

console.log("Q.1 Write a Program to print 1 to 10 using a while loop.");
for (let i = 1; i < 11; i++) {
    console.log(`${i} `);
}
console.log("\n\n\n");

// Q.2 Write a Program to print 10 to 1 using a while loop.

console.log("Q.2 Write a Program to print 10 to 1 using a while loop.");
for (let i = 10; i > 0; i--) {
    console.log(`${i} `);
}
console.log("\n\n\n");

// Q.3 Write a Program to print 1 to N using a while loop.
// console.log("Q.3 Write a Program to print 1 to N using a while loop.");

// let n = +prompt("Enter any number");
// for (let i = 1; i <= n; i++) {
//     console.log(`${i}`);
// }

// console.log("\n\n\n");

// Q.4 Write a Program to print odd numbers from N to 1 using a while loop.
// console.log("Q.4 Write a Program to print odd numbers from N to 1 using a while loop.");
// let a = +prompt("Enter any number");
// let i = a;
// while (i > 0) {
//     if (i % 2 != 0)
//         console.log(i);
//     i--;
// }

// Q.5 Write a Program to print leap years between two given numbers using a while loop.
console.log("Q.5 Write a Program to print leap years between two given numbers using a while loop.");

let fy = +prompt("Enter first year"); // 2024
let sy = +prompt("Enter second year"); // 2034

let i = fy;
while (i <= sy) {
    console.log(i);
    i += 4;
}