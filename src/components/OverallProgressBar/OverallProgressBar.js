import React from 'react'
import './OverallProgressBar.css'

const OverallProgressBar = () => {
  const currentProgress = 80
  return (
    <div className='overall-progress'
      style={{ width: `${currentProgress}%`, transition: 'width .6s ease' }}
    />
  )
}

export default OverallProgressBar
