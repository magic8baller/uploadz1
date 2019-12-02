import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

//global function- dont need to require it
// it ('test description', () => {let x = 'test logic here'})

it ('shows a comment box', () => {
	const div = document.createElement('div')

	ReactDOM.render(<App />, div)
	//look inside div, check if comment box is inside it ('shows a comment
	console.log(div.innerHTML)
	ReactDOM.unmountComponentAtNode(div)
})

// it ('shows a comment list', () => {
	// let x = 'test logic here'
// })