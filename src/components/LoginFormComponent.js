import React from 'react';
import NewUserFormComponent from './NewUserFormComponent';

class LoginFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {newUserLinkClicked: false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(e) {
        e.preventDefault();
        this.setState(state => ({
            newUserLinkClicked: !state.newUserLinkClicked
          }));
      }

    render(){
        return (
           <div> {!this.state.newUserLinkClicked ? <div className="login-form-component">
                <form>
                    <label for="title">Username:</label>
                    <input type="text" id="title" />
                    <br />
                    <label for="password">Password:</label>
                    <input id="password" />
                    <br /> 
                    <button>Login</button>
                </form>
                <a href='' onClick={this.handleClick}>First time here? Create an account.</a>
            </div>
        : <NewUserFormComponent handleNewUserSubmit={this.props.handleNewUserSubmit} />
        }</div>
        )
    }
}

export default LoginFormComponent;