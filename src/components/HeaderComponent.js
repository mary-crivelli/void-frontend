import React from 'react';

class HeaderComponent extends React.Component {
    render(){
        return (
            <div className="header-component">
                <h1>The Void</h1>
                <button>@{this.props.currentUsername}</button>
                <hr />
            </div>
        )
    }
}

export default HeaderComponent;