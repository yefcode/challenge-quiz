import React from 'react'
import './ScoreBar.css'

const ScoreBar = ({ totalQuestions, score, currentScoreIndex }) => {
  const lowestScore = (score / totalQuestions) * 100
  const currentScore = currentScoreIndex === 0
    ? score * 100 : Math.floor((score / (currentScoreIndex)) * 100)
  const maxScore = Math.floor(
    ((totalQuestions - currentScoreIndex + score) / totalQuestions) * 100)

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
