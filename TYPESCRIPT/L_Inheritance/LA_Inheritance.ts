// Inheritance:

// A class can reuse the properties and methods of another class.  
// Inheritance is a mechanism where one class (child) can inherit the properties and methods of another class (parent).
// Inheritance allows you to reuse the functionality of an existing class without rewriting it.

// Method Overriding:

// A subclass/child calss can provide a specific implementation of a method that is already defined in its superclass.
// The method must have the same name, return type, and parameters.

//A    --- Properties + Methods       ( Parent class/ BaseClass/ Super class )
//B extends A--- Properties + Methods ( Child class/ Derived class/ Sub class )


//Parent class

class Car {
    name: string;
    color: string;
    model: string;

    constructor(name: string, color: string, model: string) {
        this.name = name;
        this.color = color;
        this.model = model;
    }

    Start() {
        console.log("Car started...")
    }

    Stop() {
        console.log("Car stopped...")
    }

    DisplayInformation() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`);

    }
}

//Child class - Honda

class Honda extends Car {
    year: number;

    constructor(name: string, color: string, model: string, year: number) {
        super(name, color, model);
        this.year = year;
    }

    //Method overriding

    Start() {
        console.log("Honda started...")
    }

    YOM() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, YOM: ${this.year}`);
    }

}


//Child class - Maruthi

class Maruthi extends Car {

    year: number;

    constructor(name: string, color: string, model: string, year: number) {
        super(name, color, model);
        this.year = year;
    }

    //Method overriding

    Start() {
        console.log("Maruthi started...")
    }

    YOM() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, YOM: ${this.year}`);
    }

}


//Usage

// Create Honda object

let Elevate = new Honda("Honda", "Red", "Elevate", 2024);

console.log(Elevate.name);
console.log(Elevate.color);
console.log(Elevate.model);
console.log(Elevate.year);

Elevate.Start();                           // Honda started...                                       // Called child class method( overrided)
Elevate.DisplayInformation();              // Name: Honda, Color: Red, Model: Elevate                // Parent class
Elevate.Stop();                            // Car stopped...                                         // Parent class
Elevate.YOM();                             // Name: Honda, Color: Red, Model: Elevate, YOM: 2024     // Child class


// Create Maruthi object

let Swift = new Maruthi("Maruthi", "Blue", "Swift", 2023);

Swift.Start();                             // Maruthi started...
Swift.DisplayInformation();                // Name: Maruthi, Color: Blue, Model: Swift
Swift.Stop();                              // Car stopped...
Swift.YOM();                               // Name: Maruthi, Color: Blue, Model: Swift, YOM: 2023



// Parent class varaible is holding child class object

let SuperCar: Car = new Honda("Honda", "Red", "Honda city", 2024);

SuperCar.DisplayInformation();                 // Name: Honda, Color: Red, Model: Honda city
SuperCar.Start();                              // Honda started.

//SuperCar.YOM();                              // Not accessible YOM() defined inside the child class but not there in the parent