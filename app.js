let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;


const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];
const resetGame = () =>{
  turnO = true;
  enableBox();
  msgContainer.classList.add("hide");
}

boxes.forEach( (box)=> {
  box.addEventListener("click",()=>{
    if(turnO){
      box.innerText = "O";
      turnO = false;
    }
    else{
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinnwer();
    
    
    
  });
});

const disableBox = () => {
  turnO = true;
  for(box of boxes){
    box.disabled = true;
  }
}
const enableBox = () => {
  turnO = true;
  for(box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}
const showWinner = (winner) =>{
  msg.innerText = `Congratulations Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
}
const showDraw = () => {
  msg.innerText = "🤝 Game is Draw!";
  msgContainer.classList.remove("hide");
  disableBox();
}

const checkWinnwer = () =>{
  let winnerFound = false;
  for(patterns of winPatterns){
    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        
        showWinner(pos1Val);
        winnerFound = true;
      }
    }
  }
   if (!winnerFound) {
    let allFilled = true;
    for (let box of boxes){
      if (box.innerText === ""){
        allFilled = false;
        break;
      }
    }
    if (allFilled) {
      showDraw();
    }
  }

}


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
