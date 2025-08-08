import Styles from './home.module.css';
import bg1 from '../../assets/ngrave/ngrave-bg6b.webp';
import cryptoAnim1 from '../../assets/ngrave/crypto/test-cryptosupport-may-3.svg';
import cryptoAnim2 from '../../assets/ngrave/crypto/test-cryptosupport-may-4.svg';
import ngravelogo from '../../assets/ngrave/logo2.webp';
import ledgerlogo from '../../assets/ngrave/ledger-logo.webp';
import trezorlogo from '../../assets/ngrave/trezor-logo.webp'
import subBg1 from '../../assets/ngrave/ngrave-sub12.webp';
import subBg2 from '../../assets/ngrave/ngrave-sub17.webp';
import subBg3 from '../../assets/ngrave/ngrave-sub1.webp';
import subBg4 from '../../assets/ngrave/ngrave-sub2.webp';
import subBg5 from '../../assets/ngrave/ngrave-sub15.webp';
import subBg6 from '../../assets/ngrave/ngrave-sub16.webp';
import subBg7 from '../../assets/ngrave/ngrave-sub3.webp';
import subBg8 from '../../assets/ngrave/ngrave-sub18.webp';
import subBg9 from '../../assets/ngrave/ngrave-sub17.webp';
import subBg10 from '../../assets/ngrave/ngrave-sub20.webp';
import subBg11 from '../../assets/ngrave/ngrave-sub13.webp';
import subBg12 from '../../assets/ngrave/ngrave-sub19.webp';
import subBg13 from '../../assets/ngrave/ngrave-sub21.webp';
import quoteImg1 from '../../assets/quotes/quote-1.png';
import bunny from '../../assets/ngrave/bunny.svg';
import metamask from '../../assets/ngrave/fox.svg';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useEffect, useRef } from 'react';

