import {SAVE_COMMENT, FETCH_ALL_COMMENTS} from 'actions/types'
import axios from 'axios'
export const saveComment = (comment) => ({type: SAVE_COMMENT, payload: comment})

export const fetchAllComments = () => async dispatch => {
const commentsResponse = await axios.get('http://jsonplaceholder.typicode.com/comments')
	dispatch({type: FETCH_ALL_COMMENTS, payload: commentsResponse.data})
}