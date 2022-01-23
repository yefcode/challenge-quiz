import React from 'react'
import ReactDOM from 'react-dom'
import Question from './Question'
import questions from '../../questions.json'
import { QuestionContext } from '../../App'

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  const props = { question: questions[0] }
  ReactDOM.render(
    <QuestionContext.Provider value={''}>
      <Question
        {...props}
      />
    </QuestionContext.Provider>, div
  )
  ReactDOM.unmountComponentAtNode(div)
})
