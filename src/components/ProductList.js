import React, { Component } from 'react'
import Title from './Title';

import {ProductConsumer} from '../context';
import Products from './Products';


 class ProductList extends Component {
   
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                <div className="conatiner">
                    <Title name="Our" title="Products"/>
                    <div className="row">
                        <ProductConsumer>
                            {(value)=>{
                                return value.products.map(product =>{
                                    return <Products key={product.id} product={product} />;
                                })

                            }}
                        </ProductConsumer>


                </div>
                </div>
                
            </div>
            </React.Fragment>
        );
    }
}

 

export default ProductList;