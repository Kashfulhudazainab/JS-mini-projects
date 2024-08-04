let userscore=0;
let compscore=0;

const usersc=document.querySelector("#user-score");

const compsc=document.querySelector("#comp-score");

const msg=document.querySelector("#msg");

const ms=document.querySelector("#ms");

const choices=document.querySelectorAll(".choice");

const gencompchoice = () => {
//rock,paper,scissors
let options=["rock","paper","scissor"];
const RandIdx=Math.floor(Math.random()*3);
return options[RandIdx];
}

const drawgame = () => {
console.log("game was draw");
msg.innerText="Match Draw, Play again!";
msg.style.backgroundColor = "#081b31";
}

const result = (userwin, userchoice, compchoice) => {
if(userwin==true){
    console.log("you win");
    msg.innerText=`You Win! ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  userscore+=1;
}
else{
    console.log("you lose");
    msg.innerText=`You lose! ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
   compscore+=1;
}
usersc.innerText=userscore;
compsc.innerText=compscore;
}

const playgame = (userchoice) => {
    console.log("user-choice", userchoice);
//generate computer's choice
let compchoice=gencompchoice();
console.log("comp-choice", compchoice);

if(userchoice==compchoice){
    drawgame();
}
else{
    let userwin=true;
    if(userchoice=="rock"){
        userwin=compchoice=="paper"?false:true;
    }
    else if(userchoice=="paper"){
        userwin=compchoice=="rock"?true:false;
    }
    else if(userchoice=="scissor"){
        userwin=compchoice=="rock"?false:true;
    }
    else{
        console.log("invalid");
    }
    result(userwin,userchoice,compchoice);
}
}

ms.addEventListener("click", () => {
    userscore=0;
compscore=0;
     usersc.innerText=userscore;
     compsc.innerText=compscore;
})

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});

