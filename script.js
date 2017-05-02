const model = {
    "playerChooseSelect" : document.getElementById('playerChooseSelect'),
    "playBtn" : document.getElementById('playBtn'),
    "computerChoose" : document.getElementById('computerChoose'),
    "playerChoose" : document.getElementById('playerChoose'),

    "options" : {
        "rock" : "fa fa-hand-rock-o",
        "paper" : "fa fa-hand-paper-o",
        "scissors" : "fa fa-hand-scissors-o"
    }
}

const operator = {
    "getSelection" : function(domElement) {
        var pick = Math.random();
        if (pick < 0.67 && pick > 0.33) {
            domElement.className = model.options.scissors;
        } else if (pick <= 0.33) {
            domElement.className = model.options.rock;
        } else {
            domElement.className = model.options.paper;
        }
    },
    
    "eventListeners" : function() {
        model.playBtn.addEventListener('click', function() {
            view.initDisplay();
        });
    }
}

const view = {
    "initDisplay" : function() {
        model.playerChoose.className = model.options[model.playerChooseSelect.value];
        console.log(model.playerChooseSelect.value);
        console.log(model.playerChoose);
    }
}

operator.eventListeners();
// view.initDisplay();