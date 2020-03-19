import React from 'react';

class NewPostFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {newPostButtonClicked: true};
    
        // This binding is necessary to make `this` work in the callback
        this.newPostFormToggle = this.newPostFormToggle.bind(this);
      }

    newPostFormToggle(event) {
        event.preventDefault();
        this.setState(state => ({
            newPostButtonClicked: !state.newPostButtonClicked
          }));
      }

    //   newPostSubmit(event) {
    //     event.preventDefault();

    //     // let hashedPass = formula

    //     let postData = {
    //         title: title,
    //         body: body,
    //         user: this.state.user
    //     }

    //   fetch(API + `/Article`, {
    //     headers: {
    //       'Accept': 'application/json', 
    //       'Content-Type': 'application/json'
    //     }, 
    //     method: 'POST',
    //     body: JSON.stringify(newUserCredentials)
    //   })
    //   .then(response => response.json())
    //   .then((newPost) => this.setState({

    //   }))
    //   }


    render(){


        return (
            <div className="new-post-form-component">
                {this.state.newPostButtonClicked ? 
                    <div>
                        <button onClick={this.newPostFormToggle}>New post</button>
                    </div> 
                : <div>
                    
                    <form>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" />
                        <br />
                        <label htmlFor="body">Body:</label>
                        <br />
                        <textarea id="body" />
                        <br /> 
                        <button onClick={this.newPostSubmit}>Submit</button>
                        <br />
                        <button onClick={this.newPostFormToggle}>Cancel</button>
                    </form>
                    
                </div>}
                
            </div>
        )
    }
}

export default NewPostFormComponent;