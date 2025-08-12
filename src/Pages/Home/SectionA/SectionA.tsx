import Styles from './sectionA.module.css';
import bunny from '../../../assets/ngrave/bunny.svg';
import metamask from '../../../assets/ngrave/fox.svg';
import bg1 from '../../../assets/ngrave/ngrave-bg6b.webp';

function SectionA() {
  return (
    <div>
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
    </div>
  )
}

export default SectionA
