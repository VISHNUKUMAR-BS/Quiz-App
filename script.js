const questions = [
    {
        question: "A Triac has three terminals viz ........",
        answers: [
            {text: "Drain,source,gate", correct: false},
            {text: "Two main terminal and a gate terminal", correct: true},
            {text: "Cathode,anode,gate", correct: false},
            {text: "None of the above", correct: false},
        ]
    },
    {
        question: "A diac has ........ terminals",
        answers: [
            {text: "Two", correct: true},
            {text: "Three", correct: false},
            {text: "Four", correct: false},
            {text: "None of the above", correct: false},
        ]
    },
    {
        question: "The current out of ideal current source is",
        answers: [
            {text: "Zero", correct: false},
            {text: "Constant", correct: true},
            {text: "Load resistance dependent", correct: false},
            {text: "Internal resistance dependent", correct: false},
        ]
    },
    {
        question: "In a constanct voltage DC circuit, when the resistance increases, the current will",
        answers: [
            {text: "Decrease", correct: true},
            {text: "Stop", correct: false},
            {text: "Increase", correct: false},
            {text: "Remains constant", correct: false},
        ]
    },
    {
        question: "The triac is ........",
        answers: [
            {text: "Like a bidirectional SCR ", correct: true},
            {text: "A four-terminal device", correct: false},
            {text: "Not a thyristor", correct: false},
            {text: "Answers(1) and (2)", correct: false},
        ]
    },
    {
        question: "The UJT may be used us ........",
        answers: [
            {text: "An amplifer", correct: false},
            {text: "A sawtooth generator", correct: true},
            {text: "A rectifier", correct: false},
            {text: "None of the above", correct: false},
        ]
    },
    {
        question: "The voltage out of ideal current source is",
        answers: [
            {text: "Zero", correct: false},
            {text: "Constant", correct: true},
            {text: "Load resistance dependent", correct: false},
            {text: "Internal resistance dependent", correct: false},
        ]
    },
    {
        question: "The unit of electrical reisitance is",
        answers: [
            {text: "Volt", correct: false},
            {text: "amp", correct: false},
            {text: "Ohm", correct: true},
            {text: "Coulomb", correct: false},
        ]
    },
    {
        question: "The unit of current is",
        answers: [
            {text: "Volt", correct: false},
            {text: "amp", correct: true},
            {text: "Ohm", correct: false},
            {text: "Coulomb", correct: false},
        ]
    },
    {
        question: "The unit of voltage is",
        answers: [
            {text: "Coulomb", correct: false},
            {text: "amp", correct: false},
            {text: "Ohm", correct: false},
            {text: "Volt", correct: true},
        ]
    },

    
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
