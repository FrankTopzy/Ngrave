import Styles from './sectionC.module.css';
import ledgerlogo from '../../../assets/ngrave/ledger-logo.webp';
import trezorlogo from '../../../assets/ngrave/trezor-logo.webp';
import ngravelogo from '../../../assets/ngrave/logo2.webp';

function SectionC() {
  return (
    <div>
            <section className={`${Styles.section3} ${Styles.slide_in_top} bg-[var(--primary-color)] py-[60px] text-black`}>
        <div className='max-w-[1400px] flex justify-center flex-col'>
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
        </div>
      </section>
    </div>
  )
}

export default SectionC
