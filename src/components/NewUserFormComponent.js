import React from 'react';

class NewUserFormComponent extends React.Component {
    state = {
        username: ""
    }
    

    render(){
        return (
            <div className="new-user-form-component">
                <h1>Sign up for an account here:</h1>
                <form>
                    <label htmlFor="title">Username:</label>
                    <input id="usernameInput" type="text" 
                        placeholder="Username"
                        onChange={e => this.setState({username: e.target.value})}
                    />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input 
                        placeholder="*********"
                        id="passwordInput" 
                        type="password"
                    />
                    <br /> 
                    {/* <button onClick={() => this.props.handleUserCreation(usernameInput, passwordInput)}>Submit</button> */}
                </form>
            </div>
        )
    }
}

export default NewUserFormComponent;