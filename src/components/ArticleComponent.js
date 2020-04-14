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
                <div style=""><h1>{this.props.title}</h1><h2>{this.props.username}</h2></div>
                <p>{this.props.body}</p>
                {this.props.currentUser.userName !== this.props.username ? null :<button onClick={this.handleDelete}>delete</button>}
            </div>
        )
    }
}

export default ArticleComponent;