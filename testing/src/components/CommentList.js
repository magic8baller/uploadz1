import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchAllComments} from '../actions';
class CommentList extends Component {
componentDidMount() {
	this.props.fetchAllComments()
}

  render() {
    const renderComments = () => {
      return this.props.comments.map((comment) => <li key={comment.id}>{comment.name}</li>);
    };

    return (<div style={{
      border: '2px solid red',
      margin: '2em',
      padding: '1em'
    }}>
		<h3>Comments</h3>
			<ul>
				{renderComments()}
			</ul>
		</div>);
  }

}

const mapStateToProps = (state) => ({comments: state.comments})

export default connect(mapStateToProps, {fetchAllComments})(CommentList)