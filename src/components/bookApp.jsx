import React, { Component } from 'react';

class BookApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            isbn: this.props.match.params.isbn,
            book: {},
        }
    }

    componentDidMount(){
        const url = 'http://localhost:5000/book/' + this.state.isbn
        fetch(url)
        .then(res => res.json())
        .then(json => {
            this.setState({
                book: json,
            })
        });
    }

    render() {
        return (
            <div>
            <h1>{this.state.book.title}</h1>
                <div className="container">
                    <img src={"http://localhost:5000" + this.state.book.img} alt={this.state.book.img} width="125" height="150" className="float-left img-thumbnail"/>
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
                    </div>
                </div>
            </div>
        );
    }

}

export default BookApp;
