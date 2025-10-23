// Exclude certain properties from a type

type EventType = "click" | "scroll" | "mousemove" | "keydown" | "keyup";

// Exclude 'scroll' and 'mousemove' from EventType
type UserEvent = Exclude<EventType, "scroll" | "mousemove">;

function handleEvent(event: UserEvent) {
  console.log(`Handling event: ${event}`);
}

handleEvent("click"); // Valid
handleEvent("keydown"); // Valid
// handleEvent("scroll"); // Error: Argument of type '"scroll"' is not assignable to parameter of type 'UserEvent'.
// handleEvent("mousemove"); // Error: Argument of type '"mousemove"' is not assignable to parameter of type 'UserEvent'.

// Exclude properties from an interface
interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

// Create a new type excluding 'email' and 'password'
type PublicUser = Exclude<keyof User, "email" | "password">;

function getPublicUserInfo(user: User): Pick<User, PublicUser> {
  const { email, password, ...publicInfo } = user;
  return publicInfo;
}

const user: User = {
  id: 1,
  name: "Alice",
  age: 30,
  email: "xOj2i@example.com",
  password: "password123",
};

const publicUserInfo = getPublicUserInfo(user);
console.log(publicUserInfo);