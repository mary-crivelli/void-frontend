import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer.js';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

const API = 'http://localhost:9080'

class App extends React.Component {

  // view options: "loginForm", "signupForm", "dashboardView", "profileView"

  state={
    allUsers: [], 
    allArticles: [], 
    currentUser: null,
    key: "",
    loggedIn: false,
    mainView: "loginForm"
  }

  getAllUsers() {
    fetch(API + '/User/All', {
      method: 'POST',
      body: JSON.stringify(this.state.key)
    })
    .then(response => response.json())
    .then(allUsersData => {
    if (!allUsersData.includes("error")) {
      this.setState({
        allUsersData: allUsersData
      })
    } else {console.log("error")}
    })
  }

  getAllArticles() {
    fetch(API + '/User/All', {
      method: 'POST',
      body: JSON.stringify(this.state.key)
    })
    .then(response => response.json())
    .then(allArticlesData => {
    if (!allArticlesData.includes("error")) {
      this.setState({
        allArticlesData: allArticlesData
      })
      } else {console.log("error")}
    })
  }

  componentDidMount(){
    // this.getAllUsers();
    // this.getAllArticles();
    // console.log(this.state.allUsersData)
  }

  handleLoginSubmit = (usernameInput, passwordInput) => {
    // base 64 encode goes here - cGFzc3dvcmQ=

    let user = {
      userName: usernameInput, 
      password: passwordInput
    }

    fetch(API + `/User/Login`, {
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      }, 
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then((loggedInUserData) => {
        if (!loggedInUserData.includes("error")) {
          this.setState({
            currentUser: loggedInUserData,
            key: loggedInUserData.key,
            loggedIn: true
      })
    } else {console.log("error")}
    })

    this.getAllUsers();
    this.getAllArticles();
  }

  handleUserCreation = (usernameInput, passwordInput) => {
    // base 64 encode goes here - cGFzc3dvcmQ= [btoa(passwordInput)???]

    let newUserCredentials = {
      username: usernameInput, 
      password: passwordInput
    }

    fetch(API + `/User/Create`, {
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      }, 
      method: 'POST',
      body: JSON.stringify(newUserCredentials)
    })
    .then(response => response.json())
    .then((newUserEntry) => {
        if (!newUserEntry.includes("error")) {
          this.setState({
          currentUser: newUserEntry,
          key: newUserEntry.key,
          loggedIn: true
      })
    } else {console.log("error")}
    })

    this.getAllUsers();
    this.getAllArticles();
  }

  handleNewArticle = (userTitleInput, userBodyInput) => {

    let newArticleCredentials = {
      title: userTitleInput,
      body: userBodyInput
    }

    fetch(API + `/Article/Create`, {
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      }, 
      method: 'POST',
      body: JSON.stringify(newArticleCredentials)
    })
    .then(response => response.json())
    .then((newArticleEntry) => {
        if (!newArticleEntry.includes("error")) {
          this.setState({
          allArticlessData: [...this.state.allArticlesData, newArticleEntry]
      })
    } else {console.log("error")}
    })
  }

  handleArticleDelete = () => {

    fetch(API + `/Article/Delete`, {
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      }, 
      method: 'DELETE'
    })
    .then(response => response.json())
    // .then((responseResults) => { 
    //   if (responseResults.includes("error")) {console.log("error")})
    // }
    // re GET users/articles
  }

  handleUserDelete = () => {

      fetch(API + `/Article/Delete`, {
        headers: {
          'Accept': 'application/json', 
          'Content-Type': 'application/json'
        }, 
        method: 'DELETE'
      })
      .then(response => response.json())
      // .then((responseResults) => { 
      //   if (responseResults.includes("error")) {console.log("error")})
      // }
      // re GET users/articles
  }

  handleLogout = () => {

    let logoutKey = {
      key: this.state.key
    }

    fetch(API + `/Article/Create`, {
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      }, 
      method: 'POST',
      body: JSON.stringify(logoutKey)
    })
    .then(response => response.json())
    .then((logoutResponse) => {
        if (!logoutResponse.includes("error")) {
          this.setState({
          currentUser: null,
          key: "",
          loggedIn: false,
          mainView: "loginForm"
      })
    } else {console.log("error")}
    })
  }

  //post delete
//   handleUserDelete = (username, password) => {
//     credentialsToDelete = {
//       username: username,
//       password: password
//     }

//     fetch(API + `/Article/Delete`, {
//       headers: {
//         'Accept': 'application/json', 
//         'Content-Type': 'application/json'
//       }, 
//       method: 'POST',
//       body: JSON.stringify(credentialsToDelete)
//     })
//     .then(response => response.json())
//     // .then((responseResults) => { 
//     //   if (responseResults.includes("error")) {console.log("error")})
//     // } else {
//   re get posts
// }

  changeMainView = (changeKey) => {
    this.setState({
      mainView: changeKey
    });
  }

  render(){
    return (
      <div className="App">
        <HeaderComponent 
          currentUser={this.state.currentUser}
          loggedIn={this.state.loggedIn}
          changeMainView={this.changeMainView} 
        />
        <MainContainer 
          allArticles={this.state.allArticlesData}
          allUsers={this.state.allUsersData}
          loggedIn={this.state.loggedIn} 
          mainView={this.state.mainView} 
          currentUser={this.state.currentUser}
          key={this.state.key}
          handleUserCreation={this.handleUserCreation}
          handleLoginSubmit={this.handleLoginSubmit}
          handleNewArticle={this.handleNewArticle}
          handleArticleDelete={this.handleArticleDelete}
          changeMainView={this.changeMainView}
        />
        <FooterComponent />
      </div>
    )};
}

export default App;
