// declare global variables
var pageMiddle =document.querySelector("#pageMiddle");
var timerH1 = document.querySelector("#timer");
var score = 0;
var highscoreName = "";
var highScores =[];
var secondsLeft = 0;
var timerInterval = null;

// gets scores in local storage
if(localStorage.getItem("highScores") !== null){
    highScores = JSON.parse(localStorage.getItem("highScores"));
}

// links "View Highscores" button to scoreboard
var highscoresButton = document.getElementById("highscores-link");
highscoresButton.addEventListener("click", function(event){
    showScoreboard();
});

// timer function
function setTime() {
    secondsLeft = 60;
    timerH1.textContent = "Time: " + secondsLeft;
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerH1.textContent = "Time: " + secondsLeft;

        // when timer value is less than or equal to zero, runs end function
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            end();
        }
    }, 1000);
}

// function to create start page of quiz
function start(){
    pageMiddle.innerHTML = "";

    var startH1 = document.createElement("h1");
    startH1.textContent = "Coding Quiz Challenge";

    var startP = document.createElement("p");
    startP.textContent = "Try to answer the following five code-related questions within the time limit. Correct answers are worth 10 points. Incorrect answers will penalize your score/time by ten points/seconds!";

    var startButton = document.createElement("button");
    startButton.setAttribute("id","start-button");
    startButton.textContent = "Start";

    startButton.addEventListener("click", function(event){
        event.preventDefault();
        question1();
        setTime();
    });

    score = 0
    pageMiddle.append(startH1, startP, startButton);
}

// function for first question of quiz
function question1(){
    pageMiddle.innerHTML = "";

    var question1H1 = document.createElement("h1");
    question1H1.textContent = "Commonly used data types DO NOT include:";
    var question1Button1 = document.createElement("button");
    question1Button1.textContent = "strings";
    var question1Button2 = document.createElement("button");
    question1Button2.textContent = "booleans";
    var question1Button3 = document.createElement("button");
    question1Button3.textContent = "alerts";
    var question1Button4 = document.createElement("button");
    question1Button4.textContent = "numbers";

    question1Button1.addEventListener("click", function(event){
        event.preventDefault();
        question2();
        wrong();
    });
    question1Button2.addEventListener("click", function(event){
        event.preventDefault();
        question2();
        wrong();
    });
    question1Button3.addEventListener("click", function(event){
        event.preventDefault();
        question2();
        correct();
    });
    question1Button4.addEventListener("click", function(event){
        event.preventDefault();
        question2();
        wrong();
    });

    pageMiddle.append(question1H1, question1Button1, question1Button2, question1Button3, question1Button4);
}

// function for second question of quiz
function question2(){
    pageMiddle.innerHTML = "";

    var question2H1 = document.createElement("h1");
    question2H1.textContent = "The condition in an if / else statement is enclosed within _____.";
    var question2Button1 = document.createElement("button");
    question2Button1.textContent = "quotes";
    var question2Button2 = document.createElement("button");
    question2Button2.textContent = "curly brackets";
    var question2Button3 = document.createElement("button");
    question2Button3.textContent = "parentheses";
    var question2Button4 = document.createElement("button");
    question2Button4.textContent = "square brackets";

    question2Button1.addEventListener("click", function(event){
        event.preventDefault();
        question3();
        wrong();
    });
    question2Button2.addEventListener("click", function(event){
        event.preventDefault();
        question3();
        wrong();
    });
    question2Button3.addEventListener("click", function(event){
        event.preventDefault();
        question3();
        correct();
    });
    question2Button4.addEventListener("click", function(event){
        event.preventDefault();
        question3();
        wrong();
    });

    pageMiddle.append(question2H1, question2Button1, question2Button2, question2Button3, question2Button4);
}

// function for third question of quiz
function question3(){
    pageMiddle.innerHTML = "";

    var question3H1 = document.createElement("h1");
    question3H1.textContent = "Arrays in JavaScript can be used to store _____.";
    var question3Button1 = document.createElement("button");
    question3Button1.textContent = "numbers and strings";
    var question3Button2 = document.createElement("button");
    question3Button2.textContent = "other arrays";
    var question3Button3 = document.createElement("button");
    question3Button3.textContent = "booleans";
    var question3Button4 = document.createElement("button");
    question3Button4.textContent = "all of the above";

    question3Button1.addEventListener("click", function(event){
        event.preventDefault();
        wrong();
        question4();
    });
    question3Button2.addEventListener("click", function(event){
        event.preventDefault();
        wrong();
        question4();
    });
    question3Button3.addEventListener("click", function(event){
        event.preventDefault();
        wrong();
        question4();
    });
    question3Button4.addEventListener("click", function(event){
        event.preventDefault();
        correct();
        question4();
    });

    pageMiddle.append(question3H1, question3Button1, question3Button2, question3Button3, question3Button4);
}

// function for fourth question of quiz
function question4(){
    pageMiddle.innerHTML = "";

    var question4H1 = document.createElement("h1");
    question4H1.textContent = "String values must be enclosed within _____ when being assigned to variables.";
    var question4Button1 = document.createElement("button");
    question4Button1.textContent = "commas";
    var question4Button2 = document.createElement("button");
    question4Button2.textContent = "curly brackets";
    var question4Button3 = document.createElement("button");
    question4Button3.textContent = "quotes";
    var question4Button4 = document.createElement("button");
    question4Button4.textContent = "parentheses";

    question4Button1.addEventListener("click", function(event){
        event.preventDefault();
        wrong();
        question5();
    });
    question4Button2.addEventListener("click", function(event){
        event.preventDefault();
        wrong();
        question5();
    });
    question4Button3.addEventListener("click", function(event){
        event.preventDefault();
        correct();
        question5();
    });
    question4Button4.addEventListener("click", function(event){
        event.preventDefault();
        wrong();
        question5();
    });

    pageMiddle.append(question4H1, question4Button1, question4Button2, question4Button3, question4Button4);
}

