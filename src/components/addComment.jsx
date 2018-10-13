import React, { Component } from 'react';

class AddComment extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            id: '',
            url: 'http://localhost:5000/comment/',
            isbn: this.props.isbn,
            rating: -1,
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onIDChange = this.onIDChange.bind(this);
        this.onSendComment = this.onSendComment.bind(this);
        this.onRatingChange = this.onRatingChange.bind(this);
    }
    onTextChange(event) {
        this.setState({ text: event.target.value });
    }
    onIDChange(event) {
        this.setState({ id: event.target.value });

    }
    onRatingChange(event){
        this.setState({ rating: event.target.value });

    }
    onSendComment(){
        fetch((this.state.url + this.state.id), {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: this.state.id,
            content: this.state.text,
            isbn: this.state.isbn,
            rating: this.state.rating,

          })
        })
    }

    render() {
        return (
            <div>
                <h2>Add new Comment</h2>
                <form onSubmit={this.onSendComment}>
                    <div>
                        <label>
                            User Id:
                            <input
                                type="text"
                                onChange={this.onIDChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Rating:
                            <input
                                type="text"
                                onChange={this.onRatingChange}
                            />
                        </label>
                    </div>
                    <div>
                        <div>
                            <label>
                                Text:
                            </label>
                        <input onChange={this.onTextChange}/>
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

export default AddComment;
