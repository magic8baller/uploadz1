import CommentBox from 'components/CommentBox';
import {mount} from 'enzyme';
import React from 'react';



let wrapped;

beforeEach(() => {
	wrapped = mount(<CommentBox />)
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

	wrapped.find('textarea').simulate('change', {

		target: {value: 'new comment'}
	})

	wrapped.update()

	expect(wrapped.find('textarea').prop('value')).toEqual('new comment')

})

it('should clear textarea on form submit', () => {
//enter textarea
	wrapped.find('textarea').simulate('change', {
		target: {value: 'new comment'}
	})
	wrapped.update()
	
	expect(wrapped.find('textarea').prop('value')).toEqual('new comment')

	wrapped.find('form').simulate('submit')
	wrapped.update()

	expect(wrapped.find('textarea').prop('value')).toEqual('')
//submit
//value now is empty string
})