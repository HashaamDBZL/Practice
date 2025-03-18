function getUser(userId, callback) {
    setTimeout(() => {
        console.log("User data fetched");
        callback({ id: userId, name: "John" });
    }, 1000);
}

function getOrders(user, callback) {
    setTimeout(() => {
        console.log(`Orders fetched for ${user.name}`);
        callback(["Order1", "Order2"]);
    }, 1000);
}

function processPayment(order, callback) {
    setTimeout(() => {
        console.log(`Payment processed for ${order}`);
        callback("Payment Success");
    }, 1000);
}

// Callback Hell (Nested Callbacks)
// getUser(1, (user) => {
//     getOrders(user, (orders) => {
//         processPayment(orders[0], (status) => {
//             console.log(status);
//         });
//     });
// });

// the above is an example of callback hell
//However we can improve it by using .then() i.e. Promises

function getUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User data fetched");
            resolve({ id: userId, name: "John" });
        }, 1000);
    });
}

function getOrders(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Orders fetched for ${user.name}`);
            resolve(["Order1", "Order2"]);
        }, 1000);
    });
}

function processPayment(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Payment processed for ${order}`);
            resolve("Payment Success");
        }, 1000);
    });
}

// Promise Chaining
// getUser(1)
//     .then(getOrders)
//     .then((orders) => processPayment(orders[0]))
//     .then((status) => console.log(status))
//     .catch((err) => console.error(err));


//Best way to do it is to use Async Await introduced in ES8
async function process() {
    try {
        // const user = await getUser(1);
        // const orders = await getOrders(user);
        // const status = await processPayment(orders[0]);
        // console.log(status);
    } catch (error) {
        console.error(error);
    }
}

process();


let original = { name: "Alice", address: { city: "NY" } };
let shallowCopy = { ...original }; // Using the spread operator

shallowCopy.address.city = "LA"; // Modifies the nested object in original too!
console.log(original.address.city);
//As we can see i tried to use the spread operator to create a copy of the obj
//However since it was a nested object it only copied the top level and nested objects were saved as references
//This leads to modification in the original object
//To create a deep copy we can use structured clone
let original2 = { name: "Alice", address: { city: "NY" } };
let deepCopy = structuredClone(original2);

deepCopy.address.city = "LA"; // Changes only the copy
console.log(original2.address.city); // "NY" (Original remains unchanged)


//Cant show higher order components since using simple js


//3 Types of errors

// let num = 5;
// num(); 
//The above throws a type error because num is not a function

console.log(age); 
let age = 25;
//the above throws a ReferenceError because age is not initialized at time of it being accessed

// function sayHello {
//     console.log("Hello");
// } 
// this throws a SyntaxError bevcause its Missing parentheses
