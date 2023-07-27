// set global variables


var startButton = document.getElementById("start");

var welcomeCard = document.getElementById("welcome-card");
var quizCard = document.getElementById("quiz-card");
var questionText = document.querySelector(".question-text");
var answerButton = document.getElementById("answer-options");
var resultsCard = document.getElementById("results-card");

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

function startQuiz() {
    welcomeCard.setAttribute("style","visibility: hidden;");
    quizCard.setAttribute("style", "visibility: visible;");
    firstQuestion();
 
};

function firstQuestion() {
    document.getElementById("question-text").innerHTML = "<h1>" + questions[0].question + "</h1>";
    document.querySelector("#answer-options").innerHTML =
    "<li><button>" + questions[0].answer + "</button></li>" +
    "<li><button>" + questions[0].options [0] + "</button></li>" +
    "<li><button>" + questions[0].options[1]+ "</button></li>"+
    "<li><button>" + questions[0].options[2]+ "</button></li>";
    answerButton.addEventListener("click", showQuestions)
};

let i=0
function showQuestions() {
   if (i<=3) {
        i++;
        document.getElementById("question-text").innerHTML =
        "<h1>" + questions[i].question + "</h1>";
        document.querySelector("#answer-options").innerHTML =
        "<li><button>" + questions[i].answer + "</button></li>" +
        "<li><button>" + questions[i].options[0] + "</button></li>" +
         "<li><button>" + questions[i].options[1]+ "</button></li>"+
        "<li><button>" + questions[i].options[2]+ "</button></li>";
    } else {
        quizCard.setAttribute("style", "visibility: hidden;");
        resultsCard.setAttribute ("style","visibility:visible;");
        resultsCard.textContent = "<h1> Thanks for Playing </h1>";
        // optionSelected();
        questCounter();
      };
};

function questCounter() {
    quizFooter.innerHTML = "<p> Correct: 0/3 Incorrect: 0/3 </p>";
    // function optionSelected(){
    //   let userAns = document.querySelector("#answer-options").innerHTML 
    //  answerButton.onclick = console.log(userAns);
    // };
  };

function optionSelected() {};
   
    
         



// event listeners
startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", startTimer);

answerButton.addEventListener("click", showQuestions);