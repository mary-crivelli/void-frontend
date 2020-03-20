import React from 'react';

class UserProfileComponent extends React.Component {
    // state={
    //     users: [
    //         {
    //             id: 1, 
    //             username: "bepis"
    //         }
    //     ]
    // }

    render(){
        return (
            <div className="user-profile-component">
                <h1>user.name</h1>
                <h3>user.posts.map</h3>
                <a href="">change password</a>
            </div>
        )
    }
}

export default UserProfileComponent;