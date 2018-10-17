import React, { Component } from 'react';
import Book from './book';

class BookList extends Component {

    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
            sortByPriceA: false,
            sortByTitle: false,
            sortByPriceD: false,
            sortByAuthor: false,
            sortByRatingD: false,
            sortByRatingA: false,
            library: [],
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
        if(sortBy === 'priceD'){
            console.log("fetching data for dort by price desc");
            fetch('http://localhost:5000/book/by-price-d')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    library: json,
                    sortByPriceA: false,
                    sortByPriceD: true,
                    sortByAuthor: false,
                    sortByRatingD: false,
                    sortByRatingA: false,
                    sortByTitle: false,
                })
            });
        }else if(sortBy === 'priceA'){
            console.log("fetching data for dort by price Asc");
            fetch('http://localhost:5000/book/by-price-a')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    library: json,
                    sortByPriceA: true,
                    sortByPriceD: false,
                    sortByAuthor: false,
                    sortByRatingD: false,
                    sortByRatingA: false,
                    sortByTitle: false,
                })
            });
        }else if(sortBy === 'ratingD'){
            console.log("fetching data for dort by rating Desc");
            fetch('http://localhost:5000/book/by-rating-d')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    library: json,
                    sortByPriceA: false,
                    sortByPriceD: false,
                    sortByAuthor: false,
                    sortByRatingD: true,
                    sortByRatingA: false,
                    sortByTitle: false,
                })
            });
        }else if(sortBy === 'ratingA'){
            console.log("fetching data for dort by rating Asc");
            fetch('http://localhost:5000/book/by-rating-a')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    library: json,
                    sortByPriceA: false,
                    sortByPriceD: false,
                    sortByAuthor: false,
                    sortByRatingD: false,
                    sortByRatingA: true,
                    sortByTitle: false,
                })
            });
        }else if(sortBy === 'title'){
            console.log("fetching data for dort by title");
            fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    library: json,
                    sortByPriceA: false,
                    sortByPriceD: false,
                    sortByAuthor: false,
                    sortByRatingD: false,
                    sortByRatingA: false,
                    sortByTitle: true,
                })
            });
        }
    }

    render() {
        return (
            <div>
                <div className="col">
                <div className="row justify-content-end">

                    <div className="btn-group dropleft">
                        {/* This is for the sorting functionality */}
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort By</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" onClick={() => { this.fetchLibrary('priceD') }}>Price (descending)</a>
                              <a className="dropdown-item" onClick={() => { this.fetchLibrary('priceA') }}>Price (ascending)</a>
                              <a className="dropdown-item" onClick={() => { this.fetchLibrary('ratingD') }}>Rating (descending)</a>
                              <a className="dropdown-item" onClick={() => { this.fetchLibrary('ratingA') }}>Rating (ascending) </a>
                              <a className="dropdown-item" onClick={() => { this.fetchLibrary('Author') }}>Author </a>
                              <a className="dropdown-item" onClick={() => { this.fetchLibrary('title') }}>Title </a>
                        </div>

                    </div>
                </div>
                </div>
                {/* This part is to show the list of books */}
                {this.state.library.map(book => (
                    <div className="container text-center" key={book.isbn}>
                        <Book isbn={book.isbn} title={book.title} author={book.author} price={book.price} image={book.img}/>
                    </div>
                ))}
            </div>
        );
    }

}

export default BookList;
