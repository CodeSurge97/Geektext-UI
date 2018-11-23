import React, { Component } from 'react';

class ShoppingCartItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: this.props.count,
            title: this.props.title,
        }
    }

    render() {
        return (
            <div>
            <span>{this.state.title}</span>
            <span>{this.state.count}</span>
            </div>
        );
    }

}

export default ShoppingCartItem;
