import React from 'react';
import {connect} from 'react-redux';
const CommentList = props => {
	const renderComments = () => {
		return props.comments.map((comment, index) => <li key={index}>{comment}</li>);
	};

	return (
		<div style={{
			border: '2px solid red',
			margin: '2em'
		}}>
			<ul>
				{renderComments()}
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => ({comments: state.comments})

export default connect(mapStateToProps)(CommentList)