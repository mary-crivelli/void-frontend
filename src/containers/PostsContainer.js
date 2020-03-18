import React from 'react';
import PostComponent from '../components/PostComponent';

class PostsContainer extends React.Component {

    // dummy post data w/ title, username, body
    state={
        posts: [
            {
                title: "foo",
                username: "dillon", 
                body: "bar"
            },
            {
                title: "bepis", 
                username: "mary",
                body: "conk"
            },
            {
                title: "test", 
                username: "dennis",
                body: "test"
            }
        ]
    }

    render(){
        return(
            <div>
                <h3>.map posts</h3>
                {this.state.posts.map((post) => 
                <PostComponent title={post.title} username={post.username} body={post.body} />)}
            </div>
        )
    }

}

export default PostsContainer;