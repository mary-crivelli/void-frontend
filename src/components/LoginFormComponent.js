import React from 'react';

class LoginFormComponent extends React.Component {

    render(){
        return (
            <div>
                <form>
                    <label for="title">Username:</label>
                    <input type="text" id="title" />
                    <br />
                    <label for="password">Password:</label>
                    <input id="password" />
                    <br /> 
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default LoginFormComponent;