/*  1. An interface in TypeScript is a way to define the structure of an object. 
    2. It tells the compiler what properties and types an object should have. 
    3. It's like a blueprint for objects.

Abstract method: we only signature of the method ( there is no implementation)

interface InterfaceName
{
properties
abstract methods
}

1 Regular properties
2 Optional properties
3 Readonly properties & function types
4 Extending interfaces
5 Class implements interface

*/


//Example 1: Basic Interface


interface InterfacePerson {
    name: string;
    age: number;
}

let InterfaceStudent: InterfacePerson =
{
    name: "John",
    age: 30
}

console.log(InterfaceStudent.name);
console.log(InterfaceStudent.age);
console.log(InterfaceStudent);


//Example 2: Optional Properties  (?)

interface InterfaceEmployee {
    InterfaceEmployeeID: number;
    InterfaceEmployeeName: string;
    InterfaceEmployeeDepartment?: string;  // optional property
}

let InterfaceFirstEmployee: InterfaceEmployee =
{
    InterfaceEmployeeID: 101,
    InterfaceEmployeeName: "john"
}

let InterfaceSecondEmployee: InterfaceEmployee =
{
    InterfaceEmployeeID: 102,
    InterfaceEmployeeName: "Smith",
    InterfaceEmployeeDepartment: "accounts"
}


console.log(InterfaceFirstEmployee.InterfaceEmployeeID, InterfaceFirstEmployee.InterfaceEmployeeName, InterfaceFirstEmployee.InterfaceEmployeeDepartment);
console.log(InterfaceSecondEmployee.InterfaceEmployeeID, InterfaceSecondEmployee.InterfaceEmployeeName, InterfaceSecondEmployee.InterfaceEmployeeDepartment);


//Example 3: Readonly Properties (readonly to prevent modification) & Function type/Method

interface InterfaceBook {

    InterfaceBookTitle: string;
    readonly InterfaceBookISBN: string;

    display(): void;              // Abstract method
}


let InterfaceFirstBook: InterfaceBook = {

    InterfaceBookTitle: "Learn Playwright",
    InterfaceBookISBN: "123-ABC",

    display() {
        console.log(InterfaceFirstBook.InterfaceBookISBN, InterfaceFirstBook.InterfaceBookTitle);
    }
}

console.log(InterfaceFirstBook.InterfaceBookTitle);
console.log(InterfaceFirstBook.InterfaceBookISBN);
InterfaceFirstBook.display();

console.log("After changing values...");

InterfaceFirstBook.InterfaceBookTitle = "Learn TypeScript";
console.log("After changing title:", InterfaceFirstBook.InterfaceBookTitle);

//InterfaceFirstBook.InterfaceBookISBN="123-XYZ";  // Error: Cannot Assign to 'InterfaceBookISBN' because it is a Read-Only Property



//Example 4: Extending Interfaces (Inheritance is applicable)


//Parent interface

interface FirstAnimal {
    name: string;
}

//Child interface

interface FirstDog extends FirstAnimal {
    color: string;
}


let FirstMyDog: FirstDog =
{
    name: "Buddy",
    color: "Black"
}

console.log(FirstMyDog.name, FirstMyDog.color);




//Example 5: 

// Class can extends another class
// Interface can extends another interface

// Class can implement interface

interface Animal {
    name: string;
    sound(): void;
}

class Dog implements Animal {

    name: string;                        // Inherited from interface Animal
    color: string;                        // Property belongs to Dog

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    sound() {
        console.log("Bark...")
    }

}

let Pet = new Dog("Tommy", "Black");

console.log(Pet.name);
console.log(Pet.color);
Pet.sound();