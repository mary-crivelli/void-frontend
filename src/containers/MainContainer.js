import React from 'react';
import LoginFormComponent from '../components/LoginFormComponent';
import DashboardContainer from './DashboardContainer';

class MainContainer extends React.Component {

    state={
        loggedIn: true
    }

    // render header always
    // newpostformcomponent decides whether or not it will be shown
    // render dashboard container OR user profile container based on state
    // render footer always

    render(){
        return(
            <div>
                {!this.state.loggedIn ? <LoginFormComponent/> : 
                <DashboardContainer/>}
            </div>
        )}

}

export default MainContainer;