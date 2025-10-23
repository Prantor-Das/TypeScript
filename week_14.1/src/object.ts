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

// ts can sum number + number
// ts can also sum string + string
// ts can also sum string + number or number + string 

// ts cannot sum (number | string) + (number | string)
