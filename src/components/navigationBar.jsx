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
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">GeekText</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="http://localhost:3000/books">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By
                        </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" onClick={() => { this.props.callbackFromParent('priceD')}}>Price (descending)</a>
                        <div class="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => { this.props.callbackFromParent('priceA') }}>Price (ascending)</a>
                        <div class="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => { this.props.callbackFromParent('ratingD') }}>Rating (descending)</a>
                        <div class="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => { this.props.callbackFromParent('ratingA') }}>Rating (ascending) </a>
                        <div class="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => { this.props.callbackFromParent('author') }}>Author </a>
                        <div class="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => { this.props.callbackFromParent('title') }}>Title </a>
                      </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </nav>
        );
        {/*
        return (
            <div>
            <div className="jumbotron" style={styles}>
                <div className="page-header text-center">
                    <h1>GeekText</h1>
                </div>
                <div className="row">
                    <div className="col-lg-1">
                    <div className="btn-group ">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">menu</button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a href="http://localhost:3000/books" className="dropdown-item">Home</a>
                              <a className="dropdown-item">Profile</a>
                        </div>

                    </div>
                    </div>
                    <div className="col-lg-2">
                    <div className="btn-group ">
                        <button onClick={this.showShoppingCart} className="btn btn-secondary" type="button">Shopping Cart</button>
                        <div>
                            {this.state.showCart
                                ?
                                <ShoppingCart/>
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
        */}
    }

}

export default NavigationBar;
