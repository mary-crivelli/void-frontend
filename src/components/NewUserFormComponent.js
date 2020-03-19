import React from 'react';

class NewUserFormComponent extends React.Component {


    render(){
        return (
            <div className="new-user-form-component">
                <form>
                    <label for="title">Username:</label>
                    <input type="text" id="title" />
                    <br />
                    <label for="password">Password:</label>
                    <input id="password" />
                    <br /> 
                    <label for="password">Confirm Password:</label>
                    <input id="password" />
                    <br /> 
                    <button onClick={this.props.handleNewUserSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewUserFormComponent;