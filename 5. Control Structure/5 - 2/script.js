// Q.1 Write a Program to find the maximum number from the given 3 numbers using nested if else.Also, draw a Flowchart in your book.

// let a = +prompt("Enter first value");
// let b = +prompt("Enter second value");
// let c = +prompt("Enter third value");

// if (a == b && b == c && a == c)
//     console.log("All values are same.");
// else if (a == b || a == c || b == c)
//     console.log("Both values are same.");
// else {
//     if (a > b) {
//         if (a > c)
//             console.log(`${a} is max`);
//         else
//             console.log(`${b} is max`);
//     }
//     else {
//         if (b > c)
//             console.log(`${b} is max`);
//         else
//             console.log(`${c} is max`);
//     }
// }

// Q.2 Write a Program to find the minimum number from the given 4 numbers using nested if else. Also, draw a Flowchart in your book.

let a = +prompt("Enter first value");
let b = +prompt("Enter second value");
let c = +prompt("Enter third value");
let d = +prompt("Enter fourth value");

if (a == b && a == c && a == d && b == c && b == d && c == d)
    console.log("All values are same.");
else if (a == b || a == c || a == d || b == c || b == d || c == d)
    console.log("Both values are same.");
else {
    if (a < b) {
        if (a < c) {
            if (a < d) {
                console.log(`${a} is minimum.`);
            }
            else {
                console.log(`${d} is minimum`);
            }
        }
        else {
            if (c < d) {
                console.log(`${c} is minimum`);
            }
            else {
                console.log(`${d} is minimum`);
            }
        }
    }
    else {
        if (b < c) {
            if (b < d) {
                console.log(`${b} is minimum`);
            }
            else {
                console.log(`${d} is minimum`);
            }
        }
        else {
            if (c < d) {
                console.log(`${c} is minimum`);
            }
            else {
                console.log(`${d} is minimum`);
            }
        }
    }
}