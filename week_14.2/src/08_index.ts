// Create two types User and Admin
// Create a function that takes either a user or an admin as an input,
// and returns a string greeting, "Welcome, [name]"

interface Admin {
  name: string;
  permissions: string;
}

interface User {
  name: string;
  age: number;
}

type UserorAdmin = User | Admin;

function greetPerson(person: UserorAdmin): string {
  return `Welcome, ${person.name}`;
}

// interface user {
//     name: string | Admin;
//     age: number;
// }