// Scope and Lexical Environment

function outer() {
    let a = "Outer Variable";
    function inner() {
        console.log(a); 
    }
    inner();
}
outer();
// Should access 'a' and not throw any errors due to scope chain
// each execution context also has a reference to outer context and hence can access variables residing in outer context
// inner's context has a reference to outer context and from there it is getting value "Outer"

// console.log(myVar); 
let myVar = "Hello";
//Uncaught ReferenceError: Cannot access 'myVar' before initialization.
// We are inside relevant scope but have not reached declaration of variable indicating we are in Temporal Dead Zone

function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
const increment = counter();
increment(); // 1
increment(); // 2
//The above is an example of a closure i.e. a function alongisde its lexical env i.e. remembers a value even after execution



console.log("Start");
setTimeout(() => console.log("Timeout Callback"), 0);
Promise.resolve().then(() => console.log("Promise Callback"));
console.log("End");

// Above is a demo of the event loop
// Youd think it wouold be sequential but in reality
// it is start then end then async code
// even in async code there is preference for microtask i.e. Promises

