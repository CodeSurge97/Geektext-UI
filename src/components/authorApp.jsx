import React, { Component } from 'react';
import Book from './book'

class AuthorApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            author_id: this.props.match.params.id,
            author: {},
            books: [],
        }
    }

    componentDidMount(){
        const url = 'http://localhost:5000/author/' + this.state.author_id;
        fetch(url)
        .then(res => res.json())
        .then(json => {
            this.setState({
                author: json,
                books: json.books,
            })
        });
    }

    render() {
        console.log("rendering the author pages");
        console.log(this.state.author.name);
        console.log(this.state.author.books);
        return (
            <div>
                <title>Books by {this.state.author.name}</title>
                <h1>{this.state.author.name}</h1>
                <div className="jumbotron" style={{backgroundColor: 'white',}}>
                    <span><b>Author Info:</b> </span>
                    <span>{this.state.author.author_info}</span>
                </div>

                <div>
                {/* This part is to show the list of books */}
                {this.state.books.map(book => (
                    <div key={book.isbn}>
                        <Book isbn={book.isbn} title={book.title} author={book.author} price={book.price} image={book.img}/>
                    </div>
                ))}

                </div>

            </div>
        );
    }

}

export default AuthorApp;
