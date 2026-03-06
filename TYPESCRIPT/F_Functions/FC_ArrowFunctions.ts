///// Arrow Functions/Lamda Function

/* Lambda refers to anonymous functions in programming. 
   Lambda functions are a concise mechanism to represent anonymous functions. 
   These functions are also called as Arrow functions.


  There are 3 parts to a Lambda function.

  1.Parameters − A function may optionally have parameters
  2.The fat arrow notation/lambda notation (=>) − It is also called as the "goes to operator"
  3.Statements − represent the functions instruction set

*/

// Example 1: Arrow Function with No Parameters and No Return Type

let Greet = (): void => {
    console.log("Hello TypeScript");
}

Greet();



// Example 2: Arrow Function with Parameters and a Return Type

let Addition = (a: number, b: number): number => {
    return a + b;
}

console.log(Addition(10, 20));



// Example 3: Arrow Function with Implicit Return [ One Single Statement]

let Additionn = (a: number, b: number): number => a + b;
console.log(Additionn(10, 20));


let Multiplicationn = (a: number, b: number): number => a * b;
console.log(Multiplicationn(10, 20));


// Example 4: Arrow Function with Optional Parameters

let FirstDisplayDetails = (id: number, name: string, mailId?: string): void => {
    console.log("ID:", id);
    console.log("Name:", name);

    if (mailId !== undefined) {
        console.log("Email:", mailId);
    }
}

FirstDisplayDetails(123, "Scott", "scot@gmail.com");
FirstDisplayDetails(123, "Scott");



// Example 5: Arrow Function with Default Parameters

let FirstCalculateDiscount = (price: number, rate: number = 0.50): void => {
    let discount: number = price * rate;
    console.log("Discount Amount:", discount);
}

FirstCalculateDiscount(1000, 0.30);
FirstCalculateDiscount(1000);



// Example 6: Arrow Function with Rest Parameters

let FirstFindElements = (...elements: (number | string)[]): number => {
    return elements.length;
}

console.log(FirstFindElements(3, "john", 2, 1, "scott"));
console.log(FirstFindElements(10, 20, 30, 40, 50, 60, 70));
console.log(FirstFindElements("abc", "xyz")); 
