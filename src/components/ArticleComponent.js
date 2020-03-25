import React from 'react';

class ArticleComponent extends React.Component {
    render(){
        return (
            <div className="article-component">
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
                <h2>- @{this.props.username}</h2>
                <h3>on @{this.props.date}</h3>
                <a href="">delete</a>
            </div>
        )
    }
}

export default ArticleComponent;