import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer.js';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

const API = '/'

class App extends React.Component {

  // view options: "loginForm", "signupForm", "dashboardView", "profileView"

  state={
    loggedIn: true,
    allUsersData: [], 
    currentUser: null, 
    currentUsername: "",
    mainView: "dashboardView"
  }

  getAllUsers() {
    fetch(API + '/User/All')
    .then(response => response.json())
    .then(allUsersData => {
      this.setState({
        allUsersData: allUsersData
      })
    })
    // then read response for word "error" if appears create error notif else set state accordingly
  }

  componentDidMount(){
    this.getAllUsers()
  }

  // handleLoginSubmit = (event, userInput) => {
  //   event.preventDefault();
  //   let username = userInput
  //   let user = this.state.allUsersData.find(function(user){ return user.display_name.includes(username)})
  
  // then read response for word "error" if appears create error notif else set state accordingly

  //   this.setState({
  //     currentUser: user,
  //     loggedIn: true
  //   })
  // }

  handleUserCreation = (event, usernameInput, passwordInput) => {
    event.preventDefault();

    // let hashedPass = formula

    let newUserCredentials = {
      username: usernameInput, 
      password: passwordInput
    }

    // whether this works is dependent upon what /User gives back
    fetch(API + `/User/Create`, {
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      }, 
      method: 'POST',
      body: JSON.stringify(newUserCredentials)
    })
    
    .then(response => response.json())
    // then read response for word "error" if appears create error notif else set state accordingly
    .then((newUserEntry) => this.setState({
      allUsersData: [...this.state.allUsersData, newUserEntry],
      currentUser: newUserEntry,
      loggedIn: true
    }))
  }

  changeMainView(event, changeKey) {
    // event.preventDefault();

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
