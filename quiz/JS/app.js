// Pull documents

//  ------------------------------ HTML -------------------------------------

let quiz = document.querySelector(".quiz");

let startButton = document.createElement("button");
startButton.classList.add("quiz-start-button");
startButton.innerHTML = "Start";
quiz.appendChild(startButton);

let restartButton = document.createElement("button");
restartButton.classList.add("quiz-restart-button");
restartButton.innerHTML = "Restart";
quiz.appendChild(restartButton);

let congratz = document.createElement("div");
congratz.classList.add("congratz");
quiz.appendChild(congratz);

let quizContainer = document.createElement("div");
quizContainer.classList.add("quiz-container");
quiz.appendChild(quizContainer);

let mask = document.createElement("div");
mask.classList.add("mask");
quizContainer.appendChild(mask);

let quizDisplay = document.createElement("div");
quizDisplay.classList.add("quiz-display");
quizDisplay.innerHTML = "Math Problem";
quizContainer.appendChild(quizDisplay);

let quizQuestion = document.createElement("div");
quizQuestion.classList.add("quiz-question");
quizContainer.appendChild(quizQuestion);

let quizGrid = document.createElement("div");
quizGrid.classList.add("quiz-grid");
quizContainer.appendChild(quizGrid);

// ------------------------------------------------------------------------------------------------------

let quizAnswer0 = document.createElement("button");
quizAnswer0.classList.add("quiz-item-1");
quizAnswer0.classList.add("quiz-buttons");
quizAnswer0.innerHTML = "1";
quizGrid.appendChild(quizAnswer0);

let quizAnswer1 = document.createElement("button");
quizAnswer1.classList.add("quiz-item-2");
quizAnswer1.classList.add("quiz-buttons");
quizAnswer1.innerHTML = "2";
quizGrid.appendChild(quizAnswer1);

let quizAnswer2 = document.createElement("button");
quizAnswer2.classList.add("quiz-item-3");
quizAnswer2.classList.add("quiz-buttons");
quizAnswer2.innerHTML = "3";
quizGrid.appendChild(quizAnswer2);

let quizAnswer3 = document.createElement("button");
quizAnswer3.classList.add("quiz-item-4");
quizAnswer3.classList.add("quiz-buttons");
quizAnswer3.innerHTML = "4";
quizGrid.appendChild(quizAnswer3);

let quizAnswer4 = document.createElement("button");
quizAnswer4.classList.add("quiz-item-5");
quizAnswer4.classList.add("quiz-buttons");
quizAnswer4.innerHTML = "5";
quizGrid.appendChild(quizAnswer4);

// ------------------------------------------------------------------------------------------------------

let nextprev = document.createElement("div");
nextprev.classList.add("nextprev");
quizContainer.appendChild(nextprev);

let prevButton = document.createElement("button");
prevButton.classList.add("quiz-prev-button");
prevButton.innerHTML = "Previous";
nextprev.appendChild(prevButton);

let nextButton = document.createElement("button");
nextButton.classList.add("quiz-next-button");
nextButton.innerHTML = "Next";
nextprev.appendChild(nextButton);

console.log(quiz);

//  ------------------------------ HTML -------------------------------------

//  ------------------------------ JAVASCRIPT -------------------------------------

// ------------------Functions & Variables-------------------------------------------

