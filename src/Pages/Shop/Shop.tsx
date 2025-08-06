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

      <div className='sticky top-0 z-50'>
        <header className='bg-white w-full py-7 px-[20%] sm:px-[5%] sm:block sm:flex hidden text-[14px] uppercase font-light text-[grey]'>
          <div className="logo">
            <img src={navLogo} alt="" width='200px'/>
          </div>

          <nav className='flex-1'>
            <ul className='flex gap-[60px] ml-[70px]'>
              <li>Combo pack</li>
              <li>Hadrware Wallet</li>
              <li>Backup</li>
              <li>Accesories</li>
              <li>Gift Cards</li>
            </ul>
          </nav>

          <div>
            <span>search</span>
            <span>cart</span>
          </div>
        </header>
      </div>

      <section className={`${Styles.products_section} bg-[var(--primary-color)]`}>
        <h1 className='text-[52px] mb-4'>Shop our products</h1>

        <ProductCard/>
      </section>

      <section className='bg-red-400'>
        <h1>Our Promise</h1>
      </section>     
    </div>
  )
}

export default Shop
