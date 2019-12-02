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

// console.log(wrapped.find("textarea").length);
it('has a textarea and a button', () => {
	expect(wrapped.find("textarea").length).toEqual(1)
	expect(wrapped.find("button").length).toEqual(1)
})
describe('the textarea', () => {
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: {value: 'new comment'}
		})
		wrapped.update()
	})

	it('allows user to edit text in textarea', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment')

	})

	it('should clear textarea on form submit', () => {
		wrapped.find('form').simulate('submit')
		wrapped.update()
		expect(wrapped.find('textarea').prop('value')).toEqual('')

	})
})