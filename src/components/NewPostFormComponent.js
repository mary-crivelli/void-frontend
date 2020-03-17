import React from 'react';

class NewPostFormComponent extends React.Component {
    render(){
        return (
            <div>
                <form>
                    <label for="title">Title:</label>
                    <input type="text" id="title" />
                    <br />
                    <label for="body">Body:</label>
                    <textarea id="body" />

                    <br /> 
                    
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default NewPostFormComponent;