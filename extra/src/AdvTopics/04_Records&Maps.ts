type User = {
  id: string;
  username: string;
};

type Users = {
  [key: string]: User;
};

// type Users = {
//   [key: string]: {
//     id: string;
//     username: string;
//   };
// };

const users: Users = {
  u1: { id: "u1", username: "Alice" },
  u2: { id: "u2", username: "Bob" },
};

// type Users = {
//   [key: string]: string;
// };
// const userNames: Users = {
//   u1: "Alice",
//   u2: "Bob",
// };

// Record and Map
// Record utility type is used to create a type with a set of properties K of type T
type UserRecord = Record<string, User>;

const userRecords: UserRecord = {
  u1: { id: "u1", username: "Alice" },
  u2: { id: "u2", username: "Bob" },
};

// Both Users and UserRecord are same
console.log(users);
console.log(userRecords);

// Maps are a built-in data structure in JavaScript that allow you to store key-value pairs
const userMap: Map<string, User> = new Map();
// const userMap = new Map();
// const userMap = new Map<string, User>();

userMap.set("u1", { id: "u1", username: "Alice" });
userMap.set("u2", { id: "u2", username: "Bob" });

console.log(userMap);

// Maps provide several useful methods for working with key-value pairs
// For example, you can get the value associated with a key using the get method
const user1 = userMap.get("u1");
console.log(user1); // { id: "u1", username: "Alice" }

// You can also check if a key exists in the map using the has method
const hasUser2 = userMap.has("u2");
console.log(hasUser2); // true

// You can remove a key-value pair from the map using the delete method
userMap.delete("u2");
console.log(userMap.has("u2")); // false

// You can get the number of key-value pairs in the map using the size property
console.log(userMap.size); // 1

// Maps are particularly useful when you need to maintain the order of insertion or when you require keys that are not strings or symbols.

