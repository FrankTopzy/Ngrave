import Styles from './navbar.module.css';
import logoImg from '../../assets/ngrave/ngrave-logo.png';
import menuIcon from '../../assets/icons/menu_icon.png';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context';
import { useContext } from 'react';

function Navbar() {
  const { setSidebar } = useContext(ProductsContext) ?? {};

  return (
    <div className='fixed z-50 w-full flex justify-center'>
      <div className='w-full absolute bg-[var(--background-color)] h-full'></div>
      <header className={`${Styles.header}`}>
        <div className={`${Styles.logo}`}>
          <img src={logoImg} alt="" width='40'/>
          <Link to={'/'}>NGRAVE</Link>
        </div>

        <nav className="nav">
          <ul className={`${Styles.nav_list}`}>
            <li>Products</li>
            <li>Resourses</li>
            <li>Support</li>
            <li>Business</li>
            <li className='text-center'>About NGRAVE</li>
          </ul>
        </nav>

        <div className='flex'>
          <Link to={'/shop'} className={`${Styles.btn}`}>Shop</Link>

          <button className='md:hidden p-1 border-0 rounded-[4px] bg-[#999EAB1A]' onClick={() => {
            setSidebar && setSidebar(true)
          }}>
            <img src={menuIcon} alt=""/>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
