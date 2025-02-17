// This is my second file.

// These are edits for the arrays tutorial.


let arrayAlpha = [1, 4, 2, 6, 8];
console.log(arrayAlpha);


// Add something to the end of the array.
arrayAlpha.push(100);
console.log(arrayAlpha);


// Insert a new element at a specific position in the array.
arrayAlpha.unshift(-100);
console.log(arrayAlpha);


// Insert something in the middle of the array.
// Changing the second value to a 1 will delete whatever is at the index number in the first value. Setting the first value to a number greater than 1 will delete subsequent index values after that value. Setting the second value to a negative number will delete the preceding index values before that value.
arrayAlpha.splice(2, 0, 9);
console.log(arrayAlpha);


// Update an existing element by index
arrayAlpha[5] = "apple";
console.log(arrayAlpha);
console.log(arrayAlpha);


// Delete an existing element by index
arrayAlpha.splice(5, 1);
console.log(arrayAlpha);
