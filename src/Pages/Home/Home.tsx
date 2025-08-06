import Styles from './home.module.css';
import bg1 from '../../assets/ngrave/ngrave-bg6b.webp';
import ngravelogo from '../../assets/ngrave/logo2.webp';
import ledgerlogo from '../../assets/ngrave/ledger-logo.webp';
import trezorlogo from '../../assets/ngrave/trezor-logo.webp'
import subBg1 from '../../assets/ngrave/ngrave-sub12.webp';
import subBg2 from '../../assets/ngrave/ngrave-sub13.webp';
import subBg3 from '../../assets/ngrave/ngrave-sub1.webp';
import bunny from '../../assets/ngrave/bunny.svg';
import metamask from '../../assets/ngrave/fox.svg';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';

// HOME PAGE / LANDING PAGE //
function Home() {
  return (
    <div className='relative'>
      <Navbar/>
      <Sidebar/>
      {/*=============================SECTION 1========================================*/}
      <section className={`${Styles.home_section1}`} id='section1'>
        <div className='max-w-[1400px] mx-auto grid'>
          <div className={`${Styles.home_context} ${Styles.slide_in} w-full`}>
            <h1 className='text-6xl font-bold leading-tight'>The <span className={`${Styles.span_text}`}>Most Secure</span> Wallet Ever Built</h1>

            <div className={`flex flex-col gap-3`}>
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
      <section className={`${Styles.section2} ${Styles.slide_in_top} pt-[100px]`}>
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

        <iframe width="560" height="315" src="https://www.youtube.com/embed/14HIIUjOLGY?si=o9m4fNzwn2S_ng2t" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
        
        className='w-full h-[1000px] border-none rounded-3xl mb-[70px] outline-none'></iframe>

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
      <section className={`${Styles.section3} ${Styles.slide_in_top} pt-[160px] pb-[40px]`}>
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

      {/*======================================== SECTION 4 =============================================*/}
      <section className={`${Styles.section4} bg-[var(--primary-color)] py-[60px] text-black`}>
        <p className='text-gray-500'>The Coldest Wallet</p>
        <p className='font-bold text-black'>That Goes Further</p>

        <div className={`${Styles.section4_table} flex justify-center my-[40px]`}>
          <table>
            <thead>
              <tr>
                <td></td>
                <td className='border-t-1 border-[#00CC99] border-dashed rounded-tl-2xl rounded-tr-2xl'>
                  <div>
                    <img src={ngravelogo} alt="" />
                    <p className='text-center mt-[30px] uppercase'>Zero</p>
                  </div>
                </td>

                <td>
                  <div>
                    <img src={ledgerlogo} alt="" />
                    <p className='text-center mt-[30px] uppercase'>Flex</p>
                  </div>
                </td>

                <td>
                  <div>
                    <img src={trezorlogo} alt="" />
                    <p className='text-center mt-[20px] uppercase'>Safe5</p>
                  </div>
                </td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>EAL Level</td>
                <td>EAL7 - Highest Certification Level</td>
                <td>EAL6+</td>
                <td>EAL6+</td>
              </tr>

              <tr>
                <td>Offline Capability</td>
                <td>Fully air-gapped (no USB, Bluetooth or Wi-Fi)</td>
                <td>Requires USB/Bluetooth. Not air-gapped</td>
                <td>Requires USB/Bluetooth. Not air-gapped</td>
              </tr>

              <tr>
                <td>Backup Method</td>
                <td>GRAPHENE steel plate + Perfect Key recovery</td>
                <td>24-word seed + optional steel backup</td>
                <td>24-word seed, microSD (Safe 5), SLIP39 optional</td>
              </tr>

              <tr>
                <td>Coin Support</td>
                <td className='border-b-1 border-[#00CC99] border-dashed rounded-b-2xl'>5 blockchains and ALL ERC-20 and ESDT Tokens</td>
                <td>5,500+ coins</td>
                <td>9000+ coins and tokens supported</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <a href='#section1' className='fixed right-[50px] bottom-[50px]  bg-[var(--link-color)]'>
        up
      </a>
    </div>
  )
}

export default Home
