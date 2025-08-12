import Styles from './home.module.css';
import cryptoAnim1 from '../../assets/ngrave/crypto/test-cryptosupport-may-3.svg';
import cryptoAnim2 from '../../assets/ngrave/crypto/test-cryptosupport-may-4.svg';
import quoteImg1 from '../../assets/quotes/quote-1.png';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useEffect, useRef } from 'react';
import SectionA from './SectionA/SectionA';
import SectionB from './SectionB/SectionB';
import SectionC from './SectionC/SectionC';
import SectionD from './SectionD/SectionD';
import SectionE from './SectionE/SectionE';
import SectionF from './SectionF/SectionF';
import SectionG from './SectionG/SectionG';
import SectionH from './SectionH/SectionH';
import Footer from '../../Components/Footer/Footer';

// HOME PAGE / LANDING PAGE //
function Home() {
  const gridContainer = useRef<HTMLDivElement>(null);
  const scrollImg = useRef<HTMLDivElement>(null);

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

  //disable scrolling
  useEffect(() => {
    scrollImg?.current?.addEventListener('wheel', (e) => {
      e.preventDefault();
    });
  }, [])



  return (
    <div className='relative'>
      <Navbar/>
      <Sidebar/>

      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />

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

      <SectionE />
      <SectionF />

      <SectionG />

      <div className={`${Styles.scroll_img} slide_in_top w-full overflow-x-scroll`} ref={scrollImg}>
        <div className='w-[7000px] mb-[20px]'>
          <img src={cryptoAnim1} alt="" className='w-full'/>
        </div>

        <div className='w-[7000px]'>
          <img src={cryptoAnim2} alt="" className='w-full'/>
        </div>
      </div>

      <SectionH />
      <Footer />

      <a href='#section1' className='fixed right-[50px] bottom-[50px]  bg-[var(--link-color)]'>
        up
      </a>
    </div>
  )
}

export default Home