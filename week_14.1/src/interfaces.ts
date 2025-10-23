// Create an interface UserType that has the following properties: firstName, lastName, and age.
interface UserType {
    firstName: string,
    lastName: string,
    age: number,
};

// Create an interface Manager that has the following properties: name and age.
interface Manager {
    name: string,
    age: number,
}

// Create an interface Employee that has the following properties: name and department.
interface Employee {
    name: string,
    department: string
}


// Create a function greet that takes a user of type UserType and logs a greeting message.
function greets(users: UserType) {
    // Log a message that greets the user by their full name and age.
    console.log(`Hello ${users.firstName} ${users.lastName}, you are ${users.age} years old.`);
}

// Create a user object of type UserType. 
let users: UserType = {
    firstName: "Prantor",
    lastName: "Das",
    age: 20,
};

// Call the greets function with the user object.
greets(users);


// Create a type TeamLead that is an intersection of Manager and Employee.
type TeamLead = Manager & Employee; // & is called intersection in TypeScript

// Create a TeamLead object. 
let t: TeamLead = {
    name: "Prantor",
    age: 20,
    department: "CSE"
}

// Log the TeamLead object.
console.log(t);