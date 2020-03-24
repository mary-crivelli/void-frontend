import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer.js';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

const API = '/'

class App extends React.Component {

  // view options: "loginForm", "signupForm", "dashboardView", "profileView"

  state={
    allUsersData: [], 
    allArticlesData: [], 
    currentUser: null, 
    currentUsername: "",
    loggedIn: false,
    mainView: "loginForm"
  }

  getAllUsers() {
    fetch(API + '/User/All')
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
    fetch(API + '/User/All')
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
    this.getAllUsers();
    this.getAllArticles()
  }

  handleLoginSubmit = (event, userInput) => {
    event.preventDefault();
    let user = userInput

    fetch(API + `/User/Login`, {
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      }, 
      method: 'POST',
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then((loggedInUserData) => {
        if (loggedInUserData.includes("error")) {
          this.setState({
          currentUser: loggedInUserData,
          loggedIn: true
      })
    } else {console.log("error")}
    }
    )
  }

  handleUserCreation = (usernameInput, passwordInput) => {

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
          allUsersData: [...this.state.allUsersData, newUserEntry],
          currentUser: newUserEntry,
          loggedIn: true
      })
    } else {console.log("error")}
    })
  }

  changeMainView = (changeKey) => {
    this.setState({
      mainView: changeKey
    });
  }

  render(){
    return (
      <div className="App">
        <HeaderComponent 
          currentUsername={this.state.currentUsername}
          changeMainView={this.changeMainView} 
        />
        <MainContainer 
          loggedIn={this.state.loggedIn} 
          mainView={this.state.mainView} 
          handleUserCreation={this.handleUserCreation}
          changeMainView={this.changeMainView}
        />
        <FooterComponent />
      </div>
    )};
}

export default App;
