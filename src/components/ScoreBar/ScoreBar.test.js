import React from 'react'
import ReactDOM from 'react-dom'
import ScoreBar from './ScoreBar'

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  ReactDOM.render(<ScoreBar />, div)
  ReactDOM.unmountComponentAtNode(div)
})
