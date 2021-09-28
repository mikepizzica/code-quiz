console.log("I'm connected");

var pageMiddle =document.querySelector("#pageMiddle");
var timerH1 = document.querySelector("#timer");

var secondsLeft = 0;
var timerInterval = null;

function setTime() {
    secondsLeft = 10;
    timerH1.textContent = "Time: " + secondsLeft;
    // Sets interval in variable
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerH1.textContent = "Time: " + secondsLeft;
        //   timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            // sendMessage();
            // * As a user, I want to lose the game when the timer runs out before I have guessed all the letters.
        }

    }, 1000);
}

function start(){
    pageMiddle.innerHTML = "";

    var startH1 = document.createElement("h1");
    startH1.textContent = "Coding Quiz Challenge";

    var startP = document.createElement("p");
    startP.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

    var startButton = document.createElement("button");
    startButton.setAttribute("id","start-button");
    startButton.textContent = "Start";

    startButton.addEventListener("click", function(event){
        event.preventDefault

        question();
        setTime();
    });

    pageMiddle.append(startH1, startP, startButton);
    console.log("start");
}

function question(){
    console.log("question here")
    pageMiddle.innerHTML = "";

    var questionH1 = document.createElement("h1");
    questionH1.textContent = "Commonly used data types DO NOT include:";

    var questionButton1 = document.createElement("button");
    questionButton1.setAttribute("id","answer1");
    questionButton1.textContent = "strings";

    var questionButton2 = document.createElement("button");
    questionButton2.setAttribute("id","answer2");
    questionButton2.textContent = "booleans";

    var questionButton3 = document.createElement("button");
    questionButton3.setAttribute("id","answer3");
    questionButton3.textContent = "alerts";

    var questionButton4 = document.createElement("button");
    questionButton4.setAttribute("id","answer4");
    questionButton4.textContent = "numbers";

    questionButton1.addEventListener("click", function(event){
        event.preventDefault

        wrong();
    });

    questionButton2.addEventListener("click", function(event){
        event.preventDefault

        wrong();
    });

    questionButton3.addEventListener("click", function(event){
        event.preventDefault

        correct();
    });

    questionButton4.addEventListener("click", function(event){
        event.preventDefault

        wrong();
    });

    pageMiddle.append(questionH1, questionButton1, questionButton2, questionButton3, questionButton4);

}

start()

