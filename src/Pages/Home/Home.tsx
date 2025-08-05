import Styles from './home.module.css';
import bg1 from '../../assets/ngrave/ngrave-bg6b.webp';
import subBg1 from '../../assets/ngrave/ngrave-sub12.webp';
import subBg2 from '../../assets/ngrave/ngrave-sub13.webp';
import subBg3 from '../../assets/ngrave/ngrave-sub1.webp';
import bunny from '../../assets/ngrave/bunny.svg';
import metamask from '../../assets/ngrave/fox.svg';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

function Home() {
  return (
    <div className='relative'>
      <Navbar/>
      {/*=============================SECTION 1========================================*/}
      <section className={`${Styles.home_section1}`} id='section1'>
        <div className='max-w-[1400px] mx-auto grid'>
          <div className={`${Styles.home_context} w-full`}>
            <h1 className='text-6xl font-bold leading-tight'>The <span className={`${Styles.span_text}`}>Most Secure</span> Wallet Ever Built</h1>

            <div className='flex flex-col gap-3'>
              <p className='text-[var(--grey-text)] text-[1.3rem]'>World's most secure air-gapped wallet with biometrics and EAL7 security, and its recoverable stainless steel backup.</p>

              <div className='text-[1.2rem] font-bold flex gap-2 items-center'>
                <p>Compatible <span className='text-[var(--grey-text)]'>with: </span></p>
                <img src={metamask} alt="" />
                <img src={bunny} alt="" />
              </div>
            </div>

            <div className='flex gap-2.5'>
              <button type='button' className='px-[25px] py-2.5 bg-[var(--span-text-color)] text-[1.3rem] border-none rounded-[10px] text-[var(--background-color)]'>
                Buy Now
              </button>

              <button type='button' className='px-[25px] py-2.5 bg-transparent text-[1.3rem] border-2 border-[var(--grey-text)] rounded-[10px] text-[var(--text-color)]'>
                Learn More
              </button>
            </div>
          </div>

          <div className={`${Styles.banner_div}`}>
            <img src={bg1} alt="" className={`${Styles.home_banner} w-full object-contain`}/>
          </div>
        </div>
      </section>

      {/*======================================== SECTION 2 =============================================*/}
      <section className={`${Styles.section2} pt-[100px]`}>
        <div className='items-center mb-[40px]'>
          <h1 className='text-[56px] font-bold flex flex-col w-full leading-[60px]'>
            <span className='text-[var(--grey-text)] font-light'>Most secure combo</span> 
            for your crypto
          </h1>

          <p className='text-[18px] text-[var(--grey-text)]'>
            Store your crypto with NGRAVE ZERO and never lose it with NGRAVE GRAPHENE. Securing your crypto has never been this easy.
          </p>
        </div>

        <div className={`${Styles.section2_main_img} w-full gap-4 mb-[100px]`}>
          <div className='bg-[var(--text-color)] sm:p-[40px] p-[20px]'>
            <div className='flex-1'>
              <h1 className=''>
                The Coldest Wallet <br/>
                <span className='text-[var(--background-color)]'>NGRAVE ZERO</span>
              </h1>

              <p className=''>
                Protect your Bitcoin, Ethereum, NFTs and other crypto with ease. NGRAVE ZERO is the only financial product that achieved the world’s highest security certification.
              </p>

              <Link to={'/shop'} className='lg:text-[1.2rem]'>
                Discover ZERO 
                <span className="material-icons">arrow_forward_ios</span>
              </Link>
            </div>

            <div>
              <img src={subBg1} alt=""/>
            </div>
          </div>

          <div className='bg-[#131920] sm:p-[40px] p-[20px]'>
            <div className=''>
              <h1>
                The Ultimate Backup <br/>
                <span className='text-[var(--text-color)]'>NGRAVE GRAPHENE</span>
              </h1>

              <p>
                Your backup should be easy to understand for you and an enigma for anyone else. Your keys are safe with the first encrypted and recoverable stainless steel backup.
              </p>

              <Link to={'/shop'}>
                Discover GRAPHENE
                <span className="material-icons">arrow_forward_ios</span>
              </Link>
            </div>

            <div>
              <img src={subBg2} alt="" />
            </div>
          </div>
        </div>

        <div className={`${Styles.section2_bottom} text-[var(--grey-text)] text-[18px] gap-5`}>
          <div>
            <div>01</div>

            <p>
              <span>Store your crypto. </span>
              Set up NGRAVE ZERO to generate your wallet and to store your crypto safely.
            </p>

            <Link to='/shop'>
              Discover ZERO
              <span className="material-icons">arrow_forward_ios</span>
            </Link>
          </div>

          <div>
            <div>02</div>

            <p>
              <span>Back up your key. </span>
              Safeguard your key by engraving it on NGRAVE GRAPHENE.
            </p>

            <Link to='/shop'>
              Discover GRAPHENE
              <span className="material-icons">arrow_forward_ios</span>
            </Link>
          </div>

          <div>
            <div>03</div>

            <p>
              <span>Transact easily. </span>
              Securely receive and send crypto via QR codes.
            </p>

            <Link to='/shop'>
              Discover our Mobile App
              <span className="material-icons">arrow_forward_ios</span>
            </Link>
          </div>
        </div>
      </section>

      {/*======================================== SECTION 3 =============================================*/}
      <section className={`${Styles.section3} pt-[160px]`}>
        <div className='items-center mb-[40px]'>
          <h1 className='text-[56px] font-bold flex flex-col w-full leading-[60px]'>
            <span className='text-[var(--grey-text)] font-light'>Handle your crypto</span> 
            with ease
          </h1>

          <p className='text-[18px] text-[var(--grey-text)]'>
            Self-custody should not be complex. Enjoy a smooth experience and maximum security with our fully custom hardware and OS.
          </p>
        </div>
        
        <div className={`${Styles.discover_link} bg-[#0f1113] border-0 rounded-2xl h-[700px] relative overflow-hidden`}>
          <div className='pl-[111px] basis-[40%]'>
            <h1 className='text-5xl font-bold mb-5'>Tap and swipe. Just like a phone.</h1>
            <p>With a 4” ultra-clear touch screen, your crypto is at your fingertips. If you can use a phone, you can use NGRAVE ZERO.</p>
          </div>

          <div className='basis-[60%]'>
            <img src={subBg3} alt="" className='object-contain w-full'/>
          </div>

          <p className={`absolute bottom-2 right-2 flex justify-between items-center text-[var(--link-color)] border-none rounded-[40px] overflow-hidden`}>
            <span className=' py-1 pl-3'>Discover ZERO</span>
            <span className="material-icons bg-[var(--text-color)] border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
          </p>
        </div>
      </section>

      <a href='#section1' className='fixed right-[50px] bottom-[50px] bg-[var(--link-color)]'>
        up
      </a>
    </div>
  )
}

export default Home
