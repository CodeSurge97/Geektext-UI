import React, { Component } from 'react';
import Comment from './comment'
import AddComment from "./addComment"

class BookApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            isbn: this.props.match.params.isbn,
            book: {},
            comments: [],
            width: 125,
            height: 150,
        }
        this.enlarge = this.enlarge.bind(this);
        this.minimize = this.minimize.bind(this);
    }

    componentDidMount(){
        const url = 'http://localhost:5000/book/' + this.state.isbn
        fetch(url)
        .then(res => res.json())
        .then(json => {
            this.setState({
                book: json,
                comments: json.comments,
            })
        });
    }

    enlarge(event){

        this.setState({
            width: 125*2,
            height: 150*2,
        }, () => {
            document.addEventListener('click', this.minimize);
        });
    }

    minimize(){
        this.setState({
            width: 125,
            height: 150,
        }, () => {
          document.removeEventListener('click', this.minimize);
        });
    }

    render() {
        return (
            <div>
            <h1>{this.state.book.title}</h1>
                <div className="container">
                    <img onClick={() => {this.enlarge()}} src={"http://localhost:5000" + this.state.book.img} alt={this.state.book.img} width={this.state.width} height={this.state.height} className="float-left img-thumbnail"/>
                    <div>
                        <span>Author: </span>
                        <span>{this.state.book.author}</span>
                    </div>
                    <div>
                        <span>Price: </span>
                        <span>{this.state.book.price}</span>
                    </div>
                    <div>
                        <span>Average Rating: </span>
                        <span>{this.state.book.rating}</span>
                    </div>
                    <div>
                        <span>Genre: </span>
                        <span>{this.state.book.genre}</span>
                    </div>
                    <div>
                        <span>Description: </span>
                        <span>{this.state.book.description}</span>
                    </div>
                    <div>
                        <h2>Comments: </h2>
                        {/*maybe create a comments component and inside of that a comment component like in books*/}
                        {this.state.comments.map(comment => (
                            <div key={comment.id}>
                                <Comment contents={comment.contents} rating={comment.rating} user_id={comment.user_id} date={comment.date} username={comment.username}/>
                            </div>
                        ))}
                        <div>
                            <AddComment />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default BookApp;
