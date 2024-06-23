const options =['rock','paper','scissor'];
const playerChoose = document.getElementById("playerChoose");
const computerChoose = document.getElementById("computerChoose");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore=document.getElementById("score-P");
const computerScore=document.getElementById("score-C");
const mainContainer=document.getElementById("main-container");
const myImage=document.getElementById("my-image");
const playAgain=document.getElementById("playAgain")
let myScore =0;
let comScore=0;

function playGame(player){
    const computer =options[Math.floor(Math.random()*3)]
    console.log(computer);
    let result;
    if(player ==computer){
        result ="ITS TIE"
        resultDisplay.textContent=result;
        resultDisplay.classList.add("tie");
        resultDisplay.classList.remove("win");
        resultDisplay.classList.remove("lose");
    }
    else{
        switch (player){
            case 'rock':
                result =(computer=='scissor') ? "YOU WIN" : "YOU LOSE"
                break;
            case 'paper':
                result =(computer=='rock') ? "YOU WIN" : "YOU LOSE" 
                break;
            case 'scissor':
                result =(computer=='paper') ? "YOU WIN" : "YOU LOSE"
                break;      
        }
    }
    playerChoose.textContent=player;
    computerChoose.textContent=computer;

    switch (result){
        case "YOU WIN":
        myScore++;
        playerScore.textContent=myScore;
        resultDisplay.textContent=result;
        resultDisplay.classList.add("win");
        resultDisplay.classList.remove("lose");
        resultDisplay.classList.remove("tie");
        document.body.style.backgroundColor="white"
        document.body.style.color="black";
        break;
        case "YOU LOSE":
        comScore++;
        computerScore.textContent=comScore;
        resultDisplay.textContent=result;
        resultDisplay.classList.add("lose");
        resultDisplay.classList.remove("win");
        resultDisplay.classList.remove("tie");
        document.body.style.backgroundColor="black"
        document.body.style.color="white";
        break;
    }
    if(myScore===10){
        document.body.style.backgroundColor="lightgreen"
        document.body.style.color="white";
        mainContainer.style.display="none"
        myImage.style.display="flex"
        const gameResult=document.getElementById("gameResult");
        gameResult.textContent=`PLAYER WON THE GAME`;
        playAgain.addEventListener("click", function(){
            location.reload()
        });
    }
    else if(comScore===10){
        document.body.style.backgroundColor="red"
        document.body.style.color="white";
        mainContainer.style.display="none"
        myImage.style.display="flex"
        const gameResult=document.getElementById("gameResult");
        gameResult.textContent=`COMPUTER WON THE GAME`;
        playAgain.addEventListener("click", function(){
            location.reload()
        });
    }
}