// This is my second file.

// These are edits for the arrays tutorial.


let arrayAlpha = [1, 4, 2, 6, 8];
console.log(arrayAlpha);


// Add something to the end of the array.
arrayAlpha.push(100);
console.log(arrayAlpha);


// Add something to the beginning of the array.
arrayAlpha.unshift(-100);
console.log(arrayAlpha);


// Insert something in the middle of the array.
// Changing the second value to a 1 will delete whatever is at the index number in the first value. Setting the first value to a number greater than 1 will delete subsequent index values after that value. Setting the second value to a negative number will delete the preceding index values before that value.
arrayAlpha.splice(2, -1, 9);
console.log(arrayAlpha);



arrayAlpha.splice(2, 0, 9);
console.log(arrayAlpha);


