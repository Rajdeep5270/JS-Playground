let arr = [10, 20, 30, 40, 50, "hello", 70, 80, 90, "Rajdeep Singh Shekhawat"];


// includes find the element who is there in the array or not and you can provide index also from where to start 
// value → element you want to find
// fromIndex → index from where search should start
let isFind = arr.includes(50, 3);
console.log(isFind);

let newArr = arr.map((ele, _, arr) => {
    return ele * 2;
});

// map() transforms every element, filter() selects elements based on a condition.

console.log(`\n\n\nMap Method`);

newArr.forEach(ele => {
    console.log(`${ele}`);
});

let newArray = arr.filter((ele, i, _) => {
    if (i > 2) {
        return ele;
    }
});

console.log(`\n\n\n Filter Method`);


newArray.forEach(ele => {
    console.log(`${ele}`);
})
