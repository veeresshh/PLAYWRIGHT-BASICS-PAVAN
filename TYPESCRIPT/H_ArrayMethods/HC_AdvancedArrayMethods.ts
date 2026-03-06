// =========  forEach(), map(), filter(), reduce(), some(), every() ==============


// 1. ForEach() - Executes a function once for each array element

// It Takes function as a parameter
// Syntax: array.forEach(function(currentValue, index, array){})

// CurrentValue     - The Current Element Being Processed in the Array
// Index (optional) - The Index of the Current Element Being Processed in the Array
// Array (optional) - The Array the Current Element Belongs To.

// Ex 1: Get Index of all the Fruits Along with Value.

let SampleFruits: string[] = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

console.log("Printing fruits along with Index using for-in:");

for (let i in SampleFruits) {
    console.log(i, SampleFruits[i]);
}

console.log("Printing fruits along with Index using forEach():");

SampleFruits.forEach(function (element, index) {

    console.log(`${index}. ${element}`);
});


//Using Arrow Function

SampleFruits.forEach((element, index) => {

    console.log(`${index} , ${element}`);

}
);


// Ex 2: Print all Fruits Names in UpperCase:

console.log("All fruits in UPPERCASE:");
SampleFruits.forEach((element) => {
    console.log(element.toUpperCase());
});

//=============================================================================


// 2. Map() - Creates a New Array with the Result of Calling the Function on Every Element of an Array

// It Takes function as a parameter.
// Returns the same number of elements that we have in original array.

// Syntax: array.map(function(currentValue, index, array){})


// Ex1: Req: Get square of all the numbers in an array. Ex: [1,2,3] then result should be [1,4,9]

let SecondSampleNumbers: number[] = [1, 2, 3, 4, 5];

let SquaredNumbers = SecondSampleNumbers.map((NUM) => {
    return (NUM * NUM);
});

//SquaredNumbers = SecondSampleNumbers.map((NUM) => NUM * NUM);   //Another Approach

console.log("Squared numbers:", SquaredNumbers);

//Ex2: Double each number  [1,2,3,4,5] --->  [2,4,6,8,10]

let DoubleNumbers = SecondSampleNumbers.map((NUM) => NUM * 2);
console.log("Doubled numbers:", DoubleNumbers);

//=============================================================================


// 3. Filter() - Creates a new Array with all the Elements that Pass/Satisfy the Function

// It Takes function as a parameter.
// Returns Either Same or Fewer number of Elements Compared to Original Array.

// Syntax: array.filter(function(currentValue, index, array){})


// Ex1: Get the only even numbers from an array

let EvenNumbers = SecondSampleNumbers.filter((NUM) => {
    return NUM % 2 === 0;
});
console.log("Even numbers:", EvenNumbers);


// Ex2: Get the only numbers greater than 3 from an array

let FilteredNumbers = SecondSampleNumbers.filter((NUM) => NUM > 3);

console.log("Elements greater than 3:", FilteredNumbers);


//=============================================================================


// 4. Reduce() - Applies a function on every element of an array and returns a single value.

// Syntax: array.reduce(function(accumulator, currentValue, index, array){})

// Accumulator  - The accumulated value from previous iteration
// CurrentValue - The current element being processed

//Ex1: Get the total (sum) of all the elements in an array


// Using Traditional Loop

/*
let Total = 0;

for(let i=0; i<SecondSampleNumbers.length; i++)
{
    Total = Total + SecondSampleNumbers[i];    
}
console.log("Sum of Array elements: " + Total); 
*/


// Using reduce()

// EX 1 - First Approach

let FirstReducedResult = SecondSampleNumbers.reduce((Total, element) => {
    return (Total + element);
}, 0);                                         // 0 is the Default value of Total (Accumulator) - You can add anything - VVIP

// EX 2 - Second Approach

let SecondReducedResult = SecondSampleNumbers.reduce((Total, element) => Total + element, 0);


console.log("Reduced Result (Total of an Array):", FirstReducedResult);
console.log("Reduced Result (Total of an Array):", SecondReducedResult);


//=============================================================================


// 5. Some() - Checks if any Element Satisfies a Condition
// Returns true if at least one element passes the condition, else false - Boolean Value

// Syntax: array.some(function(currentValue, index, array){})


//Ex1: 

let HasNegative = SecondSampleNumbers.some((element) => element < 0);
console.log("Does numbers have any negative numbers?", HasNegative);

//Ex2:

let HasPositive = SecondSampleNumbers.some((element) => element > 0);
console.log("Does numbers have any positive numbers?", HasPositive);


//=============================================================================


// 6. Every() - Checks if all elements satisfy a condition
// Returns true if all elements pass the condition, else false

// Syntax: array.every(function(currentValue, index, array){})


//Ex1: 

let AllEven = SecondSampleNumbers.every((element) => element % 2 === 0);
console.log("Are all numbers even?", AllEven);

//Ex2:

let AllGreathanOne = SecondSampleNumbers.every((element) => element > 1);
console.log("Are all Greater Than One?", AllGreathanOne);

//Ex3:

let AllPositive = SecondSampleNumbers.every((NUM) => NUM > 0);
console.log("Are all numbers positive?", AllPositive); 