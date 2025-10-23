// Function that takes 2 numbers and returns the sum of them 
function sumOfNum(a: number, b: number): number {

    // return the sum of the 2 numbers
    return a + b;
}

// If forget to provide the return type then the ts compiler automatically infered it
// We can also fix the type of the function's return type
// If no return than it is of type void

// Call the function with 2 arguments and store the result in a variable called ans
let ans: number = sumOfNum(10, 20);

// Log the result to the console 
console.log(ans); // 30