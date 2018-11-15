import React, { Component } from 'react';
import ShoppingCartItem from './shoppingCartItem'

class ShoppingCartApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: '',
            items: [],
            url: "http://localhost:5000/get-cart",
            img: this.props.img
        }
        this.fetch_cart = this.fetch_cart.bind(this);
    }

    fetch_cart(){
        fetch(this.state.url, {credentials: 'include'})
        .then(res => res.json())
        .then(json => {
            this.setState({
                user: json.user_name,
                items: json.items,
                img: json.img
            })
        });
    }
    componentDidMount(){
        const url = 'http://localhost:5000/book/' + this.state.isbn
        this.fetch_cart();
    }
    render() {
        return (
            <div>
            <h1>Shopping Cart for the user: {this.state.user}</h1>
            {this.state.items.map((item) =>
                (<div className="col-md-12 d-flex justify-content-between" style={{padding: "5px"}}>
                    
                    <ShoppingCartItem img={item.img} count={item.count} title={item.book}/>
                </div>)
            )}
            </div>
        );
    }

}

export default ShoppingCartApp;
