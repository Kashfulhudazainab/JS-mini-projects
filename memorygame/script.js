const moves = document.getElementById("move-count");
const timevalue = document.getElementById("time");

const startbutton = document.getElementById("start");
const stopbutton = document.getElementById("stop");
const gamecontainer = document.querySelector(".game-container");

const result = document.getElementById("result");
const controls = document.querySelector(".control-container");

let cards;
let intervals;

let firstcard = false;
let secondcard = false;

const items = [
  { name: "bee", image: "images/bee.png" },
  { name: "crocodile", image: "images/crocodile.png" },
  { name: "macaw", image: "images/macaw.png" },
  { name: "gorilla", image: "images/gorilla.png" },
  { name: "tiger", image: "images/tiger.png" },
  { name: "monkey", image: "images/monkey.png" },
  { name: "chameleon", image: "images/chameleon.png" },
  { name: "piranha", image: "images/piranha.png" },
  { name: "anacoda", image: "images/anacoda.png" },
  { name: "sloth", image: "images/sloth.png" },
  { name: "cockatoo", image: "images/cockatoo.png" },
  { name: "toucan", image: "images/toucan.png" }
];

//initialize time
let minutes=0;
seconds=0;

//initialize moves and win count
let movescount=0;
wincount=0;

//for time

const timegenerator = () => {
    seconds+=1;
    if(secods>=60){
        minutes+=1;
        seconds=0;
    }

    let secondsvalue=seconds<10?`0${seconds}`:seconds;

let minutesvalue=minutes<10?`0${minutes}`:minutes;

timevalue.innerHTML = `<span>   Time:</span>${minutesvalue}:${secondsvalue}`;



};

//calculation

const movescounter = () => {
movescount+=1;
movescount.innerHTML= `<span>Moves:</span>${movescount}`;
};

//pick random objcts

const generaterandom = (size=4) =>{
let temparray=[...items];
let cardvalues = [];

size = (size*size)/2;
for ( let i=0; i<size; i++){
    const randomindex=Math.floor(Math.randm() * temparray.length);
    cardvalues.push(temparray[randomindex]);

    temparray.splice(randomindex,1)
}

return cardvalues;

};
const matrixgenerator=(cardvalues,size=4) => {
    gamecontainer.innerHTML="";
    cardvalues=[...cardvalues, ...cardvalues];
    cardvalues.sort( () => Math.random() - 0.5 );
    for (let i=0; i<size;i++){

    }
};
