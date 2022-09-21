import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };
  const addToCart = e => {
    e.preventDefault();
    const cart = {
      Name: props.title,
      Price: props.basePrice,
      Size: currentSize,
      Color: currentColor
    }
    console.log(cart)
  };
  return (
    <article className={styles.product}>
      <ProductImage product={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{props.basePrice + currentSize.additionalPrice}$</span>
        </header>
        <ProductOptions cart={addToCart} currentColor={currentColor} currentSize={currentSize} product={props} setColor={setCurrentColor} prepareColor={prepareColorClassName} setSize={setCurrentSize} currColor={currentColor} currSize={currentSize} />
      </div>
    </article>
  )
};

export default Product;