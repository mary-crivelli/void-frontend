import React from 'react';

class NewUserFormComponent extends React.Component {


    render(){
        return (
            <div className="new-user-form-component">
                <h1>Sign up for an account here:</h1>
                <form>
                    <label htmlFor="title">Username:</label>
                    <input id="username" type="text" />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" />
                    <br /> 
                    <button onClick={this.props.handleUserCreation}>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewUserFormComponent;