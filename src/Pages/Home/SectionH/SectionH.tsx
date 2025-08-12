import { useState } from 'react';
import subBg14 from '../../../assets/ngrave/ngrave-sub11.svg';
import Styles from './sectionH.module.css';

function SectionH() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <section className='pb-[70px] mt-[150px] flex justify-center min-h-[100vh]'>
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
      </section>
    </div>
  )
}

export default SectionH
