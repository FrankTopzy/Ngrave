import { useContext, useEffect, useState } from 'react';
import { products } from '../../Data/products';
import type { Product } from './types';
import Styles from './productcard.module.css'
import { ProductsContext } from '../context';

function ProductCard() {
  const [items, setItems] = useState<Product[]>([]);

  const { addToCart, cart, cartbar } = useContext(ProductsContext) ?? {};

  useEffect(() => {
    setItems(products); //imported products are now items
  }, [])

  useEffect(() => {
    console.log(cart);
  }, [cart])

  
  return (
    <div className={`${Styles.products_container}`}>
      {
        items.map((item) => {
          return (
            <div key={item.id} className={`${Styles.product_container} uppercase`} style={{animationDelay: `calc(0.1s * ${item.id})`}}>
              <div className='mb-[15px] overflow-hidden'>
                <img src={item.imagePath} alt="" width='500'/>
              </div>

              <div className='text-[14px]'>
                <p className='mb-[15px] hover:underline'>{item.name}</p>
                <p className='mb-[15px]'>{(item.price).toFixed(2)} EUR</p>
              </div>

              <button className={`${Styles.add_btn}`} onClick={() => {
                addToCart && addToCart(item);
                if (cartbar?.current) cartbar?.current.style.setProperty("right", "0");}}>Add To Cart</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductCard