import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart/shoppingCart'

class NavigationBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            isbn: this.props.isbn,
            showCart: false,
            search_titel: "",
        }
        this.hideShoppingCart = this.hideShoppingCart.bind(this);
        this.showShoppingCart = this.showShoppingCart.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);

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
    onSearchChange(event){
        this.setState({search_titel: event.target.value});

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
                        <a className="nav-link">Team 4</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://geek.localhost.com:3000/shopping-cart">Shopping Cart</a>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Sort By
                        </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" onClick={() => { this.props.updateSorting('priceD')}}>Price (descending)</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => { this.props.updateSorting('priceA') }}>Price (ascending)</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => { this.props.updateSorting('ratingD') }}>Rating (descending)</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => { this.props.updateSorting('ratingA') }}>Rating (ascending) </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => { this.props.updateSorting('author') }}>Author </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" onClick={() => { this.props.updateSorting('title') }}>Title </a>
                      </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.onSearchChange}/>
                    <button className="btn btn-outline-light my-2 my-sm-0" onClick={(event) => {event.preventDefault(); this.props.search(this.state.search_titel)}}type="submit">Search</button>
                </form>
              </div>
            </nav>
        );
    }

}

export default NavigationBar;
