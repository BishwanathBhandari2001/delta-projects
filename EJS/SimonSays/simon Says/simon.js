let gameSeq= [];
let userSeq= [];

let btns = ["yellow", "red", "purple", "green"];

let started= false;
let level = 0;
let highScore = 0 ;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelup();
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText= `level ${level}`;

    //random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randIdx);
    // console.log(randColor);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}


function checkAns(idx){
    // console.log("current level", level);
    // let idx = level -1;

    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        if(level > highScore){
            highScore  = level;
        }
        h2.innerHTML = `Game Over! <b> Your Score was ${level}. <b> <br> Highest Score: ${highScore} <br> Press any key to Restart Game.`;
        document.querySelector("body").style .backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style .backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    // console.log("btn was pressed");
    // console.log(this);
    let btn = this;
    userFlash(btn);

    usercolor = btn.getAttribute("id");
    // console.log(usercolor);
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    userSeq = [];
    gameSeq = [];
    started = false;
    level = 0;
}