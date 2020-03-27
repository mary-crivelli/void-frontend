import React from 'react';

class HeaderComponent extends React.Component {

    render(){
        return (
            <div className="header-component">
                <h1>The Void</h1>
                {this.props.loggedIn ? <div><button>@{this.props.currentUser.userName}</button>
                <button onClick={() => this.props.handleLogout()}>Logout</button></div> : null}
                <hr />
            </div>
        )
    }
}

export default HeaderComponent;