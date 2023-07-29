

var timer = document.getElementById("timer");
var startButton = document.getElementById("start");
var welcomeCard = document.getElementById("welcome-card");
var quizCard = document.getElementById("quiz-card");
var questionText = document.querySelector(".question-text");
var resultsCard = document.getElementById("results-card");
var questionText = document.getElementById("question-text");
var answerOptionsText = document.querySelector("#answer-options");
var quizFooter = document.getElementById("quiz-footer");

//  question array 
let questions = [
    {
        id: 0,
        question: "What tag defines a division or the beginning/end of an individual section in an HTML document?",
        answer: "< div >",
        options: [
            "< img >",
            "< meta >",
            "< a href >",
        ]
    },
    {
        id: 1,
        question: "What is the type of loop that continues through a block of code as long as the specified condition remains",
        answer: "For Loop",
        options: [
            "Conditional Loop",
            "Else Loop",
            "While Loop",
        ]
    },
    {
        id: 2,
        question: "CSS stands for ____ Style Sheets.",
        answer: "Cascading",
        options: [
            "Concept",
            "Curious",
            "Concave",
        ]
    }
];




function startQuiz() {
    welcomeCard.setAttribute("style","visibility: hidden;");
    quizCard.setAttribute("style", "visibility: visible;");
    firstQuestion();
    startTimer();
};


var counter = 2;
function startTimer(){
    
    setInterval(function() {
    document.getElementById("timer").innerHTML = counter + " seconds remaining";  
        if (counter ===0) {
            clearInterval(counter);
            showResults();
        };
    }, 1000);
};

let i=0;
function firstQuestion() {
    questionText.innerHTML = "<h1>" + questions[0].question + "</h1>";
    answerOptionsText.innerHTML =
    "<li ><button class = 'answer' onclick='logSelection(event)'>" + questions[0].answer + "</button></li>" +
    "<li><button class = 'option' onclick='logSelection(event)'>" + questions[0].options [0] + "</button></li>" +
    "<li><button class = 'option' onclick='logSelection(event)'>" + questions[0].options[1]+ "</button></li>"+
    "<li><button class = 'option' onclick='logSelection(event)'>" + questions[0].options[2]+ "</button></li>";   
};

function showQuestions() {
    var selected= document.querySelectorAll(".option");
   if (i<2) {
        i++;
        questionText.innerHTML =
        "<h1>" + questions[i].question + "</h1>";
        answerOptionsText.innerHTML =
        "<button class = 'answer' onclick = 'logSelection(event)'>" + questions[i].answer + "</button>" +
        "<li><button class = 'option' onclick ='logSelection(event)'>" + questions[i].options[0] + "</button></li>" +
         "<li><button class = 'option' onclick='logSelection(event)'>" + questions[i].options[1]+ "</button></li>"+
        "<li><button class = 'option' onclick = 'logSelection(event)'>" + questions[i].options[2]+ "</button></li>";
    } else {
        showResults();
        timer.setAttribute("style", "visibility:hidden;")
      };
};
let queCount = 0 

// respond to user guess 

function logSelection(event) {
    let guess = event.target.textContent;
    let correctAnswer = questions[i].answer;
 if (guess === correctAnswer) {
    quizFooter.innerHTML = "<p>Correct!</p>";
 } else {
    counter--;
    quizFooter.innerHTML = "<p> Incorrect!</p>";
    
 };
};

function showResults() {
    quizCard.setAttribute("style", "visibility: hidden;");
    resultsCard.setAttribute ("style","visibility: visible;");  
};

// save and display user info once game is over 

var saveButton = document.getElementById('save');
var userName = document.getElementById("name");
var userScore = document.getElementById("score");


saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var userInfo = {
        userName: userName.value,
        userScore: userScore.value
    };
   
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    renderMessage();
});



function renderMessage () {
    var lastUser = JSON.parse(localStorage.getItem("userInfo"));
    if (lastUser !== null) {
    document.querySelector(".message").textContent = "Name: " + lastUser.userName + " Score: " + lastUser.userScore;
   
};
};



// event listeners
startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", startQuiz);
answerOptionsText.addEventListener("click", showQuestions);
