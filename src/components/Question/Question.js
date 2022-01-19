import React, { useState, useEffect } from 'react'
import './Question.css'

const Question = ({ currentQuestionIndex, totalQuestions, question, nextQuestion }) => {
  const [answers, setAnswers] = useState([])
  const [answerSelected, setAnswerSelected] = useState('')

  useEffect(() => {
    let questionAnswers = []
    if (question.type === 'boolean') {
      questionAnswers = ['True', 'False']
    } else {
      const randomIndex =
      Math.floor(Math.random() * (question.incorrect_answers || []).length + 1)
      questionAnswers = (question.incorrect_answers || [])
      if (questionAnswers.length) {
        questionAnswers.splice(randomIndex, 0, question.correct_answer)
      }
    }
    setAnswers(questionAnswers)
  }, [question.correct_answer, question.incorrect_answers, question.type])

  const selectedAnswer = (answers) => {
    setAnswerSelected(answers)
  }

  const next = () => {
    nextQuestion()
    setAnswerSelected('')
  }

  const difficultyMediumStyle = question.difficulty === 'easy' ? 'gray' : 'black'
  const difficultyHardStyle = question.difficulty === 'hard' ? 'black' : 'gray'

  const disableAnswerStyle = answerSelected ? 'disable-answer' : ''

  return (
    <div className='question-container'>
      <h2>Question {currentQuestionIndex + 1} of {totalQuestions}</h2>
      <small className='category'>{decodeURIComponent(question.category)}</small>
      <div>
        <span className='difficulty black'>★</span>
        <span className={`difficulty ${difficultyMediumStyle}`}>★</span>
        <span className={`difficulty ${difficultyHardStyle}`}>★</span>
      </div>
      <p className='question'>{decodeURIComponent(question.question)}</p>
      <div className='answers'>
        {answers.map((answer, index) => (
          <button
            className={`answer ${disableAnswerStyle}
            ${answerSelected === answer
            ? 'selected-answer' : ((answerSelected && (answer === question.correct_answer))
              ? 'correct-answer' : '')} `}
            key={index}
            disabled={answerSelected !== ''}
            onClick={() => selectedAnswer(answer)}>
            {decodeURIComponent(answer)}
          </button>
        ))}
      </div>
      {
        answerSelected !== ''
          ? <div className='text-center'>
            <div className='correct'>
              {answerSelected === question.correct_answer ? 'Correct!' : 'Sorry!'}
            </div>
            <button className='next-question'
              onClick={() => next()}>
              Next Question
            </button>
          </div> : null
      }
    </div>
  )
}

export default Question
