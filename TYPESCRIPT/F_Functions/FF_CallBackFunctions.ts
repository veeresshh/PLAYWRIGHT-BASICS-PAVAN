//A callback function : A function passed as an argument to another function and executed later. 


//Example 1:


//Function that Takes Callback Function as an Parameter

function FirstGreet(name: string, callBackName: (MessageDisplayed: string) => void) {
    console.log(name);
    callBackName("Hello");  // Executing the Callback Function
}


// Callback Function

function ShowMessage(MessageDisplayed: string) {
    console.log(MessageDisplayed);
}

//Calling the Function by Passing the Callback Function

FirstGreet("John", ShowMessage);




//Example 2:

function NewSum(a: number, b: number, callBackName: (result: number) => void) {
    let result = a + b;
    callBackName(result);
}


// Callback Function

function DisplayResult(result: number): void {
    console.log(result);
}

NewSum(10, 20, DisplayResult); 