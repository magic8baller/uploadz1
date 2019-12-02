import React, {Component} from 'react';
class CommentBox extends Component {

	state = {comment: ''}

	handleChange = (e) => {
		this.setState({comment: e.target.value})
	}

	handleSubmit = e => {
		e.preventDefault()
		//call action creator
		//save comment

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


export default CommentBox