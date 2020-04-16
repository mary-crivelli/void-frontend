import React from 'react';

class ArticleComponent extends React.Component {

    //not tested
    handleDelete = (event) => {
        event.preventDefault();
        this.props.handleArticleDelete(this.props.title, this.props.body);
    }

    render(){
        return (
            <div className="article-component">
                <div>
                <div className="article-title">{this.props.title}</div> <div className="article-author">Posted by {this.props.username}</div>
                </div>
                <hr/>
                <p>{this.props.body}</p>
                {this.props.currentUser.userName !== this.props.username ? null :<button className="danger-button" id="delete-article" onClick={this.handleDelete}>Delete</button>}
            </div>
        )
    }
}

export default ArticleComponent;