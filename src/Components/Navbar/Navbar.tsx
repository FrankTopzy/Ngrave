import Styles from './navbar.module.css';
import logoImg from '../../assets/ngrave/ngrave-logo.png';
import menuIcon from '../../assets/icons/menu_icon.png';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context';
import { useContext } from 'react';

// HOME NAVBAR //
function Navbar() {
  const { sidebar } = useContext(ProductsContext) ?? {};

  return (
    <div className='fixed z-50 w-full flex justify-center bg-black'>
      <header className={`${Styles.header}`}>
        <div className={`${Styles.logo}`}>
          <img src={logoImg} alt="" width='40' className='md:w-[40px] w-[30px]'/>
          <Link to={'/'}>NGRAVE</Link>
        </div>

        <nav className="nav">
          <ul className={`${Styles.nav_list}`}>
            <Link to={'/shop'}>Products</Link>
            <Link to={'/shop'}>Resourses</Link>
            <Link to={'/shop'}>Support</Link>
            <Link to={'/shop'}>Business</Link>
            <Link to={'/shop'} className='text-center'>About NGRAVE</Link>
          </ul>
        </nav>

        <div className='flex'>
          <Link to={'/shop'} className={`${Styles.btn}`}>Shop</Link>

          <button className='md:hidden p-1 border-0 rounded-[4px] bg-[#999EAB1A]' onClick={() => {
            if (sidebar?.current) sidebar?.current.style.setProperty("right", "0");
          }}>
            <img src={menuIcon} alt=""/>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
