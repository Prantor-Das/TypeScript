// The indentity function can be called with anything
// The type variable T allows us to capture the type of the argument
// so that we can use it later
// The type of the return value will be the same as the type of the argument
// The input type is 'string', so the return type is also 'string'
// The input type is 'number', so the return type is also 'number'
// The input type is generic, can be of any type

interface User {
    name: string;
}

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
console.log(output1.toUpperCase());
// output1 will be of type 'string'

let output2 = identity<User>({ name: "myString" });
console.log(output2.name.toUpperCase());
// output2 will be of type 'User'

let output3 = identity<number>(100);
console.log(output3.toFixed(2));
// output3 will be of type 'number'