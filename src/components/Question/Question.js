import React, { useState } from 'react'
import QuestionHeader from './QuestionHeader/QuestionHeader'
import Answers from './Answers/Answers'
import ResultMessage from './ResultMessage/ResultMessage'
import './Question.css'

const Question = ({ question }) => {
  const [answerSelected, setAnswerSelected] = useState('')

  return (
    <div className='question-container'>
      <QuestionHeader
        question={question} />
      <p className='question'>{decodeURIComponent(question.question)}</p>
      <Answers
        question={question}
        answerSelected={answerSelected}
        setAnswerSelected={setAnswerSelected} />
      {
        answerSelected !== ''
          ? <ResultMessage
            answerSelected={answerSelected}
            correctAnswer={question.correct_answer}
            updateAnswerSelected={() => setAnswerSelected('')} /> : null
      }
    </div>
  )
}

export default Question
