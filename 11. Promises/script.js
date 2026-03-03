// this is my promise using then catch first i make a promise then i use it 



// const myNewPromise = new Promise((resolve, reject) => {
//     let age = 15;

//     if (age >= 18) {
//         return resolve("You can vote.");
//     }
//     else {
//         return reject("You can not vote.")
//     }
// })


// myNewPromise.then((res) => {
//     console.log(res);
// }).catch(e => {
//     console.log(e);
// })

// const fetchData = new Promise((resolve, reject) => {
//     let data = false;

//     if (data) {
//         resolve({ id: 1, Name: "Rajdeep" });
//     }
//     else {
//         reject("Something went wrong.");
//     }
// })

// fetchData.then((data) => {
//     console.log(data);
// }).catch(e => {
//     console.log(e);
// })

function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age > 18) {
            resolve({
                age: age,
                message: "You can vote..."
            });
        }
        else {
            reject({
                age: age,
                message: "You cannot vote..."
            });
        }
    })
}

getCheckedAge();
async function getCheckedAge() {
    try {
        const result = await checkAge(15);

        console.log(result);
    }
    catch (e) {
        console.error("Error : ", e);
    }
}