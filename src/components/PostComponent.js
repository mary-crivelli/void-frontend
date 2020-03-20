import React from 'react';

class PostComponent extends React.Component {
    render(){
        return (
            <div className="post-component">
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
                <h2>- @{this.props.username}</h2>
            </div>
        )
    }
}

export default PostComponent;