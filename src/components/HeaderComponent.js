import React from 'react';

class HeaderComponent extends React.Component {
    render(){
        return (
            <div className="header-component">
                <h1>The Void</h1>
                <h2>@{this.props.currentUsername}</h2>
                <hr />
            </div>
        )
    }
}

export default HeaderComponent;