// HOME PAGE / LANDING PAGE //
function Home() {
  const gridContainer = useRef<HTMLDivElement>(null);

  /*const gridRect: DOMRect | undefined = gridContainer.current?.getBoundingClientRect();
  //console.log(gridRect?.left);

  useEffect(() => {
    if (gridContainer.current) {
      const bodyRect = document.body.getBoundingClientRect();
      const containerRect = gridContainer.current.getBoundingClientRect();
      const distanceToBodyLeft = containerRect.left - bodyRect.left;
      console.log(distanceToBodyLeft);
    }
  }, [gridContainer.current?.offsetLeft]); */

   

  //scroll by dragging
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  gridContainer?.current?.addEventListener('mousedown', (e) => {
    isDown = true;

    if (gridContainer.current) {
      //console.log(e.pageX);
      
      startX = e.pageX - gridContainer.current.offsetLeft;
      //console.log(startX);
      
      scrollLeft = gridContainer.current.scrollLeft;
      gridContainer.current.style.cursor = 'grabbing';
    }
  });

  gridContainer?.current?.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    
    e.preventDefault();

    if (gridContainer.current) {
      const x: number = e.pageX - gridContainer.current.offsetLeft;
      const walk = (x - startX) * 100;
      gridContainer.current.scrollLeft = scrollLeft - walk;
    }
  });

  gridContainer?.current?.addEventListener('mousemove', () => {
    isDown = false;

    if (gridContainer.current) {
      gridContainer.current.style.cursor = 'grab';
    }
  });

  gridContainer?.current?.addEventListener('mouseleave', () => {
    isDown = false;

    if (gridContainer.current) gridContainer.current.style.cursor = 'grab';
  }); // end of scroll by dragging.

  //scroll by clicking

  function slideLeft(action: string): void {
    if(gridContainer.current && action === "slideLeft") {
      gridContainer.current.scrollLeft -= 400;
    } else if (gridContainer.current && action === "slideRight") {
      gridContainer.current.scrollLeft += 400;
    }
  }


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

        <iframe width="560" height="800" src="https://www.youtube.com/embed/14HIIUjOLGY?si=o9m4fNzwn2S_ng2t" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
        
        className='w-full border-none rounded-3xl mb-[70px] outline-none'></iframe>

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
      <section className={`${Styles.section3} ${Styles.slide_in_top} bg-[var(--primary-color)] py-[60px] text-black`}>
        <p className='text-gray-500'>The Coldest Wallet</p>
        <p className='font-bold text-black'>That Goes Further</p>

        <div className={`${Styles.section3_table} flex justify-center my-[40px]`}>
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

      {/*======================================== SECTION 4 =============================================*/}
      <section className={`${Styles.section4} ${Styles.slide_in_top} pt-[160px] pb-[40px]`}>
        <div className='items-center mb-[40px]'>
          <h1 className='text-[56px] font-bold flex flex-col w-full leading-[60px]'>
            <span className='text-[var(--grey-text)] font-light'>Handle your crypto</span> 
            with ease
          </h1>

          <p className='text-[18px] text-[var(--grey-text)]'>
            Self-custody should not be complex. Enjoy a smooth experience and maximum security with our fully custom hardware and OS.
          </p>
        </div>
        
        <div className={`${Styles.discover_link} ${Styles.discover_link_others} flex bg-[#0f1113] border-0 mb-[50px] rounded-2xl h-[700px] relative overflow-hidden`}>
          <div className='pl-[111px] basis-[40%]'>
            <h1 className='text-5xl font-bold mb-5'>Tap and swipe. Just like a phone.</h1>
            <p>With a 4” ultra-clear touch screen, your crypto is at your fingertips. If you can use a phone, you can use NGRAVE ZERO.</p>
          </div>

          <div className='basis-[60%]'>
            <img src={subBg3} alt="" className='object-contain w-full'/>
          </div>

          <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--link-color)] border-none rounded-[40px] overflow-hidden`}>
            <span className=' py-1 pl-3'>Discover ZERO</span>
            <span className="material-icons bg-[var(--text-color)] border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
          </p>
        </div>

        <div className={`${Styles.section3_grid} mb-[200px] grid grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-[1rem] text-[var(--text-color)]`}>

          <div className={`${Styles.discover_link} relative bg-sky-700 border-none rounded-2xl overflow-hidden`}>
            <div className='border-none rounded-2xl p-10'>
              <h3 className='text-[30px] font-semibold'>100% offline transactions</h3>
              <p className='text-[19px] mt-5'>No USB, no WIFI, no Bluetooth, no NFC. Transactions are signed via QR codes. Your keys remain offline. It is fast and secure.</p>
            </div>
          
            <img src={subBg4} alt="" className='object-contain  w-full'/>

            <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--link-color)] border-none rounded-[40px] overflow-hidden`}>
              <span className=' py-1 pl-3'>Video</span>
              <span className="material-icons bg-black border-0 rounded-4xl py-2 px-2">add</span>
            </p>
          </div>

          <div className={`${Styles.discover_link} relative bg-white border-none rounded-2xl text-black overflow-hidden`}>
            <div className='border-none rounded-2xl p-10'>
              <h3 className='text-[30px] font-semibold'>World-leading security</h3>
              <p className='text-[19px] mt-5'>NGRAVE has achieved the highest security certification of any financial product. We built tamper-proof technology, biometric 2-factor authentication, and much more.</p>
            </div>
          
            <img src={subBg5} alt="" className='object-contain  w-full'/>

            <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--link-color)] border-none rounded-[40px] overflow-hidden`}>
              <span className=' py-1 pl-3'>Learn more about security</span>
              <span className="material-icons bg-black border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
            </p>
          </div>

          <div className={`${Styles.discover_link} ${Styles.discover_link_others} relative bg-[#0d0d16] border-none rounded-2xl text-white overflow-hidden`}>
            <div className='border-none rounded-2xl p-10'>
              <h3 className='text-[30px] font-semibold'>100% offline transactions</h3>
              <p className='text-[16px] mt-5'>No USB, no WIFI, no Bluetooth, no NFC. Transactions are signed via QR codes. Your keys remain offline. It is fast and secure.</p>
            </div>
          
            <img src={subBg6} alt="" className='object-contain  w-full'/>

            <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--link-color)] border-none rounded-[40px] overflow-hidden`}>
              <span className=' py-1 pl-3'>Discover GRAPHENE recovery</span>
              <span className="material-icons bg-white border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
            </p>
          </div>

          <div className={`${Styles.discover_link} ${Styles.discover_link_others} relative bg-[#0d0d16] border-none rounded-2xl text-white overflow-hidden`}>
            <div className='border-none rounded-2xl p-10'>
              <h3 className='text-[30px] font-semibold'>100% offline transactions</h3>
              <p className='text-[16px] mt-5'>No USB, no WIFI, no Bluetooth, no NFC. Transactions are signed via QR codes. Your keys remain offline. It is fast and secure.</p>
            </div>
          
            <img src={subBg7} alt="" className='object-contain  w-full'/>

            <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--link-color)] border-none rounded-[40px] overflow-hidden`}>
              <span className=' py-1 pl-3'>Discover GRAPHENE recovery</span>
              <span className="material-icons bg-white border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
            </p>
          </div>

          <div className={`${Styles.discover_link} ${Styles.discover_link_others} relative bg-[#0d0d16] border-none rounded-2xl text-white overflow-hidden`}>
            <div className='border-none rounded-2xl p-10'>
              <h3 className='text-[30px] font-semibold'>100% offline transactions</h3>
              <p className='text-[16px] mt-5'>No USB, no WIFI, no Bluetooth, no NFC. Transactions are signed via QR codes. Your keys remain offline. It is fast and secure.</p>
            </div>
          
            <img src={subBg8} alt="" className='object-contain  w-full'/>

            <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--link-color)] border-none rounded-[40px] overflow-hidden`}>
              <span className=' py-1 pl-3'>Contact Us</span>
              <span className="material-icons bg-white border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
            </p>
          </div>

          <div className={`${Styles.discover_link} ${Styles.discover_link_others} relative bg-[#0d0d16] border-none rounded-2xl text-white overflow-hidden`}>
            <div className='border-none rounded-2xl p-10'>
              <h3 className='text-[30px] font-semibold'>100% offline transactions</h3>
              <p className='text-[16px] mt-5'>No USB, no WIFI, no Bluetooth, no NFC. Transactions are signed via QR codes. Your keys remain offline. It is fast and secure.</p>
            </div>
          
            <img src={subBg9} alt="" className='object-contain  w-full'/>

            <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--link-color)] border-none rounded-[40px] overflow-hidden`}>
              <span className=' py-1 pl-3'>Discover LIQUID</span>
              <span className="material-icons bg-white border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
            </p>
          </div>
        </div>
      </section>

      <div className={`${Styles.section4_slideDiv} ${Styles.slide_in_top} mb-[100px]`}>
        <div className='flex flex-col md:flex-row justify-between gap-[15px] md:gap-[100px] md:items-center px-[5%] lg:px-[15%]'>
          <h1 className='text-[52px] text-gray-600 flex flex-col leading-[60px]'>
            Trusted <span className='text-white font-bold'>worldwide</span>
          </h1>
          <p className='flex flex-col text-[18px]'>
            The most trusted hardware wallet on Trustpilot (4.7/5 stars).
            <span className='text-[var(--link-color)] flex items-center gap-2'>Read all reviews on Trustpilot <span className="material-icons">arrow_forward_ios</span></span>
          </p>
        </div>

        <div className='mx-[15%] justify-end items-center flex gap-3 mb-[40px]'>
          <button className={`material-icons bg-gray-600 hover:bg-white hover:text-black transition-all duration-150 p-2 rounded-4xl`} onClick={() => slideLeft("slideLeft")}>
            <span className="material-icons">arrow_back_ios</span>
          </button>

          <button className="material-icons bg-gray-600 border-0 rounded-4xl p-2 hover:bg-white hover:text-black transition-all duration-150" onClick={() => slideLeft("slideRight")}>
            <span className="material-icons">arrow_forward_ios</span>
          </button>
        </div>

        <div>
          <div className='overflow-x-scroll [scrollbar-width:none] [scroll-behavior:smooth]' ref={gridContainer}>
            <div className='min-w-[3500px]'>
              <div className='w-[400px] bg-[#0d0d16] p-8 border-none rounded-4xl inline-block ml-[50px] lg:ml-[270px] mr-7 cursor-grab select-none'>
                <div className='flex items-center justify-center rounded-2xl border-[var(--link-color)] w-[50px] h-[50px] border-2 border-dashed mb-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 17H9L11 13V7H5V13H8L6 17ZM14 17H17L19 13V7H13V13H16L14 17Z" fill="#3197FF"></path>
                  </svg>
                </div>

                <div className="text-white lg:text-1xl text-xl font-bold leading-8 lg:leading-8"> “What sets NGRAVE apart is the seamless integration of these three products, never compromising on security, always achieving a frictionless experience.” </div>

                <div className='justify-self-center mt-[100px]'>
                  <img src={quoteImg1} alt="" className='justify-self-center'/>
                  <p><span className="font-bold ">Jean Jacques Quisquater</span>, <br/>2nd reference Bitcoin Paper</p>
                </div>
              </div>

              <div className='w-[400px] bg-[#0d0d16] p-8 border-none rounded-4xl inline-block mr-7 cursor-grab select-none'>
                <div className='flex items-center justify-center rounded-2xl border-[var(--link-color)] w-[50px] h-[50px] border-2 border-dashed mb-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 17H9L11 13V7H5V13H8L6 17ZM14 17H17L19 13V7H13V13H16L14 17Z" fill="#3197FF"></path>
                  </svg>
                </div>

                <div className="text-white lg:text-1xl text-xl font-bold leading-8 lg:leading-8"> “What sets NGRAVE apart is the seamless integration of these three products, never compromising on security, always achieving a frictionless experience.” </div>

                <div className='justify-self-center mt-[100px]'>
                  <img src={quoteImg1} alt="" className='justify-self-center'/>
                  <p><span className="font-bold ">Jean Jacques Quisquater</span>, <br/>2nd reference Bitcoin Paper</p>
                </div>
              </div>

              <div className='w-[400px] bg-[#0d0d16] p-8 border-none rounded-4xl inline-block mr-7 cursor-grab select-none'>
                <div className='flex items-center justify-center rounded-2xl border-[var(--link-color)] w-[50px] h-[50px] border-2 border-dashed mb-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 17H9L11 13V7H5V13H8L6 17ZM14 17H17L19 13V7H13V13H16L14 17Z" fill="#3197FF"></path>
                  </svg>
                </div>

                <div className="text-white lg:text-1xl text-xl font-bold leading-8 lg:leading-8"> “What sets NGRAVE apart is the seamless integration of these three products, never compromising on security, always achieving a frictionless experience.” </div>

                <div className='justify-self-center mt-[100px]'>
                  <img src={quoteImg1} alt="" className='justify-self-center'/>
                  <p><span className="font-bold ">Jean Jacques Quisquater</span>, <br/>2nd reference Bitcoin Paper</p>
                </div>
              </div>

              <div className='w-[400px] bg-[#0d0d16] p-8 border-none rounded-4xl inline-block mr-7 cursor-grab select-none'>
                <div className='flex items-center justify-center rounded-2xl border-[var(--link-color)] w-[50px] h-[50px] border-2 border-dashed mb-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 17H9L11 13V7H5V13H8L6 17ZM14 17H17L19 13V7H13V13H16L14 17Z" fill="#3197FF"></path>
                  </svg>
                </div>

                <div className="text-white lg:text-1xl text-xl font-bold leading-8 lg:leading-8"> “What sets NGRAVE apart is the seamless integration of these three products, never compromising on security, always achieving a frictionless experience.” </div>

                <div className='justify-self-center mt-[100px]'>
                  <img src={quoteImg1} alt="" className='justify-self-center'/>
                  <p><span className="font-bold ">Jean Jacques Quisquater</span>, <br/>2nd reference Bitcoin Paper</p>
                </div>
              </div>

              <div className='w-[400px] bg-[#0d0d16] p-8 border-none rounded-4xl inline-block mr-7 cursor-grab select-none'>
                <div className='flex items-center justify-center rounded-2xl border-[var(--link-color)] w-[50px] h-[50px] border-2 border-dashed mb-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 17H9L11 13V7H5V13H8L6 17ZM14 17H17L19 13V7H13V13H16L14 17Z" fill="#3197FF"></path>
                  </svg>
                </div>

                <div className="text-white lg:text-1xl text-xl font-bold leading-8 lg:leading-8"> “What sets NGRAVE apart is the seamless integration of these three products, never compromising on security, always achieving a frictionless experience.” </div>

                <div className='justify-self-center mt-[100px]'>
                  <img src={quoteImg1} alt="" className='justify-self-center'/>
                  <p><span className="font-bold ">Jean Jacques Quisquater</span>, <br/>2nd reference Bitcoin Paper</p>
                </div>
              </div>

              <div className='w-[400px] bg-[#0d0d16] p-8 border-none rounded-4xl inline-block mr-7 cursor-grab select-none'>
                <div className='flex items-center justify-center rounded-2xl border-[var(--link-color)] w-[50px] h-[50px] border-2 border-dashed mb-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 17H9L11 13V7H5V13H8L6 17ZM14 17H17L19 13V7H13V13H16L14 17Z" fill="#3197FF"></path>
                  </svg>
                </div>

                <div className="text-white lg:text-1xl text-xl font-bold leading-8 lg:leading-8 select-none"> “What sets NGRAVE apart is the seamless integration of these three products, never compromising on security, always achieving a frictionless experience.” </div>

                <div className='justify-self-center mt-[100px]'>
                  <img src={quoteImg1} alt="" className='justify-self-center'/>
                  <p><span className="font-bold ">Jean Jacques Quisquater</span>, <br/>2nd reference Bitcoin Paper</p>
                </div>
              </div>

              <div className='w-[400px] bg-[#0d0d16] p-8 border-none rounded-4xl inline-block mr-7 cursor-grab select-none'>
                <div className='flex items-center justify-center rounded-2xl border-[var(--link-color)] w-[50px] h-[50px] border-2 border-dashed mb-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 17H9L11 13V7H5V13H8L6 17ZM14 17H17L19 13V7H13V13H16L14 17Z" fill="#3197FF"></path>
                  </svg>
                </div>

                <div className="text-white lg:text-1xl text-xl font-bold leading-8 lg:leading-8"> “What sets NGRAVE apart is the seamless integration of these three products, never compromising on security, always achieving a frictionless experience.” </div>

                <div className='justify-self-center mt-[100px]'>
                  <img src={quoteImg1} alt="" className='justify-self-center'/>
                  <p><span className="font-bold ">Jean Jacques Quisquater</span>, <br/>2nd reference Bitcoin Paper</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*======================================== SECTION 5 =============================================*/}
      <section className={`${Styles.section5} ${Styles.slide_in_top} py-[100px] bg-[var(--text-color)] text-[var(--background-color)]`}>
        <h1 className='flex flex-col text-[52px] mb-[100px] text-gray-500 leading-14'>
          Built with the
          <span className='font-semibold text-black'>best materials</span>
        </h1>

        <div className='rounded-4xl overflow-hidden mb-[30px]'>
          <img src={bg1} alt="" className='w-full h-[800px]'/>
        </div>

        <div className='flex md:flex-row flex-col justify-between gap-4'>
          <div className={`${Styles.discover_link} relative flex flex-col h-[800px] rounded-3xl bg-[#f0f0f0]`}>
            <img src={subBg10} alt="" />

            <h2 className='text-[2rem] text-black leading-10 flex flex-col font-semibold px-[40px]'>
              World's highest security-certified
              <span className='text-gray-500'>financial product</span>
            </h2>

            <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--text-color)] border-none rounded-[40px] overflow-hidden`}>
              <span className=' py-1 pl-3'>Discover ZERO</span>
              <span className="material-icons bg-[var(--background-color)] border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
            </p>
          </div>

          <div className={`${Styles.discover_link} relative flex flex-col h-[800px] rounded-3xl bg-[#f0f0f0]`}>
            <h2 className='flex-1 text-[2rem] text-black leading-10 flex flex-col font-semibold px-[40px] pt-[50px]'>
              House-fire resistant backup.
              <span className='text-gray-500'> High quality stainless steel.</span>
            </h2>

            <img src={subBg11} alt="subBg11" />

            <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--text-color)] border-none rounded-[40px] overflow-hidden`}>
              <span className=' py-1 pl-3'>Discover ZERO</span>
              <span className="material-icons bg-[var(--background-color)] border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
            </p>
          </div>

          <div className={`${Styles.discover_link} relative flex flex-col h-[800px] rounded-3xl bg-[#f0f0f0]`}>
            <img src={subBg12} alt="subBg12" />

            <h2 className='text-[2rem] text-black leading-10 flex flex-col font-semibold px-[40px]'>
              4-layer tamper resistance,
              <span className='text-gray-500'>starting with its metal casing.</span>
            </h2>

            <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--text-color)] border-none rounded-[40px] overflow-hidden`}>
              <span className=' py-1 pl-3'>Discover ZERO</span>
              <span className="material-icons bg-[var(--background-color)] border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
            </p>
          </div>
        </div>

        <div className='rounded-4xl bg-[#f0f0f0] flex flex-col mt-[70px]'>
          <div className='flex flex-col md:flex-row items-center justify-between mt-[70px]'>
            <div className='lg:pl-[90px] pl-[40px]'>
              <p className='flex flex-col text-[2rem] text-gray-500] w-[350px] leading-[57px]'>
                NGRAVE store
                <span className='font-bold text-[40px] md:text-[52px]'>Start truly owning your crypto</span>
              </p>

              <button className='bg-[var(--span-text-color)] py-1.5 px-5 mt-5 rounded-[7px]'>Buy Now</button>
            </div>

            <div className='flex-1'>
              <img src={subBg13} alt="" className='w-full object-contain'/>
            </div>
          </div>

          <div className='p-10'>
            <div className='bg-white rounded-3xl flex md:flex-row flex-col p-10 py-5 text-[14px] gap-1.5 font-semibold'>
              <div className='flex md:flex-col flex-row gap-5'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 8.00012H17V4.00012H3C1.9 4.00012 1 4.90012 1 6.00012V17.0001H3C3 18.6601 4.34 20.0001 6 20.0001C7.66 20.0001 9 18.6601 9 17.0001H15C15 18.6601 16.34 20.0001 18 20.0001C19.66 20.0001 21 18.6601 21 17.0001H23V12.0001L20 8.00012ZM19.5 9.50012L21.46 12.0001H17V9.50012H19.5ZM6 18.0001C5.45 18.0001 5 17.5501 5 17.0001C5 16.4501 5.45 16.0001 6 16.0001C6.55 16.0001 7 16.4501 7 17.0001C7 17.5501 6.55 18.0001 6 18.0001ZM8.22 15.0001C7.67 14.3901 6.89 14.0001 6 14.0001C5.11 14.0001 4.33 14.3901 3.78 15.0001H3V6.00012H15V15.0001H8.22ZM18 18.0001C17.45 18.0001 17 17.5501 17 17.0001C17 16.4501 17.45 16.0001 18 16.0001C18.55 16.0001 19 16.4501 19 17.0001C19 17.5501 18.55 18.0001 18 18.0001Z" fill="#3197FF"></path></svg> 

                <p>
                  Next-Day Free Shipping. 
                  <span className='text-gray-500'>We ship the very next day, free for orders above $300.</span>
                </p>
              </div>

              <div className='flex md:flex-col flex-row gap-4'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="#3197FF"></path></svg>

                <p>
                  Flexible payment options. 
                  <span className='text-gray-500'>Pay with credit card, Bancontact, or even crypto.</span>
                </p>
              </div>

              <div className='flex md:flex-col flex-row gap-5'>
                <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><rect width="28" height="20" rx="4" fill="url(#pattern0)"></rect><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image0_3874_63473" transform="matrix(0.00502513 0 0 0.00703518 0 -0.108543)"></use></pattern><image id="image0_3874_63473" width="199" height="173" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAACtCAYAAAAEamv6AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAx6ADAAQAAAABAAAArQAAAAAMC/Z9AAAE90lEQVR4Ae3WzYkUcQBE8V5nPEwOngWzMAUPZmYcJuNBMAYDEGY/dEFZYRcW6vp+fRh6/kMd6lW/oW8ul8vD7e3tUb6u1+vx9cuH49PH78fx69RF8fbu+Pnj3fHt8/vjcn7ocvjb/PwoxuPD4ULgH4G74+44bh8eP7PX6Xw63mTbK47AKwTOr/zu5xKBF94oXzjKECFHZuqtaPXV6vFPwWvV9sxIBQiQIzCyihsBcmzcpAIEyBEYWcWNADk2blIBAuQIjKziRoAcGzepAAFyBEZWcSNAjo2bVIAAOQIjq7gRIMfGTSpAgByBkVXcCJBj4yYVIECOwMgqbgTIsXGTChAgR2BkFTcC5Ni4SQUIkCMwsoobAXJs3KQCBMgRGFnFjQA5Nm5SAQLkCIys4kaAHBs3qQABcgRGVnEjQI6Nm1SAADkCI6u4ESDHxk0qQIAcgZFV3AiQY+MmFSBAjsDIKm4EyLFxkwoQIEdgZBU3AuTYuEkFCJAjMLKKGwFybNykAgTIERhZxY0AOTZuUgEC5AiMrOJGgBwbN6kAAXIERlZxI0COjZtUgAA5AiOruBEgx8ZNKkCAHIGRVdwIkGPjJhUgQI7AyCpuBMixcZMKECBHYGQVNwLk2LhJBQiQIzCyihsBcmzcpAIEyBEYWcWNADk2blIBAuQIjKziRoAcGzepAAFyBEZWcSNAjo2bVIAAOQIjq7gRIMfGTSpAgByBkVXcCJBj4yYVIECOwMgqbgTIsXGTChAgR2BkFTcC5Ni4SQUIkCMwsoobAXJs3KQCBMgRGFnFjQA5Nm5SAQLkCIys4kaAHBs3qQABcgRGVnEjQI6Nm1SAADkCI6u4ESDHxk0qQIAcgZFV3AiQY+MmFSBAjsDIKm4EyLFxkwoQIEdgZBU3AuTYuEkFCJAjMLKKGwFybNykAgTIERhZxY0AOTZuUgEC5AiMrOJGgBwbN6kAAXIERlZxI0COjZtUgAA5AiOruBEgx8ZNKkCAHIGRVdwIkGPjJhUgQI7AyCpuBMixcZMKECBHYGQVNwLk2LhJBQiQIzCyihsBcmzcpAIEyBEYWcWNADk2blIBAuQIjKziRoAcGzepAAFyBEZWcSNAjo2bVIAAOQIjq7gRIMfGTSpAgByBkVXcCJBj4yYVIECOwMgqbgTIsXGTChAgR2BkFTcC5Ni4SQUIkCMwsoobAXJs3KQCBMgRGFnFjQA5Nm5SAQLkCIys4kaAHBs3qQABcgRGVnEjQI6Nm1SAADkCI6u4ESDHxk0qQIAcgZFV3AiQY+MmFSBAjsDIKm4EyLFxkwoQIEdgZBU3AuTYuEkFCJAjMLKKGwFybNykAgTIERhZxY0AOTZuUgEC5AiMrOJGgBwbN6kAAXIERlZxI0COjZtUgAA5AiOruBEgx8ZNKkCAHIGRVdwIkGPjJhUgQI7AyCpuBMixcZMKECBHYGQVNwLk2LhJBQiQIzCyihsBcmzcpAIEyBEYWcWNADk2blIBAuQIjKziRoAcGzepAAFyBEZWcSNAjo2bVIAAOQIjq7gRIMfGTSpAgByBkVXcCJBj4yYVIECOwMgqbgTIsXGTChAgR2BkFTcC5Ni4SQUIkCMwsoobAXJs3KQCBMgRGFnFjQA5Nm5SAQLkCIys4kaAHH+53d9Acdw9PUT/3T4dxu7Of65Y5ed1r9fr88Piyf1T6dP59PQlevcb0BYkVHEDvIwAAAAASUVORK5CYII="></image></defs></svg>


                <p>
                  Made in Belgium. 
                  <span className='text-gray-500'>All our products are manufactured in Belgium, Europe.</span>
                </p>
              </div>

              <div className='flex md:flex-col flex-row gap-5'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.01 14H2V16H9.01V19L13 15L9.01 11V14ZM14.99 13V10H22V8H14.99V5L11 9L14.99 13Z" fill="#3197FF"></path></svg>

                <p>
                  30-day return. 
                  <span className='text-gray-500'> Return within 30 days and get all your money back.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/*====================== SEMI FOOTER ========================*/}
      <div className={`${Styles.semi_footer} h-[450px] text-[var(--background-color)] flex justify-between items-center px-[5%] lg:px-[15%] gap-10`}>
        <div>
          <p className='text-[2rem] font-semibold leading-10 mb-5'>
            We empower people to master their wealth so they can live the life they want.
            <span className='text-gray-500'> We are passionate about making the world of crypto a safer place.</span>
          </p>

          <p>Empowering ownership since 2018. </p>
        </div>

        <div className='basis-[50%] flex justify-end'>
          <button className='bg-[var(--background-color)] py-2 px-4 rounded-[5px] text-[var(--text-color)]'>Read Our Story</button>
        </div>
      </div>




      <div className='flex justify-between px-[15%] items-center pt-[170px] pb-[70px]'>
        <h1 className='text-gray-500 text-[52px] flex flex-col leading-15'>
          Broad
          <span className='text-[var(--text-color)]'>Crypto support</span>
        </h1>

        <div className=''>
          <p>We support 15 coins and all Ethereum and MultiversX tokens.</p>
          <p className='flex items-center'>View full coin support <span className='material-icons'>arrow_forward_ios</span></p>
        </div>
      </div>

      <div className={`${Styles.scroll_img} w-full overflow-x-scroll`}>
        <div className='w-[5000px] mb-[20px]'>
          <img src={cryptoAnim1} alt="" className='w-full'/>
        </div>

        <div className='w-[5000px]'>
          <img src={cryptoAnim2} alt="" className='w-full'/>
        </div>
      </div>
      

      <a href='#section1' className='fixed right-[50px] bottom-[50px]  bg-[var(--link-color)]'>
        up
      </a>
    </div>
  )
}

export default Home