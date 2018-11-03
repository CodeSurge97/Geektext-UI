import React, { Component } from 'react';
import Book from './book'

class AuthorPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            author_id: this.props.match.params.id,
            author: {},
            books: [],
            img: '',
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
                img: json.author_pic
            })
        });
    }

    render() {
        return (
            <div className="container-fluid" cellPadding="10px">
                <title>Books by {this.state.author.name}</title>
                <h1>{this.state.author.name}</h1>
                <div className="jumbotron" style={{backgroundColor: 'white', padding: '10px',}}>
                    <div className="col-lg-9 col-md-3 col-sm-3 col-xs-12">
                        <img src={"http://localhost:5000/static/" + this.state.img} alt={this.state.img} width="200px" height="225px" className="float-left img-thumbnail"/>
                    </div>
                    <div className="jumbotron" style={{backgroundColor: 'white',}}>
                        <span><b>Author Info:</b> </span>
                        <span>{this.state.author.author_info}</span>
                    </div>
                </div>
                {/* This part is to show the list of books */}
                <h2 className="jumbotron" style={{backgroundColor: 'white'}}> Books by {this.state.author.name}: </h2>
                <div className="row">
                {this.state.books.map(book => (
                    <div className="col-md-12 d-flex justify-content-between" style={{padding: "5px"}} key={book.isbn}>
                        <Book isbn={book.isbn} title={book.title} author={book.author} price={book.price} image={book.img} description={book.description} callbackFromParent={this.myCallback}/>
                    </div>
                ))}
                </div>

            </div>
        );
    }

}

export default AuthorPage;
