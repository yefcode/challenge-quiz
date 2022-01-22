import React, { useContext } from 'react'
import './QuestionHeader.css'
import { QuestionContext } from '../../../App'

const QuestionHeader = ({ question }) => {
  const headerContext = useContext(QuestionContext)
  const difficultyMediumStyle = question.difficulty === 'easy' ? 'gray' : 'black'
  const difficultyHardStyle = question.difficulty === 'hard' ? 'black' : 'gray'
  return (
    <>
      <h2>Question {headerContext.currentQuestionIndex} of {headerContext.totalQuestions}</h2>
      <small className='category'>{decodeURIComponent(question.category)}</small>
      <div>
        <span className='difficulty black'>★</span>
        <span className={`difficulty ${difficultyMediumStyle}`}>★</span>
        <span className={`difficulty ${difficultyHardStyle}`}>★</span>
      </div>
    </>
  )
}

export default QuestionHeader
