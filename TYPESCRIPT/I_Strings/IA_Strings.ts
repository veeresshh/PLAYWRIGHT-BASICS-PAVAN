// string - Text value or a Combination of Characters
/*
1. Single Quote  - String Literal ('SingleQuote')
2. Double quote  - String literal ("DoubleQuote")
3. Backtick (``) - String template - `When we try to use a string variable inside another sting value ${variable}`

// Index in String Starts with 0

'' or "" or ``(backtick)

*/

//Declartion of strings

let FirstString: string = 'This is a string with single quote';
let SecondString: string = "This is a string with double quote";
let ThirdString: string = `This is a string with back tick`;

console.log(FirstString);
console.log(SecondString);
console.log(ThirdString);

//When to Use Back Tick  ``

let Numberr: number = 10;

console.log("Number is:", Numberr);     // Valid
console.log("Number is: ${Numberr}");   // Not Valid
console.log('Number is: ${Numberr}');   // Not Valid
console.log(`Number is: ${Numberr}`);   // Valid



//String methodsA

let FourthString: string = "Hello, TypeScript!";

//1. Length - find the length of ta string( how many number of characters)

console.log("Length of a string: ", FourthString.length);

//2.toUpperCase() and toLowerCase()

console.log("Upper case: ", FourthString.toUpperCase());
console.log("Lower case: ", FourthString.toLowerCase());


//3. chatAt(index) and indexOf(string)

console.log("Character at 4th index:", FourthString.charAt(4));
console.log("Index of Type: ", FourthString.indexOf("Type"));


//4. substring(starting index, ending index) - Ending index is excluded

console.log(FourthString.substring(0, 5));


//5. includes(): Returns true or false ( boolean) - String Value is Case Sensitive

console.log(FourthString.includes("abc"));
console.log(FourthString.includes("TypeScript"));
console.log(FourthString.includes("!"));
console.log(FourthString.includes("TYPESCRIPT"));


//6. startsWith() and endsWith() --> Returns a boolean vale( true/false)

console.log("Starts with:", FourthString.startsWith("Hello"));
console.log("Ends with:", FourthString.endsWith("!"));
console.log("Ends with abc:", FourthString.endsWith("abc"));


//7. replace()

console.log("Replaced string:", FourthString.replace("TypeScript", "World"));


//8. split() - break the string into multiple parts based on the delimeter, returns an array

//Ex1:

let words: string[] = FourthString.split(" ")

console.log("After splitting string:", words);

//Ex2: 

let MyString: string = "abc@gmail.com,xyzabc";

let arr = MyString.split(",");
console.log("Email:", arr[0]);
console.log("Password:", arr[1]);


//9. trim(), trimStart(), trimEnd()

MyString = "   welcome to typescript   ";

console.log("Original String:", MyString);
console.log("Trim String:", MyString.trim());
console.log("TrimStart String:", MyString.trimStart());
console.log("TrimEnd String:", MyString.trimEnd());//" 


//10. concat()

let FifthString = "welcome";
let SixthString = "to typescript";
let SeventhString = " and javascript";

console.log("After concatenation:", FifthString.concat(SixthString));
console.log("After concatenation:", FifthString + SixthString);  // NOT RECOMMENDED
console.log("welcome".concat("to typescript"));
console.log(FifthString.concat(SixthString).concat(SeventhString));


// Concept of String Immutability (Immutable - Cannot Change Original))

// Numberr = 10;                 // Already Declared Above

let ResultNumber = Numberr + 5;

console.log(ResultNumber);
console.log(Numberr);


// FifthString = "welcome";      // Already Declared Above

let Modifiedstring = FifthString.concat("to typescript");
console.log(FifthString);


//Multiline string with Back Tick ``  - VVIP [ Observe ]

let Multiline: string = `welcome
                        to typescript`;

console.log(Multiline);