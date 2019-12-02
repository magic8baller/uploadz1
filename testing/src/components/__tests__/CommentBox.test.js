import React from 'react'
import {mount} from 'enzyme'
import CommentBox from 'components/CommentBox'



let wrapped;

beforeEach(() => {
	wrapped = mount(<CommentBox/>)
})
it('has a textarea and a button', () => {
	// console.log(wrapped.find("textarea").length);
	expect(wrapped.find("textarea").length).toEqual(1)
	expect(wrapped.find("button").length).toEqual(1)
})

it('allows user to input text into textarea and submit', () => {

})

it('should clear textarea on form submit', () => {

})