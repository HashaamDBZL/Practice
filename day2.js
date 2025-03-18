//Important Loops

//For in Loop
let person = { FirstName: "Hashaam", LastName: "Ejaz", age: 23, city: "Lahore" };
for (let key in person) {
    console.log(key, ":", person[key]);
}

//For of Loop
let numbers = [10, 20, 30, 40, 50, 60, 70];
for (let num of numbers) {
    console.log(num);
}

//Important Array Functions

let arr = [10, 20, 30];
console.log("Initial State of array")
console.log(arr)
console.log("Shifting with no arguments inside clg")
console.log(arr.shift()); // 10
console.log("After Shifting")
console.log(arr); // [20, 30]
console.log("Unshifting with 10 as arg")
console.log(arr.unshift(10))
console.log("Unshifting with 100 as arg")
console.log(arr.unshift(100))
console.log("Unshifting with 1000 as arg")
console.log(arr.unshift(1000))
console.log("After unshifting")
console.log(arr)
console.log("Now Slicing with arguments 0,2")
console.log(arr.slice(0,2))
console.log("After slicing")
console.log(arr)
//As we can see the array remained unchanged after slicing, however a new array was returned when we called slice method
console.log("Now trying Reduce to sum all numbers (1000 + 100 + 10 + 20 + 30)")
console.log(arr.reduce((acc, num) => acc + num, 0))
console.log("Now trying reduce to find max value in array")
console.log(arr.reduce((acc,num)=> (num > acc ? acc = num : acc), arr[0]))

console.log("Now checking out splice")

let colors = ["red", "green", "blue", "yellow"];
colors.splice(1, 2); // Removing 2 elements from index 1
console.log(colors); 


colors.splice(1, 0, "green", "blue"); // Insert elements at index 1
console.log(colors); // Output: ["red", "green", "blue", "yellow"]


colors.splice(1, 1, "yellow"); // Replace "green" with "yellow"
console.log(colors);

//Map

let squared = numbers.map(num => num * num);
console.log(squared); // Output: [100, 400, 1600, 2500, 3600, 4900]
console.log(numbers); // Original: [10, 20, 30, 40, 50, 60, 70]

//filter
let greaterThan20 = numbers.filter(num => num > 20);
console.log(greaterThan20); // Output: [30, 40, 50, 60, 70]


//Using map and filter together
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers)

// First using filter to remove odd numbers, then square them using map
let squaredEvens = numbers2.filter(num => num % 2 === 0).map(num => num * num);

console.log(squaredEvens); // Output: [4, 16, 36, 64, 100]



