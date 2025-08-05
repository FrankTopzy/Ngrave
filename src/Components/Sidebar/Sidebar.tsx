import { useContext } from 'react';
import Styles from './sidebar.module.css';
import { ProductsContext } from '../context';
import { Link } from 'react-router-dom';

function Sidebar() {
  const { sidebar } = useContext(ProductsContext) ?? {};

  return (
    <div className={`${Styles.sidebar} fixed w-[100%] bottom-0 top-0 right-[-200%] bg-[var(--background-color)] z-55`} ref={sidebar}>
      <div className={`${Styles.sidebar_div} h-full text-white`}>
        <div className=''>
          <ul className='text-[20px]'>
            <li>Products</li>
            <li>Resourses</li>
            <li>Support</li>
            <li>Business</li>
            <li className=''>About NGRAVE</li>
          </ul>

          <button className='w-full py-3 border-none rounded-[5px] flex'>
            <Link to='/shop' className='bg-[var(--span-text-color)] w-full py-3 border-none rounded-[5px]'>
              Buy Now
            </Link>
          </button>
        </div>
        
        <button className='absolute top-[20px] right-[20px]' onClick={() => {
          if (sidebar?.current) sidebar?.current.style.setProperty("right", "-200%");
        }}>
          <div className={`${Styles.nav_close}`}></div>
        </button>
      </div>
    </div>
    
  )
}

export default Sidebar
