import React, {Component} from 'react';
import {connect} from 'react-redux'
import {saveComment} from 'actions'
class CommentBox extends Component {

	state = {comment: ''}

	handleChange = (e) => {
		this.setState({comment: e.target.value})
	}

	handleSubmit = e => {
		e.preventDefault()

		this.props.saveComment(this.state.comment)


		//clear textarea on submit
		this.setState({ comment: '' });

	}
	render () {
		return (
			<div style={{
				border: '2px solid blue',
				margin: '2em',
				padding: '1em'
			}}>
				<form onSubmit={this.handleSubmit}>
					<h4>Add A Comment</h4>
					<textarea onChange={this.handleChange} value={this.state.comment} name="" id="" cols="30" rows="10" />
					<div>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
		);
	}

}

// const mapStateToProps = (state) => ({comments: state.comments})
export default connect(null, {saveComment})(CommentBox)