// TS is Statically Typed Programming Language

let NumData: number = 10;       // Number

//NumData="Ten";                // Compile Time Error
console.log(NumData);


// Type Script is Type Safety

let FirstNumber: string = "5";
let secondNumber: number = 3;

let Total = parseInt(FirstNumber) + secondNumber;   //Compile Time Error: Type 'string' is not assignable to type 'number'
console.log(Total);
