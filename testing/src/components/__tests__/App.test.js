import React from 'react'
import {shallow} from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

//global function- dont need to require it
// it ('test description', () => {let x = 'test logic here'})

it('shows a comment box', () => {
	const wrapped = shallow(<App/>)
//wrapped = term for component/ OBJECT we are returning from shallow fn()
expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('shows a comment list', () => {
	const wrapped = shallow(<App/>)

	expect(wrapped.find(CommentList).length).toEqual(1)
})