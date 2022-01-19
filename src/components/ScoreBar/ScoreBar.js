import React from 'react'
import './ScoreBar.css'

const ScoreBar = () => {
  const maxScore = 75
  const currentScore = 67
  const lowestScore = 50

  return (
    <div className='score'>
      <div className='score-container'>
        <span>Score: 67%</span>
        <span>Max Score: 75%</span>
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
