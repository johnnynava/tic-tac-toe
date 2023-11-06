const cells = document.querySelectorAll("div.cell")
let count = 0;
let gameboardArray =    ["", "", "",
                        "", "", "",
                        "", "", ""];

const winArray = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

let result = "";
const turn = document.querySelector("#turn");
const restart = document.querySelector("button");

const isThereAWinner = () => {
    const isThereADraw = () => {
        if(!gameboardArray.includes("")){
            result = "It's a draw!"
        }
    }
    winArray.forEach((array) => {
        if (gameboardArray[array[0]] == "x" &&
            gameboardArray[array[1]] == "x" &&
            gameboardArray[array[2]] == "x"){
                result = "Player X won!";
                turn.textContent = result;
            }
        else if (gameboardArray[array[0]] == "o" &&
                 gameboardArray[array[1]] == "o" &&
                 gameboardArray[array[2]] == "o"){
                    result = "Player O won!";
                    turn.textContent = result;
                 }
        else isThereADraw();
    })
}

//Populates array and gameboard
cells.forEach((cell) => cell.addEventListener("click", () => {
    if (!result){
        let arrayNumber = cell.id.slice(-1);
        if (count % 2 === 0 && cell.textContent === ""){
            cell.textContent = "x";
            gameboardArray[arrayNumber] = "x";
            count++
            turn.textContent = "Player O's turn"
        }
        else if (cell.textContent === "") {
            cell.textContent = "o";
            gameboardArray[arrayNumber] = "o";
            count++
            turn.textContent = "Player X's turn"
        }
        isThereAWinner();
    }
}))

restart.addEventListener("click", () => {
    count = 0;
    result = "";
    turn.textContent = "Player X's turn";
    gameboardArray = ["", "", "",
                      "", "", "",
                      "", "", ""];
    cells.forEach((cell) => cell.textContent = "");
})