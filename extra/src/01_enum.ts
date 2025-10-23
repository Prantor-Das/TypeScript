// type Direction = "up" | "down" | "left" | "right";
// function doSomething(keyPressed: Direction){
//     // do something
// }

// If anything other than the specified string literals is passed, it will throw an error

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
// enum Direction {
//     Up, // 0
//     Down, // 1
//     Left, // 2
//     Right // 3
// }

// enum Direction {
//     Up=10, // 10
//     Down, // 11
//     Left=20, // 20
//     Right // 21
// }

function doSomething(keyPressed: Direction){
    console.log(keyPressed);
    if(keyPressed === Direction.Up){
        console.log("You pressed up");
    } else if(keyPressed === Direction.Down){
        console.log("You pressed down");
    } else if(keyPressed === Direction.Left){
        console.log("You pressed left");
    } else if(keyPressed === Direction.Right){
        console.log("You pressed right");
    }
}

doSomething(Direction.Up);
doSomething(Direction.Down);
doSomething(Direction.Left);
doSomething(Direction.Right);