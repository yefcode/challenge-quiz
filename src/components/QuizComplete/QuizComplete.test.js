import React from 'react'
import ReactDOM from 'react-dom'
import QuizComplete from './QuizComplete'

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  ReactDOM.render(<QuizComplete />, div)
  ReactDOM.unmountComponentAtNode(div)
})
