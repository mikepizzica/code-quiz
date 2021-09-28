console.log("I'm connected");

// var imgTag = document.createElement("img");

// imgTag.setAttribute("src", "assets/images/hoopla-is-dead.png");
// imgTag.setAttribute("alt", "Start Test");

// imgTag.addEventListener("click", function(){ 
//     console.log("Maybe this will start");
// });

// document.body.appendChild(imgTag);
var pageMiddle =document.querySelector("#pageMiddle");

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

    pageMiddle.append(questionH1, questionButton1, questionButton2, questionButton3, questionButton4);
}
start()

