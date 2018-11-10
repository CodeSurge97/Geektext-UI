import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class AddComment extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            id: '',
            url: 'http://localhost:5000/comment',
            isbn: this.props.isbn,
            rating: 3,
            charsRemaining: 1500,
            anon: 1,
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onAnonChange = this.onAnonChange.bind(this);
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
    onAnonChange(event) {
        this.setState({ anon: event.target.value });
        console.log(event.target.value);
    }
    onRatingChange(event){
        this.setState({ rating: event.target.value });
        console.log(event.target.value);

    }
    onSendComment(){
        fetch((this.state.url), {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: this.state.id,
            content: this.state.text,
            isbn: this.state.isbn,
            rating: this.state.rating,
            anon: this.state.anon
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
    console.log(nextValue);
    }
    render() {
        let styles = {
            margin: '15px'
        };
        return (
            <div>
                <h1>Rate and Comment!</h1>
                <form onSubmit={this.onSendComment}>
                    <p>Choose what name you would like displayed:</p>
                    <label><input type="radio" onClick={this.onAnonChange} name="anon" value="1" defaultChecked="true"/>Anonymous</label>
                    <label style={styles}><input type="radio" onClick={this.onAnonChange} name="anon" value="2"/>Username</label>
                    <label><input type="radio" onClick={this.onAnonChange} name="anon" value="3"/>Nickname</label>
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
