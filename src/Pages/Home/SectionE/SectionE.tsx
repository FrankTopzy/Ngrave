import subBg10 from '../../../assets/ngrave/ngrave-sub20.webp';
import subBg11 from '../../../assets/ngrave/ngrave-sub13.webp';
import subBg12 from '../../../assets/ngrave/ngrave-sub19.webp';
import subBg13 from '../../../assets/ngrave/ngrave-sub21.webp';
import bg1 from '../../../assets/ngrave/ngrave-bg6b.webp';
import Styles from './sectionE.module.css';

function SectionE() {
  return (
    <div>
      <section className={`${Styles.section5} slide_in_top bg-[var(--text-color)] text-[var(--background-color)] flex justify-center`}>
        <div className='max-w-[1400px] py-[70px]  overflow-hidden'>
          <h1 className='flex flex-col text-[52px] mb-[70px] text-gray-500 leading-14'>
            Built with the
            <span className='font-semibold text-black'>best materials</span>
          </h1>

          <div className='rounded-4xl mb-[30px] overflow-hidden'>
            <img src={bg1} alt="" className=' w-full h-[800px] object-center object-cover'/>
          </div>

          <div className={`${Styles.section5_main_content} flex md:flex-row flex-col justify-between gap-4`}>
            <div className={`${Styles.discover_link} relative flex flex-col pb-[30px] gap-[70px] rounded-3xl bg-[#f0f0f0]`}>
              <div>
                <img src={subBg10} alt="" />
              </div>

              <h2 className={`${Styles.subText} text-[2rem] text-black leading-10 flex flex-col font-semibold px-[40px]`}>
                World's highest security-certified
                <span className='text-gray-500'>financial product</span>

                <p className={`${Styles.discover_link_link} absolute text-[16px] font-normal bottom-2 right-2 flex justify-between items-center text-[var(--text-color)] border-none rounded-[40px] overflow-hidden`}>
                  <span className=' py-1 pl-3'>Discover ZERO</span>
                  <span className="material-icons bg-[var(--background-color)] border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
                </p>
              </h2>
            </div>

            <div className={`${Styles.discover_link} relative flex flex-col gap-[70px] rounded-3xl bg-[#f0f0f0]`}>
              <h2 className='flex-1 text-[2rem] text-black leading-10 flex flex-col font-semibold px-[40px] pt-[50px]'>
                House-fire resistant backup.
                <span className='text-gray-500'> High quality stainless steel.</span>
              </h2>

              <div className={`${Styles.subText}`}>
                <img src={subBg11} alt="subBg11" />

                <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--text-color)] border-none rounded-[40px] overflow-hidden`}>
                  <span className=' py-1 pl-3'>Discover ZERO</span>
                  <span className="material-icons bg-[var(--background-color)] border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
                </p>
              </div>
            </div>

            <div className={`${Styles.discover_link} relative flex flex-col gap-[70px] rounded-3xl bg-[#f0f0f0]`}>
              <img src={subBg12} alt="subBg12" />

              <h2 className={`${Styles.subText} text-[2rem] text-black leading-10 flex flex-col font-semibold pb-[40px] px-[40px]`}>
                4-layer tamper resistance,
                <span className='text-gray-500'>starting with its metal casing.</span>

                <p className={`${Styles.discover_link_link} absolute text-[16px] font-normal bottom-2 right-2 flex justify-between items-center text-[var(--text-color)] border-none rounded-[40px] overflow-hidden`}>
                  <span className=' py-1 pl-3'>Discover ZERO</span>
                  <span className="material-icons bg-[var(--background-color)] border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
                </p>
              </h2>
            </div>
          </div>

          <div className='rounded-4xl bg-[#f0f0f0] flex flex-col mt-[70px]'>
            <div className='flex flex-col md:flex-row items-center justify-between mt-[70px]'>
              <div className='lg:pl-[90px] pl-[40px]'>
                <p className='flex flex-col text-[1.5rem] sm:text-[2rem] text-gray-500] w-[350px] leading-normal sm:leading-[57px]'>
                  NGRAVE store
                  <span className='font-bold text-[30px] sm:text-[40px] md:text-[52px]'>Start truly owning your crypto</span>
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
    </div>
  )
}

export default SectionE
