//step1: Write a Signatures of Functions
//step2: Implement a Function
//step3: Calling Function


//Example1: Different parameter Types(data types)

function GetInfo(StudentId: number): string;
function GetInfo(StudentName: string): string;


function GetInfo(Parameter: number | string): string {
    if (typeof Parameter === "number") {
        return (`User ID is ${Parameter}`);
    }
    else {
        return (`User Name is ${Parameter}`);
    }

}


console.log(GetInfo(101));

console.log(GetInfo("John"));


//Example 2:  Different Number of Parameters

function Adddition(a: number, b: number): number;
function Adddition(a: number, b: number, c: number): number;


function Adddition(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}

console.log(Adddition(10, 20));
console.log(Adddition(10, 20, 30));



//Example 3: Different Return Types

function ProcessInput(input: string): string;
function ProcessInput(input: number): number;

function ProcessInput(input: string | number): string | number {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else {
        return input * 2;
    }
}

console.log(ProcessInput("welcome"));
console.log(ProcessInput(5));


//Example 4: 

function SecondGreet(BoyName: string): string;
function SecondGreet(BoyAge: number): string;
function SecondGreet(BoyIsMarried: boolean): string;

function SecondGreet(value: string | number | boolean): string {
    if (typeof value === "string") {
        return `Hello ${value}`;
    }
    else if (typeof value === "number") {
        return `You are ${value} years old`;
    }
    else {
        let MaritialStatus: string = value ? "Married" : "Single"
        return MaritialStatus;
    }
}

console.log(SecondGreet("John"));
console.log(SecondGreet(30));
console.log(SecondGreet(true));
console.log(SecondGreet(false));



























