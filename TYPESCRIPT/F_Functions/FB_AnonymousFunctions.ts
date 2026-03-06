//// Anonymous Function (Unnamed Function/Nameless Function)

//An anonymous function is a function that does not have a name.Instead, it is assigned to a variable, which acts as its name.


//Example 1: Anonymous Function


let greetMessage = function (): string {
    return "Hello TypeScript";
}

console.log(greetMessage());



// Example 2: Anonymous Function With Parameters

let Multiply = function (a: number, b: number): number {
    let TotalAddition = a * b;
    return TotalAddition;

}

console.log(Multiply(10, 20));


