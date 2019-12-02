import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

//global function- dont need to require it
// it ('test description', () => {let x = 'test logic here'})

it('shows a comment box', () => {
	const div = document.createElement('div')

	ReactDOM.render(<App />, div)
	//look inside div, check if comment box is inside it ('shows a comment
	console.log(div.innerHTML)
	//  <div style="border: 2px solid green;"><div style="border: 2px solid blue; margin: 2em;">Comment Box</div><div style="border: 2px solid red; margin: 2em;">comment list</div></div>

	ReactDOM.unmountComponentAtNode(div)
})

// it ('shows a comment list', () => {
	// let x = 'test logic here'
// })