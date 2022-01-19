import React from 'react'
import './Question.css'

const Question = ({ question }) => {
  const currentQuestionCounter = '16'
  const numberQuestions = '20'

  const questions = {
    category: 'Entertainment: Board Games',
    type: 'multiple',
    difficulty: 'hard',
    question: 'At the start of a ...',
    correct_answer: 'answer 1',
    incorrect_answer: ['answer 2', 'answer 3', 'answer 4'],
    answers: ['answer 1', 'answer 2', 'answer 3', 'answer 4']
  }

  return (
    <>
      <h2>Question {currentQuestionCounter} of {numberQuestions}</h2>
      <small className='category'>{decodeURIComponent(question.category)}</small>
      <div>
        <span className='difficulty black'>★</span>
        <span className='difficulty black'>★</span>
        <span className='difficulty gray'>★</span>
      </div>
      <p className='question'>{decodeURIComponent(question.question)}</p>
      <div className='answers'>
        {questions.answers.map((answer, index) => (
          <button className='answer disable-answer' key={index}>{answer}</button>
        ))}
      </div>
      <div className='text-center'>
        <div className='correct'>Correct!</div>
        <button className='next-question'>Next Question</button>
      </div>

    </>
  )
}

export default Question
