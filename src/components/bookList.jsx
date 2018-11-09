import React, { Component } from 'react';
import Book from './book';
import Pagination from "react-js-pagination";

class BookList extends Component {

    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
            library: [],
            sortBy: this.props.sortBy,
            itemsPerPage: 5,
            activePage: 1,
            totalCount: 10,

        }
        this.fetchLibrary = this.fetchLibrary.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);

    }
    componentDidMount(){
        fetch('http://localhost:5000/books/' + this.state.activePage + '/' + this.state.itemsPerPage,
        {credentials: 'include'})
        .then(res => res.json())
        .then(json => {
            this.setState({
                library: json.books,
                totalCount: json.totalNum,
            })
            console.log(json.totalNum)
        });
    }

    fetchLibrary(sortBy, pageNumber){
        console.log("fetching data by" + sortBy)
        let url = 'http://localhost:5000/books/' + pageNumber + '/' + this.state.itemsPerPage;
        if(this.props.searchTitle == ""){
            console.log("the search title is ''");
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
        }else{
            console.log("this is from bookList and the book we are searching for is " + this.props.searchTitle)
            url = 'http://localhost:5000/book/' + this.props.searchTitle;
        }
        fetch(url, {credentials: 'include'}).then(res => res.json())
        .then(json => {
            this.setState({
                library: json.books,
            })
        });
    }

    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.sortBy !== prevProps.sortBy || this.props.searchTitle != prevProps.searchTitle) {
        this.fetchLibrary(this.props.sortBy, this.state.activePage);
      }
    }

    handlePageChange(pageNumber){
        console.log(pageNumber);
        this.setState({ activePage: pageNumber});
        this.fetchLibrary("", pageNumber);
    }

    render() {
        return (
            <div>
                <div className="row">
                    {/* This part is to show the list of books */}
                    {this.state.library.map(book => (
                            <div className="col-md-6 d-flex justify-content-between" style={{padding: "5px"}} key={book.isbn}>
                                <Book isbn={book.isbn} title={book.title} author={book.author} price={book.price} image={book.img} description={book.description} callbackFromParent={this.myCallback}/>
                            </div>
                    ))}
                </div>
                <div>
                <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={this.state.itemsPerPage}
                  totalItemsCount={this.state.totalCount}
                  pageRangeDisplayed={5}
                  onChange={(n) => {this.handlePageChange(n)} }
                />
                </div>
            </div>
        );
    }

}

export default BookList;
