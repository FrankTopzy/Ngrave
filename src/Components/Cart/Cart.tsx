import Styles from './cart.module.css';
//import item1 from '../../assets/shopItems/COMBO-1.webp'
import delIcon from '../../assets/icons/del_icon.png'
import { useContext } from 'react';
import { ProductsContext } from '../context';

function Cart() {
  const { cart, cartbar, setCart } = useContext(ProductsContext) ?? {};

  function countAction(action: string) {
    if (!setCart) return;

    setCart(prev => prev.map(item => {
        if (action === 'increment') {
        return {...item, count: item.count + 1}
        } else {
          return {...item, count: item.count - 1}
        }
        return item
    }))
  }

  return (
    <div className={`${Styles.cart_container} w-full min-h-[100vh] flex justify-end`} ref={cartbar}>
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
          {cart?.map((cartItem) => {

            return (
              <div className='flex gap-[20px] mt-[10px] justify-between' key={cartItem.id}>
                <div>
                  <img src={cartItem.imagePath} alt="" width='100'/>
                </div>
                <div className='flex flex-col gap-1.5'>
                  <p>{cartItem.name}</p>

                  <p className='text-gray-400'>{cartItem.price.toFixed(2)} EUR</p>

                  <div className=' flex items-center justify-between'>
                    <div className='border-1 border-gray-300 rounded-[6px] py-1 px-2 flex items-center justify-between basis-[80%] text-gray-500'>
                      <button className='text-[1.5rem] hover:text-black' onClick={() => countAction('decrement')} disabled={cartItem.count >= 1 ? false : true}>-</button>

                      <p className='text-center'>{cartItem.count}</p> 
                      <button className='text-[1.5rem] hover:text-black' onClick={() => countAction('increment')}>+</button>
                    </div>

                    <button><img src={delIcon} alt="" /></button>
                  </div>
                </div>

                <p className='text-right'>{cartItem.price * cartItem.count} EUR</p>
              </div>
            )
          })}
        </div>

        <hr className='border-none w-full h-[1px] bg-[#b6b6b6]'/>

        <div className='mt-[10px] mb-3  text-gray-500'>
          <p className='flex justify-between text-black'>Estimated Total: <span className='text-gray-500'>4000 EUR</span></p>

          <p className='text-[13px]'>Taxes included. Discounts and shipping calculated at checkout.</p>
        </div>

        <button className='bg-[var(--span-text-color)] border-none rounded-[7px] py-2'>Check Out</button>
      </div>
    </div>
  )
}

export default Cart
