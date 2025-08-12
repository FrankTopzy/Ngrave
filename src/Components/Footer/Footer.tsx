import ngravelogo from '../../assets/ngrave/logo2.webp';
import trustpilot from '../../assets/ngrave/trustpilot-footer-light.svg';
import Styles from './footer.module.css';

function Footer() {
  return (
    <div>
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
    </div>
  )
}

export default Footer
