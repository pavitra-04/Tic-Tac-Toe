let boxes= document.querySelectorAll('.box');
let reset= document.querySelector('#reset');
let newGame= document.querySelector('#new');
let msgcontainer= document.querySelector('.msgcontainer');
let msg= document.querySelector('#msg');

let turn0= true;
let count=0;
const winPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame= () => {
    enableBoxes();
    msgcontainer.classList.add("hide");
};
const gameDraw = () => {
    msg.innerText = "Game was a Draw";
    msgcontainer.classList.remove("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.innerText="O";
            box.style.color="green";
            turn0=false;
        }
        else{
            box.innerText="X";
            box.style.color="red";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let isWinner = checkWin();
        if(count === 9 && !isWinner){
            gameDraw();
        }

    });
});

const disableBoxes= () => {
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes= () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner= (winner) => {
    msg.innerText= `Player ${winner} wins!`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}


const drawgame= () => {
    msg.innerText= "It's a draw!";
    msgcontainer.classList.remove("hide");
    disableBoxes();
}


const checkWin= () => {
    for(let pattern of winPatterns){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        if(pos1val!="" && pos1val===pos2val && pos1val===pos3val){
            showwinner(pos1val);
            return;
        }
    }
}

newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);