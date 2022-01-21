import React, { useState } from 'react'
import QuestionHeader from './QuestionHeader/QuestionHeader'
import Answers from './Answers/Answers'
import ResultMessage from './ResultMessage/ResultMessage'
import './Question.css'

const Question = ({ currentQuestionIndex, totalQuestions, question, updateCurrentQuestionIndex, updateScore, updateScoreIndex }) => {
  const [answerSelected, setAnswerSelected] = useState('')

  return (
    <div className='question-container'>
      <QuestionHeader
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        question={question} />
      <p className='question'>{decodeURIComponent(question.question)}</p>
      <Answers
        question={question}
        answerSelected={answerSelected}
        setAnswerSelected={setAnswerSelected}
        updateScore={updateScore}
        updateScoreIndex={updateScoreIndex} />
      {
        answerSelected !== ''
          ? <ResultMessage
            answerSelected={answerSelected}
            correctAnswer={question.correct_answer}
            updateCurrentQuestionIndex={updateCurrentQuestionIndex}
            updateAnswerSelected={() => setAnswerSelected('')} /> : null
      }
    </div>
  )
}

export default Question
