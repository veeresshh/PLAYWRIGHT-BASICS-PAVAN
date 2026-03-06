/*

 * Tuples in TypeScript:
 * A tuple is a fixed-length array where each element has a specific type.
 * It helps in storing multiple fields of different data types together.
 
 */

// Example 1: Tuple with two values

let PersonTuple: [string, number] = ["Veeresh", 25];

console.log(PersonTuple[0]);          // Output: Veeresh
console.log(PersonTuple[1]);          // Output: 25
console.log(PersonTuple);             // Output: ['Veeresh', 25]

// Example 2: Tuple with multiple values

let TupleUser: [number, string, boolean, number, string];        // Declaring a tuple variable
TupleUser = [1, "Steve", true, 20, "Admin"];                     // Initializing the tuple

console.log(TupleUser);

// Example 3: Iterating over a tuple using a traditional for loop

for (let i = 0; i < TupleUser.length; i++) {
    console.log(TupleUser[i]);
}


// Example 4: Iterating using a 'for...in' loop (index-based iteration)

for (let i in TupleUser) {
    console.log(TupleUser[i]);           // 'i' represents the index of the tuple
}


// Example 5: Iterating using a 'for...of' loop (value-based iteration)

for (let element of TupleUser) {
    console.log(element);                // 'element' represents the actual value
}


// Example 6: Tuples Array (Array of Tuples)

let Students: [number, string][] = [[101, "Smith"], [102, "Scott"], [103, "Mary"]];


console.log(Students.length);            // Output: 3

console.log(Students[0][0]);             // Output: 101
console.log(Students[0][1]);             // Output: Smith
console.log(Students[1][0]);             // Output: 102
console.log(Students[1][1]);             // Output: Scott
console.log(Students[2][0]);             // Output: 103
console.log(Students[2][1]);             // Output: Mary

console.log(Students[0]);                // Output: [101, "Smith"]
console.log(Students[1]);                // Output: [102, "Scott"]
console.log(Students[2]);                // Output: [103, "Mary"]

console.log(Students);                   // Output: [ [ 101, 'Smith' ], [ 102, 'Scott' ], [ 103, 'Mary' ] ]