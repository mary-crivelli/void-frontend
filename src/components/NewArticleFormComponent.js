import React from 'react';

class NewArticleFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {newArticleButtonClicked: true};
    
        // This binding is necessary to make `this` work in the callback
        this.newArticleFormToggle = this.newArticleFormToggle.bind(this);
      }

    newArticleFormToggle(event) {
        event.preventDefault();
        this.setState(state => ({
            newArticleButtonClicked: !state.newArticleButtonClicked
          }));
      }

    //   newArticleSubmit(event) {
    //     event.preventDefault();

    //     // let hashedPass = formula

    //     let articleData = {
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
    //   .then((newArticle) => this.setState({

    //   }))
    //   }


    render(){


        return (
            <div className="new-article-form-component">
                {this.state.newArticleButtonClicked ? 
                    <div>
                        <button onClick={this.newArticleFormToggle}>New Article</button>
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
                        <button onClick={this.newArticleSubmit}>Submit</button>
                        <br />
                        <button onClick={this.newArticleFormToggle}>Cancel</button>
                    </form>
                    
                </div>}
                
            </div>
        )
    }
}

export default NewArticleFormComponent;