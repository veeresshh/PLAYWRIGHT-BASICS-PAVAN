//while loop : A while loop executes as long as the condition is true.

//Example1: print 1.......10

let IA: number = 1;   //Inilization

while (IA <= 5) {
    console.log(IA);
    IA++;
}


// Example 2: print even numbers 1.....10

//Method1

let IB: number = 2;

while (IB <= 10) {
    console.log(IB);
    IB += 2;
}


//Method2:


let IC: number = 1;

while (IC <= 10) {
    if (IC % 2 == 0) {
        console.log(IC);
    }

    IC++;
}


// Example 3: print odd numbers 1.....10

//Method1:

let ID: number = 1;

while (ID <= 10) {
    console.log(ID);
    ID += 2;  //i=i+2;
}


//Method2:

let IE: number = 1;

while (IE <= 10) {
    if (IE % 2 != 0) {
        console.log(IE);
    }

    IE++;
}


// Example 4: print numbers 10 9 8 ......1


let IF: number = 10;

while (IF >= 1) {
    console.log(IF);
    IF--;
}



//infinite loop - when the condition never become false then it will go to infinite loop

while (true) {
    console.log(1);
}





