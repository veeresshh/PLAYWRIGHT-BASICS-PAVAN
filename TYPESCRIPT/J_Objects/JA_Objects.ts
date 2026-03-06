// Object Contains Properties and Behaviour.
// Object contains Variables & Methods
// Object is collection of Key and Value pairs.

//Ex:

// Employee - Name, Designation, Salary, Department
//            bonus(), getEmployeeDetails(), setDetails()


// Student  - Name, SID, Grade
//            getDetails(), setDetails()


// Different ways to create an object in JS/TS

// 1. Using 'object' type - Directly define the values for variable (JS/TS)
// 2. Inline Type Object - We also define the datatype of the keys (TS)
// 3. Using type aliases (TS)
// 4. Using the classes (JS ES16/TS)



// 1. Using 'object' type - Directly define the values for variable

// The TypeScript 'Object' type represents all values that are Not in Primitive Types.


let FirstEmployee: object = {

    FirstEmployeeName: "John",
    FirstEmployeeAge: 30,
    FirstEmployeeSalary: 50000,
    FirstEmployeeJob: "Development Engineer"
}


let SecondEmployee = {

    SecondEmployeeName: "Veeresh",
    SecondEmployeeSalary: 60000,
    SecondEmployeeJob: "Test Engineer",

    GetDetails: function (): string {

        //console.log(this.SecondEmployeeName,this.SecondEmployeeSalary,this.SecondEmployeeJob);
        return `${this.SecondEmployeeName} is a ${this.SecondEmployeeJob} earning ${this.SecondEmployeeSalary}`;
    }
}


console.log(typeof SecondEmployee);

// Accessing Object - Appraoch 1 ( Using Dot Notation )

console.log(SecondEmployee.SecondEmployeeName, SecondEmployee.SecondEmployeeSalary, SecondEmployee.SecondEmployeeJob);
console.log(SecondEmployee.GetDetails());


// Accessing Object - Appraoch2 ( Using Braket Notation )

console.log(SecondEmployee["SecondEmployeeName"], SecondEmployee["SecondEmployeeSalary"], SecondEmployee["SecondEmployeeJob"]);
console.log(SecondEmployee["GetDetails"]());

// Modify the value

// SecondEmployee.SecondEmployeeJob = "Manager"; 
SecondEmployee["SecondEmployeeJob"] = "Manager";
console.log("Modified job is:", SecondEmployee["SecondEmployeeJob"]);

//==============================================================================================================

// 2. Inline Type Object - We also define the datatype of the keys (TS)

let FirstStudent: {

    FirstStudentName: string,
    FirstStudentAge: number,
    FirstStudentGrade: string,

    FirstGetSummary: () => string

} =

{

    FirstStudentName: "Scott",
    FirstStudentAge: 15,
    FirstStudentGrade: "A",

    FirstGetSummary: function () {
        return `${this.FirstStudentName} is ${this.FirstStudentAge} years old and scored grade ${this.FirstStudentGrade}`;
    }
}

console.log(FirstStudent.FirstGetSummary()); //Scott is 15 years old and scored grade A


// Problem with Inline Type object: Need to repeat structure for every object

let SecondStudent: {

    SecondStudentName: string,
    SecondStudentAge: number,
    SecondStudentGrade: string,

    SecondGetSummary: () => string
} =

{
    SecondStudentName: "Marry",
    SecondStudentAge: 16,
    SecondStudentGrade: "B",

    SecondGetSummary: function () {
        return `${this.SecondStudentName} is ${this.SecondStudentAge} years old and scored grade ${this.SecondStudentGrade}`;
    }
};
console.log(SecondStudent.SecondGetSummary()); // Marry is 16 years old and scored grade B

//=======================================================================

// 3. Using 'type' Aliases (TS): Allows Creating a New Name for an Existing Type

//Example 1:

type Product = {

    ProductName: string,
    ProductPrice: number,

    ProductInfo: () => string
};


let FirstBook: Product =
{
    ProductName: "Learn java",
    ProductPrice: 300,

    ProductInfo: function () {
        return `${this.ProductName} costs ${this.ProductPrice}`;
    }
}

let SecondBook: Product =
{
    ProductName: "Learn Python",
    ProductPrice: 500,

    ProductInfo: function () {
        return `${this.ProductName} costs ${this.ProductPrice}`;
    }
}

let ThirdBook: Product =
{
    ProductName: "Learn JS",
    ProductPrice: 600,

    ProductInfo: function () {
        return `${this.ProductName} costs ${this.ProductPrice}`;
    }
}

console.log(FirstBook.ProductInfo());
console.log(SecondBook.ProductInfo());
console.log(ThirdBook.ProductInfo());


// Example 2: Intersection Types

type Personal = {
    name: string,
    age: number
}

type Contact = {
    email: string,
    phone: number
}

type Candidate = Personal & Contact &

{
    GetContactInfo: () => string;
}

let FirstCandidate: Candidate = {

    name: "Scott",
    age: 25,
    email: "abc@gmail.com",
    phone: 1234567890,

    GetContactInfo: function () {
        return `${this.name} can be contacted at ${this.email} or ${this.phone}`;
    }
}

console.log(FirstCandidate.GetContactInfo()); //Scott can be contacted at abc@gmail.com or 1234567890



// ==================================================

// 4. Using the Classes (JS ES16/TS)

class Person {

    SSN: string;
    FirstName: string;
    LastName: string;

    constructor(SSN: string, FirstName: string, LastName: string) {
        this.SSN = SSN;
        this.FirstName = FirstName;
        this.LastName = LastName;
    }

    GetFullName(): string {
        return `${this.FirstName} ${this.LastName}`;
    }

    GetDetails(): string {
        return `SSN: ${this.SSN}, Name: ${this.GetFullName()}`;
    }

}

// Object Creation [ Multiple Objects can be created For the Same Class ]

let FirstPerson = new Person('1121233333', 'John', 'Kenedy');   //new Keword is Important
console.log(FirstPerson.GetDetails());

let SecondPerson = new Person('22222222', 'David', 'Asbach');
console.log(SecondPerson.GetDetails());

let ThirdPerson = new Person('5555555', 'Scott', 'Smith');
console.log(ThirdPerson.GetDetails());
