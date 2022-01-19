import React, { useState, useEffect } from 'react'
import OverallProgressBar from './components/OverallProgressBar/OverallProgressBar'
import Question from './components/Question/Question'
import ScoreBar from './components/ScoreBar/ScoreBar'
import questions from './questions.json'
import './App.css'

function App () {
  const [question, setQuestion] = useState({})

  useEffect(() =>{
    setQuestion(questions[0])
  }, [])
  return (
    <div className='App'>
      <OverallProgressBar />
      <div className='quiz-container'>
        <Question question={question} />
        <ScoreBar />
      </div>
    </div>
  )
}

export default App
