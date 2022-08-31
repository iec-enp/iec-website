import Container from '@/components/Layout/Container'
import EventSection from '@/components/Utility/EventSection'

export default function Events() {
  return (
    <Container title='Evenements - IEC - Industrial Engineers Club'>
      <div className='flex flex-col items-center gap-16 mt-36'>
        <div className='flex flex-col items-center gap-8'>
          <h1 className='text-5xl font-extrabold  dark:text-shadow-dark'>
            NOS <span className='text-iec-orange-2-500'>EVENEMENTS</span>
          </h1>
          <p className='text-center w-4/5 md:w-1/2 font-medium'>
            At IEC, we organize various and high-quality TECH events, through
            which we aim to best fit our community needs and to provide a
            skillful and complete acquirement of knowledge for all the
            technology enthusiasts!
          </p>
        </div>
        <EventSection
          name='Business Game'
          description='At IEC, we organize various and high-quality TECH events, through which we aim to best fit our community needs and to provide a skillful and complete acquirement'
          date='11-12-13 Octobre 2022'
          place='Paris'
          pics='/images/pictures/bg.webp'
          edition='2'
          workshop='20'
          participant='50'
          logo='/brand/logos/bg-logo.png'
          color='text-[#0B3434]'
          iconColor='#0B3434'
        />
        <hr className='w-3/4 border-1 border-iec-blue-3-200 dark:border-iec-gray-900 mb-8' />
        <EventSection
          name='TEDxENP'
          description='At IEC, we organize various and high-quality TECH events, through which we aim to best fit our community needs and to provide a skillful and complete acquirement'
          date='11-12-13 Octobre 2022'
          place='Paris'
          pics='/images/pictures/tedx.webp'
          edition='1'
          workshop='2'
          participant='400'
          left={false}
          logo='/brand/logos/tedx-logo.svg'
          color='text-[#FF2C07]'
          iconColor='#FF2C07'
        />
        <hr className='w-3/4 border-1 border-iec-blue-3-200 dark:border-iec-gray-900 mb-8' />
        <EventSection
          logo='/brand/logos/IEC_BLACK.webp'
          name='IEC Case Compétition '
          description='At IEC, we organize various and high-quality TECH events, through which we aim to best fit our community needs and to provide a skillful and complete acquirement'
          date='11-12-13 Octobre 2022'
          place='Paris'
          pics='/images/pictures/case.webp'
          edition='2'
          workshop='17'
          participant='100'
          color='text-[#421B38]'
          iconColor='#421B38'
        />
      </div>
    </Container>
  )
}
