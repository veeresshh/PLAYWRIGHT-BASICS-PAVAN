
/////  While Loop   //////


// 1. Sum of first 10 natural numbers

let naturalSum: number = 0;
let i: number = 1;

while (i <= 10) {
    naturalSum = naturalSum + i; // Add i to naturalSum
    i = i + 1; // Increase i by 1
}

console.log("Sum of first 10 natural numbers:", naturalSum);

// 2. Factorial of a given number

let TakenNumber: number = 5; // Change this value to test
let factorial: number = 1;
let j: number = TakenNumber;
while (j > 1) {
    factorial = factorial * j; // Multiply factorial by j
    j = j - 1; // Decrease j by 1
}
console.log("Factorial of", TakenNumber, "is:", factorial);


// 3. Reverse a given number

let NumberToReverse: number = 12345;
let ReversedNumber: number = 0;
while (NumberToReverse > 0) {
    let digit: number = NumberToReverse % 10; // Get last digit
    ReversedNumber = ReversedNumber * 10 + digit; // Append digit
    NumberToReverse = Math.floor(NumberToReverse / 10); // Remove last digit
}
console.log("Reversed Number:", ReversedNumber);

// 4. Check if a number is prime

let PrimeNumber: number = 29;
let isPrime: boolean = true;
let k: number = 2;
while (k * k <= PrimeNumber) { // Check up to square root of number
    if (PrimeNumber % k === 0) {
        isPrime = false; // If divisible, not prime
        break;
    }
    k = k + 1; // Increase k
}
console.log(PrimeNumber, "is", isPrime ? "a prime number" : "not a prime number");

// 5. Find the largest digit in a given number

let NumberToCheck: number = 987654;
let LargestDigit: number = 0;
while (NumberToCheck > 0) {
    let digit: number = NumberToCheck % 10; // Get last digit
    if (digit > LargestDigit) {
        LargestDigit = digit; // Update largest digit
    }
    NumberToCheck = Math.floor(NumberToCheck / 10); // Remove last digit
}
console.log("Largest digit:", LargestDigit);


// 6. Check if a number is a palindrome

let PalindromeNumber: number = 12121;
let OriginalNumber: number = PalindromeNumber;
let ReversedPalindrome: number = 0;
while (PalindromeNumber > 0) {
    let digit: number = PalindromeNumber % 10; // Get last digit
    ReversedPalindrome = ReversedPalindrome * 10 + digit; // Append digit
    PalindromeNumber = Math.floor(PalindromeNumber / 10); // Remove last digit
}
if (OriginalNumber === ReversedPalindrome) {
    console.log(OriginalNumber, "is a palindrome");
} else {
    console.log(OriginalNumber, "is not a palindrome");
}



//////   Do-While Loop    //////



// 7. Print numbers from 1 to 10 using a do-while loop

let SampleNumber: number = 1;
do {
    console.log(SampleNumber);
    SampleNumber++;
} while (SampleNumber <= 10);

// 8. Perform basic arithmetic operations until the user chooses to exit

let userChoice: string;
let FirstSampleNumber: number;
let SecondSampleNumber: number;
let result: number;
let operation: string;

do {
    // Taking user input (mocked here since TypeScript doesn't support prompt directly)
    FirstSampleNumber = 10; // Example value
    SecondSampleNumber = 5;  // Example value
    operation = "+"; // Example operation (can be "+", "-", "*", "/")

    switch (operation) {
        case "+":
            result = FirstSampleNumber + SecondSampleNumber;
            console.log(`${FirstSampleNumber} + ${SecondSampleNumber} = ${result}`);
            break;
        case "-":
            result = FirstSampleNumber - SecondSampleNumber;
            console.log(`${FirstSampleNumber} - ${SecondSampleNumber} = ${result}`);
            break;
        case "*":
            result = FirstSampleNumber * SecondSampleNumber;
            console.log(`${FirstSampleNumber} * ${SecondSampleNumber} = ${result}`);
            break;
        case "/":
            if (SecondSampleNumber !== 0) {
                result = FirstSampleNumber / SecondSampleNumber;
                console.log(`${FirstSampleNumber} / ${SecondSampleNumber} = ${result}`);
            } else {
                console.log("Division by zero is not allowed.");
            }
            break;
        default:
            console.log("Invalid operation.");
    }

    // Mock user choice (replace with actual input handling in a real app)
    userChoice = "n"; // "y" to continue, "n" to exit

} while (userChoice === "y");




/////////    For Loop   ///////////


// 9. Print Multiples of 5 from 5 to 50

for (let i: number = 5; i <= 50; i += 5) {
    console.log(i);
}


// 10. Print Prime Numbers between 1 and 50

for (let num: number = 2; num <= 50; num++) {
    let isPrime: boolean = true;
    for (let j: number = 2; j < num; j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}

// 11. Print Sum of Even Numbers between 1 and 20

let SumEven: number = 0;
for (let i: number = 2; i <= 20; i += 2) {
    SumEven += i;
}
console.log(SumEven);

// 12. Print Sum of Odd Numbers between 1 and 20

let SumOdd: number = 0;
for (let i: number = 1; i <= 20; i += 2) {
    SumOdd += i;
}
console.log(SumOdd);

// 13. Print Table of 7

for (let i: number = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 14. Print Numbers Divisible by 3 and 5 from 1 to 100

for (let i: number = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

// 15. Count Number of Digits in a Number

let FourthSampleNumber: number = 12345;
let count: number = 0;
for (let n: number = FourthSampleNumber; n > 0; n = Math.floor(n / 10)) {
    count++;
}
console.log(count);

// 16. Find Sum of Digits in a Number

let SumDigits: number = 0;
for (let n: number = FourthSampleNumber; n > 0; n = Math.floor(n / 10)) {
    SumDigits += n % 10;
}
console.log(SumDigits);

// 17. Print Multiples of 7 between 1 and 100

for (let i: number = 7; i <= 100; i += 7) {
    console.log(i);
}

// 18. Calculate the sum of all even numbers from 1 to N

let N: number = 50; // Example value for N
let SumEvenN: number = 0;
for (let i: number = 2; i <= N; i += 2) {
    SumEvenN += i;
}
console.log(SumEvenN);



//////////    Continue  //////////////


// 19: Print odd numbers from 1 to 20 using a for loop

let Num1: number;
for (Num1 = 1; Num1 <= 20; Num1++) {
    if (Num1 % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(Num1);
}

// 20: Print numbers from 1 to 30, skipping multiples of 5 using a while loop

let Num2: number = 1;
while (Num2 <= 30) {
    if (Num2 % 5 === 0) {
        Num2++;
        continue; // Skip multiples of 5
    }
    console.log(Num2);
    Num2++;
}



//////////  break  //////////////////

// 21: Find and print the first even number between 1 and 10

let FirstEven: number;

for (let i: number = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        FirstEven = i;
        console.log("First even number:", FirstEven);
        break; // Exit loop once the first even number is found
    }
}

// 22: Print numbers from 1 to 30 but stop when a number greater than 15 is found

for (let Number: number = 1; Number <= 30; Number++) {
    if (Number > 15) {
        break; // Exit loop when number is greater than 15
    }
    console.log(Number);
}








































