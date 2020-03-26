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
        console.log(allUsersData.users);
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
      console.log("error")
      } else {
        console.log(allArticlesData)
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

    console.log(passwordInput);

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
      console.log("error")
      this.setState({
        currentUser: null
      })
    }
    }) 
  }

  handleUserCreation = (usernameInput, passwordInput) => {
    let newUserCredentials = JSON.stringify({
      userName: usernameInput, 
      password: passwordInput
    });

    fetch(API + `/User/Create`, {
      method: 'POST',
      body: newUserCredentials,
      headers: { 
        'Accept': '*/*',
        'Content-Type': 'application/json'
    }
    })
    .then(response => response.json())
    .then((responseData) => 
    {if (responseData.msg.includes("error")) { return null} else {
          this.setState({
            userKey: {key: responseData.key},
            loggedIn: true,
            currentUser: newUserCredentials,
            mainView: "dashboardView"
    });
    
        this.getAllUsers();
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
      body: newArticleCredentials,
      headers: { 
        'Accept': '*/*',
        'Content-Type': 'application/json'
    }
    })
    .then(response => response.json())
    .then((responseData) => 
    {if (responseData.msg.includes("error")) { return null } else {
    //       this.setState({
    //         allArticles: [this.state.allArticles, responseData],
    //         mainView: "dashboardView"
    // });
        console.log(responseData)
      }
      this.getAllArticles();

    });




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
          allArticles: [...this.state.allArticles, newArticleEntry]
      })
    } else {console.log("error")}
    })
  }

  handleLogout = () => {

    let logoutKey = {
      key: this.state.userKey
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
          userKey: "",
          loggedIn: false,
          mainView: "loginForm"
      })
    } else {console.log("error")}
    })
  }

//   handleArticleDelete = (title, body) => {
//     credentialsToDelete = {
//       title: title,
//       body: body,
//       key: this.state.key
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
//     .then((responseResults) => { 
//       if (responseResults.includes("error")) {console.log("error")})
//     } else {}
// }

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
