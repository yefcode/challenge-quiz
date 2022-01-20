import React from 'react'
import ReactDOM from 'react-dom'
import OverallProgressBar from './OverallProgressBar'

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  ReactDOM.render(<OverallProgressBar />, div)
  ReactDOM.unmountComponentAtNode(div)
})
