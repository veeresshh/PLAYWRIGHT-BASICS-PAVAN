let SampleNumbers: number[] = [1, 2, 3, 4, 5];
let Fruits: string[] = ["apple", "banana", "orange", "mango"];

console.log("Numbers array:", SampleNumbers);
console.log("Fruits array:", Fruits);

// Length - Attribute (Not a method)

console.log("Size of numbers array:", SampleNumbers.length);
console.log("Size of fruits array:", Fruits.length);


// 1. Push() - Adds Single/Multiple Elements to the End of an Array - Syntax: array.push(element1, ..., elementN)

SampleNumbers.push(6, 7);
console.log("After push():", SampleNumbers);


// 2. Pop() - Removes the Last Element from an Array - Syntax: array.pop()

let lastFruit = Fruits.pop();

console.log("After pop():", Fruits);
console.log("Removed Fruit is:", lastFruit);


// 3. Shift() - Removes the First Element from an Array - Syntax: array.shift()

let firstNumber = SampleNumbers.shift();

console.log("After shift()", SampleNumbers);
console.log("Removed Number:", firstNumber);


// 4. Unshift() - Adds Single/Multiple Elements to the Beginning of an Array - Syntax: array.unshift(element1, ..., elementN)

Fruits.unshift("kiwi", "pear");

console.log("After unshift():", Fruits);


// 5. Concat() - Combines Two or More Arrays of Same Type - Syntax: array.concat(array1, ..., arrayN)

let CombinedArray = SampleNumbers.concat([8, 9], [10])

console.log("Concatenated array:", CombinedArray); //[2, 3, 4,  5, 6, 7, 8, 9, 10]


// 6. Slice() - Extracts a section of an array - Starting Index starts from Zero -Ending Index will be excluded. 
// Ex: If 3 is Ending Index It will consider 2   (3-1=2) - Syntax: array.slice(start, end)

let FirstExtractedArray = Fruits.slice(1, 3);
console.log("After Slice():", FirstExtractedArray);


let SecondExtractedArray = Fruits.slice(2, 5);
console.log("After Slice():", SecondExtractedArray);


// 7. Splice() - Adds/Removes Elements from an Array(From everywhere) - Syntax: array.splice(start, deleteCount, item1, ..., itemN)

console.log("Current elements in Fruits array:", Fruits);

//Ex1: Only Removing

let RemovedElements = Fruits.splice(1, 2);  // Here 1 is starting Index, 2 represent how many elements to be removed

console.log("After slice(1,2): ", Fruits);
console.log("Removed Elements: ", RemovedElements);


//Ex2: Not Removed but Added

Fruits.splice(1, 0, 'pineapple', 'grape');

console.log("After slice(1,0,'pineapple','grape'): ", Fruits);


//Ex3: Both Remove and Add

Fruits.splice(1, 2, "mango", "cherry");

console.log(" After splice(1,2,'mango','cherry'):", Fruits);


// 8. IndexOf() - Finds the index of an element, If element not found then return -1 - Syntax: array.indexOf(searchElement)   (or)  array.indexOf(searchElement,Starting Index)

//Ex 1

let BananaIndex = Fruits.indexOf("Banana");
console.log("Index of Banana:", BananaIndex);


//Ex 2 

let PapayaIndex = Fruits.indexOf("Papaya");
console.log("Index of Papaya:", PapayaIndex);


//Ex3

BananaIndex = Fruits.indexOf("Banana", 2);        //VVIMP - See Syntax
console.log("Index of Banana:", BananaIndex);


// 9. Includes() - Checks if an element exists - Returns True or false - Syntax: array.includes(searchElement, fromIndex)

let IsAppleExist = Fruits.includes('Apple');
console.log("Does Fruits include Apple?", IsAppleExist);


let IsBananaExist: boolean = Fruits.includes('Banana');
console.log("Does Fruits include Banana?", IsBananaExist);


// 10. ToString() - Converts array to string - Syntax: array.toString()

console.log(SampleNumbers);

let NumbersString: string = SampleNumbers.toString();
console.log("Converted Array To String: ", NumbersString);


let MyArray: string[] = ['w', 'e', 'l', 'c', 'o', 'm', 'e']
console.log("Original MyArray: ", MyArray);

let ConvertedString: string = MyArray.toString();
console.log("converted string: ", ConvertedString);

