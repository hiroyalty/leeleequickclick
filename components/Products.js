import React, { Component } from 'react';
import Product from './Product';

export default function Products(props) {
    let products = null
    // let productDisplay = null
    // if (!productListing) productDisplay = <ActivityIndicator 
    //     animating={true} 
    //     size="large" 
    //     color={Colors.tintColor} 
    //     style={styles.container} />;
    if(props.products) {
        products = props.products.map((product) => {
            <Product
              addVariantToCart={props.addVariantToCart}
              checkout={props.checkout}
              //key={product.id.toString()}
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
