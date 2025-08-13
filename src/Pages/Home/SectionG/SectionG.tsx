import Styles from './sectionG.module.css'

function SectionG() {
  return (
    <section className={`${Styles.sectionG} slide_in_top flex bg-black justify-center`}>
      <div className='max-w-[1400px]'>
        <div className='flex items-center justify-between max-w-[1400px] gap-[100px] pt-[17px] pb-[70px]'>
          <h1 className='text-gray-500 text-[52px] flex flex-col leading-15'>
            Broad
            <span className='text-[var(--text-color)]'>Crypto support</span>
          </h1>

          <div className='basis-[705]'>
            <p>We support 15 coins and all Ethereum and MultiversX tokens.</p>
            <p className='flex items-center'>View full coin support <span className='material-icons'>arrow_forward_ios</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionG
