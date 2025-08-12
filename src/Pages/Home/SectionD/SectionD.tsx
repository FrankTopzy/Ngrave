import subBg3 from '../../../assets/ngrave/ngrave-sub1.webp';
import subBg4 from '../../../assets/ngrave/ngrave-sub2.webp';
import subBg5 from '../../../assets/ngrave/ngrave-sub15.webp';
import subBg6 from '../../../assets/ngrave/ngrave-sub16.webp';
import subBg7 from '../../../assets/ngrave/ngrave-sub3.webp';
import subBg8 from '../../../assets/ngrave/ngrave-sub18.webp';
import subBg9 from '../../../assets/ngrave/ngrave-sub17.webp';
import Styles from './sectionD.module.css'

function SectionD() {
  return (
    <section className={`${Styles.section4} slide_in_top flex justify-center pt-[160px] pb-[40px]`}>
      <div className='max-w-[1800px] flex justify-center flex-col px-[5%]'>
        <div className='flex items-center gap-[15px] mb-[40px]'>
          <h1 className='text-[56px] font-bold flex flex-col w-full leading-[60px]'>
            <span className='text-[var(--grey-text)] font-light'>Handle your crypto</span> 
            with ease
          </h1>

          <p className='text-[18px] text-[var(--grey-text)]'>
            Self-custody should not be complex. Enjoy a smooth experience and maximum security with our fully custom hardware and OS.
          </p>
        </div>

        <div className={`${Styles.discover_link} ${Styles.discover_link_fr} ${Styles.discover_link_others} flex bg-[#0f1113] border-0 mb-[50px] rounded-2xl h-[700px] relative overflow-hidden`}>
          <div className='pl-[111px] basis-[40%]'>
            <h1 className='text-5xl font-bold mb-5'>Tap and swipe. Just like a phone.</h1>
            <p>With a 4” ultra-clear touch screen, your crypto is at your fingertips. If you can use a phone, you can use NGRAVE ZERO.</p>
          </div>

          <div className={`${Styles.subImg} basis-[60%]`}>
            <img src={subBg3} alt="" className='object-contain w-full'/>

            <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--link-color)] border-none rounded-[40px] overflow-hidden`}>
              <span className=' py-1 pl-3'>Discover ZERO</span>
              <span className="material-icons bg-[var(--text-color)] border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
            </p>
          </div>
        </div>

        <div className={`${Styles.section4_grid} mb-[200px] text-[var(--text-color)]`}>
          <div className={`${Styles.discover_link} relative bg-sky-700 border-none rounded-2xl overflow-hidden`}>
            <div className='border-none rounded-2xl p-10'>
              <h3 className='text-[30px] font-semibold'>100% offline transactions</h3>
              <p className='text-[19px] mt-5'>No USB, no WIFI, no Bluetooth, no NFC. Transactions are signed via QR codes. Your keys remain offline. It is fast and secure.</p>
            </div>

            <div className={`${Styles.subImg} w-full`}>
              <img src={subBg4} alt="" className='object-contain  w-full'/>

              <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--link-color)] border-none rounded-[40px] overflow-hidden`}>
                <span className=' py-1 pl-3'>Video</span>
                <span className="material-icons bg-black border-0 rounded-4xl py-2 px-2">add</span>
              </p>
            </div>
          </div>

          <div className={`${Styles.discover_link} relative bg-white border-none rounded-2xl text-black overflow-hidden`}>
            <div className='border-none rounded-2xl p-10'>
              <h3 className='text-[30px] font-semibold'>World-leading security</h3>
              <p className='text-[19px] mt-5'>NGRAVE has achieved the highest security certification of any financial product. We built tamper-proof technology, biometric 2-factor authentication, and much more.</p>
            </div>

            <div className={`${Styles.subImg} w-full`}>
              <img src={subBg5} alt="" className='object-contain '/>

              <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--link-color)] border-none rounded-[40px] overflow-hidden`}>
                <span className=' py-1 pl-3'>Learn more about security</span>
                <span className="material-icons bg-black border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
              </p>
            </div>  
          </div>

          <div className={`${Styles.discover_link} ${Styles.discover_link_others} relative bg-[#0d0d16] border-none rounded-2xl text-white overflow-hidden`}>
            <div className='border-none rounded-2xl p-10'>
              <h3 className='text-[30px] font-semibold'>100% offline transactions</h3>
              <p className='text-[16px] mt-5'>No USB, no WIFI, no Bluetooth, no NFC. Transactions are signed via QR codes. Your keys remain offline. It is fast and secure.</p>
            </div>

            <div className={`${Styles.subImg} w-full`}>
              <img src={subBg6} alt="" className='object-contain  w-full'/>

              <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--link-color)] border-none rounded-[40px] overflow-hidden`}>
                <span className=' py-1 pl-3'>Discover GRAPHENE recovery</span>
                <span className="material-icons bg-white border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
              </p>
            </div>
          </div>

          <div className={`${Styles.discover_link} ${Styles.discover_link_others} relative bg-[#0d0d16] border-none rounded-2xl text-white overflow-hidden`}>
            <div className='border-none rounded-2xl p-10'>
              <h3 className='text-[30px] font-semibold'>100% offline transactions</h3>
              <p className='text-[16px] mt-5'>No USB, no WIFI, no Bluetooth, no NFC. Transactions are signed via QR codes. Your keys remain offline. It is fast and secure.</p>
            </div>

            <div className={`${Styles.subImg} w-full`}>
              <img src={subBg7} alt="" className='object-contain  w-full'/>

              <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--link-color)] border-none rounded-[40px] overflow-hidden`}>
                <span className=' py-1 pl-3'>Discover GRAPHENE recovery</span>
                <span className="material-icons bg-white border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
              </p>
            </div>
          </div>

          <div className={`${Styles.discover_link} ${Styles.discover_link_others} relative bg-[#0d0d16] border-none rounded-2xl text-white overflow-hidden`}>
            <div className='border-none rounded-2xl p-10'>
              <h3 className='text-[30px] font-semibold'>100% offline transactions</h3>
              <p className='text-[16px] mt-5'>No USB, no WIFI, no Bluetooth, no NFC. Transactions are signed via QR codes. Your keys remain offline. It is fast and secure.</p>
            </div>

            <div className={`${Styles.subImg} w-full`}>
              <img src={subBg8} alt="" className='object-contain  w-full'/>

              <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--link-color)] border-none rounded-[40px] overflow-hidden`}>
                <span className=' py-1 pl-3'>Contact Us</span>
                <span className="material-icons bg-white border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
              </p>
            </div>
          </div>

          <div className={`${Styles.discover_link} ${Styles.discover_link_others} relative bg-[#0d0d16] border-none rounded-2xl text-white overflow-hidden`}>
            <div className='border-none rounded-2xl p-10'>
              <h3 className='text-[30px] font-semibold'>100% offline transactions</h3>
              <p className='text-[16px] mt-5'>No USB, no WIFI, no Bluetooth, no NFC. Transactions are signed via QR codes. Your keys remain offline. It is fast and secure.</p>
            </div>

            <div className={`${Styles.subImg} w-full`}>
              <img src={subBg9} alt="" className='object-contain  w-full'/>

              <p className={`${Styles.discover_link_link} absolute bottom-2 right-2 flex justify-between items-center text-[var(--link-color)] border-none rounded-[40px] overflow-hidden`}>
                <span className=' py-1 pl-3'>Discover LIQUID</span>
                <span className="material-icons bg-white border-0 rounded-4xl py-2 px-2">arrow_forward_ios</span>
              </p>
            </div>   
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionD
