// set global variables
var question = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var title = document.getElementById("title");
var welcome = document.getElementById("welcome");
var startButton = document.getElementById("start");

// define functions

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
        


function hideTitle(event){

};

function showQuiz(event) {
    event.title.setAttribute( 
        "display:none"
    );
console.log(title);

};



// add event listeners
startButton.addEventListener("click", startTimer);