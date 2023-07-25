// set global variables
var question = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var title = document.getElementById("title");
var welcome = document.getElementById("welcome");
var startButton = document.getElementById("start");
var userGuess = document.getElementById("card");

// define functions


        


function hideTitle(event){

};

function showQuiz() {
    title.setAttribute("style", "visibility: hidden;");
    welcome.setAttribute("style","visibility: hidden;");
    startButton.setAttribute("style", "visibility: hidden;");
    question.setAttribute("style", "visibility: visible;")
    opt1.setAttribute("style", "visibility: visible;");
    opt2.setAttribute("style", "visibility: visible;");
    opt3.setAttribute("style", "visibility: visible;");
    opt4.setAttribute("style", "visibility: visible;");
    
};

function startTimer(){
    var counter = 5;
    setInterval(function() {
        counter--;
        if (counter >=0) {
            document.getElementById("count").innerHTML = counter + " seconds remaining";
        } if (counter ===0) {
            clearInterval(counter);
            document.getElementById("count").innerHTML = "Sorry, out of time";
        }
    }, 1000);
};

function showAnswer() {
    console.log("hi");
};



// event listeners
startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", showQuiz);

userGuess.addEventListener("click", showAnswer);
