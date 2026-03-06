// Method Overloading and Constructor Overloading in TypeScript

class Calculator {

    // Constructor overloading

    constructor();                              // Default Constructor

    constructor(a: number, b: number);            // Parameterized Constructor

    constructor(a?: number, b?: number) {

        if (a !== undefined && b !== undefined) {
            console.log("Sum of a & b: ", (a + b));
        }
        else {
            console.log("Default constructor called...")
        }
    }


    // Method overloading

    Add(a: number, b: number): number

    Add(a: number, b: number, c: number): number

    Add(a: number, b: number, c?: number): number {

        if (c !== undefined) {
            return a + b + c;
        }
        return a + b;
    }


}

// Usage


//Constructor overloading

let FirstCalculator = new Calculator();
let SecondCalculator = new Calculator(10, 20);


// Method Overloading

console.log("Adding 2 numbers from FirstCalculator:", FirstCalculator.Add(10, 20));
console.log("Adding 3 numbers from FirstCalculator:", FirstCalculator.Add(10, 20, 30));


console.log("Adding 2 numbers from SecondCalculator:", SecondCalculator.Add(10, 20));
console.log("Adding 3 numbers from SecondCalculator:", SecondCalculator.Add(10, 20, 30));


