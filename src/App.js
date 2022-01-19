import React, { useState, useEffect } from 'react'
import OverallProgressBar from './components/OverallProgressBar/OverallProgressBar'
import Question from './components/Question/Question'
import ScoreBar from './components/ScoreBar/ScoreBar'
import questions from './questions.json'
import './App.css'

function App () {
  const [question, setQuestion] = useState({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const totalQuestions = questions.length

  useEffect(() => {
    setQuestion(questions[currentQuestionIndex])
  }, [currentQuestionIndex])

  return (
    <div className='App'>
      <OverallProgressBar />
      <div className='quiz-container'>
        <Question
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
          question={question}
          nextQuestion={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
        />
        <ScoreBar />
      </div>
    </div>
  )
}

export default App
