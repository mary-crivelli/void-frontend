import React from 'react';
import LoginFormComponent from '../components/LoginFormComponent';
import NewUserFormComponent from '../components/NewUserFormComponent';
import DashboardContainer from './DashboardContainer';
import UserProfileContainer from './UserProfileContainer';

class MainContainer extends React.Component {

    // mainContainerView options: ["loginForm", "newUserForm", "postsDashboard", "userProfile"]
    // if/then would decide which of the four is shown

    render(){
        let view;
        if (this.props.mainView === "loginForm" && this.props.loggedIn === false) {
            view = <LoginFormComponent 
                handleUserCreation={this.props.handleUserCreation} 
                changeMainView={this.props.changeMainView}
                handleLoginSubmit={this.props.handleLoginSubmit}
                />;
        } else if (this.props.mainView === "signupForm") {
            view = <NewUserFormComponent 
                changeMainView={this.props.changeMainView}
                handleUserCreation={this.props.handleUserCreation}
                />;
        } else if (this.props.mainView === "dashboardView") {
            view = <DashboardContainer
                handleNewArticle={this.props.handleNewArticle}
                changeMainView={this.props.changeMainView}
                allArticles={this.props.allArticles}
                allUsers={this.props.allUsers}
                />;
        } else if (this.props.mainView === "profileView") {
            view = <UserProfileContainer 
                changeMainView={this.props.changeMainView}
                />;
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