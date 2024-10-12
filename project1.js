const prompt = require("prompt-sync")()
const name = prompt("What is your name? ")

console.log("Hello",name, "Welcome to our game!")

const shouldWePLay = prompt("Do you want to play? ")


if (shouldWePLay.toLowerCase()=== 'yes'){
    //Game Logic
    const leftOrRight = prompt("You enter a maze, do you want to go left or right? ")

    if (leftOrRight.toLowerCase() ==='left'){
        console.log("You go left and see a bridge...")

        const cross = prompt("Do you want to cross the bridge? ")

        if (cross.toLowerCase() === 'yes' || 'yeah' || 'y')
        {
            console.log("You cross but the bridge was weak and broke and you fell. You lost.....")
        }
        else{
            console.log("Good choice... You win!")
        }
    }
    else{
        console.log("You go right and fell off the cliff....")
    }



} else if(shouldWePLay.toLowerCase()==='no'){
    console.log("Okay : (")
}
else{
    console.log("Invalid Input...")
}
