import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'

class ShoppingCartItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: this.props.count,
            title: this.props.title,
            img: this.props.img
        }
    }
    
    render() {
        return (
            <Grid className="fluid">
                <Row className="show-grid">
                    <Col><img src={"http://localhost:5000" + this.state.img} alt={this.state.img} 
                            width={100} height={200} className="img-thumbnail float-left"/></Col>
                    <Col xs={6} md={6} lg={6}>
                        <span>{this.state.title}</span>
                        <Button color="primary" >x Remove</Button>
                    </Col>

                    <Col><span>{this.state.count}</span></Col>
                </Row>
            </Grid>
            
        )
    }

}

export default ShoppingCartItem;
