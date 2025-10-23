type User = {
  readonly name: string;
  readonly age: number;
};

const user: User = { name: "Alice", age: 30 };
// user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.

console.log(user);
