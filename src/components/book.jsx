import React, { Component } from 'react';
import ShowMore from 'react-show-more';

class Book extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            author: this.props.author,
            price: this.props.price,
            img: this.props.image,
            isbn: this.props.isbn,
            description: this.props.description,
            url: 'http://localhost:5000/add-to-cart/1',
            margin: "20px",
            fontSize: "14px",
            width: "125",
            height: "150",
        }
        this.addItemToShoppingCart = this.addItemToShoppingCart.bind(this);
    }
    addItemToShoppingCart(){
        this.props.callbackFromParent(this.state.isbn)
        fetch((this.state.url), {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            isbn: this.state.isbn,
          })
        })
    }

    render() {
        let s = {
                margin: this.state.margin,
                border: "#ddd solid 1px",
                background: "#f4f4f4",
                padding: "5px",
                fontSize: this.state.fontSize,
                transition: "all 0.5s",
                }
        return (
                <div className="container-fluid" style={s}
                onMouseEnter={()=>{this.setState({margin: "12px",fontSize: "15px", width: "150px", height: "175px"})}}
                onMouseLeave={()=>{this.setState({margin: "20px",fontSize: "14px", width: "125px", height: "150px"})}} >
                    <article>
                        <div className="container-fluid">
                        <span style={{fontSize: "25px", lineHeight: "30px"}}>
                            {this.state.title}
                        </span>
                        </div>
                        <img src={"http://localhost:5000" + this.state.img} alt={this.state.img} style={s} width={this.state.width} height={this.state.height} className="float-left img-thumbnail"/>
                        <div>
                            <span><b>Author: </b></span>
                            <span>{this.state.author}</span>
                        </div>
                        <div>
                            <span><b>Price: </b></span>
                            <span>{this.state.price}</span>
                        </div>
                        <ShowMore
                            lines={2}
                            more='Show more'
                            less='Show less'
                            anchorClass=''>
                            <span>Description:</span>
                            <span>{this.state.description}</span>
                        </ShowMore>
                        <form action={"http://localhost:3000/book/" + this.state.isbn}>
                            <span class="float-right"><input type="submit" value="More Info" /></span>
                        </form>
                        <form action={this.addItemToShoppingCart}>
                            <span class="float-right"><input type="submit" value="Add to cart" /></span>
                        </form>
                    </article>
                </div>
        );
    }

}

export default Book;
