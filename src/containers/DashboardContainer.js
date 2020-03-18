import React from 'react';
import PostsContainer from './PostsContainer';
import NewPostFormComponent from './../components/NewPostFormComponent';


class DashboardContainer extends React.Component {

    render(){
        return(
            <div>
                <NewPostFormComponent />
                <PostsContainer />
            </div>
        )
    }

}

export default DashboardContainer;