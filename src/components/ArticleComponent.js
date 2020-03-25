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
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
                <button onClick={this.handleDelete}>delete</button>
            </div>
        )
    }
}

export default ArticleComponent;