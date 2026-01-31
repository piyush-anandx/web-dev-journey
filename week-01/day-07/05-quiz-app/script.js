// Quiz questions
const questions = [
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Digital Object Model",
      "Dynamic Object Model",
    ],
    correct: 0,
  },
  {
    question: "Which method selects an element by ID?",
    options: [
      "querySelector()",
      "getElementById()",
      "getElement()",
      "selectById()",
    ],
    correct: 1,
  },
  {
    question: "What does addEventListener() do?",
    options: [
      "Creates element",
      "Removes element",
      "Listens for events",
      "Changes style",
    ],
    correct: 2,
  },
  {
    question: "Which creates a new HTML element?",
    options: [
      "makeElement()",
      "newElement()",
      "createElement()",
      "addElement()",
    ],
    correct: 2,
  },
  {
    question: "What does .remove() do?",
    options: [
      "Hides element",
      "Deletes element from page",
      "Changes element",
      "Copies element",
    ],
    correct: 1,
  },
];

// Variables to track state
let currentQuestion = 0;
let score = 0;

// Get HTML elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

// STEP 1: Function to show a question
function showQuestion() {
  // Get current question object
  const q = questions[currentQuestion];

  // Display question text
  questionEl.textContent = q.question;

  // Clear previous options
  optionsEl.innerHTML = "";

  // Create option buttons
  q.options.forEach((option, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "option";
    optionDiv.textContent = option;

    // Add click event
    optionDiv.addEventListener("click", () => {
      checkAnswer(index);
    });

    optionsEl.appendChild(optionDiv);
  });

  // Hide next button
  nextBtn.style.display = "none";
}

// STEP 2: Function to check answer
function checkAnswer(selectedIndex) {
  const q = questions[currentQuestion];
  const options = document.querySelectorAll(".option");

  // Disable all options (prevent multiple clicks)
  options.forEach((opt) => opt.classList.add("disabled"));

  // Check if correct
  if (selectedIndex === q.correct) {
    // Correct answer
    options[selectedIndex].classList.add("correct");
    score++;
  } else {
    // Wrong answer
    options[selectedIndex].classList.add("wrong");
    // Show correct answer
    options[q.correct].classList.add("correct");
  }

  // Show next button
  nextBtn.style.display = "block";

  // Update score display
  scoreEl.textContent = `Score: ${score} / ${questions.length}`;
}

// STEP 3: Next button click
nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    // More questions available
    showQuestion();
  } else {
    // Quiz finished
    showFinalScore();
  }
});

// STEP 4: Show final score
function showFinalScore() {
  questionEl.textContent = "Quiz Complete!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";

  const percentage = (score / questions.length) * 100;
  let message = "";

  if (percentage >= 80) {
    message = "🎉 Excellent!";
  } else if (percentage >= 60) {
    message = "👍 Good job!";
  } else {
    message = "📚 Keep learning!";
  }

  scoreEl.innerHTML = `
    <div class="final-score">
      ${message}<br>
      You scored ${score} out of ${questions.length}
    </div>
  `;
}

// Start the quiz
showQuestion();
