import React, { useState, useEffect } from 'react'
import './Answers.css'

const Answers = ({ question, answerSelected, setAnswerSelected, updateScore, updateScoreIndex }) => {
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    let questionAnswers = []
    if (question.type === 'boolean') {
      questionAnswers = ['True', 'False']
    } else {
      if (question.incorrect_answers) {
        const randomIndex =
        Math.floor(Math.random() * (question.incorrect_answers).length + 1)
        questionAnswers = question.incorrect_answers.map(answer => answer)
        questionAnswers.splice(randomIndex, 0, question.correct_answer)
      }
    }
    setAnswers(questionAnswers)
  }, [question.correct_answer, question.incorrect_answers, question.type])

  const selectedAnswer = (answer) => {
    setAnswerSelected(answer)
    updateScoreIndex()
    if (answer === question.correct_answer) {
      updateScore()
    }
  }

  const disableAnswerStyle = answerSelected ? 'disable-answer' : ''
  return (
    <div className='answers'>
      {answers.map((answer, index) => (
        <button
          className={`answer ${disableAnswerStyle} 
          ${answerSelected === answer ? 'selected-answer' : ((answerSelected && (answer === question.correct_answer)) ? 'correct-answer' : '')} `}
          key={index}
          disabled={answerSelected !== ''}
          onClick={() => selectedAnswer(answer)}>
          {decodeURIComponent(answer)}
        </button>
      ))}
    </div>
  )
}

export default Answers
