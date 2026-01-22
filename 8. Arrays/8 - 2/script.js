// Q.1 Write a Program to perform the merge operation of two 1D arrays & store it in another array. Keep in mind that both array sizes can be different.

let size1 = +prompt("Enter array 1 size");
let arr1 = new Array(size1);

for (let i = 0; i < size1; i++) {
    arr1[i] = +prompt(`Enter array1[${i}]`);
}

let size2 = +prompt("Enter array 2 size");
let arr2 = new Array(size2);

for (let i = 0; i < size2; i++) {
    arr2[i] = +prompt(`Enter array2[${i}]`);
}

let size3 = size1 + size2;
let arr3 = new Array(size3);
for (let i = 0; i < size1; i++) {
    arr3[i] = arr1[i];
};

for (let i = 0; i < size2; i++) {
    arr3[i + size1] = arr2[i];
}

arr3.forEach(e => {
    console.log(e);
})