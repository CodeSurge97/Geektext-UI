import React, { Component } from 'react';

class ShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            items: [],
        }
    }
    componentDidMount(){
        console.log("mounting the shopping cart");
    }

    render() {
        return (
            <div className="container">
                {console.log(this.props.isbn)}
                <a>{this.props.isbn}</a>
            </div>
        );
    }

}

export default ShoppingCart;
