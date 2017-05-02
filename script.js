const model = {
    "playerChooseSelect" : document.getElementById('playerChooseSelect'),
    "playBtn" : document.getElementById('playBtn'),
    "computerChoose" : document.getElementById('computerChoose'),
    "playerChoose" : document.getElementById('playerChoose'),

    "computerScore" : document.getElementById('computerScore'),
    "playerScore" : document.getElementById('playerScore'),

    "options" : {
        "rock" : "fa fa-hand-rock-o",
        "paper" : "fa fa-hand-paper-o",
        "scissors" : "fa fa-hand-scissors-o"
    }
}

const operator = {
    "computerPoints" : 0,
    "playerPoints" : 0,
    "computerChoice" : "",
    "playerChoice" : "",

    "getComputerSelection" : function(domElement) {
        var pick = Math.random();
        if (pick < 0.67 && pick > 0.33) {
            this.computerChoice = "scissors";
            domElement.className = model.options.scissors;
        } else if (pick <= 0.33) {
            this.computerChoice = "rock";
            domElement.className = model.options.rock;
        } else {
            this.computerChoice = "paper";
            domElement.className = model.options.paper;
        }
    },
    "getPlayerSelection" : function() {
        if (model.playerChooseSelect.value === "scissors") {
            this.playerChoice = "scissors";
        } else if (model.playerChooseSelect.value === "rock") {
            this.playerChoice = "rock";            
        } else {
            this.playerChoice = "paper";            
        }
    },
    "setSelections" : function() {
        model.playerChoose.className = model.options[model.playerChooseSelect.value];
        this.getPlayerSelection();
        this.getComputerSelection(model.computerChoose);
        this.compareSelections();
    },
    "compareSelections" : function() {
        var key = true;
        switch (key) {
            case (this.computerChoice === this.playerChoice):
                console.log('tie');
                this.renderScores();
                break;
        // if computer chooses rock
            case (this.computerChoice === "rock" && this.playerChoice === "paper"):
                this.playerPoints++;
                this.renderScores();
                break;
            case (this.computerChoice === "rock" && this.playerChoice === "scissors"):
                this.computerPoints++;
                this.renderScores();
                break;

        // if computer chooses paper
            case (this.computerChoice === "paper" && this.playerChoice === "rock"):
                this.computerPoints++;
                this.renderScores();
                break;
            case (this.computerChoice === "paper" && this.playerChoice === "scissors"):
                this.playerPoints++;
                this.renderScores();
                break;

        // if computer chooses scissors
            case (this.computerChoice === "scissors" && this.playerChoice === "paper"):
                this.computerPoints++;
                this.renderScores();
                break;
            case (this.computerChoice === "scissors" && this.playerChoice === "rock"):
                this.playerPoints++;
                this.renderScores();
                break;
        
            default:
                break;
        }
    },
    "renderScores" : function() {
        model.computerScore.textContent = this.computerPoints;
        model.playerScore.textContent = this.playerPoints;
        this.checkWinner();
    },
    "checkWinner" : function() {
        if (this.playerPoints > 14) {
            alert("Player Won, congratulations");
            model.playBtn.disabled = true;
        } else if (this.computerPoints > 14) {
            alert("Computer Won");
            model.playBtn.disabled = true;
        }
    }
}

const view = {
    "initDisplay" : function() {
        this.eventListeners();
    },
    "eventListeners" : function() {
        model.playBtn.addEventListener('click', function() {
            operator.setSelections();
        });
    }
}

view.initDisplay();