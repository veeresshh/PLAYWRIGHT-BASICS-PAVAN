/*
1. Class
2. Read only Properties
3. Optional property


4. Static properties and methods

    //  1) Static properties/methods are common/shared across all the objects
    //  2) Static properties/methods can be accessed through class name directly
    //  3) Static properties /methods can be modified using class
    //  4) We cannot use 'this' for static properties , instead we can use class name.

*/


class Student {

  readonly studentId: number;                   // Read-only property (Value can only be assigned once, inside constructor)
  name: string;                                 // Regualr property
  email?: string;                               // Optional property (can be undefined)
  static SchoolName: string = "Greenwood High";   // Static variable shared among all Instances/Objects [ Common for all Students ]


  // Constructor to Initialize Student Properties

  constructor(SId: number, SName: string, SEmail?: string) {
    this.studentId = SId;
    this.name = SName;
    this.email = SEmail;                       // email can be undefined if not provided
  }

  // Method to Display Student Information (Named function)

  DisplayInfo(): void {
    console.log("Student ID:", this.studentId);

    console.log("Student Name:", this.name);

    if (this.email) {

      console.log("Email:", this.email);

    } else {

      console.log("Email is not provided.");
    }

    // Access Static Property using Class Name

    console.log("School Name:", Student.SchoolName);  // Class Name to access static property - VVIP
  }


  // Second Approach : Method to display student information (Anonymous method using arrow function syntax)

  /*
  
   DisplayInfo = () : void => {
  
      console.log("Student ID:", this.studentId);
      console.log("Student Name:", this.name);
  
      if (this.email) {
  
        console.log("Email:", this.email);
  
      } else {
  
        console.log("Email is not provided.");
      }
  
      console.log("School Name:", Student.schoolName);
    };
    
  */


  // Static method to change the school name

  static ChangeSchoolName(newName: string): void {
    Student.SchoolName = newName;      // Need to use Class Name to access static property
  }
}

// Creating Student objects

const FirstStudentPresent = new Student(101, "John");
const SecondStudentPresent = new Student(102, "Bob", "bob@gmail.com");


// Display initial student information

console.log("Initial student info:");

FirstStudentPresent.DisplayInfo();
SecondStudentPresent.DisplayInfo();


// Try to change read-only property

//FirstStudentPresent.studentId = 999; // Error: Cannot assign to 'studentId' because it is a read-only property.


// Change the static school name

Student.ChangeSchoolName("Sunrise Public School");


// Display updated student information after school name change

console.log("After changing the school name:");

FirstStudentPresent.DisplayInfo();
SecondStudentPresent.DisplayInfo();
