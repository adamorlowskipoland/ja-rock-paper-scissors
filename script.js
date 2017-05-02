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
        console.log(this.playerChoice);
    },
    "setSelections" : function() {
        model.playerChoose.className = model.options[model.playerChooseSelect.value];
        this.getPlayerSelection();
        this.getComputerSelection(model.computerChoose);
    },
    "compareSelections" : function() {
        // if ()
    },
    "eventListeners" : function() {
        model.playBtn.addEventListener('click', function() {
            operator.setSelections();
        });
    }
}

const view = {
    "initDisplay" : function() {
        operator.eventListeners();
    }
}

view.initDisplay();