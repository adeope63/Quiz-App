//The Quiz Question Array
const quizData = [
  {
    question: "How old is Adeope",
    a: "10",
    b: "24",
    c: "35",
    d: "22",
    correct: "b",
  },
  {
    question: "What is the most used Programming Language",
    a: "Python",
    b: "Java",
    c: "C",
    d: "Javascript",
    correct: "b",
  },
  {
    question: "Who is the president of Nigeria",
    a: "Osama Bin Laden",
    b: "Bola Tinubu",
    c: "Muhammadu Buhari",
    d: "Donald Trump",
    correct: "c",
  },
  {
    question: "What is the full meaning of HTML",
    a: "Hypertext Markup Language",
    b: "Hypertype Marking Language",
    c: "HyperV Text Markup Linguistics",
    d: "Hyper Textual Markup Languages ",
    correct: "a",
  },
  {
    question: "What year was Javascript Launch",
    a: "2010",
    b: "2020",
    c: "1979",
    d: "1997",
    correct: "d",
  },
];

//Getting the ID from HTML
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

//Starting the quiz array at 0
let currentQuiz = 0;
//default score starting at 0
let score = 0;

loadQuiz();

//Load the quiz
function loadQuiz() {
  //deselect the radio for the next question
  deselectAnswers();

  // To set the quiz array and enable iteration
  const currentQuizData = quizData[currentQuiz];

  //inputting from the array to display 
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
//To check if the radio is selected
function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEls) => {
    if (answerEls.checked) {
      answer = answerEls.id;
    }
  });
  return answer;
}
//To deselect the radio by default
function deselectAnswers() {
  answerEls.forEach((answerEls) => {
    answerEls.checked = false;
  });
}

//Button listener
submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly ${score} out of ${quizData.length} question</h2><button onclick="location.reload()">Reload Quiz</button>`;
    }
  }
});
