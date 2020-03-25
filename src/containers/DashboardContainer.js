import React from 'react';
import ArticlesContainer from './ArticlesContainer';
import NewArticleFormComponent from './../components/NewArticleFormComponent';


class DashboardContainer extends React.Component {

    render(){
        return(
            <div className="dashboard-container">
                <NewArticleFormComponent
                    handleNewArticle={this.props.handleNewArticle}
                />
                <ArticlesContainer
                    allArticles={this.props.allArticles}
                    allUsers={this.props.allUsers}
                />
            </div>
        )
    }

}

export default DashboardContainer;