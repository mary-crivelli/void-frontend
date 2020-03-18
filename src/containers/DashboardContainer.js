import React from 'react';
import PostsContainer from './PostsContainer';
import NewPostFormComponent from './../components/NewPostFormComponent';


class DashboardContainer extends React.Component {

    render(){
        return(
            <div className="dashboard-container">
                <NewPostFormComponent />
                <PostsContainer />
            </div>
        )
    }

}

export default DashboardContainer;