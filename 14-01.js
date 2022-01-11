/***************************************************
 * JavaScript for Beginners
 * JS101 - Functions Demo
 *
 * BASICS    : What are Functions?
 * SYNTAX    : Define & invoke your functions
 * NAMING    : Conventions (valid and invalid)
 * PARAMETERS: Inputs (/ arguments)
 * RETURN    : Output (/ result)
 ****************************************************/

// 1. Function Definition
function printHello(name) {
    return "Hello! " + name;
}
console.log(typeof printHello);

// 2. Function Invocation
printHello("Microsoft !");

// 3. Invoke function with no argument
let result = printHello();
console.log(result);

// 4. Look at type of returned results
result = printHello("Microsoft!");
console.log(result);
console.log(typeof(result));