// For Loop: A for loop is typically used when the number of iterations is known beforehand.


//Example 1:  print 1......10

for (let i = 1; i <= 10; i++) {
    console.log(i);

}



//Example 2: print even numbers between 1---10

//Method 1:

for (let j = 2; j <= 10; j += 2) {
    console.log(j);
}

//Method 2:

for (let k = 1; k <= 10; k++) {
    if (k % 2 == 0) {
        console.log(k);
    }
}


// Example 3: 10 to 1

for (let l = 10; l >= 1; l--) {
    console.log(l);
}



//Example 4:

let m: number;  //Global

for (m = 1; m <= 5; m++) {
    console.log(m);
}

console.log(m);



//Example 5: // VVIP

let q: number;

for (q = 1; q <= 5; q++);

console.log(q);


