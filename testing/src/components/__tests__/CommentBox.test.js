import React from 'react'
import {mount, unmount} from 'enzyme'
import CommentBox from 'components/CommentBox'



let wrapped;

beforeEach(() => {
	wrapped = mount(<CommentBox/>)
})

afterEach(() => {
	wrapped.unmount()
})

it('has a textarea and a button', () => {
	// console.log(wrapped.find("textarea").length);
	expect(wrapped.find("textarea").length).toEqual(1)
	expect(wrapped.find("button").length).toEqual(1)
})

it('allows user to input text into textarea', () => {
//simulate events:
//find <textarea> + simulate "change" event (USE HTML EVENT NAME, NOT REACT!)

wrapped.find('textarea').simulate('change', {
	//provide fake event object (mock) as 2nd arg, gets merged with event object that passes to other handlers (so passed as arg to handleChange (event.target.value="newcomment", set state etc))
	target: {value: 'new comment'}
})
//force component update
//assert textarea value changed

})

it('should clear textarea on form submit', () => {

})