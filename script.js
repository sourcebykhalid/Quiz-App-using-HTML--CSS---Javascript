// Define the quiz data with questions, answer choices, and correct answers
const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d", // Correct answer
  },
  {
    question: "Which technology is used for Front-end development?",
    a: "Sql",
    b: "Mongodb",
    c: "React-Js",
    d: "Flutter",
    correct: "c", // Correct answer
  },
  {
    question: "Which Engineering career will be most in demand in 2025?",
    a: "Frontend Engineer",
    b: "Data Scientist",
    c: "FullStack Engineer",
    d: "Prompt Engineer",
    correct: "d", // Correct answer
  },
  {
    question: "React-Js is owned and managed by which company?",
    a: "meta",
    b: "Adobe",
    c: "Google llc",
    d: "Attlassion",
    correct: "a", // Correct answer
  },
  {
    question: "Which language is used for the IOS development?",
    a: "Java",
    b: "C#",
    c: "Swift",
    d: "JavaScript",
    correct: "c", // Correct answer
  },
  {
    question: "Who is the founder of the Javascript coding language?",
    a: "Brendon Eich",
    b: "Mark Zuckerberg",
    c: "Steve Jobs",
    d: "Satya Nadella",
    correct: "a", // Correct answer
  },
];

// Reference HTML elements using their IDs
const quiz = document.getElementById("quiz"); // Quiz container
const answerEls = document.querySelectorAll(".answer"); // Answer choice radio buttons
const questionEl = document.getElementById("question"); // Question text element
const a_text = document.getElementById("a_text"); // Answer choice A text element
const b_text = document.getElementById("b_text"); // Answer choice B text element
const c_text = document.getElementById("c_text"); // Answer choice C text element
const d_text = document.getElementById("d_text"); // Answer choice D text element
const submitBtn = document.getElementById("submit"); // Submit button element
const resetBtn = document.getElementById("reset"); // Reset button element

let currentQuiz = 0; // Index of the current quiz question
let score = 0; // User's score

// Load the quiz question and answer choices into HTML elements
function loadQuiz() {
  deselectAnswers(); // Clear any previously selected answers

  const currentQuizData = quizData[currentQuiz]; // Get current quiz data

  // Set question and answer choice texts in HTML elements
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}
loadQuiz(); // Load the initial quiz question

// Get the ID of the selected answer choice
function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

// Clear the selection for all answer choices
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// Add event listener to the submit button
submitBtn.addEventListener("click", () => {
  const answer = getSelected(); // Get the selected answer choice

  if (!answer) {
    alert("Please select an answer before continuing.");
    return;
  }

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++; // Increment the score for a correct answer
    }

    currentQuiz++; // Move to the next question

    if (currentQuiz < quizData.length) {
      loadQuiz(); // Load the next quiz question
    } else {
      // Display the final score and a "Reload" button
      quiz.innerHTML = `
          <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
          <button onclick="location.reload()">Reload</button>
        `;
    }
  }
});
resetBtn.addEventListener("click", () => {
  location.reload(true);
});
