import React, { Component } from 'react';

class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
            contents : this.props.contents,
            rating : this.props.rating,
            user_id : this.props.user_id,
            date : this.props.date,
            username: this.props.username,
        }
    }

    render() {
        return (
            <div className="container">
                <div>
                    <span>{this.state.username} </span>
                    <span>{this.state.date} </span>
                </div>
                <div>
                    <span>Rating: </span>
                    <span>{this.state.rating}</span>
                </div>
                <div>
                    <p>{this.state.contents}</p>
                </div>
            </div>
        );
    }

}

export default Comment;
