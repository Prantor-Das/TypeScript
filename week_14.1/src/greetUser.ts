// Function that takes a string as an argument and logs a greeting message to the console
function greet(firstName: string): void {

    // Log the greeting message to the console with the name of the user
    console.log(`Hello, ${firstName}!`);
}

// Call the greet function with a string argument 
greet('Prantor');


// Arrow function that takes a string as an argument and logs a greeting message to the console
let greetuser = (firstName: string): void => {
    console.log(`Hello, ${firstName}!`);
}

// Call the greetUser function with a string argument 
greetuser('Harkirat');

// There is a special type in ts that is any type
// Should avoid using any type.
// let userName: any;

// We can assign any type of value to userName
// userName = 10;
// console.log(userName); // 10

// userName = "Prantor";
// console.log(userName); // Prantor

// userName = true;
// console.log(userName); // true