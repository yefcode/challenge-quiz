import React, { useState, useContext } from 'react'
import Answers from './Answers/Answers'
import './Question.css'
import { QuestionContext } from '../../App'

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

const QuestionHeader = ({ question }) => {
  const headerContext = useContext(QuestionContext)
  const difficultyMediumStyle = question.difficulty === 'easy' ? 'gray' : 'black'
  const difficultyHardStyle = question.difficulty === 'hard' ? 'black' : 'gray'
  return (
    <>
      <h2>Question {headerContext.currentQuestionIndex} of {headerContext.totalQuestions}</h2>
      <small className='category'>{decodeURIComponent(question.category)}</small>
      <div>
        <span className='difficulty black'>★</span>
        <span className={`difficulty ${difficultyMediumStyle}`}>★</span>
        <span className={`difficulty ${difficultyHardStyle}`}>★</span>
      </div>
    </>
  )
}

const ResultMessage = ({ answerSelected, correctAnswer, updateAnswerSelected }) => {
  const resultMessageContext = useContext(QuestionContext)
  const nextQuestion = () => {
    resultMessageContext.updateCurrentQuestionIndex()
    updateAnswerSelected()
  }
  return (
    <div className='text-center'>
      <div className='correct-sorry'>{answerSelected === correctAnswer ? 'Correct!' : 'Sorry!'}</div>
      <button className='next-question' onClick={() => nextQuestion()}>Next Question</button>
    </div>
  )
}

export default Question
