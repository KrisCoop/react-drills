import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Products extends Component{
    constructor(){
        super();

        this.state={
            products=[]
        };
    }

    componentDidMount(){
        axios.get("https://practiceapi.devmountain.com/products")
        .then(response => {
            this.setState({
                products: response.data
            })
        })
    }

        render() {
            let products=this.state.products.map((e, i) =>{
                if (products.image) {
                    return(
                        <Link key={i} to={`/details/${product.id}`}>
                            <img width="200" src={product.image} />>
                        </Link>
                    );
                }
            })
        }
    }
