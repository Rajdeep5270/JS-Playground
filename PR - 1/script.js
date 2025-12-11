// 1. celsius program

// let celsius = +prompt("Enter temperature in celsius");

// console.log(`The temperature in fahrenheit ${((celsius * 9 / 5) + 32)}`);

// 2.  gross salary program

// let bSalary = +prompt("Enter your salary");
// let hra = +prompt("Enter your house rent allowance");
// let da = +prompt("Enter your dearness allowance");
// let ta = +prompt("Enter your tax allowance");

// console.log(`Your gross salary ${bSalary + (bSalary * hra / 100) + (bSalary * da / 100) + (bSalary * ta / 100)}`);

// 3. find third angle

// let fAngle = +prompt("Enter first angle");
// let sAngle = +prompt("Enter second angle");

// console.log(`The third angle is ${180 - (fAngle + sAngle)}`);

// 4. swaping without using third variable and without using +-

// let a = +prompt("Enter first value");
// let b = +prompt("Enter second value");

// a = a * b;
// b = a / b;
// a = a / b;

// console.log(`First value ${a} \nSecond value ${b}`);

// Q.5 Write Program to print multiplication table without using any loop.

let n = +prompt("Enter any number");
let s = 1;

function mulTable(n) {
    if (s > 10)
        return;

    console.log(`${n} * ${s} = ${n * s}`);
    s++;
    mulTable(n);
}

mulTable(n);