function randomQ(array) {
  let currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

let questionsArr = [
  "20 x 90 = ?",
  "80 - 30 = ?",
  "740 + 398 = ?",
  "45 / 5 = ?",
  "89 + 298 = ?",
];

page = 0;
yay = 0;

correct = [1800, 50, 1138, 9, 387];

let correctAnswer = (answer) => {
  if (answer.target.innerHTML == correct[page]) {
    answer.target.style.background = "green";
    yay += 1;
  } else {
    quizButtons.forEach((btn) => {
     
        // correctAnswer.disabled = true;
        if (btn.innerHTML == correct[page]) {


        btn.style.background = "green";
      }
    });
    answer.target.style.background = "red"; 

  }
};

function removeStyle(check = true) {
  document.querySelectorAll(".quiz-buttons").forEach((btn) => {
    if (check == true) {
      btn.onclick = correctAnswer;
    } else {
      btn.style.background = "none";
    }
  });
}
removeStyle();

// randomQ(arr);

// console.log(arr);

let answers = [
  [
    Math.floor(Math.random() * 5000),
    Math.floor(Math.random() * 5000),
    Math.floor(Math.random() * 5000),
    Math.floor(Math.random() * 5000),
    1800,
  ],
  [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    50,
  ],
  [
    Math.floor(Math.random() * 1600),
    Math.floor(Math.random() * 1600),
    Math.floor(Math.random() * 1600),
    Math.floor(Math.random() * 1600),
    1138,
  ],
  [
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 20),
    Math.floor(Math.random() * 20),
    9,
  ],
  [
    Math.floor(Math.random() * 450),
    Math.floor(Math.random() * 450),
    Math.floor(Math.random() * 450),
    Math.floor(Math.random() * 450),
    387,
  ],
  ["lol"],
];

let quizButtons = Array.from(quizGrid.children);

console.log(quizButtons);

// randomQ(answers);
// randomQ(answers);
// randomQ(questionsArr);
// randomQ(correct);

console.log(questionsArr);
// console.log(page +=1);

// ------------------Functions & Variables-------------------------------------------

// -------------------------BUTTONS------------------------------------

startButton.addEventListener("click", () => {
  quizContainer.style.display = "flex";
  startButton.style.display = "none";
  randomQ(quizButtons);
  page = 0;
  quizQuestion.innerHTML = questionsArr[0];

  quizButtons[0].innerHTML = answers[0][0];
  quizButtons[1].innerHTML = answers[0][1];
  quizButtons[2].innerHTML = answers[0][2];
  quizButtons[3].innerHTML = answers[0][3];
  quizButtons[4].innerHTML = answers[0][4];
});

nextButton.addEventListener("click", () => {
  
    
    if (page !== 5) {
    page++;
    randomQ(quizButtons);
    quizQuestion.innerHTML = questionsArr[page];

    quizButtons[0].innerHTML = answers[page][0];
    quizButtons[1].innerHTML = answers[page][1];
    quizButtons[2].innerHTML = answers[page][2];
    quizButtons[3].innerHTML = answers[page][3];
    quizButtons[4].innerHTML = answers[page][4];

    correctAnswer.disabled = false;
  }

  if (page == 5) {
    quizContainer.style.display = "none";
    congratz.style.display = "block";
    congratz.innerHTML = `Congratulations, you got ${yay} questions right!`;
    restartButton.style.display = "block";
    startButton.style.display = "none";

  }
  removeStyle(false);
});

prevButton.addEventListener("click", () => {
  if (page !== 0) {
    page--;

    quizQuestion.innerHTML = questionsArr[page];

    quizButtons[0].innerHTML = answers[page][1];
    quizButtons[1].innerHTML = answers[page][0];
    quizButtons[2].innerHTML = answers[page][2];
    quizButtons[3].innerHTML = answers[page][3];
    quizButtons[4].innerHTML = answers[page][4];
  }

  removeStyle(false);
});

restartButton.addEventListener("click", () => {
  quizContainer.style.display = "flex";
  congratz.style.display = "none";
  restartButton.style.display = "none";
  startButton.style.display = "none";

  page = 0;
  quizQuestion.innerHTML = questionsArr[0];

  quizButtons[0].innerHTML = answers[0][0];
  quizButtons[1].innerHTML = answers[0][1];
  quizButtons[2].innerHTML = answers[0][2];
  quizButtons[3].innerHTML = answers[0][3];
  quizButtons[4].innerHTML = answers[0][4];
});

// -------------------------BUTTONS------------------------------------
