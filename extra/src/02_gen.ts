// The indentity function can be called with anything
// The type variable T allows us to capture the type of the argument
// so that we can use it later
// The type of the return value will be the same as the type of the argument
// The input type is 'string', so the return type is also 'string'
// The input type is 'number', so the return type is also 'number'
// The input type is generic, can be of any type


function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
console.log(output.toUpperCase());
// output will be of type 'string'

let output2 = identity<number>(100);
console.log(output2.toFixed(2));
// output2 will be of type 'number'