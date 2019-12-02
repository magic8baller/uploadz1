import React from 'react';
import CommentBox from './CommentBox'
import CommentList from './CommentList'
const App = () => (
    <div style={{border: '2px solid green'}}>
      <CommentBox/>
			<CommentList/>
    </div>
  );

export default App;
