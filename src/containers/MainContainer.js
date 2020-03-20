import React from 'react';
import LoginFormComponent from '../components/LoginFormComponent';
import DashboardContainer from './DashboardContainer';
import UserProfileContainer from './UserProfileContainer';

class MainContainer extends React.Component {

    // mainContainerView options: ["loginForm", "newUserForm", "postsDashboard", "userProfile"]
    // if/then would decide which of the four is shown

     state={
        articlesView: true,
        mainContainerView: "loginForm"
    }

    // render header always

    // render footer always

    render(){
        return(
            <div className="main-container">
                {!this.props.loggedIn ? <LoginFormComponent handleNewUserSubmit={this.props.handleNewUserSubmit}/> : 
                    <div>
                        {this.state.articlesView ? <DashboardContainer/> :
                        <UserProfileContainer/>}
                    </div>
                }
            </div>
        )}

}

export default MainContainer;