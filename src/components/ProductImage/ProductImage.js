import styles from './ProductImage.module.scss';

const ProductImage = props => {
  return (
    <div className={styles.imageContainer}>
      <img 
        className={styles.image}
        alt="Kodilla shirt"
        src={process.env.PUBLIC_URL + '/images/products/shirt-' + props.product + '--'+ props.color +'.jpg'} />      
    </div>
  )
}

export default ProductImage;

