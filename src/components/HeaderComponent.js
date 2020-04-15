import React from 'react';

class HeaderComponent extends React.Component {

    render(){
        return (
            <div>
                {this.props.loggedIn ? <div className="header-component"><div>Now logged in as: <b>{this.props.currentUser.userName}</b>
                <button className="general-button" onClick={() => this.props.handleLogout()}>Logout</button><hr /></div></div> : null}
            </div>
        )
    }
}

export default HeaderComponent;