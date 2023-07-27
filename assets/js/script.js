// set global variables

// var opt1 = document.getElementById("opt1");
// var opt2 = document.getElementById("opt2");
// var opt3 = document.getElementById("opt3");
// var opt4 = document.getElementById("opt4");
// var title = document.getElementById("title");
// var welcome = document.getElementById("welcome");
var startButton = document.getElementById("start");
// var userGuess = document.getElementById("card");
var welcomeCard = document.getElementById("welcome-card");
var quizCard = document.getElementById("quiz-card");
var questionText = document.querySelector(".question-text");
var answerButton = document.getElementById("answer-options");

// define question array 
let questions = [
    {
        id: 0,
        question: "This is the first question?",
        answer: "This is the first answer",
        options: [
            "This is an incorrect option",
            "This is another incorrect option",
            "This is another wrong choice",
        ]
    },
    {
        id: 1,
        question: "This is the second question?",
        answer: "This is the second answer",
        options: [
            "This is a wrong choice",
            "This one is wrong too",
            "This is not correct",
        ]
    },
    {
        id: 2,
        question: "This is the third question?",
        answer: "This is the thirdanswer",
        options: [
            "This is a third wrong choice",
            "This one is third wrong too",
            "This is not third correct",
        ]
    }
];
// define functions



function startTimer(){
    var counter = 5;
    setInterval(function() {
        counter--;
        if (counter >=0) {
            document.getElementById("timer").innerHTML = counter + " seconds remaining";
        } if (counter ===0) {
            clearInterval(counter);
            document.getElementById("timer").innerHTML = "Sorry, out of time";
        }
    }, 1000);
};

function showQuiz() {
    welcomeCard.setAttribute("style","visibility: hidden;");
    quizCard.setAttribute("style", "visibility: visible;");
    displayQuestions();
 
};

function displayQuestions() {
    // var questionsLength = questions.length;
    // for (var i=0; i<2; i++) {
    document.getElementById("question-text").innerHTML = "<h1>" + questions[0].question + "</h1>";
    document.querySelector("#answer-options").innerHTML =
    "<li><button>" + questions[0].answer + "</button></li>" +
    "<li><button>" + questions[0].options [0] + "</button></li>" +
    "<li><button>" + questions[0].options[1]+ "</button></li>"+
    "<li><button>" + questions[0].options[2]+ "</button></li>";
    
};




// event listeners
startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", showQuiz);
startButton.addEventListener("click", startTimer);

// answerButton.addEventListener("click", );

// userGuess.addEventListener("click", showAnswer);
