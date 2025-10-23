interface User {
    firstname: string;
    lastname: string;
    age: number;
}

function filterUser(users: User[]): User[] {
    // return users.filter(user => user.age >= 18);
    let ans=[];
    for(let i=0; i<users.length; i++){
        if(users[i]!.age >= 18){
            ans.push(users[i]);
        }
    }
    return ans;
}

const users: User[] = [
    { firstname: "John", lastname: "Doe", age: 25 },
    { firstname: "Jane", lastname: "Smith", age: 17 },
    { firstname: "Alice", lastname: "Johnson", age: 30 },
];

const adultUsers = filterUser(users);
console.log("Adult Users:", adultUsers);