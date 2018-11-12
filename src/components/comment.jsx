import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
            content : this.props.content,
            rating : this.props.rating,
            user_id : this.props.user_id,
            date : this.props.date,
            username: this.props.username,
            nickname: this.props.nickname,
            anon: this.props.anon
        }
    }

    render() {
        let styles = {
            border: 'solid'
        };
        if (this.state.anon === 1) {
            console.log("Anon option " + this.state.anon);
            console.log(this.state.nickname);
            console.log(this.state.content);
            console.log(this.state.user_id);
            return (
                <div className="container" style={styles}>
                    <div>
                        <span>Anonymous </span>
                        <span>{this.state.date} EST</span>

                    </div>
                    <div>
                        <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={this.state.rating}
                        />
                    </div>
                    <div>
                        <p>{this.state.content}</p>
                    </div>
                </div>
            );
        }
        else if (this.state.anon === 2) {
            console.log("Anon option " + this.state.anon);
            console.log(this.state.nickname);
            console.log(this.state.content);
            console.log(this.state.user_id);
            return (
                <div className="container" style={styles}>
                    <div>
                        <span>{this.state.username} </span>
                        <span>{this.state.date} EST</span>

                    </div>
                    <div>
                        <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={this.state.rating}
                        />
                    </div>
                    <div>
                        <p>{this.state.content}</p>
                    </div>
                </div>
            );
        }
        else if (this.state.anon === 3) {
            console.log("Anon option " + this.state.anon);
            console.log(this.state.nickname);
            console.log(this.state.content);
            console.log(this.state.user_id);
            return (
                <div className="container" style={styles}>
                    <div>
                        <span>{this.state.nickname} </span>
                        <span>{this.state.date} EST</span>

                    </div>
                    <div>
                        <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={this.state.rating}
                        />
                    </div>
                    <div>
                        <p>{this.state.content}</p>
                    </div>
                </div>
            );
        }
    }

}

export default Comment;
