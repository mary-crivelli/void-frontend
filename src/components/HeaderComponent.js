import React from 'react';

class HeaderComponent extends React.Component {

    render(){
        return (
            <div>
                {this.props.loggedIn ? 
                    <div><div className="title"><h1>The Void</h1>
                    <button className="logout-button" onClick={() => this.props.handleLogout()}>Logout</button>
                    {/* <span class="th th-user"></span> */}
                    </div><div className="header-component"><div>Welcome back, <b>{this.props.currentUser.userName}</b>
                    
                
                <hr /></div></div></div> 
                : <h1 className="title">The Void</h1>}
            </div>
        )
    }
}

export default HeaderComponent;