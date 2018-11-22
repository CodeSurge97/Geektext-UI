import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import ShoppingCart from './shoppingCart'
import Cookies from 'js-cookie';

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

    renderLogout() {
        if (Cookies.get('loggedin') === "true") {
            return (
                <Link to="/logout">
                  <button class="btn btn-secondary" type="button">
                     <a>Logout</a>
                  </button>
                </Link>
            );
        }
    }

    render() {

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="/books" style={{color: "white", fontSize: "30px"}}>GeekText</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link">Link</a>
                  </li>
                    <li className="nav-item">
                      <a className="nav-link disabled">Disabled</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Shopping Cart
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <ShoppingCart/>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" >Something else here</a>
                      </div>
                    </li>
                   
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By
                        </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" onClick={() => { this.props.callbackFromParent('priceD')}}>Price (descending)</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => { this.props.callbackFromParent('priceA') }}>Price (ascending)</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => { this.props.callbackFromParent('ratingD') }}>Rating (descending)</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => { this.props.callbackFromParent('ratingA') }}>Rating (ascending) </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => { this.props.callbackFromParent('author') }}>Author </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => { this.props.callbackFromParent('title') }}>Title </a>
                      </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <a>"  "</a>
                {this.renderLogout()}
              </div>
            </nav>
        );
    }

}

export default NavigationBar;
