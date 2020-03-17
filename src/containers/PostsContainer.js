import React from 'react';
import PostComponent from '../components/PostComponent';

class PostsContainer extends React.Component {

    render(){
        return(
            <div>
                <h3>.map posts</h3>
                <PostComponent />
            </div>
        )
    }

}

export default PostsContainer;