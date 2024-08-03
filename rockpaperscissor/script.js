let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");

const gencompchoice = () => {
//rock,paper,scissors
let options=["rock","paper","scissor"];
Math.floor(Math.random()*3);
return options[]
}

const playgame = (userchoice) => {
//generate computer's choice

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});

