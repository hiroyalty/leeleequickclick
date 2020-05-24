import React, {Component, useEffect} from 'react';
//import VariantSelector from './VariantSelector';
import { Avatar, Title, Button, Caption, Paragraph, Text, TouchableOpacity, Switch, Card } from 'react-native-paper';

export default function Product(props) {

    // let variantImage = this.state.selectedVariantImage || this.props.product.images[0].src
    // let variant = this.state.selectedVariant || this.props.product.variants[0]
    // let variantQuantity = this.state.selectedVariantQuantity || 1
    // let variantImage = props.product.images[0].src
    // let variant = props.product.variants[0]
    // let variantQuantity = 1

    return (
        // <Card>
        //     <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        //     <Card.Content>
        //     <Title>{props.product.title}</Title>
        //     <Paragraph>Card content</Paragraph>
        //     </Card.Content>
        //     {props.product.images.length ? <img src={variantImage} alt={`${props.product.title} product shot`}/> : null}
        //     <Card.Cover source={{ uri: variantImage }} />
        //     <Card.Actions>
        //     <Button>${variant.price}</Button>
        //     <Button onClick={() => props.addVariantToCart(variant.id, variantQuantity)}>Add to Cart</Button>
        //     </Card.Actions>
        // </Card>
        <Card>
            <Card.Title title={props.title} subtitle={props.title} />
            <Card.Content>
            <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: props.image }} />
            <Card.Actions>
            <Button>$5</Button>
            <Button onClick={() => {}}>Add to Cart</Button>
            </Card.Actions>
        </Card>
      );
    
}
// class Product extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {};

//     this.handleOptionChange = this.handleOptionChange.bind(this);
//     this.handleQuantityChange = this.handleQuantityChange.bind(this);
//     this.findImage = this.findImage.bind(this);
//   }

//   componentWillMount() {
//     this.props.product.options.forEach((selector) => {
//       this.setState({
//         selectedOptions: { [selector.name]: selector.values[0].value }
//       });
//     });
//   }

//   findImage(images, variantId) {
//     const primary = images[0];

//     const image = images.filter(function (image) {
//       return image.variant_ids.includes(variantId);
//     })[0];

//     return (image || primary).src;
//   }

//   handleOptionChange(event) {
//     const target = event.target
//     let selectedOptions = this.state.selectedOptions;
//     selectedOptions[target.name] = target.value;

//     const selectedVariant = this.props.product.variants.find((variant) => {
//       return variant.selectedOptions.every((selectedOption) => {
//         return selectedOptions[selectedOption.name] === selectedOption.value.valueOf();
//       });
//     });

//     this.setState({
//       selectedVariant: selectedVariant,
//       selectedVariantImage: selectedVariant.attrs.image.src
//     });
//   }

//   handleQuantityChange(event) {
//     this.setState({
//       selectedVariantQuantity: event.target.value
//     });
//   }

//   render() {
//     let variantImage = this.state.selectedVariantImage || this.props.product.images[0].src
//     let variant = this.state.selectedVariant || this.props.product.variants[0]
//     let variantQuantity = this.state.selectedVariantQuantity || 1
//     // let variantSelectors = this.props.product.options.map((option) => {
//     //   return (
//     //     <VariantSelector
//     //       handleOptionChange={this.handleOptionChange}
//     //       key={option.id.toString()}
//     //       option={option}
//     //     />
//     //   );
//     // });
//     return (
//       <div className="Product">
//         {this.props.product.images.length ? <img src={variantImage} alt={`${this.props.product.title} product shot`}/> : null}
//         <h5 className="Product__title">{this.props.product.title}</h5>
//         <span className="Product__price">${variant.price}</span>
//         {/* {variantSelectors} */}
//         <label className="Product__option">
//           Quantity
//           <input min="1" type="number" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
//         </label>
//         <button className="Product__buy button" onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}>Add to Cart</button>
//       </div>
//     );
//   }
// }

//export default Product;
