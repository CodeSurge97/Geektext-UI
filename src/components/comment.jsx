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
            nickname: this.props.nickname,
            anon: this.props.anon
        }
    }

    render() {
        return (
            <div className="container">
                <div>
                    <span>{this.state.nickname} </span>
                    <span>{this.state.date} EST</span>

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
