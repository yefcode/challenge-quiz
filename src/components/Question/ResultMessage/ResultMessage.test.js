import React from 'react'
import ReactDOM from 'react-dom'
import ResultMessage from './ResultMessage'

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  ReactDOM.render(<ResultMessage />, div)
  ReactDOM.unmountComponentAtNode(div)
})
