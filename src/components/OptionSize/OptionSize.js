import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = props => {
  
  return (
    <div className={styles.colors}>
    <h3 className={styles.optionLabel}>Colors</h3>
    <ul className={styles.choices}>
      {props.product.sizes.map(size => <li key={size.name}><button type="button" onClick={() => props.setSize(size)} className={clsx(size === props.currSize && styles.active)}>{size.name}</button></li>)}
    </ul>
  </div>
  )
}

export default OptionSize;