import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);
  return (
    <section>
      {products.map(product => <Product 
      title={product.title}  
      key={product.id}
      id={product.id}
      colors={product.colors}
      sizes={product.sizes}
      basePrice={product.basePrice}
      name={product.name} />)}
      
    </section>
  );
};

export default Products;