

var timer = document.getElementById("timer");
var startButton = document.getElementById("start");
var welcomeCard = document.getElementById("welcome-card");
var quizCard = document.getElementById("quiz-card");
var questionText = document.querySelector(".question-text");
var resultsCard = document.getElementById("results-card");
var questionText = document.getElementById("question-text");
var answerOptionsText = document.querySelector("#answer-options");
var quizFooter = document.getElementById("quiz-footer");
var saveButton = document.getElementById('save');
var userName = document.getElementById("name");
var userScore = document.getElementById("score");


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

// functions
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

function startQuiz() {
    welcomeCard.setAttribute("style","visibility: hidden;");
    quizCard.setAttribute("style", "visibility: visible;");
    firstQuestion();
 
};
let i=0;
// var correctAnswer = document.querySelector(questions[i].answer);

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
        // create option buttons 
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

function logSelection(event) {
    let guess = event.target.textContent;
    let correctAnswer = questions[i].answer;
console.log(guess);
console.log(correctAnswer);
 if (guess === correctAnswer) {
    quizFooter.innerHTML = "Correct!";
   

 } else {
    quizFooter.innerHTML = "Incorrect!";
    counter--;
 };
};





function showResults() {
    quizCard.setAttribute("style", "visibility: hidden;");
    resultsCard.setAttribute ("style","visibility: visible;");  
};

saveButton.addEventListener("click", function(event) {
    event.preventDefault();

var userInfo = {
    userName: userName.value,
    userScore: userScore.value
};
console.log(userName);
console.log()
localStorage.setItem("score", JSON.
stringify(userInfo));
renderMessage ();
});

function renderMessage() {
    var lastUser = JSON.parse(localStorage.getItem(userInfo));
    document.querySelector(".message").textContent = lastUser.userName + lastUser.userScore
};

    



// event listeners
startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", startQuiz);


answerOptionsText.addEventListener("click", showQuestions);

