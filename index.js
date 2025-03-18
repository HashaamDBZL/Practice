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

