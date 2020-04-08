import React from 'react';
import ArticleComponent from '../components/ArticleComponent';

class ArticlesContainer extends React.Component {

    render(){
        return(
            <div className="articles-container">
                {this.props.allArticles.reverse().map((article) => 
                    <ArticleComponent 
                        username={article.author}
                        title={article.title} 
                        body={article.body} 
                        handleArticleDelete={this.props.handleArticleDelete}
                        // key={article.id}
                        // date={article.date} 
                    />)}
            </div>
        )
    }

}

export default ArticlesContainer;