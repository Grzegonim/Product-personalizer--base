import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = props => {
  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };
  
  return (
    <div className={styles.colors}>
    <h3 className={styles.optionLabel}>Colors</h3>
    <ul className={styles.choices}>
      {props.product.colors.map(color => <li key={color}><button type="button" onClick={() => props.setColor(color)} className={clsx(prepareColorClassName(color), (props.currColor === color && styles.active))}></button></li>)}
    </ul>
  </div>

  )
}

export default OptionColor;