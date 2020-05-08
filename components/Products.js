import React, { Component } from 'react';
import Product from './Product';

export default function Products(props) {
    let products = ''
    if(props.products) {
        products = props.products.map((product) => {
            <Product
              addVariantToCart={props.addVariantToCart}
              checkout={props.checkout}
              key={product.id.toString()}
              product={product} 
            />
        });
    }

    return (
      <>
        {products}
      </>
    );
}
