import React, { Component } from 'react';

class ShoppingCartItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            isbn: null,
            title: "",
        }
    }
    componentDidMount(){

    }

    render() {
        return (
            <div>
            </div>
        );
    }

}

export default ShoppingCartItem;
