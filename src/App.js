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
        currentQuestionIndex={currentQuestionIndex + 1}
        totalQuestions={totalQuestions} />
      <div className='quiz-container'>
        { currentQuestionIndex < totalQuestions && (
          <Question
            currentQuestionIndex={currentQuestionIndex + 1}
            totalQuestions={totalQuestions}
            question={question}
            updateCurrentQuestionIndex={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
            updateScore={() => setScore(score + 1)}
            updateScoreIndex={() => setCurrentScoreIndex(currentScoreIndex + 1)}
          />
        )}
        {currentQuestionIndex === totalQuestions && (
          <div className='text-center'>
            <h1>Quiz Completed</h1>
            <h2>Score {Math.floor((score * 100) / totalQuestions)}%</h2>
            <h2>Score {`${score} / ${totalQuestions}`}</h2>
          </div>
        )}
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
