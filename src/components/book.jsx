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
            <div className="row justify-content-center">
            <div className="jumbotron col-lg-9 col-md-3 col-sm-3 col-xs-12" >
                    <div className="container text-center">
                    <img src={"http://localhost:5000" + this.state.img} alt={this.state.img} width="125" height="150" className="float-left img-thumbnail"/>
                    <h3>{this.state.title}</h3>
                        <div>
                            <span><b>Author: </b></span>
                            <span>{this.state.author}</span>
                        </div>
                        <div>
                            <span><b>Price: </b></span>
                            <span>{this.state.price}</span>
                        </div>
                        <form action={"http://localhost:3000/book/" + this.state.isbn}>
                            <input className="btn btn-default" type="submit" value="More Info" />
                        </form>
                    </div>
            </div>
            </div>
        );
    }

}

export default Book;
