import React from 'react'
import './ResultMessage.css'

const ResultMessage = ({ answerSelected, correctAnswer, updateCurrentQuestionIndex, updateAnswerSelected }) => {
  const nextQuestion = () => {
    updateCurrentQuestionIndex()
    updateAnswerSelected()
  }
  return (
    <div className='text-center'>
      <div className='correct-sorry'>{answerSelected === correctAnswer ? 'Correct!' : 'Sorry!'}</div>
      <button className='next-question' onClick={() => nextQuestion()}>Next Question</button>
    </div>
  )
}

export default ResultMessage
