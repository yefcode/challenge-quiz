import React, { useState, useEffect } from 'react'
import OverallProgressBar from './components/OverallProgressBar/OverallProgressBar'
import Question from './components/Question/Question'
import ScoreBar from './components/ScoreBar/ScoreBar'
import questions from './questions.json'
import './App.css'

function App () {
  const [question, setQuestion] = useState({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [currentScoreIndex, setCurrentScoreIndex] = useState(0)
  const totalQuestions = questions.length

  useEffect(() => {
    setQuestion(questions[currentQuestionIndex])
  }, [currentQuestionIndex])

  return (
    <div className='App'>
      <OverallProgressBar
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions} />
      <div className='quiz-container'>
        <Question
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
          question={question}
          nextQuestion={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
          updateScore={() => setScore(score + 1)}
          updateScoreIndex={() => setCurrentScoreIndex(currentScoreIndex + 1)}
        />
        <ScoreBar
          totalQuestions={totalQuestions}
          score={score}
          currentScoreIndex={currentScoreIndex}
        />
      </div>
    </div>
  )
}

export default App
