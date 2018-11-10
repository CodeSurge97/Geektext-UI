import React, { Component } from 'react';

class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            items: [],
            url: 'http://localhost:5000/get-cart',
        }
    }
    componentDidMount(){
        console.log("mounting the shopping cart");
        fetch(this.state.url, {credentials: 'include'})
        .then(res => res.json())
        .then(json => {
            this.setState({
                items: json,
            })
            console.log(json)
        });
    }

    render() {
        return (
            <div className="container">
            {this.state.items.map(item => (
                    <div key={item.book}> {item.book} {item.count} </div>
            ))}
            </div>
        );
    }

}

export default ShoppingCart;
