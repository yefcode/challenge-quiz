import React, { useState, useEffect, useContext } from 'react'
import './Answers.css'
import { QuestionContext } from '../../../App'

const Answers = ({ question, answerSelected, setAnswerSelected }) => {
  const [answers, setAnswers] = useState([])
  const answerContext = useContext(QuestionContext)

  useEffect(() => {
    let questionAnswers = []
    if (question.type === 'boolean') {
      questionAnswers = ['True', 'False']
    } else {
      if (question.incorrect_answers) {
        const randomIndex =
        Math.floor(Math.random() * (question.incorrect_answers).length + 1)
        questionAnswers = question.incorrect_answers.map(answer => answer)
        questionAnswers.splice(randomIndex, 0, question.correct_answer)
      }
    }
    setAnswers(questionAnswers)
  }, [question.correct_answer, question.incorrect_answers, question.type])

  const selectedAnswer = (answer) => {
    setAnswerSelected(answer)
    answerContext.updateScoreIndex()
    if (answer === question.correct_answer) {
      answerContext.updateScore()
    }
  }

  const disableAnswerStyle = answerSelected ? 'disable-answer' : ''
  const correctAnswer = (answer) => {
    return (answerSelected && (answer === question.correct_answer))
      ? 'correct-answer' : answerSelected === answer
        ? 'selected-answer' : ''
  }

  return (
    <div className='answers'>
      {answers.map((answer, index) => (
        <button
          className={`answer ${disableAnswerStyle} ${correctAnswer(answer)}`}
          key={index}
          disabled={answerSelected !== ''}
          onClick={() => selectedAnswer(answer)}>
          {decodeURIComponent(answer)}
        </button>
      ))}
    </div>
  )
}

export default Answers
