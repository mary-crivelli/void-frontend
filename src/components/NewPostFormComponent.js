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
            <div>
                {this.state.newPostButtonClicked ? 
                    <div>
                        <button onClick={this.handleClick}>Show New Post Form</button>
                    </div> 
                : <div>
                    <button onClick={this.handleClick}>Remove New Post Form</button>
                    <form>
                        <label for="title">Title:</label>
                        <input type="text" id="title" />
                        <br />
                        <label for="body">Body:</label>
                        <textarea id="body" />
                        <br /> 
                        <input type="submit" />
                    </form>
                </div>}
            </div>
        )
    }
}

export default NewPostFormComponent;