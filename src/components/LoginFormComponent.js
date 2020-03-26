import React from 'react';

class LoginFormComponent extends React.Component {

    state={
       usernameInput: "", 
       passwordInput: ""
    }

    handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let encodedPasswordInput = new Buffer(this.state.passwordInput).toString('base64');
        this.props.handleLoginSubmit(this.state.usernameInput, encodedPasswordInput);
    }

    render(){
        return (
           <div className="login-form-component">
                <form onSubmit={(event) => this.handleSubmit(event, this.state)}>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        name="usernameInput"
                        placeholder="Username"
                        value={this.state.usernameInput}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input 
                        name="passwordInput" 
                        placeholder="**********"
                        value={this.state.passwordInput}
                        onChange={this.handleChange}
                    />
                    <br /> 
                    <input type="submit" className="general-button"/>
                </form>
                <button className="link-button" onClick={() => this.props.changeMainView("signupForm")}>First time here? Create an account.</button>
            </div>
        )
    }
}

export default LoginFormComponent;