import React from 'react'
import ReactDOM from 'react-dom'
import Answers from './Answers'
import questions from '../../../questions.json'

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  const props = { question: questions[0] }
  ReactDOM.render(<Answers {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
