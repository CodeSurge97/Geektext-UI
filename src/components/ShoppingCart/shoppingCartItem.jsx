import React, { Component } from 'react';
import {Grid, Row, Col, Button, ButtonToolbar, Image} from 'react-bootstrap'

class ShoppingCartItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: this.props.count,
            title: this.props.title,
            img: this.props.img,
            url: 'http://localhost:5000/remove-from-cart',
        }
        this.removeItemFromShoppingCart = this.removeItemFromShoppingCart.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
        this.handleChildClick = this.handleChildClick.bind(this);
        this.redirect = this.redirect.bind(this);
    }
    removeItemFromShoppingCart(){
        console.log("sending the cart item to the api");
        fetch((this.state.url), {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            isbn: this.state.isbn,
          })
      });
    }
    renderRedirect(){
        this.props.router.push(this.state.url);
    }
    handleChildClick(e) {
        this.removeItemFromShoppingCart();
     }
    
    redirect(){
        window.location = this.state.bookURL;
    }
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col>
                            <Image height={150} width={100} href="#" src={"http://localhost:5000" + this.state.img} 
                                alt={"171x180"}/>
                        </Col>
                        <Col>
                            {this.state.title}
                            <br></br>
                            <span>{this.state.count}</span>
                            <br></br>
                            <ButtonToolbar >
                                <Button bsStyle="primary" bsSize="xsmall">Update Quantity</Button>
                                <Button bsStyle="primary" bsSize="xsmall">Remove</Button>
                                <div className="d-flex mt-3" style={{zIndex: "1"}}>
                                    <div className="flex-row">
                                        <form onSubmit={this.handleChildClick}>
                                            <span className="float-right"><input type="submit" value="Remove From Cart" /></span>
                                        </form>
                                    </div>
                                </div>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

}

export default ShoppingCartItem;
