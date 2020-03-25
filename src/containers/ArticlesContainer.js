import React from 'react';
import ArticleComponent from '../components/ArticleComponent';

class ArticlesContainer extends React.Component {

    render(){
        return(
            <div className="articles-container">
                {this.props.allArticles.map((article) => 
                <ArticleComponent 
                username={article.author}
                title={article.title} 
                body={article.body} 
                key={article.id}
                date={article.date} 
                />)}
            </div>
        )
    }

}

export default ArticlesContainer;