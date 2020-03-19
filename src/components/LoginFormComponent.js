import React from 'react';
import NewUserFormComponent from './NewUserFormComponent';

class LoginFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {newUserLinkClicked: false};
    
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
                    <label htmlFor="title">Username:</label>
                    <input type="text" id="title" />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" />
                    <br /> 
                    <button>Login</button>
                </form>
                <button className="link-button" onClick={this.handleClick}>First time here? Create an account.</button>
            </div>
        : <NewUserFormComponent handleNewUserSubmit={this.props.handleNewUserSubmit} />
        }</div>
        )
    }
}

export default LoginFormComponent;