const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
//   incrementation
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
      // forEach() method use to call a function once for each element in an array
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  // Here the resetState function is used to reset the class of container where the question and answer belongs.
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(answer) {
  const selectedButton = answer.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    //   This indicates that we have more questions and we are not in last question.
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Who is the captain of CSK?',
    answers: [
      { text: ' MS Dhoni', correct: true },
      { text: 'Kohli', correct: false },
      { text: 'Rohit', correct: false },
      { text: 'Gambir', correct: false }
    ]
  },
  {
    question: 'Who is the highest run scorer in IPL?',
    answers: [
      { text: 'Chris Gayle', correct: false },
      { text: 'Raina', correct: false },
      { text: 'Kohli', correct: true },
      { text: 'KL Rahul', correct: false }
    ]
  },
  {
    question: 'Who had won the Orange cap in IPl 2018?',
    answers: [
      { text: 'Samson', correct: false },
      { text: 'Kane Williamson', correct: true },
      { text: 'Watson', correct: false },
      { text: 'Rana', correct: false }
    ]
  },
  {
    question: 'Who had won more IPL tittles?',
    answers: [
      { text: 'KKR', correct: false },
      { text: 'MI', correct: true },
      { text: 'CSK', correct: false },
      { text: 'RCB', correct: false }
    ]
  },

  {
    question: 'How many match did Dhoni has won as CSK captain?',
    answers: [
      { text: '50', correct: false },
      { text: '10', correct: false },
      { text: '150', correct: false },
      { text: '100', correct: true }
    ]
  },

  {
    question: 'How many times did CSK have won IPL trophy',
    answers: [
      { text: '1', correct: false },
      { text: '3', correct: true },
      { text: '2', correct: false },
      { text: '4', correct: false }
    ]
  },
]