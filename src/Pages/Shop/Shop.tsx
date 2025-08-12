import ProductCard from '../../Components/ProductCard/ProductCard';
import Styles from './shop.module.css';
import navLogo from '../../assets/ngrave/ngrave_store_logo.webp'
import Cart from '../../Components/Cart/Cart';
import { useContext } from 'react';
import { ProductsContext } from '../../Components/context';

// NGRAVE SHOP PAGE //
function Shop() {
  const { cartbar } = useContext(ProductsContext) ?? {};

  return (
    <div className={`${Styles.store} text-[#000]`}>
      <Cart/>
      <div className='w-full bg-amber-500 py-3 text-center text-[18px] capitalize'>
        Free Shipping On wallet Orders
      </div>

      <div className='sticky top-0 z-50 bg-white w-full flex justify-center'>
        <header className='py-7 px-[20%] sm:px-[5%] flex bg-red-900 justify-between text-[14px] uppercase font-light text-[grey] max-w-[1400px]'>
          <div className="logo">
            <img src={navLogo} alt="" width='200px'/>
          </div>

          <nav className='flex-1 mr-[50px] lg:mr-[70px]'>
            <ul className='flex gap-[25px] lg:gap-[60px] ml-[70px] whitespace-nowrap'>
              <li>Combo pack</li>
              <li>Hadrware Wallet</li>
              <li>Backup</li>
              <li>Accesories</li>
              <li>Gift Cards</li>
            </ul>
          </nav>

          <div className='flex gap-4'>
            <button className="material-icons">
              search
            </button>

            <button className="material-icons" onClick={() => {if (cartbar?.current) cartbar?.current.style.setProperty("right", "0");}}>
              add_shopping_cart
            </button>
          </div>
        </header>
      </div>

      <section className={`${Styles.products_section} bg-[var(--primary-color)] pb-[70px]`}>
        <h1 className='text-[52px] mb-4'>Shop our products</h1>

        <ProductCard/>
      </section>

      <section className='bg-[#dbdbdb]'>
        <div className='max-w-[1400px]'>
          <h1 className='text-center text-4xl'>Our Promise</h1>

          <div>

          </div>
        </div>
      </section>     
    </div>
  )
}

export default Shop
