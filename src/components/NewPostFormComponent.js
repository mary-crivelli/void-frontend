import React from 'react';

class NewPostFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {newPostButtonClicked: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(e) {
        e.preventDefault();
        this.setState(state => ({
            newPostButtonClicked: !state.newPostButtonClicked
          }));
      }


    render(){


        return (
            <div className="new-post-form-component">
                {this.state.newPostButtonClicked ? 
                    <div>
                        <button onClick={this.handleClick}>Show New Post Form</button>
                    </div> 
                : <div>
                    <button onClick={this.handleClick}>Remove New Post Form</button>
                    <form>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" />
                        <br />
                        <label htmlFor="body">Body:</label>
                        <br />
                        <textarea id="body" />
                        <br /> 
                        <button>Submit</button>
                    </form>
                </div>}
            </div>
        )
    }
}

export default NewPostFormComponent;