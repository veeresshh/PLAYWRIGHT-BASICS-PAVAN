// Topic:  TypeScript Variables 
// Syntax of variable declaration:

// keyword(var/let/const) variablename : datatype(optional) = value

// Example - var age: number = 25 [ With datatype ]
//         - var age = 25         [ Without datatype - TypeScript infers datatype based on the assigned value ]


// Usage of different keywords:

// var   -  We do not use this in Modern JS/TS. Avoid var because it has function scope and can lead to unexpected issues.
// let   -  Use let when you need a variable that can change.
// const -  Use const when the variable value should not change.



// =======================================
// 1. Scope : Function Scope vs. Block Scope
// =======================================

// Example 1: var (Function Scope)

function varScope() {

    if (true) {
        var msg = "Hello, World!";
    }
    console.log(msg); // Works! (Function-Scoped)
}

varScope();   // Calling Function



// Example 2: let and const (Block Scope)

function blockScope() {

    if (true) {

        let msg = "Hello, let!";
        const greet = "Hello, const!";

        console.log(msg);     // Allowed within the same scope
        console.log(greet);   // Allowed within the same scope
    }
    // console.log(msg);      // Error: msg is not defined
    // console.log(greet);    // Error: greet is not defined
}

blockScope();


// Example 3: Scope Difference (Function vs Block Scope)

function scopeDiff() {

    if (true) {

        var num1 = 10;
        let num2 = 20;
        const num3 = 30;

        console.log(num1); // Works: (Function-Scoped)
        console.log(num2); // Works: (Block-Scoped)
        console.log(num3); // Works: (Block-Scoped)
    }

    // console.log(num1); // Works (function-scoped)
    // console.log(num2); // Error: num2 is not defined (block-scoped)
    // console.log(num3); // Error: num3 is not defined (block-scoped)
}

scopeDiff();


// =======================================
// 2. Value Assignment/Initialize at Declaration
// =======================================

// Example 1: var can be Declared without Initialization

var x;
console.log(x);     // Output: undefined

x = 30
console.log(x);     // Output: 30


// Example 2: let can also be Declared without Initialization

let y;
console.log(y);     // Output: undefined

y = 60;
console.log(y);     // Output: 60

// Example 3: const must be Initialized at Declaration

// const z;         // Error: Missing initializer in `const` declaration

const z = 90;       // Works
console.log(z);



// =======================================
// 3. Re-declaration 
// =======================================

//var               - Allows the Re-Declaration
//let and const     - Not Allows the Re-Declaration (Making Code Safer)


// Example 1: var Allows Re-Declaration

var city = "New York";
var city = "Los Angeles";     // var Allows Re-Declaration in the Same Scope, Which can lead to Accidental Overwriting.

console.log(city);            // Los Angeles 



//Example2 : let (Not Allows Re-Declaration)

let country = "USA";
//let country = "Canada";   // Error: Cannot Re Declare Block-Scoped Variable 'country'

console.log(country);



//Example 3: const (Not Allows Re-Declaration)

const planet = "Earth";
//const planet = "Mars";    // Error: Cannot Re Declare Block-Scoped Variable 'planet'

console.log(planet);


// =======================================
// 4. Re-Assignment / Re-Initialization
// =======================================

//var and let   - Re-Assignment Allowed
//const         - Re-Assignment Not Allowed (Only constants allowed- cannot change the value)

// Example 1: var Allows Re-Assignment

var age = 25;
age = 30; // Allowed
console.log(age); // 30



// Example 2: let Allows Re-Assignment

let score = 50;
score = 60; // Allowed
console.log(score); // 60



// Example 3: const Does not Allow Re-Assignment

const pi = 3.14;
// pi = 3.14159;  // Error: Assignment to constant variable
console.log(pi);




// =======================================
// 5. Hoisting 
// ======================================


//Example1 : var (Hoisted with undefined) , let and const (Not Initialized)

//console.log(a);       // Undefined (var is hoisted)
var xy = 10;
console.log(xy);


//console.log(b);       // ReferenceError : Cannot access 'b' before initialization
let xz = 20;
console.log(xz);


//console.log(c);       // ReferenceError : Cannot access 'c' before initialization
const xc = 30;
console.log(xc)

