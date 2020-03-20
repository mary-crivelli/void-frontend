import React from 'react';
import ArticleComponent from '../components/ArticleComponent';

class ArticlesContainer extends React.Component {

    // dummy article data w/ title, username, body
    state={
        articles: [
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
            <div className="articles-container">
                {this.state.articles.map((article) => 
                <ArticleComponent title={article.title} username={article.username} body={article.body} key={article.id} />)}
            </div>
        )
    }

}

export default ArticlesContainer;