// function for fifth question of quiz
function question5(){
    pageMiddle.innerHTML = "";

    var question5H1 = document.createElement("h1");
    question5H1.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    var question5Button1 = document.createElement("button");
    question5Button1.textContent = "JavaScript";
    var question5Button2 = document.createElement("button");
    question5Button2.textContent = "terminal/bash";
    var question5Button3 = document.createElement("button");
    question5Button3.textContent = "for loops";
    var question5Button4 = document.createElement("button");
    question5Button4.textContent = "console log";

    question5Button1.addEventListener("click", function(event){
        event.preventDefault();
        wrong();
        end();
    });
    question5Button2.addEventListener("click", function(event){
        event.preventDefault();
        wrong();
        end();
    });
    question5Button3.addEventListener("click", function(event){
        event.preventDefault();
        wrong();
        end();
    });
    question5Button4.addEventListener("click", function(event){
        event.preventDefault();
        correct();
        end();
    });
    
    pageMiddle.append(question5H1, question5Button1, question5Button2, question5Button3, question5Button4);
}

// function to change score and display message if wrong answer is chosen
function wrong(){
    score = score-10;
    secondsLeft = secondsLeft-10; 

    var wrongH1 = document.createElement("h1");
    wrongH1.textContent = "wrong";
    pageBottom.append(wrongH1);
    setTimeout(function(){
        pageBottom.innerHTML = "";
    }, 500)
}

// function to change score and display message if correct answer is chosen
function correct(){
    score = score+10;

    var wrongH1 = document.createElement("h1");
    wrongH1.textContent = "correct";
    pageBottom.append(wrongH1);
    setTimeout(function(){
        pageBottom.innerHTML = "";
    }, 500)
}

// function for submission page after quiz has been completed
function end(){
    pageMiddle.innerHTML = "";
    secondsLeft = 0;
    clearInterval(timerInterval);

    var endH1 = document.createElement("h1");
    endH1.textContent = "All done!";
    var endP = document.createElement("p");
    endP.textContent = "Your final score is " + score;
    var endForm = document.createElement("form");
    endForm.setAttribute("id","initials");
    var endLabel = document.createElement("label");
    endLabel.setAttribute("for","initials");
    endLabel.textContent = "Enter initials: ";
    var endInput = document.createElement("input");
    endInput.setAttribute("type","text");
    endInput.setAttribute("id","initals-input");
    endInput.setAttribute("name","initials-input");
    var submitButton = document.createElement("button");
    submitButton.setAttribute("id","submit-button");
    submitButton.textContent = "Submit";

    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        highscoreName = endInput.value;
        scoreboard();
    });

    pageMiddle.append(endH1,endP,endForm)
    initials.append(endLabel,endInput,submitButton)
}

// function to show scores on a scoreboard after submitting above
function scoreboard(){
    pageMiddle.innerHTML = "";

    var scoreboardH1 = document.createElement("h1");
    scoreboardH1.textContent = "Highscores";

    var scoreboardOL = document.createElement("ol");
    
    var currentScore = highscoreName + " " + score;

    highScores.push(currentScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));

    highScores.forEach(function (item){
    let li =document.createElement("li");
    scoreboardOL.appendChild(li);
    li.innerHTML += item;
    })

    var backButton = document.createElement("button");
    backButton.setAttribute("id","back-button");
    backButton.textContent = "Go Back";

    var clearButton = document.createElement("button");
    clearButton.setAttribute("id","clear-button");
    clearButton.textContent = "Clear Highscores";

    clearButton.addEventListener("click", function(event){
        event.preventDefault();
        highScores = [];
        localStorage.clear();
        scoreboardOL.setAttribute("hidden",true);
    });

    backButton.addEventListener("click", function(event){
        event.preventDefault();
        start();
    });

    pageMiddle.append(scoreboardH1, scoreboardOL, backButton,clearButton);
}

// function to show scores on a scoreboard if clicking the "View Highscores" button
function showScoreboard(){
    pageMiddle.innerHTML = "";

    var scoreboardH1 = document.createElement("h1");
    scoreboardH1.textContent = "Highscores";

    var scoreboardOL = document.createElement("ol");

    highScores.forEach(function (item){
    let li = document.createElement("li");
    scoreboardOL.appendChild(li);
    li.innerHTML += item;
    })

    var backButton = document.createElement("button");
    backButton.setAttribute("id","back-button");
    backButton.textContent = "Go Back";

    var clearButton = document.createElement("button");
    clearButton.setAttribute("id","clear-button");
    clearButton.textContent = "Clear Highscores";

    clearButton.addEventListener("click", function(event){
        event.preventDefault();
        highScores = [];
        localStorage.clear();
        scoreboardOL.setAttribute("hidden",true);
    });

    backButton.addEventListener("click", function(event){
        event.preventDefault();
        start();
    });

    pageMiddle.append(scoreboardH1, scoreboardOL, backButton,clearButton);
}

// calling the function to generate the start page
start()