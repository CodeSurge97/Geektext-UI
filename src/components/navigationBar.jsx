import React, { Component } from 'react';
import ShoppingCart from './shoppingCart'

class NavigationBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            isbn: this.props.isbn,
            showCart: false,
        }
        this.hideShoppingCart = this.hideShoppingCart.bind(this);
        this.showShoppingCart = this.showShoppingCart.bind(this);

    }
    showShoppingCart(event){
        this.setState({
            showCart: true,
        }, () => {
          document.addEventListener('click', this.hideShoppingCart);
      });
    }

    hideShoppingCart(event){
        this.setState({
            showCart: false,
        }, () => {
          document.removeEventListener('click', this.hideShoppingCart);
      });
    }

    render() {
        let styles = {
            padding: '10px',
            backgroundColor: 'red'
         };
        return (
            <div>
            <div className="jumbotron" style={styles}>
                <div className="page-header text-center">
                    <h1>GeekText</h1>
                </div>
                <div className="row">
                    <div className="col-lg-1">
                    <div className="btn-group ">
                        {/* This is for the sorting functionality */}
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">menu</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a href="http://localhost:3000/books" className="dropdown-item">Home</a>
                              <a className="dropdown-item">Profile</a>
                        </div>

                    </div>
                    </div>
                    <div className="col-lg-2">
                    <div className="btn-group ">
                        {/* This is for the sorting functionality */}
                        <button onClick={this.showShoppingCart} className="btn btn-secondary" type="button">Shopping Cart</button>
                        <div>
                            {this.state.showCart
                                ?
                                <ShoppingCart isbn={this.props.isbn}/>
                                :
                                null
                            }

                        </div>

                    </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }

}

export default NavigationBar;
