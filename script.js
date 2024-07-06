console.log("Welcome Tic Tac Toe");
let music = new Audio("win.mp3") //background music
let audioTurn = new Audio("turn.mp3")
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

//Function to change the turn
let c=0;
const changeTurn = ()=>{
    audioTurn.play();
    c++;
    return (turn === "X"?"0": "X")
}

//function to check for a win
const checkWin = ()=>{
    let boxtext= document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            music.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
         }
         else if(c==9 && !isgameover){
            gameover.play();
         }
     })
}

//game logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){

                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
        }

    })

})

// Add onclick listener to reset button

reset.addEventListener('click', (e)=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = " "
    });
    turn = "X";
    isgameover = false
        document.getElementsByClassName("info")[0].innerText = "Turn for"+turn;
        document.querySelector('.imgbox').getElementsByClassName,emtsByTagName('img')[0].style.width = "200px"
    
})


