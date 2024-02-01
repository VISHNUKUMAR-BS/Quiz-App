const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Girafee", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Sri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    }
]
const questionEl = document.getElementById("question")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQusIndex = 0
let score = 0

function showQuestions(){
    resetState()
    let currentQuestion = questions[currentQusIndex]
    let questionNo = currentQusIndex + 1
    questionEl.textContent = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.textContent = answer.text
        button.classList.add('btn')
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
    })
}

function resetState(){
    nextButton.style.display="none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function startQuiz(){
    currentQusIndex = 0
    score = 0
    nextButton.textContent = "Next"
    showQuestions()
}
function selectAnswer(e){
    const selectedBtn = e.target 
    const isCorrect = selectedBtn.dataset.correct === "true"

    if(isCorrect){
        score++
        selectedBtn.classList.add('correct')
    }
    else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add('correct')
        }
        button.disabled = true
    })
    nextButton.style.display="block"
}

function showScore(){
    resetState()
    questionEl.textContent = `You scored ${score} out of ${questions.length}!`
    nextButton.textContent = "Play Again"
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQusIndex++
    if(currentQusIndex < questions.length){
        showQuestions()
    }
    else{
        showScore()
    }
}

nextButton.addEventListener('click', function(){
    if(currentQusIndex < questions.length){
        handleNextButton()
    }
    else{
        startQuiz()
    }
})
startQuiz()

