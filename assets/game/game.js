var Q = 0;
var question =document.getElementById("question")
var choiceOne = document.getElementById("btnOne");
var choiceTwo = document.getElementById("btnTwo");
var choiceThree = document.getElementById("btnThree");
var choiceFour = document.getElementById("btnFour");
var wins =localStorage.getItem("savedWins")||0;
winSpan.textContent=wins;
var losses=localStorage.getItem("savedLosses")||0;
lossSpan.textContent=losses;
var timeRemaining=10;
var timer

 startBtn.addEventListener("click", startGame);


var questionsAll= [
    {
        question: "What are the four compontents of color?", 
        choices: {
            choiceOne: "tones, tints, nuetrals, grays",
            choiceTwo: "nuetralization, popability, dullability, chromatics",
            choiceThree: "hue, saturation, value, temperature",
            choiceFour: "complementaries, naturals, neutrals, warmth",
        },
        answer: "choiceThree",
    },
    {
        choices: {
        question: "How are tertiary colors formed?",
        choiceOne: "through tints of other colors",
        choiceTwo: "by mixing two complementary colors",
        choiceThree: "neither, tertiary colors come from nature",
        choiceFour:"by adding a primary and secondary color together",
        },
        answer: "choiceFour",
    },
    {
        question: "what is not a way to achieve color harmony?",
        choices: {
        choiceOne: "by using analogous colors",
        choiceTwo: "by using complementary colors",
        choiceThree: "by basing the colors off of nature",
        choiceFour: "by basing the colors off of light",
        },
        answer: "choiceFour",
    },
    {
        question: "how can 3 colors be percieved as four?",
        choices: { 
        choiceOne: "they cannot",
        choiceTwo: "by placing the same colors next to each other, and focusing on the different characteristics of each",
        choiceThree: "by looking on a color-blind computer",
        choiceFour: "by looking only at the physical concept of each, starting with its primary component",
        },
        answer: "choiceTwo",
    },
    {
        question: "what artist said: 'Color! What a deep and mysterious language, the language of dreams.",
        choices: {
        choiceOne: "Paul Gauguin",
        choiceTwo: "Kehinde Wiley",
        choiceThree: "Jean-Michel Basquiat",
        choiceFour: "El Greco",
        },
        answer: "choiceOne",
    },
]

function questionsAnswered (){
    choiceOne.textContent = questionsAll[Q].choices["choiceOne"]
    choiceTwo.textContent = questionsAll[Q].choices["choiceTwo"]
    choiceThree.textContent = questionsAll[Q].choices["choiceThree"]
    choiceFour.textContent = questionsAll[Q].choices["choiceFour"]
    
    question.textContent = questionsAll[Q].question[0]
    question.textContent = questionsAll[Q].question[1]
    question.textContent = questionsAll[Q].question[2]
    question.textContent = questionsAll[Q].question[3]
    question.textContent = questionsAll[Q].question[4]
       render ;
}

//btnOne.addEventListener("click", function () {

//btnTwo.addEventListener("click", function () {

//btnThree.addEventListener("click", function () {

//btnFour.addEventListener("click", function () {

    
  //});


//moving on from one question to the next
setTimeout(() => {
    loadQuestion();
  }, 1000);

//Add else, if else for questions

    function setTimer() {
         secondsRemaining--;
        timeEl.textContent= "seconds remaining!";

        if (secondsRemaining === 0)
        alert("I'm sorry, you've lost")
        finishQuiz();
        losses++;
        lossSpan.textContent=losses;
        //attempting local storage, lol
        localStorage.setItem("saveLosses", losses);
        clearInterval(timer);
        }
    }, 1000)





// increments the question -- current
// calls render question

// new function "render queston"
//check current what question we're on