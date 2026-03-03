const questionsAPI = "https://opentdb.com/api.php?amount=50&category=23&difficulty=hard&type=multiple";

fetchQuestions();

function fetchQuestions() {
    fetch(questionsAPI).then((res) => res.json())
        .then((data) => {
            console.log(data);
            loadQuestionsOnUi(data.results);
        })
        .catch((err) => {
            console.log("ERROR : ", err);
        })
}

let currentIndex = 0;
const question = document.getElementById("question");
const options = document.querySelectorAll("span")
document.getElementById("nextBtn").addEventListener("click", () => nextQuestion());

function loadQuestionsOnUi(data) {
    console.log(data);

    // question.innerHTML = "";
    // options.innerHTML = "";

    const currentQuestion = data[currentIndex];

    const currentOptions = [
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer
    ]

    console.log(currentOptions);

    question.innerText = currentQuestion.question;
    options.forEach((span, index) => {
        span.innerText = currentOptions[index];
    })
}

function nextQuestion() {
    currentIndex += 1;
    loadQuestionsOnUi(data = "nothing");
}