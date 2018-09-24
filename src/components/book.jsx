import React, { Component } from 'react';

class Book extends Component {

    constructor(){
        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(json => {
            this.setState({
                data: json,
            })
        });
    }

    render() {
        const style = {
            backgroundColor : 'orange'
        }
        return (
            <div class="container">
                <ul className='list-group'>
                    {this.state.data.map(book => (
                        <li style={style} className='list-group-item d-flex justify-content-between align-items-center m-2'>
                            <div class="container">
                                <h1>{book.title}</h1>
                                <img src={"http://localhost:5000" + book.img} width="125" height="150" className="float-left img-thumbnail"/>
                                    <div>
                                        <dl>
                                            <dt>Author</dt>
                                            <dd>{book.author}</dd>
                                            <dt>Price</dt>
                                            <dd>{book.price}</dd>
                                        </dl>
                                        <button>More Info</button>
                                    </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}

export default Book;
