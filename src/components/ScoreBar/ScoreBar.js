import React from 'react'
import './ScoreBar.css'
import { getPercentageValue, getMaxScore } from '../../utils/utils.js'

const ScoreBar = ({ totalQuestions, score, currentScoreIndex }) => {
  const lowestScore = getPercentageValue(score, totalQuestions)
  const currentScore = getPercentageValue(score, currentScoreIndex)
  const maxScore = getMaxScore(totalQuestions, currentScoreIndex, score)

  return (
    <div className='score'>
      <div className='score-container'>
        <span>Score: {currentScore}%</span>
        <span>Max Score: {maxScore}%</span>
      </div>
      <div className='score-bar'>
        <div className='max-score-bar'
          style={{ width: `${maxScore}%`, transition: 'width .6s ease' }} />
        <div className='current-score-bar'
          style={{ width: `${currentScore}%`, transition: 'width .6s ease' }} />
        <div className='lowest-score-bar'
          style={{ width: `${lowestScore}%`, transition: 'width .6s ease' }} />
      </div>
    </div>
  )
}

export default ScoreBar
