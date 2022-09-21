import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import styles from './ProductOptions.module.scss';
import OptionColor from '../OptionColor/OptionColor';

const ProductOptions = props => {
  
  return (
    <form>
      <OptionSize product={props.product} setSize={props.setSize} currSize={props.currSize}/>
      <OptionColor product={props.product} setColor={props.setColor} prepareColor={props.prepareColor} currColor={props.currColor} />
      <Button className={styles.button} onClick={props.cart}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

export default ProductOptions;