import React from 'react';
import LoginFormComponent from '../components/LoginFormComponent';
import DashboardContainer from './DashboardContainer';
import UserProfileContainer from './UserProfileContainer';

class MainContainer extends React.Component {

    state={
        postsView: true
      }

    // render header always
    // newpostformcomponent decides whether or not it will be shown
    // render dashboard container OR user profile container based on state
    // render footer always

    render(){
        return(
            <div className="main-container">
                {!this.state.loggedIn ? <LoginFormComponent/> : 
                    <div>
                        {this.state.postsView ? <DashboardContainer/> :
                        <UserProfileContainer/>}
                    </div>
                }
            </div>
        )}

}

export default MainContainer;