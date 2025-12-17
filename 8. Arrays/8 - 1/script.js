// Q.1 Write a Program to find the length of a 1D array.
// console.log("Q.1 Write a Program to find the length of a 1D array.");
// let size = +prompt("Enter array size");
// let arr = new Array(size);

// for (let i = 0; i < size; i++) {
//     arr[i] = +prompt(`Enter arr[${i}]`)
// }

// console.log(`Length of array = ${arr.length}`);
// console.log("\n\n\n");

// Q.2 Write a Program to find the average of a 1D array.
// let size = +prompt("Enter array size");
// let arr = new Array(size);
// let sum = 0;

// for (let i = 0; i < size; i++) {
//     arr[i] = +prompt(`Enter arr[${i}]`);
// }

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// let avg = sum / arr.length;

// console.log(`Average = ${avg}`);

// Q.3 Write a Program to perform the addition operation of two 1D arrays & store it in another array. Keep in mind that both array sizes must be the same.

let size = +prompt("Enter number of elements");
let arr1 = new Array(size);
let arr2 = new Array(size);
let arr3 = new Array(size);

for (let i = 0; i < size; i++) {
    arr1[i] = +prompt(`Enter arr1[${i}]`);
};

for (let i = 0; i < size; i++) {
    arr2[i] = +prompt(`Enter arr2[${i}]`);
};

for (let i = 0; i < size; i++) {
    arr3[i] = arr1[i] + arr2[i];
}

arr3.forEach(e => {
    console.log(e);
})