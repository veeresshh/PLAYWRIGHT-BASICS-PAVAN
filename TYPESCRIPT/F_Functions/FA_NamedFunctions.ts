// Named Function: A function that is declared with a name.


// Example 1: Named Function with No Parameters and No Return Type

function Display():void
{
    console.log("Welcome to typescript");
}

Display();   // Calling Function



// Example 2: Named Function with Parameters and Return Type

function FirstAddNumbers(x:number, y:number):number
{
    return x+y;

}

let ResultTotal:number=FirstAddNumbers(2,3);
console.log(ResultTotal);

console.log(FirstAddNumbers(2,3));           // 5
//console.log(FirstAddNumbers(1,2,3));       // Compiler Error: Expected 2 arguments, but got 3.
//console.log(FirstAddNumbers(1));           // Compiler Error: Expected 2 arguments, but got 1.



//Example 3: Named Function with  Rest Parameters - Same Type - Rest Parameters Dont Restrict the Number of Values That You Can Pass to a Function. 

function SecondAddNumbers(...Nums:number[])
{
   let i;   
   let Sum:number = 0; 
   
   for(i = 0; i<Nums.length; i++) { 
      Sum = Sum + Nums[i]; 
   } 
   console.log("sum of the numbers",Sum) 

}

SecondAddNumbers(1,2);
SecondAddNumbers(1,2,3);
SecondAddNumbers(10,20,30,40,50);



//Example 4: Named Function with  Rest Parameters - Multiple Types

function FindElements(...Elements:(number|string)[]):number
{
    return Elements.length;
}

console.log(FindElements(3,"john",2,1,"scott")); 
console.log(FindElements(10,20,30,40,50,60,70)); 
console.log(FindElements("abc","xyz")); 




// Example 5: Named Function With Optional Parameters

function DisplayDetails(EmployeeId:number, EmployeeName:string, EmployeeMailId?:string): void
{
    console.log("ID:",EmployeeId);
    console.log("Name:",EmployeeName);

    if(EmployeeMailId !== undefined )
    {
    console.log("Email:", EmployeeMailId);
    }
}

DisplayDetails(123,"Scott","scot@gmail.com");
DisplayDetails(123,"Scott");



// Example 6: Named Function with Default Parameters

function CalculateDiscount(Price:number, Rate:number=0.50):void
{
        let Discount:number=Price*Rate;
        console.log("Discount Amount:", Discount);
}

CalculateDiscount(1000,0.30);
CalculateDiscount(1000);






