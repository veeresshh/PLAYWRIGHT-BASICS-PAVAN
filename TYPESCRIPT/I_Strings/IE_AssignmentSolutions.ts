// 1. Push

let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);


// 2. Pop

let arr2 = [10, 20, 30];
arr2.pop();
console.log(arr2);


// 3. Shift

let arr3 = [5, 6, 7];
arr3.shift();
console.log(arr3);


// 4. Unshift

let arr4 = [2, 3, 4];
arr4.unshift(1);
console.log(arr4);


// 5. Concat

let arr5a = [1, 2];
let arr5b = [3, 4];
let combined = arr5a.concat(arr5b);
console.log(combined);


// 6. Slice

let arr6 = [10, 20, 30, 40, 50];
let sliced = arr6.slice(1, 4);
console.log(sliced);


// 7. Splice

let arr7 = [100, 200, 300, 400];
arr7.splice(2, 1, 350);
console.log(arr7);


// 8. IndexOf

let arr8 = ['apple', 'banana', 'cherry'];
console.log(arr8.indexOf('banana'));


// 9. Includes

let arr9 = [5, 10, 15];
console.log(arr9.includes(10));


// 10. ToString

let arr10 = [1, 2, 3];
console.log(arr10.toString());


// 11. ForEach

let arr11 = ['a', 'b', 'c'];
arr11.forEach(item => console.log(item));


// 12. Map

let arr12 = [1, 2, 3];
let doubled = arr12.map(num => num * 2);
console.log(doubled);


// 13. Filter

let arr13 = [1, 2, 3, 4, 5];
let evens = arr13.filter(num => num % 2 === 0);
console.log(evens);


// 14. Reduce

let arr14 = [10, 20, 30];
let sum = arr14.reduce((acc, val) => acc + val, 0);
console.log(sum);


// 15. Some

let arr15 = [1, 3, 5, 6];
console.log(arr15.some(num => num % 2 === 0));


// 16. Every

let arr16 = [2, 4, 6];
console.log(arr16.every(num => num % 2 === 0));


// 17. Remove Duplicates

let arr17 = [1, 2, 2, 3, 3, 4];
let unique = arr17.filter((item, index) => arr17.indexOf(item) === index);
console.log(unique);


// 18. Reverse

let arr19 = [1, 2, 3];
arr19.reverse();
console.log(arr19);


// 19. String Length

let str21 = "Hello World";
console.log(str21.length);


// 20. ToUpperCase

let str22 = "typescript";
console.log(str22.toUpperCase());


// 21. ToLowerCase

let str23 = "TYPESCRIPT";
console.log(str23.toLowerCase());


// 22. CharAt

let str24 = "Pavan";
console.log(str24.charAt(2));


// 23. IndexOf

let str25 = "I love coding in TypeScript";
console.log(str25.indexOf("coding"));


// 24. Includes

let str26 = "Beginner TypeScript Guide";
console.log(str26.includes("Guide"));


// 25. StartsWith

let str27 = "Welcome to TS";
console.log(str27.startsWith("Welcome"));


// 26. EndsWith

let str28 = "Learning TypeScript";
console.log(str28.endsWith("Script"));


// 27. Replace

let str29 = "I love JavaScript";
console.log(str29.replace("JavaScript", "TypeScript"));


// 28. Split + Trim

let str30 = "   Hello World from TypeScript   ";
let wordss = str30.trim().split(" ");
console.log(wordss);
