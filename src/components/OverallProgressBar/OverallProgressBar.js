import React from 'react'
import './OverallProgressBar.css'
import { getPercentageValue } from '../../utils/utils.js'

const OverallProgressBar = ({ currentQuestionIndex, totalQuestions }) => {
  const currentProgress = currentQuestionIndex <= totalQuestions
    ? getPercentageValue(currentQuestionIndex, totalQuestions) : 100
  return (
    <div className='overall-progress'
      style={{ width: `${currentProgress}%`, transition: 'width .6s ease' }}
    />
  )
}

export default OverallProgressBar
