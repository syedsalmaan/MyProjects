const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement =document.getElementById('question')
const answerButtonsElement =document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
           
startButton.addEventListener('click', startGame)

function startGame() {
  console.log('started')
  startButton.classList.add('hide')
  shuffledQuestions=questions.sort(()=> Math.random() - .5)
  currentQuestionIndex=0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  showQuestion(shuffledQuestions[currentQuestionIndex])
            
}

function showQuestion(question){
  questionElement.innerText =question.question

}

function setNextQuestion(){


}
          
 function selectAnswer(){

}
