type InputType = number | string;
function firstEl(arr: InputType[]) {
  return arr[0];
}
// 1) The problem in the above code is that if we pass an array of numbers, 
// it can return a string too which is not correct
// It returns of type InputType which is number | string

// 2) User can pass a mixed array too
// const mixed = firstEl([1, "hello", 2, "world"]);
// console.log(mixed); // This is valid but not desired
// So to avoid this we can use generics

// const value= firstEl(["harkirat", "prantor"]);
// console.log(value.toUpperCase()); // This will give an error at runtime because value is of type InputType which can be number too

// const str = firstEl(["a", "b", "c"]); // str is of type InputType which is number | string
// const num = firstEl([1, 2, 3]); // num is of type InputType which is number | string
// So here str can be assigned a number too which is not correct
// num = "hello"; // This should give an error but it won't



// To solve this issue we use generics
function firstElGeneric<T>(arr: T[]): T | undefined {
  return arr[0];
}
const str = firstElGeneric<string>(["a", "b", "c"]); // str is of type string
const num = firstElGeneric<number>([1, 2, 3]); // num is of type number
const bool = firstElGeneric<boolean>([true, false, true]); // bool is of type boolean
// num = "hello"; // This will give an error now because num is of type number

// 2) Generics with multiple types
function mapEl<S, T>(arr: S[], func: (arg: S) => T): T[] {
  return arr.map(func);
}
const parsed = mapEl(["1", "2", "3"], (el) => parseInt(el)); // parsed is of type number[]
const upperCased = mapEl(["a", "b", "c"], (el) => el.toUpperCase()); // upperCased is of type string[]

// 3) Generic constraints
function largestEl<T extends number | string>(arr: T[]): T {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
const largestNum = largestEl([1, 5, 3, 2]); // largestNum is of type number
const largestStr = largestEl(["a", "c", "b"]); // largestStr is of type string
// const invalid = largestEl([true, false, true]); // This will give an error because boolean is not assignable to number | string

// 4) Generic interfaces
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}
const pair1: KeyValuePair<string, number> = { key: "age", value: 30 };
const pair2: KeyValuePair<number, string> = { key: 1, value: "one" };

// 5) Generic classes
class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}
const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
const sum = myGenericNumber.add(5, 10); // sum is of type number
console.log(sum);

const myGenericString = new GenericNumber<string>();
myGenericString.zeroValue = "";
myGenericString.add = function (x, y) {
  return x + y;
};
const concatenated = myGenericString.add("Hello, ", "World!"); // concatenated is of type string
console.log(concatenated);

// These are some examples of using generics in TypeScript to create reusable and type-safe components. 

