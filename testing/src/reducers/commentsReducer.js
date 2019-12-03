import {FETCH_ALL_COMMENTS, SAVE_COMMENT} from 'actions/types';
const commentsReducer = (state = [], action) => {
	switch (action.type) {
		case SAVE_COMMENT:
			return [...state, action.payload]
		case FETCH_ALL_COMMENTS:
			const comments = action.payload.map(comment => comment);
			return [...state, ...comments]
		default:
			return state;
	}
}

export default commentsReducer