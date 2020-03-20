import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer.js';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

const API = '/'

class App extends React.Component {

  state={
    loggedIn: true,
    allUsersData: [], 
    currentUser: null, 
    currentUsername: "mary"
  }

  // getUsers() {
  //   fetch(API + '/GetUsers')
  //   .then(response => response.json())
  //   .then(allUsersData => {
  //     this.setState({
  //       allUsersData: allUsersData
  //     })
  //   })
  // }

  // componentDidMount(){
  //   this.getUsers()
  // }

  // handleLoginSubmit = (event, userInput) => {
  //   event.preventDefault();
  //   let username = userInput
  //   let user = this.state.allUsersData.find(function(user){ return user.display_name.includes(username)})

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
    .then((newUserEntry) => this.setState({
      allUsersData: [...this.state.allUsersData, newUserEntry],
      currentUser: newUserEntry,
      loggedIn: true
    }))
  }

  render(){
    return (
      <div className="App">
        <HeaderComponent currentUsername={this.state.currentUsername} />
        <MainContainer loggedIn={this.state.loggedIn} handleUserCreation={this.handleUserCreation} />
        <FooterComponent />
      </div>
    )};
}

export default App;
