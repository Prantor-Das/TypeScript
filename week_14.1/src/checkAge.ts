// funtion takes in a number and returns a boolean 
function isLegal(age: number): boolean {
    if (age > 18) {
        return true;
    } else { 
        return false;
    }
}

// Call the function with different arguments and log the result to the console
console.log(isLegal(2));
console.log(isLegal(20));