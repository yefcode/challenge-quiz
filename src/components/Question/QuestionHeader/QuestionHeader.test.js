import React from 'react'
import ReactDOM from 'react-dom'
import QuestionHeader from './QuestionHeader'
import questions from '../../../questions.json'

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  const props = { question: questions[0] }
  ReactDOM.render(<QuestionHeader {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
