let a: number = 10, b: number = 20;


//Arithmetic operations

console.log(a + b);
console.log(b - a);
console.log(a * b);
console.log(b / a);
console.log(a % b);
console.log(5 ** 2);  //Square 5*5=25



//Assignment Operators =

a = 100;
b = 50;

console.log(a)

console.log(a += b);   // a=a+b   ---> 15
console.log(a -= b);   // a=a-b   ---> 10
console.log(a *= b);   // a=a*b   ---> 50
console.log(a /= b);   // a=a/b   ---> 10
console.log(a %= b);   // a=a%b   ---> 0



//Relational/Comparison Operators - Returns boolean- true/ false - //   >  <  >=  <=  ==  !=  ===(Strict equality)

a = 10;
b = 20

console.log(a > b);  //false
console.log(a < b); // true
console.log(a <= b); //true
console.log(a >= b); //false
console.log(a == b); //false
console.log(a != b); //true



//Difference between   ==(Equaltiy)  &  ===(Strict Equality)

let num1: any = 10;    // Number type
let num2: any = "10"   // String

console.log(num1 == num2);    //True ( Only Compares Values )
console.log(num1 === num2);   //False( Compares the Values & Type )



//Logical Operators   &&  ||  ! - Returns True/False (boolean) - Works Between Boolean Variables

// b1      b2       &&           ||          !b1
//--------------------------------------------------
//true      true    true        true          false
//true      false   false       true
//false     true    false       true          true
//false     false   false       false


let b1: boolean = true;
let b2: boolean = false;

console.log(b1 && b2);    // False
console.log(b1 || b2);    // True
console.log(!b1);         // False
console.log(!b2);         // True



//combination of Logical & Relational Operators

console.log(20 > 10 && 10 > 5);  // True
console.log(10 < 20 || 5 > 10);  // True

