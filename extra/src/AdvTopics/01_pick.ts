interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
}
// Pick is used to pick from both types and interfaces

// interface updateProps{
//     name: string;
//     age: number;
//     password: string;
// }

type updateProps = Pick<User, "name" | "age" | "password">;

// function AgeDiff(user1: User, user2: User): number {
//     return user1.age - user2.age;
// }
// const userA: User = { name: "Alice", age: 30 };
// const userB: User = { name: "Bob", age: 25 };
// console.log(`Age difference: ${AgeDiff(userA, userB)}`);

function updateUser(updatedProps: updateProps) {
    // hit the data base and update the user
}