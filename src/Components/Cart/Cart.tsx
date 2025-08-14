import Styles from './cart.module.css';
//import item1 from '../../assets/shopItems/COMBO-1.webp'
import delIcon from '../../assets/icons/del_icon.png';
import { useContext, useEffect, useRef } from 'react';
import { ProductsContext, type Cart } from '../context';

// SHOP CART //
function Cart() {
  const { cart, cartbar, setCart, removeFromCart } = useContext(ProductsContext) ?? {};
  const subCartCon = useRef<HTMLDivElement>(null);
  let total = 0;

  // This function helps in increment and decrement of cart counts //
  function countAction(action: string, id: number): Cart[] | void {
    if (!setCart) return;

    setCart(prev => prev.map(item => {
      if (item.id === id) {
        if (action === 'increment') {
          return {...item, count: item.count + 1}
        } else {
          return {...item, count: item.count - 1}
        }
      }

      return item;
    }))
  }

  // Cart Eventhandler //
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      //const parentDiv = (e.target as HTMLElement).closest('div');
      if (cartbar?.current && e.target === subCartCon.current) {
        cartbar.current.style.setProperty('right', "-100%");
      }
    }
    cartbar?.current?.addEventListener('click', handler);

    return () => {
      cartbar?.current?.removeEventListener('click', handler)
    }
  }, []);

  return (
    <div className={`${Styles.cart_container} w-full min-h-[100vh] flex justify-end transition duration-200`} ref={cartbar}>
      <div className='flex-1' ref={subCartCon}></div>

      <div className={`${Styles.cart} bg-white max-w-[400px] flex flex-col text-[var(--background-color)] p-4`}>
        <h2 className='text-2xl'>Your Cart</h2>

        <div className='my-[10px]'>
          <div className='flex justify-between text-[grey] uppercase text-[12px]'>
            <p>Products</p>
            <p>Total</p>
          </div>
        </div>
        <hr className='border-none w-full h-[1px] bg-[#b6b6b6]'/>

        <div className='h-[85%]'>
          {cart?.length === 0 && (<div className='text-center mt-4 text-2xl text-gray-400'>Cart is Empty!</div>) /* Empty cart container */}

          {cart?.map((cartItem) => {
            total += cartItem.price * cartItem.count;

            return (
              <div className='flex gap-[20px] mt-[10px] justify-between' key={cartItem.id}> 
                <div>
                  <img src={cartItem.imagePath} alt="" width='100'/>
                </div>
                <div className='flex flex-col gap-1.5 flex-1'>
                  <p className='uppercase'>{cartItem.name}</p>

                  <p className='text-gray-400'>{cartItem.price.toFixed(2)} EUR</p>

                  <div className=' flex items-center justify-between'>
                    <div className='border-1 border-gray-300 rounded-[6px] py-1 px-2 flex items-center justify-between basis-[80%] text-gray-500'>
                      <button className='text-[1.5rem] hover:text-black' onClick={() => countAction('decrement', cartItem.id)} disabled={cartItem.count >= 1 ? false : true}>-</button>

                      <p className='text-center'>{cartItem.count}</p> 
                      <button className='text-[1.5rem] hover:text-black' onClick={() => countAction('increment', cartItem.id)}>+</button>
                    </div>

                    <button onClick={() => removeFromCart && removeFromCart(cartItem.id)}><img src={delIcon} alt="" /></button>
                  </div>
                </div>

                <p className='text-right'>{(cartItem.price * cartItem.count).toFixed(2)} EUR</p>
              </div>
            )
          })}
        </div>

        <hr className='border-none w-full h-[1px] bg-[#b6b6b6]'/>

        <div className='mt-[10px] mb-3  text-gray-500'>
          <p className='flex justify-between text-black'>Estimated Total: <span className='text-gray-500'>{total.toFixed(2)} EUR</span></p>

          <p className='text-[13px]'>Taxes included. Discounts and shipping calculated at checkout.</p>
        </div>

        <button className='bg-[var(--span-text-color)] border-none rounded-[7px] py-2'>Check Out</button>
      </div>
    </div>
  )
}

export default Cart
