import React, { useContext } from 'react'
import './ResultMessage.css'
import { QuestionContext } from '../../../App'

const ResultMessage = ({ answerSelected, correctAnswer, updateAnswerSelected }) => {
  const resultMessageContext = useContext(QuestionContext)
  const nextQuestion = () => {
    resultMessageContext.updateCurrentQuestionIndex()
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
