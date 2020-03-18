import React from 'react';
import UserProfileComponent from '../components/UserProfileComponent';

class UserProfileContainer extends React.Component {

    render(){
        return(
            <div className="user-profile-container">
                <UserProfileComponent />
                
            </div>
        )
    }

}

export default UserProfileContainer;