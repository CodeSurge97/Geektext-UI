import React, { Component } from 'react';
import Book from './book';

class BookList extends Component {

    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
            library: [],
            sortBy: this.props.sortBy,
        }
        this.fetchLibrary = this.fetchLibrary.bind(this);

    }
    componentDidMount(){
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(json => {
            this.setState({
                library: json,
            })
        });
    }

    fetchLibrary(sortBy){
        console.log("fetching data by" + sortBy)
        let url = 'http://localhost:5000/books';
        if(sortBy === 'priceD'){
            url = 'http://localhost:5000/book/by-price-d';
        }else if(sortBy === 'priceA'){
            url = 'http://localhost:5000/book/by-price-a';
        }else if(sortBy === 'ratingD'){
            url = 'http://localhost:5000/book/by-rating-d';

        }else if(sortBy === 'ratingA'){
            url = 'http://localhost:5000/book/by-rating-a';
        }else if(sortBy === 'author'){
            url = 'http://localhost:5000/book/by-author';
        }
        fetch(url).then(res => res.json())
        .then(json => {
            this.setState({
                library: json,
            })
        });
    }

    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.sortBy !== prevProps.sortBy) {
        this.fetchLibrary(this.props.sortBy);
      }
    }

    render() {
        return (
            <div>
            <div className="row">
                {/* This part is to show the list of books */}
                {this.state.library.map(book => (
                        <div className="col-md-12 d-flex justify-content-between" style={{padding: "5px"}} key={book.isbn}>
                            <Book isbn={book.isbn} title={book.title} author={book.author} price={book.price} image={book.img} description={book.description} callbackFromParent={this.myCallback}/>
                        </div>
                ))}
            </div>
            </div>
        );
    }

}

export default BookList;
