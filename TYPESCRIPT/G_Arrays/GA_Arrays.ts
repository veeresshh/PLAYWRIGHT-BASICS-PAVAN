/*
  Arrays in TypeScript
  --------------------
  - An array is a special type of variable that stores multiple values.
  - The values can be of the same data type or different data types.
  - Arrays are declared using `[]` or the generic `Array<T>` type.
  - Indexing starts from 0.
  - Arrays are an ordered collection of elements.
*/

// Approach 1: Using Array Literal

let ArrayName: string[] = [];         // Declaration

// Initializing Values Into the Array

ArrayName[0] = "John";      // or ArrayName.push("John");
ArrayName[1] = "Smith";
ArrayName[2] = "Peter";
ArrayName[3] = "Scott";

// Alternative way to declare and initialize an array

let SecondArrayNames: string[] = ["John", "Smith", "Peter", "Scott"];

// Printing the array

console.log(SecondArrayNames);            // Output: [ 'John', 'Smith', 'Peter', 'Scott' ]
console.log(SecondArrayNames[1]);         // Output: Smith
console.log(SecondArrayNames[4]);         // Output: undefined (index out of range)


// Approach 2: Using the generic Array<T> type

let EmpNames: Array<string> = ["John", "Smith", "Peter", "Scott"];   // Only strings allowed
let EmpIds: Array<number> = [101, 102, 103, 104];                    // Only numbers allowed
let Data: Array<string | number> = ["John", "Smith", 101, 102];      // Union type (strings and numbers)
let MixedData: Array<any> = [1, "John", true, null];                 // Any type allowed (multi-type array)

// Example 1: Iterating over an array using a traditional for loop

console.log("Employee Names:");

for (let i = 0; i < EmpNames.length; i++) {
    console.log(EmpNames[i]);
}

// Example 2: Iterating using the 'for...in' loop (indexes)

console.log("Employee IDs:");

for (let Index in EmpIds) {
    console.log(EmpIds[Index]);                // `Index` Represents Array Indices
}

// Example 3: Iterating using the 'for...of' loop (values)

console.log("Data:");

for (let Value of Data) {
    console.log(Value);                       // `Value` Represents Actual Array Elements
}

//Example 4: Passing an Array to the function - Search an element in a n array using function 

function Search(SearchElement: number, NumberArray: number[]): boolean {
    for (let i = 0; i < NumberArray.length; i++) {
        if (NumberArray[i] === SearchElement) {
            return true;                           // Element Found
        }
    }
    return false;                                  // Element not Found
}

let FirstNumberArray: number[] = [10, 20, 30, 40, 50];

console.log(Search(20, FirstNumberArray));               // Output: True
console.log(Search(100, FirstNumberArray));              // Output: False

//Example 5 : A Functions takes an Array and returns an Array

function CapitalizeWords(Array: string[]): string[] {

    let ResultArray: string[] = [];

    for (let i = 0; i < Array.length; i++) {
        ResultArray[i] = Array[i].toUpperCase();
    }
    return ResultArray;
}

let ArrayWords: string[] = ["hello", "world", "typescript"];

console.log(CapitalizeWords(ArrayWords));