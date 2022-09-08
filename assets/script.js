
// var totalQuestions = question.length;
var question = document.getElementById("question");

var choiceOne = document.getElementById("btnOne");
var choiceTwo = document.getElementById("btnTwo");
var choiceThree = document.getElementById("btnThree");
var choiceFour = document.getElementById("btnFour");

var startBtn = document.getElementById("startBtn");

var questionIndex = 0;

var wins = localStorage.getItem("savedWins") || 0;
// winSpan.textContent=wins;

var losses = localStorage.getItem("savedLosses") || 0;
// lossSpan.textContent= losses;

//starting with the timer, because I'd like to get that working first, per instructions
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration
        }
        if (seconds === 0) {
            alert('The game is finished! Congrats!')
            finishQuiz();
        }
    }, 1000)
}

//starts questions w/ timer
// startBtn.addEventListener("click", startGame);
    // startBtn.addEventListener("click", function () {
function beginTimer(){
        console.log("I am starting the timer.")
        var fiveMinutes = 60 * 5,
            display = document.querySelector("#time");
        startTimer(fiveMinutes, display);
    }


    function loadQuestion(questionIndex) {
        document.getElementById("question").disabled = true;
        var Q = questions[questionIndex];
        console.log("Q = ", Q);
        question.textContent = (questionIndex + 1) + '.' + Q.question;
        choiceOne.textContent = Q.choices.choiceOne;
        choiceTwo.textContent = Q.choices.choiceTwo;
        choiceThree.textContent = Q.choices.choiceThree;
        choiceFour.textContent = Q.choices.choiceFour;
    };

//starts the game
function startGame() {
    console.log("I am starting the game.")
    console.log("question index = ", questionIndex);
    // function loadQuestion(questionIndex) {
    //     document.getElementById("question").disabled = true;
    //     var Q = question[questionIndex];
    //     question.textContent(questionIndex + 1) + '.' + Q.question;
    //     choiceOne.textContent = Q.btnOne;
    //     choiceTwo.textContent = Q.btnTwo;
    //     choiceThree.textContent = Q.btnThree;
    //     choiceFour.textContent = Q.btnFour;
    // }
    loadQuestion(questionIndex);
};

function loadNextQuestion() {
    var selectedChoice = document.querySelector("answers");
    if (!userChoice) {
        alert("Hello! Please Select Your Answer! (It seems you have forgotten, but that is okay.)");
        return;
    }
    var answers = selectedChoice.value;
    if (question[currentAnswer].answers === answers) {
        score += 1;
    }

    selectedChoice.checked = false;
    currentQ++;
    loadQuestion(currentQ);
}

//moving on from one question to the next
// setTimeout(() => {
//     loadQuestion();
// }, 1000);

beginTimer();
startGame();

//attempting local storage, lol
localStorage.setItem("saveLosses", losses);

