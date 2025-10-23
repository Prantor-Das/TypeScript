// In js and ts we can change value of an array or object even if it is declared using const
// Example:
//
// To avoid this we have Readonly utility type

type User = {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
};

// Making all the properties of User readonly
type ReadonlyUser = Readonly<User>;

const userA: ReadonlyUser = {
  id: 1,
  name: "Alice",
  age: 30,
  email: "xOj2i@example.com",
  password: "password123",
};

// The following line would cause a compile-time error
// userA.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.

console.log(userA);

// Readonly can be very useful in scenarios where you want to ensure that certain data remains immutable throughout the application lifecycle, such as configuration settings, user profiles, etc.
