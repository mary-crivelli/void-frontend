import React from 'react';

class PostComponent extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.username}</h3>
                <p>{this.props.body}</p>
            </div>
        )
    }
}

export default PostComponent;