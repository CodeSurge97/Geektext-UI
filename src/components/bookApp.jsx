import React, { Component } from 'react';
import Comment from './comment'
import AddComment from "./addComment"
import PropTypes from 'prop-types';
import ShowMore from 'react-show-more';

class BookApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            isbn: this.props.match.params.isbn,
            book: {},
            comments: [],
            width: 225,
            height: 250,
            url: 'http://localhost:5000/add-to-cart/1',
        }
        this.enlarge = this.enlarge.bind(this);
        this.minimize = this.minimize.bind(this);
        this.addItemToShoppingCart = this.addItemToShoppingCart.bind(this);
    }

    componentDidMount(){
        const url = 'http://localhost:5000/book/' + this.state.isbn
        fetch(url)
        .then(res => res.json())
        .then(json => {
            this.setState({
                book: json,
                comments: json.comments,
                author_id: json.author_id,
            })
        });
    }

    enlarge(event){

        this.setState({
            width: 225 * 2,
            height: 250 * 2,
        }, () => {
            document.addEventListener('click', this.minimize);
        });
    }

    minimize(){
        console.log(this.state.width)
        console.log(((this.state.width) / 2.0))

        this.setState({
            width: 225,
            height: 250,
        }, () => {
          document.removeEventListener('click', this.minimize);
        });
    }

    addItemToShoppingCart(){
        this.props.callbackFromParent(this.state.isbn)
        fetch((this.state.url), {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            isbn: this.state.isbn,

          })
        })


    }

    render() {

        let styles = {
            padding: '5px',
            backgroundColor: 'white',
        }
        return (
            <div>
            <h1>{this.state.book.title}</h1>
                <div className="row">
                    <div className="container" style={styles}>
                        <div className="col-lg-9 col-md-3 col-sm-3 col-xs-12">
                            <img onClick={() => {this.enlarge()}} src={"http://localhost:5000" + this.state.book.img} alt={this.state.book.img} width={this.state.width} height={this.state.height} className="float-left img-thumbnail"/>
                        </div>
                        <div className="row justify-content-end jumbotron" style={styles}>
                            <div className="btn">
                                <a onClick={this.addItemToShoppingCart}>Add to cart</a>
                            </div>
                            <div className="container" style={styles}>
                                <span style={{fontSize: 20}}>Author: </span>
                                <a href={"http://localhost:3000/author/" + this.state.author_id}>{this.state.book.author}</a>
                            </div>
                            <div className="container" style={styles}>
                                <span style={{fontSize: 20}}>Price: </span>
                                <span>{this.state.book.price}</span>
                            </div>
                            <div className="container" style={styles}>
                                <span style={{fontSize: 20}}>Average Rating: </span>
                                <span>{this.state.book.rating}</span>
                            </div>
                            <div className="container" style={styles}>
                                <span style={{fontSize: 20}}>Genre: </span>
                                <span>{this.state.book.genre}</span>
                            </div>
                            <div className="container" style={styles}>
                            <div style={{fontSize: 20}}> About the author:</div>
                            <ShowMore
                                lines={2}
                                more='Show more'
                                less='Show less'
                                anchorClass=''>
                                <span>{this.state.book.author_info}</span>
                            </ShowMore>
                            <span style={{fontSize: 20}}>Description: </span>
                            <ShowMore
                                lines={2}
                                more='Show more'
                                less='Show less'
                                anchorClass=''>
                                <span>{this.state.book.description}</span>
                            </ShowMore>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <h3 className="jumbotron" style={styles}>Comments: </h3>
                        {/*maybe create a comments component and inside of that a comment component like in books*/}
                        {this.state.comments.map(comment => (
                            <div className="jumbotron" style={styles} key={comment.id}>
                                <Comment contents={comment.contents} rating={comment.rating} user_id={comment.user_id} date={comment.date} username={comment.username}/>
                            </div>
                        ))}
                        <div className="jumbotron" style={styles}>
                            <AddComment isbn={this.state.isbn}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default BookApp;
