import Styles from './sectionF.module.css'

function SectionF() {
  return (
    <div>
      <section className={`${Styles.semi_footer} h-[450px] flex justify-center lg:px-[15%] px-[5%]`}>
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
      </section>
    </div>
  )
}

export default SectionF
