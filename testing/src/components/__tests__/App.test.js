import React from 'react'
import {shallow} from 'enzyme'
import App from '../App'
import CommentBox from '../CommentBox'

//global function- dont need to require it
// it ('test description', () => {let x = 'test logic here'})

it('shows a comment box', () => {
	const wrapped = shallow(<App/>)
//wrapped = term for component/ OBJECT we are returning from shallow fn()
expect(wrapped.find(CommentBox).length).toEqual(1);
})
