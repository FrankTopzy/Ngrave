import Styles from './home.module.css';
import bg1 from '../../assets/ngrave/ngrave-bg6b.webp';
import cryptoAnim1 from '../../assets/ngrave/crypto/test-cryptosupport-may-3.svg';
import cryptoAnim2 from '../../assets/ngrave/crypto/test-cryptosupport-may-4.svg';
import ngravelogo from '../../assets/ngrave/logo2.webp';
import subBg10 from '../../assets/ngrave/ngrave-sub20.webp';
import subBg11 from '../../assets/ngrave/ngrave-sub13.webp';
import subBg12 from '../../assets/ngrave/ngrave-sub19.webp';
import subBg13 from '../../assets/ngrave/ngrave-sub21.webp';
import subBg14 from '../../assets/ngrave/ngrave-sub11.svg';
import trustpilot from '../../assets/ngrave/trustpilot-footer-light.svg';
import quoteImg1 from '../../assets/quotes/quote-1.png';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useEffect, useRef, useState } from 'react';
import SectionA from './SectionA/SectionA';
import SectionB from './SectionB/SectionB';
import SectionC from './SectionC/SectionC';
import SectionD from './SectionD/SectionD';

// HOME PAGE / LANDING PAGE //
function Home() {
  const gridContainer = useRef<HTMLDivElement>(null);
  const scrollImg = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
      {/*=============================SECTION 1========================================*/}
      <SectionA />

      {/*======================================== SECTION 2 =============================================*/}
      <SectionB />

      {/*======================================== SECTION 3 =============================================*/}
      <SectionC />

      {/*======================================== SECTION 4 =============================================*/}
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

      {/*======================================== SECTION 5 =============================================*/}
      <section className={`${Styles.section5} ${Styles.slide_in_top} py-[100px] bg-[var(--text-color)] text-[var(--background-color)] flex justify-center`}>
        <div className='max-w-[1400px]'>
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
        </div>
      </section>

      {/*====================== SEMI FOOTER ========================*/}
      <div className={`${Styles.semi_footer} h-[450px] flex justify-center lg:px-[15%] px-[5%]`}>
        <div className={`text-[var(--background-color)] flex flex-col md:flex-row justify-between items-center md:gap-10 gap-3 max-w-[1400px]`}>
          <div className=''>
            <p className='text-[2rem] font-semibold leading-10 mb-5'>
              We empower people to master their wealth so they can live the life they want.
              <span className='text-gray-500'> We are passionate about making the world of crypto a safer place.</span>
            </p>

            <p>Empowering ownership since 2018. </p>
          </div>

          <div className='md:basis-[50%] basis-[30%] flex justify-end md:self-center self-start'>
            <button className=' self-center bg-[var(--background-color)] py-2 px-4 rounded-[5px] text-[var(--text-color)] whitespace-nowrap'>Read Our Story</button>
          </div>
        </div>
      </div>

      <div className='flex justify-center bg-black lg:px-[15%] px-[5%]'>
        <div className='flex justify-between items-center w-[1400px]  pt-[170px] pb-[70px]'>
          <h1 className='text-gray-500 text-[52px] flex flex-col leading-15'>
            Broad
            <span className='text-[var(--text-color)]'>Crypto support</span>
          </h1>

          <div className=''>
            <p>We support 15 coins and all Ethereum and MultiversX tokens.</p>
            <p className='flex items-center'>View full coin support <span className='material-icons'>arrow_forward_ios</span></p>
          </div>
        </div>
      </div>

      <div className={`${Styles.scroll_img} w-full overflow-x-scroll`} ref={scrollImg}>
        <div className='w-[7000px] mb-[20px]'>
          <img src={cryptoAnim1} alt="" className='w-full'/>
        </div>

        <div className='w-[7000px]'>
          <img src={cryptoAnim2} alt="" className='w-full'/>
        </div>
      </div>

      <div className='pb-[70px] mt-[150px] flex justify-center min-h-[100vh]'>
        <div className='max-w-[1400px] flex justify-between lg:flex-row flex-col px-[5%]'>
          <div>
            <h1 className='text-gray-500 text-[52px] flex flex-col mb-[50px]'>
              Still got some
              <span className='text-white'>Questions?</span>
            </h1>


            <div className={`${Styles.footer_abs} absolute left-0`}>
              <img src={subBg14} alt="" className=''/>
            </div>
          </div>

          <div className='basis-[50%]'>
            <hr />

            <div className='my-[30px]'>
              <div className='flex gap-3'>
                <span className="material-icons">keyboard_arrow_down</span>

                <div className={`text-[18px] text-gray-500`}>
                  <p className='text-2xl mb-4 text-white'>Which coins are supported?</p>

                  <div className={`${!isOpen ? 'hidden' : ''}`}>
                    <div className=''>
                      ZERO supports the following coins: Bitcoin (BTC), Bitcoin Cash (BCH), Ethereum (ETH), Dash (DASH), Zcash (ZEC), Litecoin (LTC), Binance Coin (BNB), XRP, Dogecoin (DOGE), Tezos (XTZ), MultiversX (EGLD, previously called Elrond), Groestlcoin (GRS), Solana (SOL), Stellar (XLM), Polygon (MATIC) and Avalanche (AVAX, X-chain).
                      On top of that the ZERO  is compatible with all tokens on these networks:

                      <ul>
                        <li className='list-disc'>Ethereum network (ERC20 tokens)</li>
                        <li className='list-disc'>MultiversX network (ESDT tokens)</li>
                      </ul>
                    </div>

                    <p className='mt-[50px]'>
                      You can also store your NFT’s if they are on the Ethereum network.
                      Using the Rabby Wallet & MetaMask integrations with your ZERO, you can also store and transact coins on all EVM-based chains even if they are not supported in the LIQUID app.
                      More information
                    </p>
                  </div>
                </div>
                
              </div>
            </div>

            <hr />

            <div className='my-[30px]'>
              <div className='flex gap-3'>
                <span className="material-icons">keyboard_arrow_down</span>
                
                <div className='text-[18px] text-gray-500'>
                  <p className='text-2xl mb-4 text-white'>Can I convert the NGRAVE "Perfect Key" to 24 words?</p>

                  <div className={`${!isOpen ? 'hidden' : ''}`}>
                    <div className=''>
                      Last updated December 16, 2023 19:45
                      Yes. The hexadecimal “Perfect Key” can easily be converted into the 24-words version and vice versa. Both are alternative representations of a 256-bit private key.

                      <ul>
                        <li className='list-disc'>On the ZERO, you can easily see both versions. Go to Settings → Display secret key, enter your PIN code and then select Mnemonic or NGRAVE wallet.</li>
                        <li className='list-disc'>If you need to do the conversion yourself, you can use this tool: https://iancoleman.io/bip39/ </li>
                      </ul>
                    </div>

                    <div className='mt-[40px]'>
                      <p className='text-gray-300 font-serif'>NEVER USE THIS TOOL ONLINE with your key!</p>
                      There is always a risk that your communication is intercepted or the website logs your private key data, which might result in your funds being stolen. You should always download this tool and run it on your own computer. Best practice is that your backup is never entered on a computer. So only use this tool when you need to. We recommend to move your funds to a new wallet afterwards to preserve optimal security.
                      More information
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <hr />

            <div className='my-[30px]'>
              <div className='flex gap-3'>
                <span className="material-icons">keyboard_arrow_down</span>
                
                <div className='text-[18px] text-gray-500'>
                  <p className='text-2xl mb-4 text-white'>Can I buy NGRAVE products via resellers such as Amazon?</p>

                  <div className={`${!isOpen ? 'h-0 invisible opacity-0' : 'h-full'}`}>
                    <div className='text-gray-500 text-[18px]'>
                      You can order your ZERO in the NGRAVE Store or via Amazon US.

                      <ul>
                        <li className='list-disc'>NGRAVE Store: https://shop.ngrave.io</li>
                        <li className='list-disc'>NGRAVE store on Amazon US: http://www.amazon.com/shops/ANI44Y9PQZDMS </li>
                      </ul>
                    </div>

                    <p className='mt-[40px]'>
                      Additionally, NGRAVE products are available through authorized resellers. You can find a list of official resellers on this page: ngrave.io/resellers. 
                      If another party besides NGRAVE or one of our official resellers offers you a ZERO, do not give them your money. In case of doubt, always consult with us via support@ngrave.io. 
                    </p>
                  </div>
                </div>
                
              </div>
            </div>

            <hr />

            <div className='my-[30px]'>
              <div className='flex gap-3'>
                <button onClick={() => setIsOpen(isOpen ? false : true)} className='self-start'><span className="material-icons">keyboard_arrow_{isOpen ? 'down' : 'up'}</span></button>
                
                <div>
                  <p className='text-2xl mb-4'>Will I have to pay customs duties?</p>

                  <div className={`${isOpen ? 'h-0 invisible opacity-0' : 'h-full'} transition-all duration-200`}>
                    <div className='text-gray-500 text-[18px]'>
                      No import fees currently apply for shipments to the EU, the U.S. (under 800 USD), Australia (under 1000 AUD), and New Zealand (under 1000 NZD). However, this is subject to change based on local customs regulations.
                      We took all measures to lower the odds of your package getting stuck at customs. However, some countries will require the recipient to pay additional import fees before releasing the package.
                      We ship from Belgium, so customs duties or -fees may apply to deliveries outside of the European Union. Customs duties and -fees are not included in the price and will have to be paid to the carrier by the buyer upon delivery. 
                      The amount to pay varies from country to country. For more details, please contact your local customs authority.
                      Some countries that we know charge an import fee (this list is non-exhaustive):

                      <ul>
                        <li className='list-disc'>United Kingdom</li>
                        <li className='list-disc'>Canada</li>
                        <li className='list-disc'>UAE</li>
                        <li className='list-disc'>Israel</li>
                        <li className='list-disc'>Kuwait</li>
                        <li className='list-disc'>Singapore</li>
                        <li className='list-disc'>...</li>
                      </ul>
                    </div>

                    <p className='mt-[40px]'>
                      More information about Shipping & Delivery
                    </p>
                  </div>
                </div>
                
              </div>
            </div>

            <hr />
          </div>
        </div>
      </div>

      <footer className='flex justify-center'>
        <div className='max-w-[1400px] bg-black px-[5%]'>
          <div className='pb-[40px] flex lg:flex-row flex-col justify-between gap-4'>
            <div className='flex justify-center basis-[25%]'>
              <img src={ngravelogo} alt="ngravelogo" width='200' className='self-start bg-white'/>
            </div>

            <div className={`${Styles.footer_grid} flex-1 text-[14px] font-semibold bg-amber-900`}>
              <div>
                <h2>Products</h2>
                <ul>
                  <li>Hardware Wallet</li>
                  <li>Backup</li>
                  <li>Mobile App</li>
                  <li>Buy Crypto with Our Providers</li>
                  <li>Swap with Changelly</li>
                  <li>Private Trading by BTC Direct</li>
                </ul>
              </div>

              <div>
                <h2>Support</h2>
                <ul>
                  <li>Frequently Asked Questions</li>
                  <li>Getting Started Guide</li>
                  <li>Where to buy</li>
                  <li>GRAPHENE Recovery</li>
                  <li>Contact Us</li>
                  <li>Supported Crypto</li>
                </ul>
              </div>

              <div>
                <h2>Resources</h2>
                <ul>
                  <li>Blog</li>
                  <li>Academy</li>
                  <li>Crypto Security Check</li>
                  <li>Firmware Update</li>
                </ul>
              </div>

              <div>
                <h2>About NGRAVE</h2>
                <ul>
                  <li>Our Story</li>
                  <li>Press</li>
                  <li>Careers</li>
                  <li>Affiliate Program</li>
                </ul>
              </div>
            </div>

            <div className='basis-[38%]'>
              <h1 className='text-[30px] font-semibold'>Get the latest news</h1>

              <p className='text-gray-500 mb-[20px]'>Be the first to hear about new features and exclusive offers.</p>

              <form action="" className=''>
                <div className='flex relative rounded-3xl overflow-hidden border-1 border-gray-700 mb-[20px]'>
                  <input type="email" className='flex-1 py-3 pl-5 pr-[130px] outline-none' placeholder='Enter Email'/>
                  <button className='h-full absolute right-0 bg-[var(--span-text-color)] text-black text-[18px] px-5 border-none rounded-3xl'>Sign Up</button>
                </div>

                <div className='text-[13px] text-gray-500 mb-[40px]'>
                  <p>By signing up, you agree to receive our marketing offers following our Privacy Policy. You can unsubscribe at any time.</p>
                </div>
              </form>

              <div>
                <img src={trustpilot} alt="" />
                <p className='text-[13px] text-gray-500'>TrustScore 4.7 | +250 Reviews</p>
              </div>
            </div>
          </div>

          <hr />

          <div className='pt-[40px] flex lg:flex-row flex-col gap-[10px] justify-between pb-[70px]'>
            <div className='text-gray-600 leading-5 text-[14px]'>
              <p className='mb-[20px]'>© 2025 NGRAVE All rights reserved. | Ngrave.IO NV | Registered in Belgium | Senator A. Jeurissenlaan 1156, 3520 Zonhoven | 1177 Avenue of the Americas, 7th floor, New York, NY 10036, USA</p>

              <ul className='flex gap-4'>
                <li>Important Legal Information</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Terms & Conditions</li>
                <li>Terms & Conditions</li>
                <li>Shipping Policy</li>
                <li>Refund Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>

            <div className='flex items-center gap-2'>      
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" width='40px'/>
              
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" width='40px'  className='bg-white border-2 rounded-full'/>
  
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" width='40px'/>
            </div>
          </div>
        </div>
      </footer>
      

      <a href='#section1' className='fixed right-[50px] bottom-[50px]  bg-[var(--link-color)]'>
        up
      </a>
    </div>
  )
}

export default Home