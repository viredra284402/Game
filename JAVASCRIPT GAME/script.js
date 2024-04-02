let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")



let turn0 = true; // playerX, playerY

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide")

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerHTML = "o"
            box.style['-webkit-text-stroke'] = '1px black'
            box.style.color = "transparent"
     
            turn0 = false;
        }
      
        else {
            box.innerHTML = "x"
            box.style['-webkit-text-stroke'] = '1px red'
            box.style.color = "transparent"

            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msg.style['-webkit-text-stroke'] = '2px black'
    msg.style.color = "transparent"
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const checkWinner = () => {
    for (const pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val)
            }
        }
    }
}

newGameBtn.addEventListener("click" ,()=>{
    resetGame()
} )
resetBtn.addEventListener("click" ,()=>{
    resetGame()
})
