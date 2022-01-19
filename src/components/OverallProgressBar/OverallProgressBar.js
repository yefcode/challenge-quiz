import React from 'react'
import './OverallProgressBar.css'

const OverallProgressBar = ({ currentQuestionIndex, totalQuestions }) => {
  const currentProgress = currentQuestionIndex < totalQuestions &&
  ((currentQuestionIndex + 1) / totalQuestions) * 100
  return (
    <div className='overall-progress'
      style={{ width: `${currentProgress}%`, transition: 'width .6s ease' }}
    />
  )
}

export default OverallProgressBar
