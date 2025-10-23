interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
}

type updateProps = Pick<User, "name" | "age" | "password">;

// Partial is used to make all the properties optional
type PartialUser = Partial<updateProps>;

function updateUser(updatedProps: PartialUser) {
    // hit the data base and update the user
}