//TIC TAC TOE
//Nested Arrays  & multi-dimensional Arrays

const prompt = require("prompt-sync")()

function makeMove(turn, board) {

    while(true){
        const row = parseInt(prompt("Enter row: "))
        const col = parseInt(prompt("Enter col: "))

        if (isNaN(row) || row < 1 || row > 3){
            console.log("Invalid row.")
        }
        else if(isNaN(col) || col < 1 || col > 3){
            console.log("Invalid column.")
        }
        else if(board[row - 1][col - 1] !== " ")
        {
            console.log("Invalid position.")
        }
        else{
            board[row - 1][col - 1] = turn
            break;
        }
    
    }
}


//Applying a nested for loop
function printBoard(board){
    for(let i = 0; i < board.length; i++){
        const row = board[i] //looping through the row
        let rowString = ""
        for(let j = 0; j < row.length; j++){
            rowString += row[j]  //the empty string will take whatever item is at the index jnin the row
            if(j !== row.length - 1) rowString += " | "  //if the item at that particular index is not the last item
        }

        console.log(rowString)
        if(i !== board.length - 1)console.log("----------")
    }
  
}


function checkWin(board, turn){
    const lines = [
        [[0, 0],[0, 1],[0, 2]], //row 0
        [[1, 0],[1, 1],[1, 2]], //row 1
        [[2, 0],[2, 1],[2, 2]],  //row 2
        //colums
        [[0, 0],[1, 0],[2, 0]],  //col 0
        [[0, 1],[1, 1],[2, 1]],
        [[0, 2],[1, 2],[2, 2]],
        //orthogonal
        [[0, 0], [1, 1],[2, 2]], //left to bottom right diagonal
        [[2, 0], [1, 1],[0, 2]],  //right to bottom left diagonal
    ]

    for(let line of lines){
        let win = true;
        for(let pos in line){
            const [row, col] = pos //taking items for the position in the lines
            if(board[row][col] !== turn) {
                win = false
                break;
            }
        }
        if (win) return true
    }
    return false
}

const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

let turn = "X";
let turnCount = 0;

console.log("Welcome to tic tac toe game!")
printBoard(board)
console.log()

while (turnCount < 9) {
    console.log("It's the", turn,"player's turn.")

    makeMove(turn, board)
    printBoard(board)
    console.log()
    const win = checkWin(board, turn)
    if (win){
        console.log(turn, "has won!")
        break;
    }

    if (turn === "X") turn = "O"
    else turn = "X"

    turnCount++;
}



// X O X
// X O O
// O X O