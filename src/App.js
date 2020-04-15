import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer.js';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
require('dotenv').config();

// const API = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "http://localhost:9080";

const API = "http://backend-service-thevoid-test.cpat-dev-sandbox-ocp435-afb9c6047b062b44e3f1b3ecfeba4309-0000.sjc03.containers.appdomain.cloud/";
console.log(API);

class App extends React.Component {

  // view options: "loginForm", "signupForm", "dashboardView", "profileView"

  state={
    allUsers: [], 
    allArticles: [], 
    currentUser: null,
    userKey: "",
    loggedIn: false,
    mainView: "loginForm"
  }

  getAllUsers() {

    fetch(API + '/User/All', {
      method: 'POST',
      body: JSON.stringify(this.state.userKey),
      headers: { 
        'Accept': '*/*',
        'Content-Type': 'application/json'
    }
    })
    .then(response => response.json())
    .then(allUsersData => {
        this.setState({
          allUsers: allUsersData.users
        })
      })
  }

  getAllArticles() {
    fetch(API + '/Article/All', {
      method: 'POST',
      body: JSON.stringify(this.state.userKey),
      headers: { 
        'Accept': '*/*',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(allArticlesData => {
    if (allArticlesData.msg.includes("error")) {
      alert('There was an error fetching articles. Please try again.');
      } else {
        this.setState({
          allArticles: allArticlesData.articles
        })
      }
    })
  }

  handleLoginSubmit = (usernameInput, passwordInput) => {
    let user = {
      userName: usernameInput, 
      password: passwordInput
    }

    this.setState({
      currentUser: user
    })

    fetch(API + `/User/Login`, {
      headers: { 
        'Accept': '*/*',
        'Content-Type': 'application/json'
    }, 
      method: 'POST',
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then((loggedInUserData) => {
        if (!loggedInUserData.msg.includes("error")) {
          this.setState({
            userKey: {key: loggedInUserData.key},
            loggedIn: true,
            mainView: "dashboardView"
      });
      this.getAllArticles();
    } else {
      alert('There was an error logging in. Please try again.');
      this.setState({
        currentUser: null
      })
    }
    }) 
  }

  handleUserCreation = (usernameInput, passwordInput) => {
    let newUserCredentials = {
      userName: usernameInput, 
      password: passwordInput
    };

    fetch(API + `/User/Create`, {
      method: 'POST',
      body: JSON.stringify(newUserCredentials),
      headers: { 
        'Accept': '*/*',
        'Content-Type': 'application/json'
    }
    })
    .then(response => response.json())
    .then((responseData) => 
    {if (responseData.msg.includes("error")) { alert('There was an error creating your account. Please try again.'); } else {
          this.setState({
            userKey: {key: responseData.key},
            loggedIn: true,
            currentUser: newUserCredentials,
            mainView: "dashboardView"
    });
    
        this.getAllArticles();
      }
    });
  }

  handleNewArticle = (userTitleInput, userBodyInput) => {

    let newArticleCredentials = {
      title: userTitleInput,
      body: userBodyInput,
      key: this.state.userKey.key
    };
    fetch(API + `/Article/Create`, {
      method: 'POST',
      body: JSON.stringify(newArticleCredentials),
      headers: { 
        'Accept': '*/*',
        'Content-Type': 'application/json'
    }
    })
    .then(response => response.json())
    .then((responseData) => 
    {if (responseData.msg.includes("error")) { alert('There was an error creating a new article. Please try again.'); } else {
          this.setState({
            allArticles: [this.state.allArticles, responseData],
            mainView: "dashboardView"
    });
      }
      this.getAllArticles();

    });

  }

  handleLogout = () => {
    let logoutCredentials = {
      "userName": this.state.currentUser.userName,
      "key": this.state.userKey.key
    }

    fetch(API + `/User/Logout`, {
      headers: { 
        'Accept': '*/*',
        'Content-Type': 'application/json'
    },
      method: 'POST',
      body: JSON.stringify(logoutCredentials)
    })
    .then(response => response.json())
    .then((logoutResponse) => {
        if (!logoutResponse.msg.includes("error")) {
          this.setState({
          currentUser: null,
          userKey: "",
          loggedIn: false,
          mainView: "loginForm"
      })
    } else {alert('There was an error logging you out. Please try again.');}
    })
  }

  handleArticleDelete = (title, body) => {
    let credentialsToDelete = {
      title: title,
      body: body,
      key: this.state.userKey.key
    }

    fetch(API + `/Article/Delete`, {
      headers: { 
        'Accept': '*/*',
        'Content-Type': 'application/json'
    },
      method: 'POST',
      body: JSON.stringify(credentialsToDelete)
    })
    .then(response => response.json())
    .then((responseResults) => { 
      if (responseResults.msg.includes("error")) { alert('There was an error deleting this article. Please try again.');
    } else {
        this.setState({
          allArticles: this.state.allArticles.filter(article => article.title !== credentialsToDelete.title && article.body !== credentialsToDelete.body).reverse()
        });
    }
  })
  }

  changeMainView = (changeKey) => {
    if (changeKey === "dashboardView") {
        this.setState({
        mainView: changeKey
      });
    } else {
      this.setState({
        mainView: changeKey
      });
    }
  }

  render(){
    return (
      <div className="App">
        <HeaderComponent 
          currentUser={this.state.currentUser}
          loggedIn={this.state.loggedIn}
          changeMainView={this.changeMainView} 
          handleLogout={this.handleLogout}
        />
        <MainContainer 
          allArticles={this.state.allArticles}
          allUsers={this.state.allUsersData}
          loggedIn={this.state.loggedIn} 
          mainView={this.state.mainView} 
          currentUser={this.state.currentUser}
          userKey={this.state.userKey}
          handleUserCreation={this.handleUserCreation}
          handleLoginSubmit={this.handleLoginSubmit}
          handleNewArticle={this.handleNewArticle}
          handleArticleDelete={this.handleArticleDelete}
          changeMainView={this.changeMainView}
          getAllArticles={this.getAllArticles}
        />
        <FooterComponent />
      </div>
    )};
}

export default App;
