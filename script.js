const quizData = [
  {
    question: "鬼殺隊の隊士が使う刀の名前は？",
    a: "鬼滅刀",
    b: "神楽刀",
    c: "日輪刀",
    d: "鬼殺刀",
    correct: "c",
  },
  {
    question: "最終選別が行われた場所の名前は？",
    a: "狭霧山",
    b: "藤襲山",
    c: "那田蜘蛛山",
    d: "雲取山",
    correct: "b",
  },
  {
    question: "最終選別を突破したのは何人いる？",
    a: "2人",
    b: "3人",
    c: "4人",
    d: "5人",
    correct: "d",
  },
  {
    question: "我妻善逸が唯一使える呼吸の型は？",
    a: "雷の呼吸・壱ノ型「霹靂一閃」",
    b: "雷の呼吸・壱ノ型「晴天霹靂」",
    c: "雷の呼吸・弐ノ型「稲魂」",
    d: "雷の呼吸・陸ノ型「電轟雷轟」",
    correct: "a",
  },
  {
    question: "炭治郎と禰豆子が浅草に来て最初に口にした食べ物は?",
    a: "カツ丼",
    b: "ラーメン",
    c: "そば",
    d: "上記以外",
    correct: "d",
  },
];
const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectedAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectedAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer == quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>君の正解数は ${score}/${quizData.length} 問 だ！.</h2>
       <button onclick="location.reload()">”生殺与奪の権を他人に握らせるな！！”</button>`;
    }
  }
});
