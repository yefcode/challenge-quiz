import React, { useState, useEffect, createContext } from 'react'
import OverallProgressBar from './components/OverallProgressBar/OverallProgressBar'
import Question from './components/Question/Question'
import ScoreBar from './components/ScoreBar/ScoreBar'
import QuizComplete from './components/QuizComplete/QuizComplete'
import questions from './questions.json'
import './App.css'

const QuestionContext = createContext()

function App () {
  const [question, setQuestion] = useState({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [currentScoreIndex, setCurrentScoreIndex] = useState(0)
  const totalQuestions = questions.length

  useEffect(() => {
    setQuestion(questions[currentQuestionIndex])
  }, [currentQuestionIndex])

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setScore(0)
    setCurrentScoreIndex(0)
    setQuestion(questions[0])
  }

  const questionContext = {
    currentQuestionIndex: currentQuestionIndex + 1,
    totalQuestions: totalQuestions,
    updateCurrentQuestionIndex: () => setCurrentQuestionIndex(currentQuestionIndex + 1),
    updateScore: () => setScore(score + 1),
    updateScoreIndex: () => setCurrentScoreIndex(currentScoreIndex + 1)
  }

  return (
    <div className='App'>
      <OverallProgressBar
        currentQuestionIndex={currentQuestionIndex + 1}
        totalQuestions={totalQuestions} />
      <div className='quiz-container'>
        { currentQuestionIndex < totalQuestions && (
          <QuestionContext.Provider value={questionContext}>
            <Question
              question={question}
            />
          </QuestionContext.Provider>
        )}
        {currentQuestionIndex === totalQuestions && (
          <QuizComplete
            score={score}
            totalQuestions={totalQuestions}
            restartQuiz={restartQuiz} />
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
export { QuestionContext }
