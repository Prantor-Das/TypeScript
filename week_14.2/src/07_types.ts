// interface Employee {
//     name: string;
//     startDate: Date;
// }

// union and intersection of types
// union (|) and intersection (&)
// union: either one of the types or both
// intersection: both types combined
// Union (|) means a value can be any one of the types, 
// while Intersection (&) means a value must be all of the types at once.

// type A = { name: string };
// type B = { age: number };

// type UnionType = A | B;        // either A or B or both
// type IntersectionType = A & B; // must be both A and B

// const u: UnionType = { name: "Alice" };         // ✅ valid
// const i: IntersectionType = { name: "Bob", age: 25 }; // ✅ valid


type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee | Manager; // Union(|) of Employee and Manager
// type TeamLead = Employee & Manager; // Intersection(&) of Employee and Manager

let emp: Employee = {
  name: "Prantor Das",
  startDate: new Date("2022-09-09"),
};

let manager: Manager = {
  name: "Raj",
  department: "IT",
};

let teamLead: TeamLead = {
  name: "Harkirat",
  startDate: new Date("2019-01-01"),
  department: "HR",
};

console.log(emp);
console.log(manager);
console.log(teamLead);
