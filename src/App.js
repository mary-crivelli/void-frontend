import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer.js';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

const API = '/'

class App extends React.Component {

  state={
    loggedIn: false,
    userData: [], 
    currentUserId: null, 
    currentUser: null
  }

  // getUsers() {
  //   fetch(API + '/GetUsers')
  //   .then(response => response.json())
  //   .then(userData => {
  //     this.setState({
  //       userData: userData
  //     })
  //   })
  // }

  // componentDidMount(){
  //   this.getUsers()
  // }

  // handleLoginSubmit = (event, userInput) => {
  //   event.preventDefault();
  //   let username = userInput
  //   let user = this.state.userData.find(function(user){ return user.display_name.includes(username)})

  //   this.setState({
  //     currentUserId: user.id,
  //     currentUser: user,
  //     loggedIn: true
  //   })
  // }

  handleNewUserSubmit = (event, username, password) => {
    event.preventDefault();

    // let hashedPass = formula

    let newUserCredentials = {
      username: username, 
      password: password
    }

    // whether this works is dependent upon what /User gives back
    fetch(API + `/User`, {
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      }, 
      method: 'POST',
      body: JSON.stringify(newUserCredentials)
    })
    .then(response => response.json())
    .then((newUserEntry) => this.setState({
      userData: [...this.state.userData, newUserEntry],
      currentUserId: newUserEntry.id, 
      currentUser: newUserEntry,
      loggedIn: true
    }))
  }

  render(){
    return (
      <div className="App">
        <HeaderComponent />
        <MainContainer loggedIn={this.loggedIn} handleNewUserSubmit={this.handleNewUserSubmit} />
        <FooterComponent />
      </div>
    )};
}

export default App;
