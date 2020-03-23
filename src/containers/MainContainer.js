import React from 'react';
import LoginFormComponent from '../components/LoginFormComponent';
import NewUserFormComponent from '../components/NewUserFormComponent';
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
        let view;
        if (this.props.mainView === "loginForm") {
            view = <LoginFormComponent handleUserCreation={this.props.handleUserCreation}/>;
        } else if (this.props.mainView === "signupForm") {
            view = <NewUserFormComponent />;
        } else if (this.props.mainView === "dashboardView") {
            view = <DashboardContainer/>;
        } else if (this.props.mainView === "profileView") {
            view = <UserProfileContainer />;
        } else {
            console.log("state error mainView");
        }

        return(
        <div className="main-container">
            {view}
        </div>
        )}

}

export default MainContainer;