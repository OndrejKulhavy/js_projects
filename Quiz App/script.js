const quizData = [
    {
        question: "How old is Florin?",
        a: "10",
        b: "17",
        c: "26",    
        d: "110",
        correct: "c"
    }, {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    }, {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b"
    }
];
var currentQuestion = 0;
var score = 0;

const questionText = document.getElementById("question");

const aInput = document.getElementById("radio_a");
const bInput = document.getElementById("radio_b");
const cInput = document.getElementById("radio_c");
const dInput = document.getElementById("radio_d");

const aLabel = document.getElementById("label_a");
const bLabel = document.getElementById("label_b");
const cLabel = document.getElementById("label_c");
const dLabel = document.getElementById("label_d");

const submitBtn = document.getElementById("button");

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionText.innerHTML = currentQuizData.question;
    aLabel.innerText = currentQuizData.a;
    bLabel.innerText = currentQuizData.b;
    cLabel.innerText = currentQuizData.c;
    dLabel.innerText = currentQuizData.d;
} 
function getSelected() {
    let answer = undefined;
    if(aInput.checked) {
        answer = "a";
    } else if(bInput.checked) {
        answer = "b";
    } else if(cInput.checked) {
        answer = "c";
    } else if(dInput.checked) {
        answer = "d";
    }
    return answer;
}


loadQuiz();
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            alert("You finished the quiz! Your score is " + score);
        }
    }
});