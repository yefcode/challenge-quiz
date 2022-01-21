import React from 'react'
import './QuizComplete.css'

const QuizComplete = ({ score, totalQuestions, restartQuiz }) => {
  return (
    <div className='text-center'>
      <h1>Quiz Completed</h1>
      <h2>Score {Math.floor((score * 100) / totalQuestions)}%</h2>
      <h2>Score {`${score} / ${totalQuestions}`}</h2>
      <button className='restart-quiz' onClick={() => restartQuiz()}>Restart Quiz</button>
    </div>
  )
}

export default QuizComplete
