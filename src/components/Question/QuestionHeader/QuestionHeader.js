import React from 'react'
import './QuestionHeader.css'

const QuestionHeader = ({ currentQuestionIndex, totalQuestions, question }) => {
  const difficultyMediumStyle = question.difficulty === 'easy' ? 'gray' : 'black'
  const difficultyHardStyle = question.difficulty === 'hard' ? 'black' : 'gray'
  return (
    <>
      <h2>Question {currentQuestionIndex} of {totalQuestions}</h2>
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
