import React, { Component } from 'react';

class AddComment extends Component {

    constructor(){
        super();
        this.state = {
            text: '',
            id: '',
            url: 'http://localhost:5000/comment/',
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onIDChange = this.onIDChange.bind(this);
        this.onSendComment = this.onSendComment.bind(this);
    }
    onTextChange(event) {
        this.setState({ text: event.target.value });
    }
    onIDChange(event) {
        this.setState({ id: event.target.value });
    }
    onSendComment(){
        {console.log("this is the id " + this.state.id)}
        {console.log("this is the id " + this.state.text)}
        fetch((this.state.url + this.state.id), {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstParam: this.state.id,
            secondParam: this.state.text,
          })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSendComment}>
                    <div>
                        <input
                            type="text"
                            onChange={this.onIDChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={this.onTextChange}
                        />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }

}

export default AddComment;
