import { Link } from 'react-router-dom';
import Styles from './sectionB.module.css';
import subBg1 from '../../../assets/ngrave/ngrave-sub12.webp';
import subBg2 from '../../../assets/ngrave/ngrave-sub17.webp';

function SectionB() {
  return (
    <section className={`${Styles.section2} slide_in_top pb-[40px] pt-[50px] sm:pt-[100px] bg-[#000000] flex justify-center`}>
      <div className='max-w-[1400px] flex flex-col justify-center'>
        <div className='items-center mb-[20px] sm:mb-[40px]'>
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

              <Link to={'/shop'} className='lg:text-[1.2rem] text-16px'>
                Discover ZERO 
                <span className="material-icons icon">arrow_forward_ios</span>
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
                <span className="material-icons icon">arrow_forward_ios</span>
              </Link>
            </div>

            <div>
              <img src={subBg2} alt="" />
            </div>
          </div>
        </div>

        <iframe width="560" height="800" src="https://www.youtube.com/embed/14HIIUjOLGY?si=o9m4fNzwn2S_ng2t" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
        className={`${Styles.iframe} h-[800px] w-full border-none rounded-3xl mb-[70px] outline-none`}></iframe>

        <div className={`${Styles.section2_bottom} text-[var(--grey-text)] text-[18px] gap-5`}>
          <div>
            <div>01</div>

            <p>
              <span>Store your crypto.</span>
              Set up NGRAVE ZERO to generate your wallet and to store your crypto safely.
            </p>

            <Link to='/shop'>
              Discover ZERO
              <span className="material-icons icon">arrow_forward_ios</span>
            </Link>
          </div>

          <div>
            <div>02</div>

            <p>
              <span>Back up your key.</span>
              Safeguard your key by engraving it on NGRAVE GRAPHENE.
            </p>

            <Link to='/shop'>
              Discover GRAPHENE
              <span className="material-icons icon">arrow_forward_ios</span>
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
              <span className="material-icons icon">arrow_forward_ios</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionB
