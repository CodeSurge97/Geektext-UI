import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class AddComment extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            id: '',
            url: 'http://localhost:5000/comment/',
            isbn: this.props.isbn,
            rating: 1,
            charsRemaining: 1500,
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onIDChange = this.onIDChange.bind(this);
        this.onSendComment = this.onSendComment.bind(this);
        this.onRatingChange = this.onRatingChange.bind(this);
        this.updateCharacters = this.updateCharacters.bind(this);
        this.onStarClick = this.onStarClick.bind(this);
    }
    onTextChange(event) {
        this.updateCharacters(event.target.value.length);
        this.setState({ text: event.target.value });
        console.log(event.target.value);
    }
    onIDChange(event) {
        this.setState({ id: event.target.value });
        console.log(event.target.value);

    }
    onRatingChange(event){
        this.setState({ rating: event.target.value });
        console.log(event.target.value);

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
    updateCharacters(length) {
        this.setState({
            charsRemaining: 1500 - length
        })
    }
    onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    }

    render() {
        return (
            <div>
                {/*
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
                */}
                <h1>Rate and Comment!</h1>
                <form onSubmit={this.onSendComment}>
                    <p>What is your user ID?</p>
                    <input onChange={this.onIDChange} type="text" name="user_id"/>
                    <p>How was the book?</p>
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={this.state.rating}
                      onStarClick={this.onStarClick.bind(this)}
                    />
                    <p>Tell us more about what you thought! (Character Limit: 1500)</p>
                    <textarea onChange={this.onTextChange} rows="4" cols="50" id="comment" name="comment" placeholder="Comment here!" maxLength="1500"></textarea><br/>
                    <span id="chars_left">Characters remaining: {this.state.charsRemaining}</span>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }

}

export default AddComment;
