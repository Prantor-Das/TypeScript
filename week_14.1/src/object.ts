function greeting(user: { 
    name: string; 
    age: number 
}): void {
  console.log(`Hello ${user.name}, you are ${user.age} years old.`);
}

greeting({
  name: "Prantor",
  age: 20,
});

let user = {
  name: "Prasoon",
  age: 21,
};

// let user: { name: string; age: number } = {
//   name: "Prasoon",
//   age: 21,
// };

greeting(user);
