import React from 'react';
import PostsContainer from './PostsContainer';

class MainContainer extends React.Component {

    // render header always
    // render dashboard container OR user profile container based on state
    // render footer always

    render(){
        return(
            <div>
                <h2>Either posts or user profile</h2>
                <PostsContainer />
            </div>
        )
    }

}

export default MainContainer;