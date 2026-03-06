//if statement

// Example1 : If MyAge is greater than or equal to 18, the message "You are eligible to vote." will be printed.

let MyAge: number = 20;

if (MyAge >= 18) {
    console.log("You are eligible to vote.");
}

//if else statement

//Example 2:  Print number is even is odd

let GivenNumber: number = 10;

if (GivenNumber % 2 == 0) {
    console.log(`${GivenNumber} Even number`);
}
else {
    console.log(`${GivenNumber} Odd number`);
}

//Nested if-else Statement

//Example3: Depending on the marks, display appropriate grade.

let GivenMarks: number = 50;

if (GivenMarks >= 90 && GivenMarks <= 100)    //Condition 1
{
    console.log("Grade A");
}
else if (GivenMarks >= 75 && GivenMarks < 90)   // condition 2
{
    console.log("Grade B");
}
else if (GivenMarks >= 60 && GivenMarks < 75)  // condition 3
{
    console.log("Grade C")
}
else {
    console.log("Grade D");
}

//Example 4: Browser selection

let Browser: string = "chrome";

if (Browser === "chrome") {
    console.log("Browser is chrome");
}
else if (Browser === "firefox") {
    console.log("Browser is firefox");
}
else if (Browser === "safari") {
    console.log("Browser is safari")
}
else {
    console.log("Other browser");
}

//switch-case Statement

//Example 5 : Depending on the value of day, print the corresponding day of the week.

let day: number = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// 	Example 6: The switch statement can also include an expression 

let AB: number = 20, CD: number = 5;

switch (AB - CD)      // expression
{
    case 0: console.log("Result Zero");
        break;
    case 5: console.log("Result is Five")
        break;
    case 10: console.log("Result is Ten")
        break;
    default: console.log("Result is something else")
}