import React, { Component } from 'react';
import Book from './book';

class Books extends Component {

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
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.fetchLibrary = this.fetchLibrary.bind(this);

    }
    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
        document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
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
                <div className="dropdown">
                    {/* This is for the sorting functionality */}
                    <button onClick={this.showMenu} className="dropbtn">Sort By</button>
                    {
                      this.state.showMenu
                        ? (
                          <div>
                            <ul>
                                <li><button onClick={() => { this.fetchLibrary('priceD') }}> Sort by price (descending)</button></li>
                                <li><button onClick={() => { this.fetchLibrary('priceA') }}> Sort by price (ascending)</button></li>
                                <li><button onClick={() => { this.fetchLibrary('ratingD') }}> Sort by rating (descending)</button></li>
                                <li><button onClick={() => { this.fetchLibrary('ratingA') }}> Sort by rating (ascending) </button></li>
                                <li><button onClick={() => { this.fetchLibrary('Author') }}> Sort by author </button></li>
                                <li><button onClick={() => { this.fetchLibrary('title') }}> Sort by title </button></li>
                            </ul>
                          </div>
                        )
                        : (
                          null
                        )
                    }
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

export default Books;
