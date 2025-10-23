function getMax(nums: number[]): number | undefined {
    if (nums.length === 0) return undefined;

    let max = nums[0]!;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i]! > max) {
            max = nums[i]!;
        }
    }
    return max;
}

// let max = nums[0]; // <-- TypeScript still thinks nums[0] *could* be undefined
// Use Non-Null Assertion (!)
// Tell TypeScript “trust me, this value isn’t undefined”

const numbers = [3, 5, 7, 2, 8];
const maxNumber = getMax(numbers);
console.log("Maximum number is:", maxNumber);

interface User {
    name: string;
    age: number;
    addresses: {
        city: string;
        pincode: string;
    }[];
}

// OR
// interface Address {
//     city: string;
//     pincode: string;
// }

// interface User {
//     name: string;
//     age: number;
//     addresses: Address[];
// }

const user: User = {
    name: "Alice",
    age: 30,
    addresses: [
        { city: "New York", pincode: "10001" },
        { city: "Los Angeles", pincode: "90001" },
    ],
};

if (user.addresses.length > 0) {
    console.log(user.addresses[0]!.city);
} else {
    console.log("No addresses available");
}