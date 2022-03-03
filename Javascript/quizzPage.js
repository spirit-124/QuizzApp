const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quizz");
const answerElements = document.querySelectorAll(".answer");

const questionElement = document.getElementById("Question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitButton = document.getElementById("submit");

let currentQuizz = 0;
let score = 0;

const deselectAnswer = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

const selectAnswer = () => {
    let answer;
    answerElements.forEach((answerElements) => {
        if (answerElements.checked) answer = answerElements.id;
    });
    return answer;
};

const loadQuizz = () => {
    deselectAnswer();
    const currentQuizzdata = quizData[currentQuizz];
    questionElement.innerText = currentQuizzdata.question;
    a_text.innerText = currentQuizzdata.a;
    c_text.innerText = currentQuizzdata.c;
    d_text.innerText = currentQuizzdata.d;
    b_text.innerText = currentQuizzdata.b;
};

loadQuizz();

submitButton.addEventListener("click", () => {
    const answer = selectAnswer();
    if (answer) {
        if (answer === quizData[currentQuizz].correct) score++;
        currentQuizz++;
        if (currentQuizz < quizData.length) loadQuizz();
        else {
            quiz.innerHTML = `
                <h2>You answered ${score}/ ${quizData.length} questions correctly </h2>
                <button onclick = "history.go(0)">Play Again </button>
                `


        }

    }
});
