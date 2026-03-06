//// If Statement Programs

// Program 1: Check if a character is uppercase

let FirstCharacter: string = 'A';
if (FirstCharacter >= 'A' && FirstCharacter <= 'Z') {
    console.log(`${FirstCharacter} is an uppercase letter.`);
}

// Program 2: Check if a number is a multiple of 10

let NumberOne: number = 30;
if (NumberOne % 10 === 0) {
    console.log(`${NumberOne} is a multiple of 10.`);
}


//// if Else Statement Programs

// Program 3: Check if a person is a teenager (age between 13 and 19)

let FirstAge: number = 16;
if (FirstAge >= 13 && FirstAge <= 19) {
    console.log("You are a teenager.");
} else {
    console.log("You are not a teenager.");
}

// Program 4: Compare two numbers and print the larger one

let A1: number = 5, B1: number = 10;
if (A1 > B1) {
    console.log(`${A1} is larger.`);
} else {
    console.log(`${B1} is larger.`);
}

// Program 5: Check if a number is positive, negative, or zero

let SecondNumber: number = -3;
if (SecondNumber > 0) {
    console.log(`${SecondNumber} is positive.`);
} else if (SecondNumber < 0) {
    console.log(`${SecondNumber} is negative.`);
} else {
    console.log(`${SecondNumber} is zero.`);
}

// Program 6: Check if a person is eligible for a senior citizen discount (age >= 60)

let SecondAge: number = 65;
if (SecondAge >= 60) {
    console.log("You are eligible for a senior citizen discount.");
} else {
    console.log("You are not eligible for a senior citizen discount.");
}


//// Nested if ElseStatement Programs

// Program 7: Check if a number is positive and even

let ThirdNumber: number = 8;
if (ThirdNumber > 0) {
    if (ThirdNumber % 2 === 0) {
        console.log(`${ThirdNumber} is positive and even.`);
    }
}

// Program 8: Check if a character is an uppercase vowel

let SecondCharacter: string = 'A';
if (SecondCharacter >= 'A' && SecondCharacter <= 'Z') {
    if (SecondCharacter === 'A' || SecondCharacter === 'E' || SecondCharacter === 'I' || SecondCharacter === 'O' || SecondCharacter === 'U') {
        console.log(`${SecondCharacter} is an uppercase vowel.`);
    }
}

// Program 9: Find the largest of three numbers

let A2: number = 5, B2: number = 8, C2: number = 3;
if (A2 > B2 && A2 > C2) {
    console.log(`${A2} is the largest.`);
} else if (B2 > C2) {
    console.log(`${B2} is the largest.`);
} else {
    console.log(`${C2} is the largest.`);
}

// Program 10: Check if a number is a multiple of both 5 and 10

let FourthNumber: number = 50;
if (FourthNumber % 5 === 0) {
    if (FourthNumber % 10 === 0) {
        console.log(`${FourthNumber} is a multiple of both 5 and 10.`);
    }
}

// Program 11: Check if a character is a vowel or consonant

let ThirdCharacter: string = 'E';
if (ThirdCharacter === 'a' || ThirdCharacter === 'e' || ThirdCharacter === 'i' || ThirdCharacter === 'o' || ThirdCharacter === 'u') {
    console.log(`${ThirdCharacter} is a vowel.`);
} else {
    if (ThirdCharacter === 'A' || ThirdCharacter === 'E' || ThirdCharacter === 'I' || ThirdCharacter === 'O' || ThirdCharacter === 'U') {
        console.log(`${ThirdCharacter} is a vowel.`);
    } else {
        console.log(`${ThirdCharacter} is a consonant.`);
    }
}

// Program 12: Check if a number is divisible by both 2 and 3

let FifthNumber: number = 12;
if (FifthNumber % 2 === 0) {
    if (FifthNumber % 3 === 0) {
        console.log(`${FifthNumber} is divisible by both 2 and 3.`);
    } else {
        console.log(`${FifthNumber} is divisible by 2 but not by 3.`);
    }
} else {
    if (FifthNumber % 3 === 0) {
        console.log(`${FifthNumber} is divisible by 3 but not by 2.`);
    } else {
        console.log(`${FifthNumber} is not divisible by either 2 or 3.`);
    }
}

//// switch Statement Programs

// Program 13: Print the corresponding month name for a given month number

let FirstMonth: number = 5;

switch (FirstMonth) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}

// Program 14: Perform basic arithmetic operations based on user input

let Operator: string = '+';

let A3: number = 10, B3: number = 5;

switch (Operator) {
    case '+':
        console.log(`Result: ${A3 + B3}`);
        break;
    case '-':
        console.log(`Result: ${A3 - B3}`);
        break;
    case '*':
        console.log(`Result: ${A3 * B3}`);
        break;
    case '/':
        console.log(`Result: ${A3 / B3}`);
        break;
    default:
        console.log("Invalid operator");
}

// Program 15: Print the season based on the month number

let SecondMonth: number = 4;

switch (SecondMonth) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month");
}