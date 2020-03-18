import React from 'react';
import PostComponent from '../components/PostComponent';

class PostsContainer extends React.Component {

    // dummy post data w/ title, username, body
    state={
        posts: [
            {
                id: 1, 
                title: "foo",
                username: "dillon", 
                body: "bar"
            },
            {
                id: 2, 
                title: "bepis", 
                username: "mary",
                body: "conk"
            },
            {
                id: 3, 
                title: "test", 
                username: "dennis",
                body: "test"
            }
        ]
    }

    render(){
        return(
            <div className="posts-container">
                <h3>.map posts</h3>
                {this.state.posts.map((post) => 
                <PostComponent title={post.title} username={post.username} body={post.body} key={post.id} />)}
            </div>
        )
    }

}

export default PostsContainer;