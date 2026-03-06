/*
1) Premitive Data Types(Built-in)
Number
String
Boolean
Null
Undefined
Any
Union Type
Void


2) Non-Premitive Data Types(Objects)
Array
Class
Function
Interface
Touple etc..

*/

// 1. NUMBER TYPE - Represents both Integers and Floating-Point Numbers


let OurAge: number = 25;
let Price = 25.5;
let Big = 4234234234;

console.log("Age:", OurAge);    // Age: 30
console.log("Price:", Price);
console.log("Big Number:", Big);

console.log(typeof (OurAge))



// 2. STRING TYPE - Represents Textual Data

/*
1. SingleQuote ('') 
2. DoubleQuote (" ")
3. Backtick(``)
*/

let FirstNameData: string = "John";
let LastNameData: string = 'Kenedy';

console.log("Hello", FirstNameData, LastNameData);  // Hello John Kenedy.


let greeting: string = `Hello ${FirstNameData} ${LastNameData}`;
console.log(greeting);


// 3. BOOLEAN TYPE - Represents True/False values


let IsStudent: boolean = true;
let HasJob: boolean = false;

console.log("Is Student?", IsStudent);    // Is Student? true
console.log("Has Job?", HasJob);


//4. NULL & UNDEFINED - Special types for Absence of Value

let EmptyValue: null = null;
let NotAssigned: undefined = undefined;

console.log(EmptyValue);
console.log(NotAssigned);

let MRP: number;
//console.log(MRP); //undefined



// 5. ANY TYPE - Loses TypeScript Benefits

let DataValue: any = "Welcome";
console.log(typeof (DataValue))

DataValue = 100;
console.log(typeof (DataValue))
DataValue = true;
console.log(typeof (DataValue))

console.log(DataValue);

// 6. UNION TYPE - Combine Multiple Types

let userID: number | string | boolean;

userID = "ABC123";
console.log(userID);

userID = 12345;
console.log(userID);

userID = true;
console.log(userID);



// 7. VOID TYPE - Used for Functions That Don't Return Anything


function Show(): void {
    console.log("Welcome");
}

Show();

// 8. FUNCTION TYPE - Specify Types for Function Parameters and Return Type

function Sum(x: number, y: number): number {
    return (x + y);
}

let TOTAL: number = Sum(10, 20);

console.log(TOTAL);
