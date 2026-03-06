
//Parent class

class NewPerson {
    public name: string;  // Public property - Accessible Anywhere
    protected age: number;  // Protected property - Accessible within the class and its subclasses.
    private ssn: number;  // Private property - Accessible only within this class

    constructor(name: string, age: number, ssn: number) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }

    public PersonalInformation() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("SSN:", this.ssn);

    }

}


//Child class

class NewEmployee extends NewPerson {
    private NewEmployeeId: number;

    constructor(name: string, age: number, ssn: number, EmployeeId: number) {
        super(name, age, ssn);
        this.NewEmployeeId = EmployeeId;
    }

    public showEmployeeDetails() {
        console.log(this.name);                // Public - accessible
        console.log(this.age);                 // Protected - accessible
        //console.log(this.ssn);               // Error:private property
        console.log(this.NewEmployeeId);       // Private, still we cann access since it is declared inside the same class
    }

}


let EmployeeOne = new NewEmployee("John", 30, 212312312, 101);

EmployeeOne.PersonalInformation();
EmployeeOne.showEmployeeDetails();


console.log(EmployeeOne.name);                   // Accessible 
//console.log(EmployeeOne.age);                  // Not accessible
//console.log(EmployeeOne.ssn);                  // Not accessible