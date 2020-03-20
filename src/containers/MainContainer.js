import React from 'react';
import LoginFormComponent from '../components/LoginFormComponent';
import DashboardContainer from './DashboardContainer';
import UserProfileContainer from './UserProfileContainer';

class MainContainer extends React.Component {

    state={
        articlesView: true
      }

    // render header always
    // newarticleformcomponent decides whether or not it will be shown
    // render dashboard container OR user profile container based on state
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