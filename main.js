const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const rock = document.querySelector("#rock");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red"); 
const game = document.querySelector(".gamepad");
const choices = document.querySelector(".choices");
const playerChoice = document.querySelector(".circle-player");
const computerChoice = document.querySelector(".circle-computer");
const playerImg = document.querySelector("#playerImg");
const computerImg = document.querySelector("#computerImg");
const images = ["./images/icon-paper.svg", "./images/icon-scissors.svg", "./images/icon-rock.svg"];
const result = document.querySelector(".result");
const scoreline = document.querySelector("#scoreline");
const playAgain = document.querySelector("#playAgain");
const playBtn = document.querySelector(".playBtn");

var playing = true;
var player, computer; 
var score = localStorage.score ? localStorage.score : 0;
scoreline.innerText = score;

function again() {
    playAgain.style.display = "block";
    playBtn.onclick = function() {
        choices.style.display = "none";
        result.style.display = "none";
        playAgain.style.display = "none";
        game.style.display = "block";
        playerChoice.className = "circle circle-player";
        computerChoice.className = "circle circle-computer";
        playing = true;
    };
}

function updateScore() {
    if (result.innerText !== "A DRAW") {
        result.innerText === "YOU LOSE" ? score-- : score++;
    }
    scoreline.innerText = score;
    localStorage.score = score;
    again();
}

function displayResult() {
    if (player === computer) {
        result.innerText = "A DRAW";
    }

    else if (player === 0) {
        result.innerText = computer === 1 ? "YOU LOSE" : "YOU WIN";
    } 

    else if (player === 1) {
        result.innerText = computer === 2 ? "YOU LOSE" : "YOU WIN";
    } 

    else {
        result.innerText = computer === 0 ? "YOU LOSE" : "YOU WIN";
    } 
    result.style.display = "block";
    updateScore();
}

function displayChoices() {
    game.style.display = "none";
    choices.style.display = "block";
    playerChoice.style.display = "none";
    computerChoice.style.display = "none";

    setTimeout(function() {
        playerChoice.style.display = "block";
    }, 1000);

    setTimeout(function() {
        computerChoice.style.display = "block";
    }, 2000);

    setTimeout(function() {
        displayResult();
    }, 3000);
}

function computerSelection() {
    let choices = ["blue", "yellow", "red"];
    let index = Math.floor(Math.random() * 3);
    computer = index;
    computerChoice.classList.add(choices[index]);
    computerImg.src = images[index];
    displayChoices();
}

function getSelection(colour, index) {
    playing = false;
    player = index;
    playerChoice.classList.add(colour)
    playerImg.src = images[index];
    computerSelection();
}

paper.onmousedown = function() {
    blue.style.boxShadow = "none";
    paper.style.boxShadow = "none";

    if (playing) {
        setTimeout(function() {
            getSelection("blue", 0);
        }, 1000);
    }
};

paper.onmouseup = function() {
    setTimeout(function() {
        blue.style.boxShadow = "0px 6px hsl(230, 89%, 52%)";
        paper.style.boxShadow = "0px 6px #cccccc inset";
    }, 500);  
};

scissors.onmousedown = function() {
    yellow.style.boxShadow = "none";
    scissors.style.boxShadow = "none";

    if (playing) {
        setTimeout(function() {
            getSelection("yellow", 1);
        }, 1000);
    }
};

scissors.onmouseup = function() {
    setTimeout(function() {
        yellow.style.boxShadow = "0px 6px hsl(39, 89%, 49%)";
        scissors.style.boxShadow = "0px 6px #cccccc inset";
    }, 500);  
};

rock.onmousedown = function() {
    red.style.boxShadow = "none";
    rock.style.boxShadow = "none";

    if (playing) {
        setTimeout(function() {
            getSelection("red", 2);
        }, 1000);
    }
};

rock.onmouseup = function() {
    setTimeout(function() {
        red.style.boxShadow = "0px 6px hsl(349, 71%, 52%)";
        rock.style.boxShadow = "0px 6px #cccccc inset";
    }, 500);  
};

const rulesBtn = document.querySelector(".rulesBtn");
const rules = document.querySelector(".rules");
const rulesClose = document.querySelector("#rulesClose");

rulesBtn.onclick = function() {
    rules.style.display = "block";
}

rulesClose.onclick = function() {
    rules.style.display = "none";
}