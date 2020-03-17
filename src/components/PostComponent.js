import React from 'react';

class PostComponent extends React.Component {
    render(){
        return (
            <div>
                <h1>Post title</h1>
                <h3>@username</h3>
                <p>Post body</p>
            </div>
        )
    }
}

export default PostComponent;