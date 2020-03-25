import React from 'react';

class NewUserFormComponent extends React.Component {

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
        this.props.handleUserCreation(this.state.usernameInput, this.state.passwordInput);
     }
 
     render(){
         return (
            <div className="new-user-form-component">
                <h1>Sign up for an account here:</h1>
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
             </div>
         )
     }
}

export default NewUserFormComponent;