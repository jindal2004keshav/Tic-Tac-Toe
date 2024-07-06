let boxes = document.querySelectorAll(".box");
let button = document.querySelectorAll(".reset");
let hide = document.querySelector("#hide");
let msg = document.querySelector("#msg");

let winning_possibility = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

let turnO = true;

const showWinnner = (winner) =>{
    hide.setAttribute("id","visible");
    msg.innerText = `Congratulations player "${winner}" won the game!!`;
}

function checkWin(){
    winning_possibility.forEach((win) => {
        let pos1 = boxes[win[0]].innerText;
        let pos2 = boxes[win[1]].innerText;
        let pos3 = boxes[win[2]].innerText;
        if(pos1!="" && pos2 != "" && pos3 != ""){
            if(boxes[win[0]].innerText == boxes[win[1]].innerText && boxes[win[1]].innerText == boxes[win[2]].innerText){
                console.log("Winner is " , pos1);
                showWinnner(pos1);
            }
        }
    })
}

boxes.forEach( (x) => {
    x.addEventListener("click", () =>{
        if(turnO){
            x.innerText = "O";
            turnO = false;
        }
        else{
            x.innerText = "X";
            turnO = true;
        }
        x.disabled = true;
        checkWin();

    })
})

button.forEach( (reset) => {
    reset.addEventListener("click", () =>{
        boxes.forEach( (box) => {
            box.innerText = "";
            box.disabled = false;
        })
        hide.setAttribute("id","hide");
    })
})