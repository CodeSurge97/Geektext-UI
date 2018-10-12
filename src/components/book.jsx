import React, { Component } from 'react';

class Book extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            author: this.props.author,
            price: this.props.price,
            img: this.props.image,
            isbn: this.props.isbn
        }
    }

    render() {

        return (
            <div className="jumbotron">
                <h1>{this.state.title}</h1>
                    <div className="container">
                        <img src={"http://localhost:5000" + this.state.img} alt={this.state.img} width="125" height="150" className="float-left img-thumbnail"/>
                        <div>
                            <span>Author: </span>
                            <span>{this.state.author}</span>
                        </div>
                        <div>
                            <span>Price: </span>
                            <span>{this.state.price}</span>
                        </div>
                        <form action={"http://localhost:3000/book/" + this.state.isbn}>
                            <input type="submit" value="More Info" />
                        </form>
                    </div>
            </div>
        );
    }

}

export default Book;
