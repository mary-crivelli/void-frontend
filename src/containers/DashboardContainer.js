import React from 'react';
import ArticlesContainer from './ArticlesContainer';
import NewArticleFormComponent from './../components/NewArticleFormComponent';


class DashboardContainer extends React.Component {

    render(){
        return(
            <div className="dashboard-container">
                <NewArticleFormComponent />
                <ArticlesContainer />
            </div>
        )
    }

}

export default DashboardContainer;