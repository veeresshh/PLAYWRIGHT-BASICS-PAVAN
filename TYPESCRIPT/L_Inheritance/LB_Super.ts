//super() - used to invoke immediate parent class constructor
//super - used to invoke immediate parent class method

//super - cannot be used to invoke the parent class proprty. (In Java, it is possible)

class Parent {

    num: number = 10;

    constructor() {
        console.log("This is Parent class constructor..")
    }

    display() {
        console.log("This is display() method from Parent class...")
    }
}


class Child extends Parent {

    num: number = 20;                                  // overriden

    constructor() {
        super();                                   // This will call Parent Class Constructor (Must be Called)
        console.log("This is child class constructor...")
    }

    show() {
        //console.log(super.num);                  // Parent's num //TS doesn't support super.num to access parent class properties directly like Java does.
        console.log(this.num); //20
        console.log("This is show() method from the child class...")
    }

    //overrided method

    display() {
        console.log("This is display() method from child class....")
        super.display();                          // This will invoke parent class method
    }

}


let FirstChild = new Child();

FirstChild.show();                                      // Child class

FirstChild.display();                                   // Child class